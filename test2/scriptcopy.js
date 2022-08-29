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
  //var queryURL ='https://app.ticketmaster.com/discovery/v2/events.json?' + '&countryCode=' + country + '&apikey=' +  ApiKey;
  function getEventInfo() {

    var inputValue = inputEl.value;
    console.log(inputValue);
    //  var country = inputValue;
    //var postalCode =inputValue;
     var state = inputValue; // this input works
     var city = inputValue;
    

    //console.log("this is the country value", country);
    //var queryURL =

    //search by country code
    //   'https://app.ticketmaster.com/discovery/v2/events.json?' +
    //   '&countryCode=' +
    //   country +
    //   '&apikey=' +
    //   ApiKey;

    //https://app.ticketmaster.com/discovery/v2/?postalCode=43230
    //search by postalcode
    // var queryURL ='https://app.ticketmaster.com/discovery/v2/' + '&postalCode=' + postalCode

    //   '&apikey=' +
    //   ApiKey;

    //search by state code --working
   // https://app.ticketmaster.com/discovery/v2/events.json?+stateCode=OH&apikey=iRyUR14EE9gxvv8u34zWyr01Z2pGjQPh
    // var queryURL ='https://app.ticketmaster.com/discovery/v2/events.json?' + '&stateCode=' + state +
    // '&apikey=' + ApiKey;

    //search by city code
    //https://app.ticketmaster.com/discovery/v2/events.json?+stateCode=OH&apikey=iRyUR14EE9gxvv8u34zWyr01Z2pGjQPh
    // var queryURL ='https://app.ticketmaster.com/discovery/v2/events.json?' + '&city=' + city +
    // '&apikey=' + ApiKey;


    //search by state
    //https://app.ticketmaster.com/discovery/v2/events.json?+stateCode=OH&apikey=iRyUR14EE9gxvv8u34zWyr01Z2pGjQPh
    var queryURL ='https://app.ticketmaster.com/discovery/v2/events.json?' + '&stateCode=' + state + 
    '&apikey=' + ApiKey;
    
    fetch(queryURL)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        console.log(data);

       // var img = data._embedded.events[0].images[0];
        var ul = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement('l1')
        var imgEL = document.getElementById('#current-pic')
        var li4 = document.createElement("li");

        li1.textContent = "event name: " + data._embedded.events[0].name;
        li2.textContent = "Url: " + data._embedded.events[0].url;
      //  imgEL.setAttribute("src", img.url);
       // li4.textContent = "event name: " + data.url;

      //  li3.appendChild(imgEL);

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);


        parentDiv.appendChild(ul);
      });
  }

  searchEl.addEventListener("click", getEventInfo);
}
initPage();
