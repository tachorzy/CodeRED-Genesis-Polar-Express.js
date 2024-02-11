import os 
os.environ["OPENAI_API_KEY"] = "<apikey>"

from llama_index import VectorStoreIndex, SimpleDirectoryReader
from llama_index import ( SimpleDirectoryReader, ServiceContext, KnowledgeGraphIndex,)
from llama_index.graph_stores import SimpleGraphStore
from llama_index.llms import OpenAI
from IPython.display import Markdown, display 
from llama_index.storage.storage_context import StorageContext


plainTextToAPIPrompt = """You are Amadeus api prompt creator. Using your knowledge of the Amadeus api convert a plain text request into a Get request to the api.
Keep in mind that the api url is https://test.api.amadeus.com/ and there are some manditory paramaters. if a date is not specified use the  {date}. If number of adults is not speicifed assume 1 adult. 

<plainTextRequest>{request}</plainTextRequest>


After examine the request:
- breifly explain your answer in less than 300 words, include the specific paramaters you set and why and the specific api version and endpoint you used.
- return your output in format:
Answer: |<request>|"""


def convertPlainToAPI(plaintext):
    import datetime
    llm = OpenAI(temperature=0, model="gpt-4")
    service_context = ServiceContext.from_defaults(llm=llm, chunk_size=512)
    documents = SimpleDirectoryReader("flightsAPISpecs").load_data()
    index = VectorStoreIndex.from_documents(documents, service_context=service_context)
    query_engine = index.as_query_engine()
    response = str(query_engine.query(plainTextToAPIPrompt.format(request="I want the cheapest flight from NYC to LON in departing in the next week", date=datetime.datetime.now())))
    print(response)
    url = response[response.find("|")+1: response.rfind("|")]
    return url
