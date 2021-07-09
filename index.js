var love = document.getElementById("love");
var no_love =document.getElementById("no-love");
var a = 1;
love.addEventListener("click", myFunction);
function myFunction(){
 alert('Mình Biết Mà,Nhưng tui không iu bà hihi')
 location.href = "index1.html";

}

no_love.addEventListener("mouseover",lovefunction);
function lovefunction(){
	switch(a){
		case 1:
			no_love.classList.toggle('move')
			a = 2;
		break;
		case 2:
			no_love.classList.toggle('move1')
			a = 3;
		break;
		case 3:
			no_love.classList.toggle('move3')
			a = 4;
		break;
		case 4:
			no_love.classList.toggle('move4') 
			a = 5;
		break;
		case 5:
			no_love.classList.toggle('move5')
			a = 6;
		break;
		case 6:
			no_love.classList.toggle('move6')
			a = 7;
		break;
		case 7:
			no_love.classList.toggle('move7')
			no_love.classList.remove('move6')
			no_love.classList.remove('move5')
			no_love.classList.remove('move4')
			no_love.classList.remove('move3')
			no_love.classList.remove('move1')
			no_love.classList.remove('move7')
			
			a = 1;
		break;


	}
}