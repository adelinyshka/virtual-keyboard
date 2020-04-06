


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
title.innerText = 'Привет! Создано в MacOS! Некоторые комбинации клавиш для' +
	' Windows могут не работать';

//добавить заголовку стили
title.classList.add('title');

//создать и добавить поле для вывода символов
let textarea = document.createElement('textarea');
imDiv.appendChild(textarea);
textarea.classList.add('styled-textarea');



const ruKeyCodes = {
	81: 'й',
	87: 'ц',
	69: 'у',
	82: 'к',
	84: 'е',
	89: 'н',
	85: 'г',
	73: 'ш',
	79: 'щ',
	80: 'з',
	219: 'х',
	221: 'ъ',
	65: 'ф',
	83: 'ы',
	68: 'в',
	70: 'а',
	71: 'п',
	72: 'р',
	74: 'о',
	75: 'л',
	76: 'д',
	186: 'ж',
	222: 'э',
	90: 'я',
	88: 'ч',
	67: 'с',
	86: 'м',
	66: 'и',
	78: 'т',
	77: 'ь',
	188: 'б',
	190: 'ю',
	192: 'ё',
	32: ' ',
	91: '', // left cmd
	9:'', //tab
	20:'',//CAPS
	16:'',//shift
	17: '',//cntrl
	18: '',//alt left + right
	93:'',//right cmd
};

const enKeyCodes = {
	81: 'q',
	87: 'w',
	69: 'e',
	82: 'r',
	84: 't',
	89: 'y',
	85: 'u',
	73: 'i',
	79: 'o',
	80: 'p',
	65: 'a',
	83: 's',
	68: 'd',
	70: 'f',
	71: 'g',
	72: 'h',
	74: 'j',
	75: 'k',
	76: 'l',
	90: 'z',
	88: 'x',
	67: 'c',
	86: 'v',
	66: 'b',
	78: 'n',
	77: 'm',
	32: ' ',
	91: '', // left cmd
	9:'', //tab
	20:'',//CAPS
	16:'',//shift
	17: '',//cntrl
	18: '',//alt left + right
	93:'',//right cmd
};

textarea.addEventListener('keydown', (evt) => {

	if (evt.keyCode in enKeyCodes) {

		let keys = document.createElement('div');
		imDiv.appendChild(keys);
		keys.setAttribute('id','keyboard');


//на engl
		let keyboardEnglish = [167, 49, 50, 51, 52, 53, 54, 55, 56, 57,
			48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112,
			91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92,
			96, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];


		function init() {
			let out = '';
			for(let i=0; i<keyboardEnglish.length; i++) {
				if(i===13 || i === 25 || i == 37) {
					out += '<div class="clear-fix"></div>';
				}

				if(i=== 48){
					out+= '<div class="clear-fix"></div> ' +
						'<div class = "k-key k-key-space" data = "'+keyboardEnglish[i]+'"> ' +
						String.fromCharCode(keyboardEnglish[i]) + '</div>';

				} else {
					out+= '<div class = "k-key" data = "'+keyboardEnglish[i]+'"> ' + String.fromCharCode(keyboardEnglish[i])+ ' </div>'

				}

			}
			document.querySelector('#keyboard').innerHTML = out;

		};

		init();

		textarea.value += ruKeyCodes[evt.keyCode];


	} else {


	// if(evt.keyCode in ruKeyCodes){
		// evt.preventDefault();



		let keys = document.createElement('div');
		imDiv.appendChild(keys);
		keys.setAttribute('id','keyboard');


//на русском
		const keyboard = [62, 49, 50, 51, 52, 53, 54, 55, 56, 57,
			48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075,
			1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074, 1072, 1087,
			1088, 1086, 1083, 1076, 1078, 1101, 1105, 93, 1103, 1095,
			1089, 1084, 1080, 1090, 1100, 1073, 1102, 47, 32];

		function init() {
			let out = '';
			for(let i=0; i<keyboard.length; i++) {
				if(i===13 || i === 25 || i == 37) {
					out += '<div class="clear-fix"></div>';
				}

				if(i=== 48){
					out+= '<div class="clear-fix"></div> ' +
						'<div class = "k-key k-key-space" data = "'+keyboard[i]+'"> ' +
						String.fromCharCode(keyboard[i]) + '</div>';

				} else {
					out+= '<div class = "k-key" data = "'+keyboard[i]+'"> ' + String.fromCharCode(keyboard[i])+ ' </div>'

				}

			}
			document.querySelector('#keyboard').innerHTML = out;

		};

		init();

		textarea.value += ruKeyCodes[evt.keyCode];

	}
});

// enInput.addEventListener('keydown', (evt) => {
// 	if(evt.keyCode in enKeyCodes){
// 		evt.preventDefault();
// 		textarea.value += enKeyCodes[evt.keyCode];
// 		// evt.currentTarget.value += enKeyCodes[evt.keyCode];
// 	}
// });


//создать поле с буквами под мак на русском и на английском
//
// let keys = document.createElement('div');
// imDiv.appendChild(keys);
// keys.setAttribute('id','keyboard');
//
//
// //на русском
// const keyboard = [62, 49, 50, 51, 52, 53, 54, 55, 56, 57,
// 									48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075,
// 									1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074, 1072, 1087,
// 									1088, 1086, 1083, 1076, 1078, 1101, 1105, 93, 1103, 1095,
// 									1089, 1084, 1080, 1090, 1100, 1073, 1102, 47, 32];
//
// function init() {
// 	let out = '';
// 	for(let i=0; i<keyboard.length; i++) {
// 		if(i===13 || i === 25 || i == 37) {
// 			out += '<div class="clear-fix"></div>';
// 		}
//
// 		if(i=== 48){
// 			out+= '<div class="clear-fix"></div> ' +
// 				'<div class = "k-key k-key-space" data = "'+keyboard[i]+'"> ' +
// 						String.fromCharCode(keyboard[i]) + '</div>';
//
// 		} else {
// 			out+= '<div class = "k-key" data = "'+keyboard[i]+'"> ' + String.fromCharCode(keyboard[i])+ ' </div>'
//
// 		}
//
// 	}
// 	document.querySelector('#keyboard').innerHTML = out;
//
// };
//
// init();

// на английском
// let keyboardEnglish = [167, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 96, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];

// цифры
// 62, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61

// буквы
// 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1105, 93, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 47
//

//32 пробел

//анимировать буквы
//сделать вывод по нажатию с клавы
//при нажатии дажи на 3 клавиши - все подсвчеиваются

//сделать вывод по нажатию мышкой на символы
//символы shift/caps/alt/cmd - при нажатии мышкой остаются подсвеченными


//использовать es6
//проверять ошибки в консоли
//стили привести в соотвествие с код-гайдом



//массив для нажатых кнопок
let written = [];


//при нажатии удалить у всех элементов стиль
document.onkeypress = function(event) {
	document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
		element.classList.remove('active-letter');

	});

	document.querySelector('#keyboard .k-key[data="'+event.keyCode+'"]').classList.add('active-letter');
};



// переключает цвет кнопки
document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
	element.onclick = function (event) {

		document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
			element.classList.remove('active-letter');
		});

		this.classList.add('active-letter');

	}

});


document.querySelectorAll('#keyboard .k-key').forEach(function (element) {

	element.onclick = function (event) {
		event.preventDefault();

		textarea.value += (element.textContent.trim());

	}

});


document.onload = function() {
	textarea.focus();
};

