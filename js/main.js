
function coffeeTemplate(coffee){

 return `<p>
            <img src="images/${coffee.pic}" alt="${coffee.alt}" />
            <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is ${coffee.name}, ${coffee.desc}
         </p>`;

}

let myDate = new Date();
let today = myDate.getDay();
let coffee = "";
//let myDay = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;

//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);


if(urlParams.has("day")) {//from queryString
    myDay = urlParams.get("day");
}else{//today's day of week
    myDay = today;
}

//change a string into an integer
myDay = parseInt(myDay);

switch(myDay){
    case 1:
        today = "Monday";
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "a picture of a bubblr tea",
            day: "monday",
            desc: `I like me some Bubble tea`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color: "brown",
            name: "Caramel Latte",
            pic: "caramel-latte.jpg",
            alt: "a picture of a caramel latte",
            day: "Tuesday",
            desc: `It is cold. So a Caramel latte sounds good`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color: "black",
            name: "Cold Brew",
            pic: "cold-brew.jpg",
            alt: "a picture of a cold brew",
            day: "Wednesday",
            desc: `cold brew when we're serious`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            color: "lightblue",
            name: "Drip",
            pic: "drip.jpg",
            alt: "a picture of a drip",
            day: "Thursday",
            desc: `drip sound awesome`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            color: "gray",
            name: "Frappaccino",
            pic: "frappaccino.jpg",
            alt: "a picture of a frappaccino",
            day: "Friday",
            desc: `frappaccino is the favourite`
        };
    break;

    case 6:
        today = "saturday";
        coffee = {
            color: "orange",
            name: "Mocha",
            pic: "mocha.jpg",
            alt: "a picture of a mocha",
            day: "Wednesday",
            desc: `what a nice day for a mocha `
        };
    break;

    case 0:
        today = "Sunday";
        coffee = {
            color: "darkyellow",
            name: "Pumpkin-Spice-Latte ",
            pic: "pumpkin-spice-latte.jpg",
            alt: "a picture of a pumpkin spice latte",
            day: "Sunday",
            desc: `pumpkin spice latte when we're resting`
        };
    break;


    default:
        alert("something went wrong");

}
console.log(coffee);
document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);
//change the background color of the HTML element
 document.querySelector("html").style.backgroundColor = coffee.color;

