function fetchMovie(){
    const searchInput= document.getElementById("search")
    const movieName = searchInput.value;
    const apiKey = "c5d29cf4";
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${apiKey}`;
    

    fetch(url)
        .then(response=> response.json())
        .then(data =>{
            const resultDiv = document.getElementById("movie-result");
            if (data.response === "False"){
                resultDiv.innerHTML = `<p> Couldn't find the movie.</p>`;
                return;
            }
            resultDiv.innerHTML = `
            <h2>${data.Title} (${data.Year})</h2>
            <img src="${data.Poster}" alt="Movie Poster" style="max-width:200px;"/>
            <p><strong>Genre:</strong> ${data.Genre}</p>
            <p><strong>Director:</strong> ${data.Director}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
            `;
        })
        .catch(error => {
            console.error("Couldn't find the movie: ",error);
        })
}