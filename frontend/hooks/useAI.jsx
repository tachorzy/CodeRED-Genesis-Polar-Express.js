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
        }).then(thing => {return thing.json()});
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
        }).then(thing => {return thing.json()});
        return (api_request)
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
        return await getAmadeus(prompt)
    }

    async function getReplyMessage(flightInfo) { 
        if (flightInfo === null) {
            return "I'm sorry, I couldn't find any flights that match your criteria. Please try again."
        }
        else {
            return `You can fly from ${flightInfo.segments[0]} to ${flightInfo.destination} for $${flightInfo.price}. The flight is ${flightInfo.duration} hours long.`

        }
    }


    return {getAmadeus,getGenres,getLocationBasedOnGenre, getCat, runPrompt}
}
export default useAI;