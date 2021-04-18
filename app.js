console.log("Hello World!\n==========\n");

// PROJECT Section
class CurrentWeather {
    constructor(description, temp, feels_like, humidity){
        this.description = description;
        this.temp = temp;
        this.feels_like = feels_like;
        this.humidity = humidity;
}

const city = document.getElementById("city");
const state = document.getElementById("state");
const submit = document.getElementById("submit").addEventListener("click", function(){

form.addEventListener("submit",async function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q={city},{state}&appid={d335ed2d61e33f3cdce01f7e461e3429}", {
        mode: "cors",
    })
    .then(res => {
        return res.json()
    })
    .then(data => {
        description = data.description;
        temp = data.temp;
        feels_like = data.feels_like;
        humidity = data.humidity;
    })
    .catch(e => {
        console.log("Error retrieving data", e)
    })
}); 
const div = document.createElement("div"); 
const p = document.createElement("p");
const content = createTextNode(`Description: ${description}, Temp: ${temp}, Feels like: ${feels_like}, Humidity: ${humidity}`);
p.append(content);
div.append(p);
mainContent.append(div);




    
    



