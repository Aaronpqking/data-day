//var to access html elements
var divEventsEL = document.querySelector('#events');
var divCityEL = document.querySelector('#city');
var divStateEl = document.querySelector('#state');
var startButton = document.querySelector("#btn");
var parentDiv = document.querySelector("#parent-div");


// queryURL =
//   "http://api.openweathermap.org/data/2.5/weather?q=" +
//   city +
//   "&appid=" +
//   MyAPiKey;

//variables to access the api
var ApiKey = 'iRyUR14EE9gxvv8u34zWyr01Z2pGjQPh'
// var city = 'Columbus';

// Used a placegolder for postalCode from user. It should be an empty string
var postalCode ='45202';
// var state = 'OH';

//fetch
var queryURL ='https://app.ticketmaster.com/discovery/v2/events.venues.json?classificationName=music' + '&postalCode=45202&venue&apikey=' +  ApiKey;
 // the classificationName call music and we can get the zip with the postal code. 


// fetch(queryURL)
// .then(function (response) {
//     return response.JSON()
// })
//     .then(function (data) {
//         console.log(data);
//     })
// console.log(data);

// startButton.addEventListener("click", display);

// function display() {
//   fetch(queryURL)
//     .then((response) => response.json())

//     .then((data) => {

//       console.log(data);

//       var ul = document.createElement('ul')
//       var li = document.createElement('li');
//       li.textContent = "event name: " + data.embedded.events[0].name;
//       ul.appendChild(li)

//       parentDiv.appendChild(ul);

//      // console.log("UV:", data[0].value);

//   });
// }


fetch(queryURL)
    .then((response) => { return response.json() })

    .then((data) => {

      console.log(data);

      var ul = document.createElement('ul')
      var li1 = document.createElement('li');
      var li2 = document.createElement('li');
      var li3 = document.createElement('img');
     

      li1.textContent = "event name: " + data._embedded.events[0].name;
      li2.textContent = "event name: " + data._embedded.events[0]._embedded.venues[0].postalCode;// this is the source of the zip code
      li3.innerHTML = "img src='" + data._embedded.events[0].images[0].fallback;//I was working on getting the img to display. 
       


      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);

      parentDiv.appendChild(ul);
    })

  



// var myApiKey = 'JTAl6TYYTtjbaUA1PuWYbL0Wl1sYdAf4';

// var rootUrl = 'https://app.ticketmaster.com/discovery/v2/?columbus'
// var postalCode = 
// var city =
// var stateCode

// queryURL =
//   "http://api.openweathermap.org/data/2.5/weather?q=" +
//   city +
//   "&appid=" +
//   MyAPiKey;



// searchButtonEl.addEventListener("click", displayCityInfo);

// function displayCityInfo() {
//   fetch(queryURL)
//     .then((response) => response.json())

//     .then((data) => {
//       console.log(data);
//       console.log("Humidity:", data.main.humidity);
//       console.log("Temp:", data.main.temp);
//       console.log("Wind Speed:", data.wind.speed);
//       var currentDate = new Date(data.dt * 1000);
//       const day = currentDate.getDate();
//       const month = currentDate.getMonth() + 1;
//       const year = currentDate.getFullYear();

//       var ul = document.createElement('ul');
//       var h1Name = document.createElement('h1')
//       var liHumi = document.createElement('li');
//       var liTemp = document.createElement('li');
//       var liWindSpeed = document.createElement('li');   
//       h1Name.textContent = data.name + " (" + month + "/" + day + "/" + year + ")";
//       liHumi.textContent = "Humidity: " + data.main.humidity + "%";
//       liTemp.innerHTML = "Temp: " + data.main.temp + "&#176F";
//       liWindSpeed.textContent = "Wind Speed: " + data.wind.speed + "MPH";

//       ul.appendChild(h1Name)
//       ul.appendChild(liHumi);
//       ul.appendChild(liTemp);
//       ul.appendChild(liWindSpeed);
 
//       displayJumbotronH1El.appendChild(ul);

//       var lat = data.coord.lat;
//       var lon = data.coord.lon;
//       var UVQueryURL =
//         "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" +
//         lat +
//         "&lon=" +
//         lon +
//         "&appid=" +
//         APIKey +
//         "&cnt=1";
//       var cityID = data.id;

//       fetch(UVQueryURL)
//         .then((response) => response.json())

//         .then((data) => {
//             console.log(data)
//             var liUV = document.createElement('li');
//                 liUV.innerHTML = "UV Index: " + data[0].value;
//                 ul.appendChild(liUV)
//           console.log("UV:", data[0].value);

//           var forecastQueryURL =
//             "https://api.openweathermap.org/data/2.5/forecast?id=" +
//             cityID +
//             "&appid=" +
//             APIKey;

//           fetch(forecastQueryURL)
//             .then((response) => response.json())
//             .then((data) => {
                

//               console.log(data);
//             });
//         });

//       })
      

//     }