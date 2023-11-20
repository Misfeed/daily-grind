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

let myDate = new Date ();
let myDay = myDate.getDay();
let today = "";
//console.log(myDay);

switch(myDay){


    case 0:
        today = "Sunday";
    break;

    case 1:
        today = "Monday";
    break;
    
    default:
        today = "Something went wrong!";


}

let coffee = {
    pic : "images/bubble-tea.jpg",
    alt :  "A picture of bubble tea",
    dsc : "I like me some bubble tea",
    day :  "Tuesday",
    color :  "brown",
    name : "Bubble Tea"

}
console.log(coffee);