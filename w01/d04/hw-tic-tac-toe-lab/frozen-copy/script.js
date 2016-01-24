// do you sudo code breaking down I you think each step will go

// box of each thing that you think will need to be a function into a function






var body = document.querySelector('body');





// box1.onclick = (function( event ) {
//     // display the current click count inside the clicked div
//     event.target.innerHTML = "click count: " + event.detail;
//     console.log("clicked");
//   }, false);

var test = document.getElementById("box1");

test.addEventListener("click", logit);
 

function logit (e) {

console.log("it works");
}








// var comb1 = ["#box1","#box2","#box3"];
// var comb2 = ["#box3", "#box4", "#box5"];
// var comb3 = ["#box6", "#box7", "#box8"];

// var comb4 = ["#box1", "#box4", "#box7"];
// var comb5 = ["#box2", "#box5", "#box8"];
// var comb6 = ["#box3", "#box6", "box9"];


// var comb7 = ["#box1", "#box5", "#box9"];
// var comb8 = ["#box3", "#box5", "#box7"];

// //maybe arandom function could work for this

// var combos = {

//  comb1 : ["#box1","#box2","#box3"],
//  comb2 : ["#box3", "#box4", "#box5"],
//  comb3 : ["#box6", "#box7", "#box8"],

//  comb4 : ["#box1", "#box4", "#box7"],
//  'comb5' : ["#box2", "#box5", "#box8"],
//  comb6 : ["#box3", "#box6", "box9"],


//  comb7 : ["#box1", "#box5", "#box9"],
//  comb8 : ["#box3", "#box5", "#box7"]

// };

