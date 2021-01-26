const add = function (x,y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;	
}

function multiply (x, y) {
	return x * y;	
}

function divide(x, y) {
	return y !== 0 ? x / y: "Sorry not sorry";
}

const MAX_LENGTH = 10;
let result = undefined;
let operand1 = 0;
let operand2 = undefined;
let current_operator = undefined;

const disp_result = document.getElementById('result');

let compute = () => {
	result =  Function(`return ${current_operator}(${+operand1}, ${+operand2})`)();
	operand1 = result;
	operand2 = undefined;
	current_operator = undefined;
	disp_result.textContent = result;		
	result = undefined;
}

const operators = document.getElementById('operator');

operators.addEventListener('click', (event) => {
	console.log(event.target.value);

	let pressed = event.target.value;

	if (pressed === 'equals' && operand2) {
			compute();
	}
	else if (pressed !== 'equals'){
		if (operand2 !== undefined) {
			compute();
		}
		
		current_operator = pressed;
	}
	// console.log(event.target.value);
});

const numbers = document.getElementById('number');

numbers.addEventListener('click', (event) => {

	let val = event.target.value;

	console.log(current_operator)	;

	if (current_operator) {
		operand2 = !operand2 ? val:
					operand2.length <= MAX_LENGTH ? operand2 + val: operand2;
		console.log("Operand2   " + operand2);
		disp_result.textContent = operand2; 
	}
	else {
		operand1 = !operand1 ? val:
					operand1.length <= MAX_LENGTH ? operand1 + val: operand1;
		console.log("Operand1   " + operand1);
		disp_result.textContent = operand1;
	}
})

