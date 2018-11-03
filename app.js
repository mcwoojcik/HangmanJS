
var haslo = "HASLOAAA";
var tableLetters = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";
var ukryteHaslo = ukryjHaslo(haslo);
var numberOfPicture = 0;

function ukryjHaslo(arg1){
	var forReturn = [];
	arg1.split();
	for(var i=0;i<arg1.length;i++){

		if(arg1[i]==" ")forReturn[i]=" ";
		else forReturn[i]="-";
	}
	return forReturn.join('');
}




window.onload =start;

function start(){
	var contOfLetters = "";
	for(var i=0;i<35;i++){
		var element = "lit"+i;
		contOfLetters=contOfLetters+'<div class="oneLetter" onclick="check('+i+')" id='+element+'>'+ tableLetters.charAt(i)+'</div>';
		if((i+1)%7==0) contOfLetters+='<div style="clear:both;"></div>'
	}
	document.getElementById("letters").innerHTML = contOfLetters;
	wypiszHaslo();
}

function wypiszHaslo(){

	document.getElementById('watchword').innerHTML =window.ukryteHaslo;
}

String.prototype.changeChar = function(index,charr){  					//do ogarniecia na chlodno
	if(index>this.length-1) return this.toString();
	else return this.substr(0,index)+charr+this.substr(index+1);
}


function check(arg1){
	var element = "lit"+arg1;
 	var bool = false
	for(var i=0;i<haslo.length;i++){
			if(haslo.charAt(i)==tableLetters.charAt(arg1)){
				ukryteHaslo=ukryteHaslo.changeChar(i,tableLetters.charAt(arg1));
				bool=true;
			}
	}

	if(bool==true){
		document.getElementById(element).style.background="#003300";
		document.getElementById(element).style.border="3px solid #00CC00";
		document.getElementById(element).style.color="#00C000";
		document.getElementById(element).style.cursor="default";
		document.getElementById(element).setAttribute("onclick",';');
		if(checkIfDone(ukryteHaslo)==true){
			document.getElementById("hangman").innerHTML="YOU WON! <br/>solution:<br/>"+haslo;
			document.getElementById("letters").innerHTML='<span class="reset" onclick="location.reload()"">LET\'S TRY AGAIN!</span>';
		}
		wypiszHaslo();
	}else{
		numberOfPicture++;
		//var nameOfPicture = 's'+numberOfPicture+'.jpg';
		document.getElementById(element).style.background="#330000";
		document.getElementById(element).style.border="3px solid #CC0000";
		document.getElementById(element).style.color="#C00000";
		document.getElementById(element).style.cursor="default";
		document.getElementById("hangman").innerHTML='<img src="s'+numberOfPicture+'.jpg" alt=""/>'
		document.getElementById(element).setAttribute("onclick",';');

		if(numberOfPicture>9){
			document.getElementById("hangman").innerHTML="YOU LOSE!<br/>solution:<br/>"+haslo;
			document.getElementById("letters").innerHTML='<span class="reset" onclick="location.reload()"">LET\'S TRY AGAIN!</span>';
		}

	}

}

function checkIfDone(tab){
	for(var i=0;i<tab.length;i++){
		if(tab.charAt(i)=='-') return false;
	}
return true;
}


