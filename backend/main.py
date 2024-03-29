from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import artificalCalls as af
app = FastAPI()
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.post("/toApi")
def get_something(query: str):
    return af.convertPlainToAPI(query)

@app.post("/getGenres")
def getGenres(query: str):
    return af.getFiveGenres(query)

@app.post("/recLocation")
def recLocation(genres: str):
    return af.getLocationBasedOnGenre(genres)

@app.post("/category")
def getCat(prompt: str):
    return af.getCategory(prompt)

@app.post("/slayover")
def getSlayover(place: str, hours: str):
    return af.getSlayover(place,hours)