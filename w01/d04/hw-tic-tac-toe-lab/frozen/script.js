





var player = 1;





function clickBtn(btn){
	if(player == 1){
		document.getElementById(btn).value = "X";
		document.getElementById(btn).disabled = "disabled";

		player -= 1;
		winner();
	} 
	else{
		document.getElementById(btn).value = "O";
		document.getElementById(btn).disabled = "disabled";

		player += 1; 
		winner();
	}
}

function winner(){
	if(		document.getElementById('btn1').value == "X" &&
			document.getElementById('btn2').value == "X" &&
			document.getElementById('btn3').value == "X" ||
			document.getElementById('btn4').value == "X" &&
			document.getElementById('btn5').value == "X" &&
			document.getElementById('btn6').value == "X" ||
			document.getElementById('btn7').value == "X" &&
			document.getElementById('btn8').value == "X" &&
			document.getElementById('btn9').value == "X" ||
			document.getElementById('btn1').value == "X" &&
			document.getElementById('btn4').value == "X" &&
			document.getElementById('btn7').value == "X" ||
			document.getElementById('btn2').value == "X" &&
			document.getElementById('btn5').value == "X" &&
			document.getElementById('btn8').value == "X" ||
			document.getElementById('btn3').value == "X" &&
			document.getElementById('btn6').value == "X" &&
			document.getElementById('btn9').value == "X" ||
			document.getElementById('btn1').value == "X" &&
			document.getElementById('btn5').value == "X" &&
			document.getElementById('btn9').value == "X" ||
			document.getElementById('btn3').value == "X" &&
			document.getElementById('btn5').value == "X" &&
			document.getElementById('btn7').value == "X" ){
	alert("Player X is the winner");
	reset();
}
else if(	document.getElementById('btn1').value == "O" &&
			document.getElementById('btn2').value == "O" &&
			document.getElementById('btn3').value == "O" ||
			document.getElementById('btn4').value == "O" &&
			document.getElementById('btn5').value == "O" &&
			document.getElementById('btn6').value == "O" ||
			document.getElementById('btn7').value == "O" &&
			document.getElementById('btn8').value == "O" &&
			document.getElementById('btn9').value == "O" ||
			document.getElementById('btn1').value == "O" &&
			document.getElementById('btn4').value == "O" &&
			document.getElementById('btn7').value == "O" ||
			document.getElementById('btn2').value == "O" &&
			document.getElementById('btn5').value == "O" &&
			document.getElementById('btn8').value == "O" ||
			document.getElementById('btn3').value == "O" &&
			document.getElementById('btn6').value == "O" &&
			document.getElementById('btn9').value == "O" ||
			document.getElementById('btn1').value == "O" &&
			document.getElementById('btn5').value == "O" &&
			document.getElementById('btn9').value == "O" ||
			document.getElementById('btn3').value == "O" &&
			document.getElementById('btn5').value == "O" &&
			document.getElementById('btn7').value == "O" ){
	alert("Player O is the winner");
	reset();
}
}

function  reset(){
			document.getElementById('btn1').value = ""; 
			document.getElementById('btn2').value = "";
			document.getElementById('btn3').value = "";
			document.getElementById('btn4').value = ""; 
			document.getElementById('btn5').value = "";
			document.getElementById('btn6').value = "";
			document.getElementById('btn7').value = ""; 
			document.getElementById('btn8').value = "";
			document.getElementById('btn9').value = "";
			document.getElementById('btn1').disabled = ""; 
			document.getElementById('btn2').disabled = "";
			document.getElementById('btn3').disabled = "";
			document.getElementById('btn4').disabled = ""; 
			document.getElementById('btn5').disabled = "";
			document.getElementById('btn6').disabled = "";
			document.getElementById('btn7').disabled = ""; 
			document.getElementById('btn8').disabled = "";
			document.getElementById('btn9').disabled = "";
}

































// var body = document.getElementsByTagName("body");

// var art = document.getElementsByTagName("article");

// var divvy = document.getElementsByClassName('pic');

// var dibbs = document.getElementsByClassName('box');


// var box1 = document.getElementById('box1');
// var box2 = document.getElementById('box2');
// var box3 = document.getElementById('box3');
// var box4 = document.getElementById('box4');
// var box5 = document.getElementById('box5');
// var box6 = document.getElementById('box6');
// var box7 = document.getElementById('box7');
// var box8 = document.getElementById('box8');
// var box9 = document.getElementById('box9');



//create a functio that says which player is playing now
//if x played then o
//while turns/ clicks are less that 9

// var playerX = 1;
// var playerO;


// box1.onclick = function() {
	

// 	if (playerX == 1){
// 			this.setAttribute("class", "playerO");
// 			playerX = 0;
				
// 		}
// 		else {
// 			this.setAttribute("class", "playerO");
// 			playerX = 1;
				

			
// 		}
                //switch current box to picture of an x or an o
                //if its player x , x if o, o
            // };

            // box2.onclick =function () {
            // 	whenClicked()
            // };


 //        	function whenClicked(){

	// if (playerX == 1){
	// 		this.setAttribute("class", "playerX");
	// 		playerX = 0;
				
	// 	}
	// 	else {
	// 		this.setAttribute("class", "playerO");
	// 		playerX = 1;			

			
	// 	}
	// }




 //                //switch current box to picture of an x or an o
 //                //if its player x , x if o, o
 //            };


// function whosTurn(x, o){
// 	for (var i = 0; i < 10; i++){
// 		if (//class === "playerX") {

// 		}
// 	}

// }


// box1.onclick = function() {
// 		if (playerX){
// 			box1.setAttribute("class", "playerX");

// 			playerX = playerO;
// 		}
// 		else if (playerO){
// 			this.setAttribute("class", "playerO");
// 		}
//                 //switch current box to picture of an x or an o
//                 //if its player x , x if o, o
//             };











//first onclick code that worked 
// box1.onclick = function() {
// 			this.setAttribute("class", "playerX");
                //switch current box to picture of an x or an o
                //if its player x , x if o, o
            // };