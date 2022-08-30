function initPage() {


  var inputEl = document.getElementById("city-input");
  var searchEl = document.getElementById("search-button");
  var divEventsEL = document.querySelector("#events");
  //var divCityEL = document.querySelector('#city');
  var divStateEl = document.querySelector("#state");
  var startButton = document.querySelector("#btn");
  var parentDiv = document.querySelector("#parent-div");

  // var city = 'Columbus';
  //var country ='US';

  //var queryURL ='https://app.ticketmaster.com/discovery/v2/events.json?';


  var ApiKey = 'iRyUR14EE9gxvv8u34zWyr01Z2pGjQPh';
  
  
  function getEventInfo() {

    var inputValue = inputEl.value;
    console.log(inputValue);
    var city = inputValue;

    if(!city){
      alert("Please enter city");
    }
         
    var queryURL = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=' + ApiKey +  '&city=' + city;

    fetch(queryURL)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        console.log(data);
        var img = document.createElement('img');
        var ul = document.createElement("ul");
        var liCity = document.createElement("li");
        var liArtistName = document.createElement('li');
        var liGenreMusic = document.createElement('li');
        var cityData = data._embedded.events[0]._embedded.venues[0].city.name;
        img.setAttribute('id', 'img-id')
        img.setAttribute('src', data._embedded.events[0].images[0].url);
        img.setAttribute('alt', 'image of group');
        img.setAttribute('id', 'img-id')
        var getArtistName = data._embedded.events[0].name;
        var getMusicGenre = data._embedded.events[0].classifications[0].genre.name;
        liGenreMusic.textContent = "Genre : " + getMusicGenre;

        liCity.textContent = "City : " + cityData;
        liArtistName.textContent = "Artist : " + getArtistName;

        ul.appendChild(img);
        ul.appendChild(liCity);
        ul.appendChild(liArtistName);
        ul.appendChild(liGenreMusic);
        parentDiv.appendChild(ul);

      });


  }

  searchEl.addEventListener("click", getEventInfo);
}
initPage();

