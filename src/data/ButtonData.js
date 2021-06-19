function createRow(col1, col2, col3, col4) {
	return [col1, col2, col3, col4];
}

const clear = {
	text: 'C',
	color: '#cdcdcd'
};

const negative = {
	text: '+/-',
	color: '#cdcdcd'
};

const modulo = {
	text: '%',
	color: '#cdcdcd'
};

const division = {
	text: '/',
	color: '#ff9c65'
};

const multiply = {
	text: '*',
	color: '#ff9c65'
};
const subtract = {
	text: '-',
	color: '#ff9c65'
};
const addition = {
	text: '+',
	color: '#ff9c65'
};
const decimal = {
	text: '.',
	color: '#eeeeee' 
};
const back = {
	text: '<',
	color: '#eeeeee' 
};
const equal = {
	text: '=',
	color: '#ff8461'
};
const number = (text) => {
	return { text, color: '#eeeeee' };
};
const rows = [
	createRow(clear, negative, modulo, division),
	createRow(number(7), number(8), number(9), multiply),
	createRow(number(4), number(5), number(6), subtract),
	createRow(number(3), number(2), number(1), addition),
	createRow(number(0), decimal, back, equal)
];

export default rows;
