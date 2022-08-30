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
var city = 'Columbus';
var country ='US';
// var state = 'OH';

//queryURL = 'https://app.ticketmaster.com/discovery/v2/events.json?city&state&ApiKey'



//fetch
var queryURL ='https://app.ticketmaster.com/discovery/v2/events.json?' + '&countryCode=' + country + '&apikey=' +  ApiKey;
  

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


      // var people=[
      //   {first_name:"john",last_name:"doe"},
      //   {first_name:"mary",last_name:"beth"}
      // ];
      // for (let i = 0; i < people.length; i++) { 
      //   console.log(people[i].first_name);
      // }


      // for(var i = 0; i < data.length; i++){
      //   //var result = data[i];
      //   console.log("this is the result of loop ", data[1][i].name);
      // }



      var ul = document.createElement('ul')
      var li1 = document.createElement('li');
      var li2 = document.createElement('li');

      li1.textContent = "event name: " + data._embedded.events[0].name;
      li2.textContent = "event name: " + data._embedded.events[1].name;

      ul.appendChild(li1);
      ul.appendChild(li2);

      parentDiv.appendChild(ul);

      //data.forEach(b => console.log(b.data._embedded.events[b].name));




      //   data.forEach((data, index) => {
      //     console.log(`info${index} starts at ${data._embedded.events[index].name}`);
      // })


      // for(var i = 0; i < data.length; i++){
      //   //var result = data[i];
      //   console.log("this is the result of loop ", arr[0][0].name[i]);
      // }

      // data.map((values) => {
      //  var result = values._embedded;
      //  console.log(result);
        
      // });

      // .then(({beats}) => {
      //   beats.forEach((beat, index) => {
      //     console.log(`Beat ${index} starts at ${beat.start}`);
      //   })






    }).then(response => response.forEach(data => console.log(data._embedded.city)));

  



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


// const  getBeerData = (city) => {
//   var beerApi = `https://api.openbrewerydb.org/breweries?by_city=${encodeURIComponent(city)}`;
//   fetch(beerApi)
//     .then(res => {
//       if (res.ok) {
//         return res.json()
//       } else {
//         throw "Error";
//       }
//     }).then(res => res.forEach(b => console.log(b.name)));
// }