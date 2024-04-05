fetch("hhttps://imdb8.p.rapidapi.com/auto-complete?q=dragon%20ball%20super", {
	"method": "GET",
	"headers": {
		'X-RapidAPI-Key': '6e9394a79dmshfb511456e49b148p14e2b7jsn99e740e214ca',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(data => {
    //console.log(data)
    const arrayMovies = data.d
    arrayMovies.map( (element) => {
        //console.log(element)
        const title = element.l
        const image = element.i.imageUrl
        const cast = element.s
        
        const poster = `
            <div>
                <img src="${image}" />
                <h2>${title}</h2>
                <small>${cast}</small>
            </div>            
        `
        document.getElementById('container').innerHTML += poster
    })
})
.catch(err => {
	console.error(err);
});
const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20trones';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e9394a79dmshfb511456e49b148p14e2b7jsn99e740e214ca',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}