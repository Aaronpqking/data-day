var userInput = ""
var parentDiv = document.querySelector("brew-output1")
var apiRequest = 'https://api.openbrewerydb.org/breweries?by_city=Dayton&per_page=5';

fetch(apiRequest)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
// I created elements 
        var ul1 = document.createElement('ul');
        var li1 = document.createElement('li');
        var li2 = document.createElement('link');
        var li3 = document.createElement('li');
        var li4 = document.createElement('li');
        var li5 = document.createElement('li');
// calling each data point
        li1.textContent = data[0].name;
        li2.textContent = data[0].website_url;
        li3.textContent = data[0].phone;
        li4.textContent = data[0].street;
        li5.textContent = data[0].brewery_type;
// i do not think this where to try this tho
        ul1.appendChild(li1).innerHTML; 
        ul1.appendChild(li2);
        ul1.appendChild(li3);
        ul1.appendChild(li4);
        ul1.appendChild(li5);
        console.log(li1);
        console.log(li2);
        console.log(li3);
        console.log(li4);
        console.log(li5);

        // next brewery
        var ul2 = document.createElement('ul');
        var li6 = document.createElement('li');
        var li7 = document.createElement('link');
        var li8 = document.createElement('li');
        var li9 = document.createElement('li');
        var li10 = document.createElement('li');

        li6.textContent = data[1].name;
        li7.textContent = data[1].website_url;
        li8.textContent = data[1].phone;
        li9.textContent = data[1].street;
        li10.textContent = data[1].brewery_type;

        ul2.appendChild(li6);
        ul2.appendChild(li7);
        ul2.appendChild(li8);
        ul2.appendChild(li9);
        ul2.appendChild(li10);
        console.log(li6);
        console.log(li7);
        console.log(li8);
        console.log(li9);
        console.log(li10);

        // next brewery
        var ul3 = document.createElement('ul');
        var li11 = document.createElement('li');
        var li12 = document.createElement('link');
        var li13 = document.createElement('li');
        var li14 = document.createElement('li');
        var li15 = document.createElement('li');

        li11.textContent = data[2].name;
        li12.textContent = data[2].website_url;
        li13.textContent = data[2].phone;
        li14.textContent = data[2].street;
        li15.textContent = data[2].brewery_type;

        ul3.appendChild(li11);
        ul3.appendChild(li12);
        ul3.appendChild(li13);
        ul3.appendChild(li14);
        ul3.appendChild(li15);
        console.log(li11);
        console.log(li12);
        console.log(li13);
        console.log(li14);
        console.log(li15);

        // next brewery
        var ul4 = document.createElement('ul');
        var li16 = document.createElement('li');
        var li17 = document.createElement('link');
        var li18 = document.createElement('li');
        var li19 = document.createElement('li');
        var li20 = document.createElement('li');

        li16.textContent = data[3].name;
        li17.textContent = data[3].website_url;
        li18.textContent = data[3].phone;
        li19.textContent = data[3].street;
        li20.textContent = data[3].brewery_type;

        ul4.appendChild(li16);
        ul4.appendChild(li17);
        ul4.appendChild(li18);
        ul4.appendChild(li19);
        ul4.appendChild(li20);
        console.log(li16);
        console.log(li17);
        console.log(li18);
        console.log(li19);
        console.log(li20);

        // next brewery
        var ul5 = document.createElement('ul');
        var li21 = document.createElement('li');
        var li22 = document.createElement('link');
        var li23 = document.createElement('li');
        var li24 = document.createElement('li');
        var li25 = document.createElement('li');

        li21.textContent = data[4].name;
        li22.textContent = data[4].website_url;
        li23.textContent = data[4].phone;
        li24.textContent = data[4].street;
        li25.textContent = data[4].brewery_type;

        ul5.appendChild(li21);
        ul5.appendChild(li22);
        ul5.appendChild(li23);
        ul5.appendChild(li24);
        ul5.appendChild(li25);
        console.log(li21);
        console.log(li22);
        console.log(li23);
        console.log(li24);
        console.log(li25);

        // parentDiv.appendChild(ul1);
    })
        
// this is a brewery finder. I was having such a hard time finding another api. This one will not reqiure a key and it is returning in the same way tm is returning in Hectors test html. It will only work If there are breweries in the zip code. 