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


//создать поле с буквами под мак на русском и на английском

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
