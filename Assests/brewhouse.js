
var apiRequest = 'https://api.openbrewerydb.org/breweries?by_postal=43201&per_page=3';

fetch(apiRequest)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        var ul = document.createElement('ul');
        var li1 = document.createElement('li');
        var li2 = document.createElement('li');
        var li3 = document.createElement('li');


        li1.textContent = "nearby brewpubs: " + data[1].name;
        li2.textContent = "nearby brewpubs: " + data[0].name;
        li3.textContent = "nearby brewpubs: " + data[2].name;

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);

        parentDiv.appendChild(ul);
    })
        
// this is a brewery finder. I was having such a hard time finding another api. This one will not reqiure a key and it is returning in the same way tm is returning in Hectors test html. It will only work If there are breweries in the zip code. 