
let flag = false;
//на русском
		const keyboard = [62, 49, 50, 51, 52, 53, 54, 55, 56, 57,
			48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075,
			1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074, 1072, 1087,
			1088, 1086, 1083, 1076, 1078, 1101, 1105, 93, 1103, 1095,
			1089, 1084, 1080, 1090, 1100, 1073, 1102, 47, 32];



let keyboard2 = [];
document.onkeypress = function(event) {
	keyboard2.push(event.charCode);
	console.log(keyboard2);
};

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

//фокус при загрузке
textarea.focus();

//создана обертка для кнопочек
let keyboardButtons = document.createElement('div');
keyboardButtons.classList.add('wrapper-buttons');
imDiv.appendChild(keyboardButtons);


const keysRow1 = ['`','1','2','3','4','5','6','7','8','9','0','-','=',];
const keyboardEngRow1 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, ];

const keysRow2 = ['q','w','e','r','t','y','u','i','o','p','[',']',];
const keyboardEngRow2 = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, ];

const keysRow3 = ['a','s','d','f','g','h','j','k','l',';','""',' \\ ',];
const keyboardEngRow3 = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, ];

const keysRow4 = ['z','x','c','v','b','n','m', ',' , '.' , '/'];
const keyboardEngRow4 = [ 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];

// const keysRow5 = ['Space'];

//созданы ряды для кнопочек
let row1 = document.createElement('div');
row1.classList.add('row');
keyboardButtons.appendChild(row1);

let row2 = document.createElement('div');
row2.classList.add('row');
keyboardButtons.appendChild(row2);

let row3 = document.createElement('div');
row3.classList.add('row');
keyboardButtons.appendChild(row3);

let row4 = document.createElement('div');
row4.classList.add('row');
keyboardButtons.appendChild(row4);


//функция для генерация клавиатуры

function init(buttonArr, keyCode, rowToInsert, additionButton) {
	if(additionButton === undefined) {
		let out = '';
		for(let i=0; i< buttonArr.length; i++) {
			out +=  '<div class = "k-key" data-key="' + keyCode[i] + '"' +'>' + buttonArr[i] + ' </div>'
		}
		rowToInsert.innerHTML = out;
	} else {
		let out = '';
		for(let i=0; i<buttonArr.length; i++) {
			out += '<div class = "k-key" data-key="' + keyCode[i] + '"' +'>' + buttonArr[i] + ' </div>'
		}
		rowToInsert.innerHTML = additionButton + out;
	}
};



init(keysRow1,keyboardEngRow1,row1);

init(keysRow2,keyboardEngRow2,row2, '<div class = "k-key" style="width: 150px;" data-key="9">Tab</div>');

init(keysRow3,keyboardEngRow3,row3, '<div class = "k-key" style="width: 150px;" data-key="20">Caps Lock</div>');

init(keysRow4,keyboardEngRow4,row4, '<div class = "k-key" style="width: 150px;" data-key="16">Shift</div>');


// функция для генерации клавы с большими буквами
function makeCaps(array) {
	let x = array.join('');
	let z=  x.toUpperCase();
	return z.split('');
}


//добавляем в поле вывода по клику на вирт клаве

//определили где кнопки
let imKey = document.querySelectorAll('.k-key');
let tab = document.querySelector('div[data-key="9"]');
let caps = document.querySelector('div[data-key="20"]');

let bigLettersRow2 = makeCaps(keysRow2);
let bigLettersRow3 = makeCaps(keysRow3);
let bigLettersRow4 = makeCaps(keysRow4);



// функция для вывода значений по клику в поле
function toTextarea() {
	imKey.forEach(function (x) {

		x.addEventListener('click', function () {

			//проверка на таб
			if(x === tab){
				textarea.value += '\t';

				//проверка на капс
			} else if (x === caps) {
				caps.classList.toggle('active-letter');
				textarea.value = textarea.value;
				textarea.focus();
			}



			else
		{
			textarea.value += x.textContent.trim();
			textarea.focus();
		}


	})

})
};

toTextarea();


// добавить backSpace
let backSpace = document.createElement('div');
backSpace.classList.add('k-key');
backSpace.style = 'width: 150px;'
backSpace.innerHTML = 'BackSpace';
row1.appendChild(backSpace);

//сделать чтобы backSpace удалял
backSpace.addEventListener('click', function () {

	if (textarea.value.length > 0) {
		textarea.value = textarea.value.slice(0, -1);
	}
});

//enter
let enter = document.createElement('div');
enter.classList.add('k-key');
enter.style = 'width: 150px;'
enter.innerHTML = 'Enter';
row3.appendChild(enter);

enter.addEventListener('click',function () {
	textarea.value+= '\n'
});





//подсветка по клику
document.onkeypress = function(event) {

	let pushedButton = document.querySelector('.k-key[data-key="'+event.keyCode+'"]');

	document.querySelectorAll('.k-key').forEach(function (element) {
		if(pushedButton === element) {
			pushedButton.classList.add('active-letter');
			function removeActive() {
				pushedButton.classList.remove('active-letter');
			}
			setTimeout(removeActive,  300);
		}
	});
};


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


//
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


// //анимировать буквы
// //сделать вывод по нажатию с клавы
// //при нажатии дажи на 3 клавиши - все подсвчеиваются
//
// //сделать вывод по нажатию мышкой на символы
// //символы shift/caps/alt/cmd - при нажатии мышкой остаются подсвеченными
//
//
// //использовать es6
// //проверять ошибки в консоли
// //стили привести в соотвествие с код-гайдом
//



// caps.addEventListener('click', function () {
//
// 	if(flag == false) {
// 		this.classList.add('active-letter');
// 		beBig();
// 		flag = true;
//
// 	} else {
// 		console.log('hey')
// 		this.classList.remove('active-letter');
// 		beSmall();
// 		flag = false;
// 	}
//
// });


function beBig() {
	init(keysRow1,keyboardEngRow1,row1);

	init(bigLettersRow2,keyboardEngRow2,row2, '<div class = "k-key" style="width: 150px;" data-key="9">Tab</div>');

	init(bigLettersRow3,keyboardEngRow3,row3, '<div class = "k-key active-letter " style="width: 150px;" data-key="20">Caps Lock</div>');

	init(bigLettersRow4,keyboardEngRow4,row4, '<div class = "k-key" style="width: 150px;" data-key="16">Shift</div>');
}

function beSmall() {
	init(keysRow1,keyboardEngRow1,row1);

	init(keysRow2,keyboardEngRow2,row2, '<div class = "k-key" style="width: 150px;" data-key="9">Tab</div>');

	init(keysRow3,keyboardEngRow3,row3, '<div class = "k-key" style="width: 150px;" data-key="20">Caps Lock</div>');

	init(keysRow4,keyboardEngRow4,row4, '<div class = "k-key" style="width: 150px;" data-key="16">Shift</div>');
}

//
// caps.addEventListener('click', function () {
// 	init(keysRow1,keyboardEngRow1,row1);
//
// 	init(bigLettersRow2,keyboardEngRow2,row2, '<div class = "k-key" style="width: 150px;" data-key="9">Tab</div>');
//
// 	init(bigLettersRow3,keyboardEngRow3,row3, '<div class = "k-key" style="width: 150px;" data-key="20">Caps Lock</div>');
//
// 	init(bigLettersRow4,keyboardEngRow4,row4, '<div class = "k-key" style="width: 150px;" data-key="16">Shift</div>');
//
// });

