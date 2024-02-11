import os 
os.environ["OPENAI_API_KEY"] = "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"
import logging

logger = logging.getLogger(__name__)
from llama_index import VectorStoreIndex, SimpleDirectoryReader
from llama_index import ( SimpleDirectoryReader, ServiceContext, KnowledgeGraphIndex,)
from llama_index.graph_stores import SimpleGraphStore
from llama_index.llms import OpenAI
from IPython.display import Markdown, display 
from llama_index.storage.storage_context import StorageContext
import datetime
import requests
import os
import json
llm = OpenAI(temperature=0, model="gpt-4")
llm_low_temp = OpenAI(temperature=0.8, model="gpt-4")
service_context = ServiceContext.from_defaults(llm=llm, chunk_size=512)
service_context_low_temp = ServiceContext.from_defaults(llm=llm_low_temp, chunk_size=512)

flightsAPISpecs = SimpleDirectoryReader("flightsAPISpecs").load_data()
flightAPI = VectorStoreIndex.from_documents(flightsAPISpecs, service_context=service_context)
flightAPIllm= flightAPI.as_query_engine()

musicalGenres = SimpleDirectoryReader("musicGenres").load_data()
musicalIndex = VectorStoreIndex.from_documents(musicalGenres, service_context=service_context_low_temp)
musical_llm  = musicalIndex.as_chat_engine()

Layoverstuff = SimpleDirectoryReader("musicGenres").load_data()
layIndex = VectorStoreIndex.from_documents(Layoverstuff, service_context=service_context_low_temp)
layoverllm= layIndex.as_chat_engine()
plainTextToAPIPrompt = """You are Amadeus api prompt creator. Using your knowledge of the Amadeus api convert a plain text request into a Get request to the api.
Keep in mind that the api url is https://test.api.amadeus.com/ and there are some manditory paramaters. if a date is not specified use the  {date}. You must specifiy the 3 digit airport codes in captial letters not the place name, in the query.  If number of adults is not speicifed assume 1 adult. If no location is specified assume houston. If no return date is specified assume the return date is tommorow. Cap output at 5

<plainTextRequest>{request}</plainTextRequest>


After examine the request:
- breifly explain your answer in less than 100 words, include the specific paramaters you set and why and the specific api version and endpoint you used.
- return your output in format:
Answer: |<request>|"""


def convertPlainToAPI(plaintext):
    logger.info("started on llm call")
    response = str(flightAPIllm.query(plainTextToAPIPrompt.format(request=plaintext, date=datetime.datetime.now())))
    url = response[response.find("|")+1: response.rfind("|")]
    os.system("rm tmp")
    os.system('''curl "https://test.api.amadeus.com/v1/security/oauth2/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=ryA0cYZi5nArKfr0mBGjfU9PzwCy5hYE&client_secret=9ug5uSsAQWaVhTT9" > tmp
''')

    result = open('tmp', 'r').read()
    token = json.loads(result)['access_token']
    os.system('''curl "{main}" \
     -H "Authorization: Bearer {token}" > tmp
'''.format(main=url, token=token))
    result = open('tmp', 'r').read()
    print(result)
    return result


musicalGenres = """You are a genre picker. Given a query for a flight and destination. Pick 5 musical genres that fit the vibe of the country of destination. 
Also consider the depart location and the time of year. To adjust for the time of year {time} and give music genres that would fit the palette of the country of origin but not too familiar too home.

<query>{inital}<query>

After reviewing the query:
- explain your answer in less than 100 words
- finish off your genres in the following format:
Answers:
Genre1,
Genre2,
Genre3,
Genre4,
Genre5"""

def getFiveGenres(query):
    response = str(musical_llm.query(musicalGenres.format(inital=query, time=datetime.datetime.now())))
    return response.split("Answers:\n")[1].split(",\n")

genreLocation="""You are a travel recommender. You will be given a list of musical genres. Based on these genres, 5 cities recommend countries to visit. Varry your list for example if two are in the US have one abroud. Have at least one very wild location.

<genres>{genres}</genres>

After anylsizing the genres:
- justify your answer in less than 200 words
- finally output your answer in the following format: 
Location:
<Country>,<City>|
<Country>,<City>|
<Country>,<City>|
<Country>,<City>|
<Country>,<City>
"""
def getLocationBasedOnGenre(genres):
    response = str(musical_llm.query(genreLocation.format(genres=genres)))
    print(response)
    return response.split("Location:\n")[1].split("\n")

categories="""You are a categrorizer, of tasks, given a prompt categroize the prompt into 3 categories documented below:
- Flights to location: if the prompt specifies both a location to start from and a location to go to. this is categrory 1
- Music genres: if the prompt specifies a music genre, a customer likes and wanting to go to a undefined location, this is category 2
- Specific song: if the prompt specifies a specific song or artist, its is category 3


<task>{task}</task>

After anylsizing the task:
- justify your answer in less than 100 words
- finally output your answer in the following format: 
Category: <categoryNum>
"""
def getCategory(task):
    response = str(musical_llm.query(categories.format(task=task)))
    print(response)
    return int(response.split("Category: ")[1].split(" ")[0])

slayover = """You are a layover activity reccommender given a airport and a amount of time. Return activities to do in the airport or very close by if the time is long enough. Be very specific about the specific location do not give overly generic answers that can apply to basically any airport.

<place>{place}</place>

<hours>{hours}</hours>

After anylsizing the genres:
- finally output your answer in the following format: 
Activities:
<output>
"""

def getSlayover(place,time):
    response = str(layoverllm.query(slayover.format(place=place, hours=time)))
    return response.split("Activities:\n")[1]