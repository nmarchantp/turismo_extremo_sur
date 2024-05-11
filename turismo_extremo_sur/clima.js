$(document).ready(function () {
    $("#consulta_clima").click(function () {
        $('#clima').empty();
        $.get("https://api.open-meteo.com/v1/forecast?latitude=-53.143517735002575&longitude=-70.9151935914896&current_weather=true",
            function (data) {
                var fecha = moment(data.current_weather.time).format('DD/MM/YYYY HH:mm');
                var temperatura = data.current_weather.temperature;
                var viento = data.current_weather.windspeed;
                $("#clima").append("<li>" + fecha + 
                    "</li><li>" + temperatura + "°C </li><li>" + 
                    viento + " Km/h </li>")      
            });
            
    });
});

