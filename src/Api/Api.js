const API_KEY = "m7YlX7h1UgVCSvoJ7LibJR7TeXK2"


export const getmatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url).then((response) => response.json())
        .catch((error) => alert("PLEASE CHECK INTERNET CONNECTION:", error))
};




//load match details;
export const getMatchDetail= (id) => {
    const url = ` https://cricapi.com/api/cricketScore/?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));

};