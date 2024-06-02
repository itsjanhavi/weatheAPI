
document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("city");
    let button = document.getElementById("btn");

    let key = `10b6c0f53e4a14509206becd4d77b865`;

    button.addEventListener("click", () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data.name);
            console.log(data.main.temp);

            
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const today = new Date();
            const dayOfWeek = daysOfWeek[today.getDay()];

            let result = document.getElementById("result");
            result.innerHTML = `City: ${data.name} <br> Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C <br> Day: ${dayOfWeek}`;
        })
        .catch(error => {
            console.error('Error:', error);
            let result = document.getElementById("result");
            result.innerHTML = `Error fetching weather data. Please try again.`;
        });
    });
});

