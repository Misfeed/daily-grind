//alert("can you see this?");

/*

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page 
    that rotates unique colors and content for each weekday (Sunday to Saturday) into
    the page.

    The content must include:

    One unique image, with appropriate and matching content in the alt tag.

    A paragraph or two of content that describes the daily item 
    (paragraph must include the name of the highlighted weekday)

    A unique color that supports the image and paragraph of content

    pic - img src
    alt - an alt tag for the image
    desc - description of time
    day - highlighted day of the week
    color - color to match pic
    name - the name of the coffee 

*/

function coffeeTemplate(coffee){

    return `
        <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
        </p>

    `;



}

let myDate = new Date ();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }

 //convert to a integer
 myDay = parseInt(myDay);

//console.log(myDay);

switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            pic : "images/mocha.jpg",
            alt :  "A picture of a mocha latte",
            desc : `I love a mocha latte`,
            day :  "Sunday",
            color : "burlywood",
            name : "Mocha Latte"
        };
    break;

    case 1:
        today = "Monday";
            coffee = {
            pic : "images/pumpkin-spice-latte.jpg",
            alt :  "A picture of a pumpkin spice latte",
            desc : `I love a pumpkin spice latte`,
            day :  "Monday",
            color : "darkorange",
            name : "Pumpkin Spice Latte"
        };
    break;

    case 2:
        today = "Tuesday"
        coffee = {
            pic : "images/bubble-tea.jpg",
            alt :  "A picture of bubble tea",
            desc : `I like me some bubble tea`,
            day :  "Tuesday",
            color : "burlywood",
            name : "Bubble Tea"
        };
    break;

    case 3:
        today = "Wednesday"
        coffee = {
            pic : "images/caramel-latte.jpg",
            alt :  "A picture of a caramel latte",
            desc : `I love a caramel latte`,
            day :  "Wednesday",
            color : "burlywood",
            name : "Caramel Latte"
        };
    break;

    case 4:
        today = "Thursday"
        coffee = {
            pic : "images/cold-brew.jpg",
            alt :  "A picture of a cold brew",
            desc : `I love a cold brew`,
            day :  "Thursday",
            color : "black",
            name : "Cold Brew"
        };
    break;

    case 5:
        today = "Friday"
        coffee = {
            pic : "images/drip.jpg",
            alt :  "A picture of drip coffee",
            desc : `I love drip coffee`,
            day :  "Friday",
            color : "brown",
            name : "Drip Coffee"
        };
    break;

    case 6:
        today = "Saturday"
        coffee = {
            pic : "images/frappaccino.jpg",
            alt :  "A picture of a frappaccino",
            desc : `I love a frappaccino`,
            day :  "Saturday",
            color : "darkgreen",
            name : "Frappaccino"
        };
    break;


    default:
        today = "Something went wrong!";


}

//inject coffee data into page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);