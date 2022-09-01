
getEventInfo();

function getEventInfo() {

    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var cityInput = urlParams.get('city');
    var zipInput = urlParams.get('zip');
    var ApiKey = 'iRyUR14EE9gxvv8u34zWyr01Z2pGjQPh'
    var queryURL = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music' + '&city=' + cityInput + '&apikey=' + ApiKey;

        fetch(queryURL)
            .then((response) => { return response.json() })

            .then((data) => {

                console.log(data);
    
                for (var i = 0; i < data._embedded.events.length; i++) {
                    var eventName = data._embedded.events[i].name;
                    var eventVenue = data._embedded.events[i]._embedded.venues[0].name;
                    var img = document.getElementById('img' + i);
                    img.setAttribute('src', data._embedded.events[i].images[0].url);
                    img.setAttribute('alt', 'image of group');
                    var eventStart = data._embedded.events[i].dates.start.localDate;

                    document.getElementById("eventName" + i).innerText = eventName;
                    document.getElementById("eventVenue" + i).innerText = eventVenue;
                    document.getElementById("eventStart" + i).innerText = eventStart;
                }
            })

            .catch(console.error);

    }




var apiRequest = 'https://api.openbrewerydb.org/breweries?by_postal=' + zipInput + '&per_page=3';

fetch(apiRequest)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    for (var i = 0; i < data._embedded.events.length; i++) {

        var pubName = data[i].name;
        var pubAddy = data[i].street;
        var pubPhone = data[i].phone;
        var pubWeb = data[i].website_url;

        document.getElementById("pubName" + i).innerText = pubName;
        document.getElementById("pubAddy" + i).innerText = pubAddy;
        document.getElementById("pubPhone" + i).innerText = pubPhone;
        document.getElementById("pubWeb" + i).innerText = pubWeb;
    }
