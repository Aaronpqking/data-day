//var to access html elements
var divEventsEL = document.querySelector('#events');
var divCityEL = document.querySelector('#city');
var divStateEl = document.querySelector('#state');
var startButton = document.querySelector("btn");
var parentDiv = document.querySelector("#parent-div");
var cityInput = document.getElementById("cityInput").value;
var zipInput = document.getElementById("zipInput").value;
var queryURL ='https://app.ticketmaster.com/discovery/v2/events.json?' + '&city=' + cityInput + '&apikey=' + ApiKey;
var ApiKey = 'iRyUR14EE9gxvv8u34zWyr01Z2pGjQPh'

// Used a placegolder for postalCode from user. It should be an empty string
var postalCode ='45202';


fetch(queryURL)
    .then((response) => { return response.json() })

    .then((data) => {

      console.log(data);
    
        for (var i = 0; i < data._embedded.events.length; i++) {
 
        var eventName = data._embedded.events[i].name;
        var eventVenue = data._embedded.events[i]._embedded.venues[0].name;
        var imgSrc = data._embedded.events[i].images[0].fallback; 
        var eventStart = data._embedded.events[i].dates.start.localDate;

        document.getElementById("eventName" + i).textContent = eventName;
        document.getElementById("eventVenue" + i).textContent = eventVenue;
        document.getElementById("imgSrc" + i).innerText = imgSrc;
        document.getElementById("eventStart" + i).innerText = eventStart;
        }
})

.catch(console.error);








var apiRequest = 'https://api.openbrewerydb.org/breweries?by_postal=' + zipInput + '&per_page=3';

fetch(apiRequest)
    .then(function(response){
        return response.json();
    })
    .then(function(data)){
        console.log(data);
    }
    for (var i = 0; i < data._embedded.events.length; i++) {

        var pubName = data[i].name;
        var pubAddy = data[i].street;
        var pubPhone = data[i].phone;
        var pubWeb = data[i].website_url;

        document.getElementById("pubName" + i).textContent = pubName;
        document.getElementById("pubAddy" + i).textContent = pubAddy;
        document.getElementById("pubPhone" + i).textContent = pubPhone;
        document.getElementById("pubWeb" + i).textContent = pubWeb;
    }















      // var ul = document.createElement('ul')
      // var li1 = document.createElement('li');
      // var li2 = document.createElement('li');
      // var li3 = document.createElement('img');
      // var li4 = document.createElement('li');
     


       

      // ul.appendChild(li1);
      // ul.appendChild(li2);
      // ul.appendChild(li3);

      // parentDiv.appendChild(ul);
    
