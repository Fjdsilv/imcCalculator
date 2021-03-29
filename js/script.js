/*THIS IS A SCRIPT PROJECT TO EXCERCISE. SORRY SOME "IF AND ELSE', I'M ONLY A POOR JR. DEVELOPER*/

function calculatorIMC(){
	let userName = document.querySelector("#userName");
	let realUserName = userName.value.toUpperCase();
	let userMale = document.querySelector("#male").checked;
	let userFame = document.querySelector("#famele").checked;
	let userWeight = document.querySelector("#userWeight");
	let userHeight = document.querySelector("#userHeight");
	let realUserWeight = Number(userWeight.value);
	let realUserHeight_ = Number(userHeight.value);
	let realUserHeight = parseInt(userHeight.value);
	let showWeight = document.querySelector("#showWeight");
	let showBmi = document.querySelector("#showBmi");
	let showIdeal = document.querySelector("#showIdeal");
	let showInfo = document.querySelector("#showInfo");
	console.log(realUserHeight);
	if(userName.value === ""){
		alert("Please insert your name!");
		userName.focus();
		return
	}

	if(realUserWeight === 0 || isNaN(realUserWeight)){
		alert(`Please ${realUserName} insert a value valid!`);
		userName.focus();
		return
	}

	if(realUserHeight === 0 || realUserHeight_ !== realUserHeight || isNaN(realUserHeight)){
		alert(`Please ${realUserName} insert 'height' value valid!`);
		userName.focus();
		return
	}

	let realHeight = realUserHeight / 100

	let idealWeight; 

	if(userMale){
		idealWeight = 22 * Math.pow(realHeight, 2);
	}
	else{
		idealWeight = 21 * Math.pow(realHeight, 2);	
	}

	const BMI = (realUserWeight) / Math.pow(realHeight, 2);

	showWeight.innerText = realUserName + " your weight ideal is " + idealWeight.toFixed(2) +"Kg";
	showWeight.style.paddingBottom="18px";
	showWeight.style.paddingTop="30px";
	showBmi.innerText = "Your BMI is " + BMI.toFixed(2);
	showBmi.style.textAlign="center";
	showBmi.style.paddingBottom="20px";

	if(BMI < 18.5){
		showInfo.innerText = realUserName + " you are Underweight";
		showInfo.style.color = "blue";
	}
	else if(BMI >= 18.5 && BMI <= 24.9){
		showInfo.innerText = realUserName + " you are Normal";
		showInfo.style.color = "green";

	}
	else if(BMI >= 24.9 && BMI <= 29.9){
		showInfo.innerText = realUserName + " you are Overweight";
		showInfo.style.color = "orange";	
	}
	else if(BMI >= 30 && BMI <= 34.9){
		showInfo.innerText = realUserName + " you are Obese";
		showInfo.style.color = "red";	
	}
	else{
		showInfo.innerText = realUserName + " you are Extremly Obese";
		showInfo.style.color = "purple";
	}
}

let button_calc = document.querySelector("#btn_calc");
button_calc.addEventListener("click", calculatorIMC);
	
let button_reset = document.querySelector("#btn_reset");
button_reset.addEventListener("click", ()=>{
	document.querySelector("#userName").value = "";
	document.querySelector("#male").checked = true;
	document.querySelector("#userWeight").value = "";
	document.querySelector("#userHeight").value = "";
	location.reload();

});