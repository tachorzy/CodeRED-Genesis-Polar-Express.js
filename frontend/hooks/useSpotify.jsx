const useSpotify = (userID, clientSecret) => {

    async function getToken(){
        
        const token_response = await fetch("https://accounts.spotify.com/api/token",{
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials&scope=playlist-modify-public playlist-modify-private&client_id=<>>&client_secret=<>>"
    }).then(thing => {return thing.json()});
        return token_response.access_token
    }
    const getRage = () =>{
        return "lets";
    }

    async function getSongs(token, genres) {
        const songs_responses = await fetch("https://api.spotify.com/v1/recommendations?limit=5&seed_genres="+genres,{
        method: "GET",
        headers: {
            "Authorization": "Bearer "+token,
        },}).then(thing => {return thing.json()});
        return songs_responses.tracks
    }
    async function createPlaylist(token, genres, name) {
        const songs = getSongs(token, genres);
        const playlistCreation = await fetch(" https://api.spotify.com/v1/users/smedjan/playlists",{
            method: "POST",
            headers: {"Authorization": "Bearer "+token, "Content-Type": "application/json"},
            data: "name: "+name+", description"+"this is a example playlist"+", public: false",
        }).then(thing => {return thing.json()});
    }
    return {getToken, getSongs, createPlaylist}
}
export default useSpotify;