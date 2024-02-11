const useSpotify = (userID, clientSecret) => {

    async function getToken(){
        const token_response = await fetch("https://accounts.spotify.com/api/token",{
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials&client_id=<client_id>1&client_secret=<client_secret>"
    }).then(thing => {return thing.json()});
        return token_response.access_token
    }
    const getRage = () =>{
        return "lets";
    }
    return {getToken, getRage}
}
export default useSpotify;