console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
const city = document.getElementById("city");
const state = document.getElementById("state");
const submit = document.getElementById("submit").addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={d335ed2d61e33f3cdce01f7e461e3429}")
    .then(res => {
        return res.json()
    })
    .then(data => {

    })
    .catch(e => {
        console.log("Error retrieving data", e)
    })
})


