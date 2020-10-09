let button1 = document.querySelector('.btn1');
let button3 = document.querySelector('.btn3');
let button7 = document.querySelector('.btn7');

let w=1;

button1.addEventListener('click', procent1);
button3.addEventListener('click', procent3);
button7.addEventListener('click', procent7);

function procent1(){
	w=w+1;
	$("#my-progress-bar").width(w);
}

function procent3(){
	w=w+3;
	$("#my-progress-bar").width(w);
}

function procent7(){
	w=w+7;
	$("#my-progress-bar").width(w);
}

