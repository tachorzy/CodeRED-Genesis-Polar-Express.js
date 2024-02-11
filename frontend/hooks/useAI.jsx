const useAI = () => {
    async function getAmadeus(prompt) {
        console.log("Hello")
        const request = "http://127.0.0.1:8000/toApi?query="+prompt
        const api_request = await fetch(request,{
            method: "POST",
            headers: {
                'accept': 'application/json',
            },
            body:"",
        }).then(thing => {return thing.json()});
        return api_request
    }

    async function getGenres(prompt) {
        const request = "http://127.0.0.1:8000/getGenre?query="+prompt
        const api_request = await fetch(request,{
            method: "POST",
            headers: {
                'accept': 'application/json',
            },
            body:"",
        }).then(thing => {return thing});
        return api_request
    }

    async function getLocationBasedOnGenre(prompt) {
        const request = "http://127.0.0.1:8000/recLocation?genres="+prompt
        const api_request = await fetch(request,{
            method: "POST",
            headers: {
                'accept': 'application/json',
            },
            body:"",
        }).then(thing => {return thing});
        return api_request
    }

    async function getCat(prompt) {
        const request = "http://127.0.0.1:8000/category?prompt="+prompt
        const api_request = await fetch(request,{
            method: "POST",
            headers: {
                'accept': 'application/json',
            },
            body: "",
        }).then(thing => {return thing.json()});
        return api_request
    }

    async function runPrompt(prompt) {
        const category = getCat(prompt)
        if(category == 1){
            return getAmadeus(prompt)
        }else if (category == 2) {
            return getLocationBasedOnGenre(prompt)
        }else {
            return getLocationBasedOnGenre(prompt)
        }
    }
    return {getAmadeus,getGenres,getLocationBasedOnGenre, getCat, runPrompt}
}
export default useAI;