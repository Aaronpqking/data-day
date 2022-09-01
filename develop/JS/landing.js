function searchAction() {

    var cityInput = document.getElementById("cityInput").value;
    var zipInput = document.getElementById("zipInput").value;
    
        window.location.href = ("./resultspage.html?city=" + cityInput + "&zip=" + zipInput) 
        // getEventInfo();
    }