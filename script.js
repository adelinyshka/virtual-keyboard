
	alert('Здравствуйте! Прошу вас оценить работу в воскресенье, 12 апреля, не раньше, пожалуйста. Пока что не успела все сделать. Спасибо')


//создать обертку для всего
let imDiv = document.createElement('div');

//добавить стилизацию
imDiv.classList.add('keyboard-wrapper');

//прикрепить на страницу
document.body.appendChild(imDiv);

//создать заголовок с инфо о том что создается в системе MacOS
let title = document.createElement('h1');

//добавить заголовок на стр
imDiv.appendChild(title);

//добавить заголовку текст
title.innerText = 'Приветствую! Создано в MacOS!';

//добавить заголовку стили
title.classList.add('title');

//создать и добавить поле для вывода символов
let textarea = document.createElement('textarea');
imDiv.appendChild(textarea);
textarea.classList.add('styled-textarea');

//фокус при загрузке
textarea.focus();

//создана обертка для кнопочек
let keyboardButtons = document.createElement('div');
keyboardButtons.classList.add('wrapper-buttons');
imDiv.appendChild(keyboardButtons);

//символы на кнопках
const keysRow1 = ['`','1','2','3','4','5','6','7','8','9','0','-','=',];
//символы для data-key
const keyCodes1 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, ];

const keysRow2 = ['q','w','e','r','t','y','u','i','o','p','[',']',];
const keyCodes2 = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, ];

const keysRow3 = ['a','s','d','f','g','h','j','k','l',';','\'',' \\ ',];
const keyCodes3 = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, ];

const keysRow4 = ['z','x','c','v','b','n','m', ',' , '.' , '/'];
const keyCodes4 = [ 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];

const keyboardBig2 = ['Q','W','E','R','T','Y','U','I','O','P','[',']',];
const keyboardBig3 = ['A','S','D','F','G','H','J','K','L',';','\'','\\',];
const keyboardBig4 = ['Z','X','C','V','B','N','M',',','.','/',];

let cntr = document.createElement('div');
	//win
let win = document.createElement('div');
	//alt
let alt = document.createElement('div');
	//space
	let space = document.createElement('div');
	//alt-right
	let altRight = document.createElement('div');
	//cntr
	let cntrRight = document.createElement('div');
	//arrowRight
	let arrowRight = document.createElement('div');
	//arrowDown
	let arrowDown = document.createElement('div');
	//arrowLeft
	let arrowLeft = document.createElement('div');


	let checkActiveButtons =  new Set();

//генерация обычной клавиатуры
	function createKeyboard() {
		// 1 row
		let out1 = '';
		for(let i=0; i< keysRow1.length; i++) {
			out1 +=  '<div class = "k-key item" data-key="' + keyCodes1[i] + '"' +'>' + keysRow1[i] + ' </div>';
		}
		row1.innerHTML = out1;
		row1.append(backSpace);

		//2 row
		let out2 = '';
		for(let i=0; i< keysRow2.length; i++) {
			out2 +=  '<div class = "k-key item" data-key="' + keyCodes2[i] + '"' +'>' + keysRow2[i] + ' </div>';
		}
		row2.innerHTML = out2;
		row2.prepend(tab);

		//3 row
		let out3 = '';
		for(let i=0; i< keysRow3.length; i++) {
			out3 +=  '<div class = "k-key item" data-key="' + keyCodes3[i] + '"' +'>' + keysRow3[i] + ' </div>';
		}
		row3.innerHTML = out3;
		row3.prepend(caps);
		row3.append(enter);

		//4 row
		let out4 = '';
		for(let i=0; i< keysRow4.length; i++) {
			out4 +=  '<div class = "k-key item" data-key="' + keyCodes4[i] + '"' +'>' + keysRow4[i] + ' </div>';
		}
		row4.innerHTML = out4;
		row4.prepend(shift);
		row4.append(shiftRight);
		row4.append(arrowUp);

		generateFifthRow();

	}

//генерация клавиатуры с большими буквами
function createCapsLockKeyboard() {
	// 1 row
	let out1 = '';
	for(let i=0; i< keysRow1.length; i++) {
		out1 +=  '<div class = "k-key item" data-key="' + keyCodes1[i] + '"' +'>' + keysRow1[i] + ' </div>';
	}
	row1.innerHTML = out1;
	row1.append(backSpace);

	//2 row
	let out2 = '';
	for(let i=0; i< keyboardBig2.length; i++) {
		out2 +=  '<div class = "k-key item" data-key="' + keyCodes2[i] + '"' +'>' + keyboardBig2[i] + ' </div>';
	}
	row2.innerHTML = out2;
	row2.prepend(tab);

	//3 row
	let out3 = '';
	for(let i=0; i< keyboardBig3.length; i++) {
		out3 +=  '<div class = "k-key item" data-key="' + keyCodes3[i] + '"' +'>' + keyboardBig3[i] + ' </div>';
	}
	row3.innerHTML = out3;
	row3.prepend(caps);
	row3.append(enter);

	//4 row
	let out4 = '';
	for(let i=0; i< keyboardBig4.length; i++) {
		out4 +=  '<div class = "k-key item" data-key="' + keyCodes4[i] + '"' +'>' + keyboardBig4[i] + ' </div>';
	}
	row4.innerHTML = out4;
	row4.prepend(shift);
	row4.append(shiftRight);
	row4.append(arrowUp);

	generateFifthRow();

}



	// function initBig(buttonArr, keyCode, rowToInsert, additionButton) {
	// 	if(additionButton === undefined) {
	// 		let out = '';
	// 		for(let i=0; i< buttonArr.length; i++) {
	// 			out +=  '<div class = "k-key" data-key="' + keyCode[i] + '"' +'>' + buttonArr[i] + ' </div>'
	// 		}
	// 		rowToInsert.innerHTML = out;
	// 	} else {
	// 		let out = '';
	// 		for(let i=0; i<buttonArr.length; i++) {
	// 			out += '<div class = "k-key" data-key="' + keyCode[i] + '"' +'>' + buttonArr[i] + ' </div>'
	// 		}
	// 		rowToInsert.innerHTML = additionButton + out;
	// 	}
	// }


//созданы ряды для кнопочек

function addRow(x) {
	x.classList.add('row');
	keyboardButtons.appendChild(x);
}

let row1 = document.createElement('div');
let row2 = document.createElement('div');
let row3 = document.createElement('div');
let row4 = document.createElement('div');
let row5 = document.createElement('div');

	addRow(row1);
	addRow(row2);
	addRow(row3);
	addRow(row4);
	addRow(row5);

//функция для генерация клавиатуры

function init(buttonArr, keyCode, rowToInsert, additionButton) {
	if(additionButton === undefined) {
		let out = '';
		for(let i=0; i< buttonArr.length; i++) {
			out +=  '<div class = "k-key item" data-key="' + keyCode[i] + '"' +'>' + buttonArr[i] + ' </div>'
		}
		rowToInsert.innerHTML = out;
	} else {
		let out = '';
		for(let i=0; i<buttonArr.length; i++) {
			out += '<div class = "k-key item" data-key="' + keyCode[i] + '"' +'>' + buttonArr[i] + ' </div>'
		}
		rowToInsert.innerHTML = additionButton + out;
	}
};

// генерация кнопок

init(keysRow1,keyCodes1,row1);

init(keysRow2,keyCodes2,row2, '<div class = "k-key item" style="width: 150px;" data-key="9">Tab</div>');

init(keysRow3,keyCodes3,row3, '<div class = "k-key" style="width: 150px;" data-key="20">Caps Lock</div>');

init(keysRow4,keyCodes4,row4, '<div class = "k-key" style="width: 150px;" data-key="16">Shift</div>');



//добавляем в поле вывода по клику на вирт клаве

//определили где кнопки
//любая кнопка
let imKey = document.querySelectorAll('.item');
//таб
let tab = document.querySelector('div[data-key="9"]');
//капс
let caps = document.querySelector('div[data-key="20"]');


// добавить backSpace
let backSpace = document.createElement('div');
backSpace.classList.add('k-key');
backSpace.style = 'width: 150px;'
backSpace.innerHTML = 'BackSpace';
row1.appendChild(backSpace);

//enter
let enter = document.createElement('div');
enter.classList.add('k-key', 'item');
enter.style = 'width: 150px;'
enter.innerHTML = 'Enter';
row3.appendChild(enter);

enter.addEventListener('click',function () {
	textarea.value+= '\n';
	textarea.focus();
});

// tab.addEventListener('onkeypress', function (evt) {
// 	evt.preventDefault();
// 	evt.stopPropagation();
// 	textarea.value += '\t';
// 	tab.classList.add('.active-letter');
// 	textarea.focus();
// })


// функция для вывода значений по клику на кнопки со значениями
function toTextarea() {
		imKey.forEach(function (x) {
			x.addEventListener('click', function () {
				// проверка на таб
				if (x === tab) {
					textarea.focus();

					textarea.value += '\t';
					tab.classList.add('.active-letter');
					textarea.focus();
					//проверка на капс
				}
				else
					if (x === caps || x === shift || x === shiftRight || x === alt || x === altRight || x === win) {
					textarea.value = textarea.value;
					textarea.focus();
				}
				else {
				textarea.value += x.textContent.trim();
				textarea.focus();
			}
		})
	})
};

toTextarea();

	//Caps
	// глючит
	let flag = false;
	//
	caps.addEventListener('click', function pressCaps() {
		if (flag === false) {
			console.log('We big');
			createCapsLockKeyboard();
			caps.classList.add('active-letter');
			checkActiveButtons.add('caps');
			flag = true;
			textarea.focus();
		}
		else if (flag === true) {
			console.log('We small');
			createKeyboard();
			caps.classList.remove('active-letter');
			checkActiveButtons.delete('caps');
			flag=false;
			textarea.focus();
		}
	});



	//по клику на капс
// 	if (event.code === 'CapsLock' ) {
// 		console.log('drsehret');
// 	}
	//подсветить кнопку и сделать все кнопки  большими

	// document.onkeypress = function(event) {
	//
	// 	let realCaps = document.querySelector('.item[data-key="'+event.keyCode+'"]');
	//
	// 	document.querySelectorAll('.item').forEach(function (element) {
	// 		if(pushedButton === element) {
	// 			pushedButton.classList.add('active-letter');
	// 			function removeActive() {
	// 				pushedButton.classList.remove('active-letter');
	// 			}
	// 			setTimeout(removeActive,  300);
	// 		}
	// 	});
	// };



//проверка на капс
// 	if (checkActiveButtons.has(caps)) {
// 		console.log('caps');
// 	}


//do big
// 	let result = '';
// 	let some = x.textContent.trim();
// 	result = some.toUpperCase();
// 	textarea.value += result;
// 	textarea.focus();

//do small

	// textarea.value += x.textContent.trim();
	// textarea.focus();



//сделать чтобы backSpace удалял
backSpace.addEventListener('click', function () {

	if (textarea.value.length > 0) {
		textarea.value = textarea.value.slice(0, -1);
		textarea.focus();
	}
});


let shift = document.querySelector('[data-key="16"]');


	//функция для генерации кнопок
	function generateButton(name, width, textOnButton, row) {
		name.classList.add('k-key');
		name.style = width;
		name.innerHTML = textOnButton ;
		row.appendChild(name);
	}

	//создан 4 ряд

	//shiftRight
	let shiftRight = document.createElement('div');
	generateButton(shiftRight, 'width:130px;', 'Shift', row4);
	//arrowUp
	let arrowUp = document.createElement('div');
	generateButton(arrowUp, 'margin-left: 52px; width:50px;', '/\\', row4);


	//5 ряд
	function generateFifthRow() {
		generateButton(cntr, 'width:90px;', 'Ctrl', row5);
		generateButton(win, 'width:90px;', 'Win', row5);
		generateButton(alt, 'width:90px;', 'Alt', row5);
		generateButton(space, 'width:370px;', ' ', row5);
		generateButton(altRight, 'width:90px;', 'Alt', row5);
		generateButton(cntrRight, 'width:90px;', 'Ctrl', row5);
		generateButton(arrowRight, 'margin-left:32px;width:50px;', '<', row5);
		generateButton(arrowDown, 'width:50px;', 'v', row5);
		generateButton(arrowLeft, 'width:50px;', '>', row5);
	}
	generateFifthRow();



//подсветка кнопок

	//подсветка по клику для клавиш
	document.onkeypress = function(event) {

		let pushedButton = document.querySelector('.item[data-key="'+event.keyCode+'"]');

		document.querySelectorAll('.item').forEach(function (element) {
			if(pushedButton === element) {
				pushedButton.classList.add('active-letter');
				function removeActive() {
					pushedButton.classList.remove('active-letter');
				}
				setTimeout(removeActive,  300);
			}
		});

	};

	//функция подсветки для кнопок по клику для функ клавиш
	function lightOnClick(keyCode, button) {
		if(event.code === keyCode ) {
			button.classList.add('active-letter');
			function removeActive() {
				button.classList.remove('active-letter');
			}
			setTimeout(removeActive,  300);
		}
	}

	addEventListener('keydown', function (event) {
		lightOnClick('ShiftLeft', shift);

		lightOnClick('ShiftRight', shiftRight);

		lightOnClick('ControlLeft', cntr);

		lightOnClick('ControlRight', cntrRight);

		lightOnClick('AltLeft', alt);

		lightOnClick('AltRight', altRight);

		lightOnClick('Enter', enter);


		lightOnClick('Tab', tab);

		lightOnClick('Backspace', backSpace);

	});


//
// //на engl
// 		let keyboardEnglish = [167, 49, 50, 51, 52, 53, 54, 55, 56, 57,
// 			48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112,
// 			91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92,
// 			96, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];
//
//
// //на русском
// 		const keyboard = [62, 49, 50, 51, 52, 53, 54, 55, 56, 57,
// 			48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075,
// 			1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074, 1072, 1087,
// 			1088, 1086, 1083, 1076, 1078, 1101, 1105, 93, 1103, 1095,
// 			1089, 1084, 1080, 1090, 1100, 1073, 1102, 47, 32];
//

//
// const ruKeyCodes = {
// 	81: 'й',
// 	87: 'ц',
// 	69: 'у',
// 	82: 'к',
// 	84: 'е',
// 	89: 'н',
// 	85: 'г',
// 	73: 'ш',
// 	79: 'щ',
// 	80: 'з',
// 	219: 'х',
// 	221: 'ъ',
// 	65: 'ф',
// 	83: 'ы',
// 	68: 'в',
// 	70: 'а',
// 	71: 'п',
// 	72: 'р',
// 	74: 'о',
// 	75: 'л',
// 	76: 'д',
// 	186: 'ж',
// 	222: 'э',
// 	90: 'я',
// 	88: 'ч',
// 	67: 'с',
// 	86: 'м',
// 	66: 'и',
// 	78: 'т',
// 	77: 'ь',
// 	188: 'б',
// 	190: 'ю',
// 	192: 'ё',
// 	32: ' ',
// 	91: '', // left cmd
// 	9:'', //tab
// 	20:'',//CAPS
// 	16:'',//shift
// 	17: '',//cntrl
// 	18: '',//alt left + right
// 	93:'',//right cmd
// };
//
// const enKeyCodes = {
// 	81: 'q',
// 	87: 'w',
// 	69: 'e',
// 	82: 'r',
// 	84: 't',
// 	89: 'y',
// 	85: 'u',
// 	73: 'i',
// 	79: 'o',
// 	80: 'p',
// 	65: 'a',
// 	83: 's',
// 	68: 'd',
// 	70: 'f',
// 	71: 'g',
// 	72: 'h',
// 	74: 'j',
// 	75: 'k',
// 	76: 'l',
// 	90: 'z',
// 	88: 'x',
// 	67: 'c',
// 	86: 'v',
// 	66: 'b',
// 	78: 'n',
// 	77: 'm',
// 	32: ' ',
// 	91: '', // left cmd
// 	9:'', //tab
// 	20:'',//CAPS
// 	16:'',//shift
// 	17: '',//cntrl
// 	18: '',//alt left + right
// 	93:'',//right cmd
// };


