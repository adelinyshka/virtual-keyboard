
	alert('Здравствуйте! Прошу вас оценить работу в субботу, 12 апреля, в день Космонавтики, не раньше, пожалуйста. Пока что не успела все сделать. Спасибо')


//создать обертку для всего
let imDiv = document.createElement('div');

//добавить стилизацию
imDiv.classList.add('keyboard-wrapper');

//прикрепить на страницу
document.body.appendChild(imDiv);

// //создать заголовок с инфо о том что создается в системе MacOS
// let title = document.createElement('h1');
//
// //добавить заголовок на стр
// imDiv.appendChild(title);
//
// //добавить заголовку текст
// title.innerText = 'Привет! Создано в MacOS!';
//
// //добавить заголовку стили
// title.classList.add('title');

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
const keyboardEngRow1 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, ];

const keysRow2 = ['q','w','e','r','t','y','u','i','o','p','[',']',];
const keyboardEngRow2 = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, ];

const keysRow3 = ['a','s','d','f','g','h','j','k','l',';','""',' \\ ',];
const keyboardEngRow3 = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, ];

const keysRow4 = ['z','x','c','v','b','n','m', ',' , '.' , '/'];
const keyboardEngRow4 = [ 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];


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

// генерация кнопок

init(keysRow1,keyboardEngRow1,row1);

init(keysRow2,keyboardEngRow2,row2, '<div class = "k-key" style="width: 150px;" data-key="9">Tab</div>');

init(keysRow3,keyboardEngRow3,row3, '<div class = "k-key" style="width: 150px;" data-key="20">Caps Lock</div>');

init(keysRow4,keyboardEngRow4,row4, '<div class = "k-key" style="width: 150px;" data-key="16">Shift</div>');


// функция для генерации больших букв
function makeCaps(array) {
	let x = array.join('');
	let z=  x.toUpperCase();
	return z.split('');
}

//добавляем в поле вывода по клику на вирт клаве

//определили где кнопки
//любая кнопка
let imKey = document.querySelectorAll('.k-key');

let tab = document.querySelector('div[data-key="9"]');

let caps = document.querySelector('div[data-key="20"]');



// добавить backSpace
let backSpace = document.createElement('div');
backSpace.classList.add('k-key');
backSpace.style = 'width: 150px;'
backSpace.innerHTML = 'BackSpace';
row1.appendChild(backSpace);

//enter
let enter = document.createElement('div');
enter.classList.add('k-key');
enter.style = 'width: 150px;'
enter.innerHTML = 'Enter';
row3.appendChild(enter);


enter.addEventListener('click',function () {
	textarea.value+= '\n'
});

// функция для вывода значений по клику в поле
function toTextarea() {
	imKey.forEach(function (x) {

		x.addEventListener('click', function () {

			//проверка на таб
			if(x === tab){
				textarea.value += '\t';
				textarea.focus();
				tab.classList.add('.active-letter');
				function removeActive() {
					tab.classList.remove('active-letter');
					textarea.focus();
				}
				setTimeout(removeActive,  300);
				textarea.focus();

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


//сделать чтобы backSpace удалял
backSpace.addEventListener('click', function () {

	if (textarea.value.length > 0) {
		textarea.value = textarea.value.slice(0, -1);
		textarea.focus();
	}
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

// капс

//генерация кнопок с большими буквами
let bigLettersRow2 = makeCaps(keysRow2);
let bigLettersRow3 = makeCaps(keysRow3);
let bigLettersRow4 = makeCaps(keysRow4);


function beBig() {
	init(keysRow1,keyboardEngRow1,row1);

	init(bigLettersRow2,keyboardEngRow2,row2, '<div class = "k-key" style="width: 150px;" data-key="9">Tab</div>');

	init(bigLettersRow3,keyboardEngRow3,row3, '<div class = "k-key active-letter " style="width: 150px;" data-key="20">Caps Lock</div>');
	bigLettersRow3.appendChild(enter);

	init(bigLettersRow4,keyboardEngRow4,row4, '<div class = "k-key" style="width: 150px;" data-key="16">Shift</div>');
}

function beSmall() {
	init(keysRow1,keyboardEngRow1,row1);

	init(keysRow2,keyboardEngRow2,row2, '<div class = "k-key" style="width: 150px;" data-key="9">Tab</div>');

	init(keysRow3,keyboardEngRow3,row3, '<div class = "k-key" style="width: 150px;" data-key="20">Caps Lock</div>');

	init(keysRow4,keyboardEngRow4,row4, '<div class = "k-key" style="width: 150px;" data-key="16">Shift</div>');
}

let shift = document.querySelector('[data-key="16"]');

//подсветка для shift
addEventListener('keydown', function (event) {
	if(event.shiftKey ){
		shift.classList.add('active-letter');

		function removeActive() {
			shift.classList.remove('active-letter');
			textarea.focus();
		}
		setTimeout(removeActive,  300);
		textarea.focus();
	}

	// todo сделать смену цвета кнопки при клике по табу
	if(event.code === 'Tab' ){
		console.log('imTab')
	}
});

//создаем 5 ряд кнопок
	let xxx = document.createElement('div');

//функция для генерации кнопок
	function generateButton(name, width, textOnButton, row) {
		name.classList.add('k-key');
		name.style = width;
		name.innerHTML = textOnButton ;
		row.appendChild(name);
	}

	//4 ряд

	//shiftRight
	let shiftRight = document.createElement('div');
	generateButton(shiftRight, 'width:130px;', 'Shift', row4);
	//arrowUp
	let arrowUp = document.createElement('div');
	generateButton(arrowUp, 'margin-left: 52px; width:50px;', '/\\', row4);




	//5 ряд

	//cntr
	let cntr = document.createElement('div');
	generateButton(cntr, 'width:90px;', 'Ctrl', row5);

	//win
	let win = document.createElement('div');
	generateButton(win, 'width:90px;', 'Win', row5);

	//alt
	let alt = document.createElement('div');
	generateButton(alt, 'width:90px;', 'Alt', row5);
	//space
	let space = document.createElement('div');
	generateButton(space, 'width:370px;', ' ', row5);

	//alt-right
	let altRight = document.createElement('div');
	generateButton(altRight, 'width:90px;', 'Alt', row5);

	//cntr
	let cntrRight = document.createElement('div');
	generateButton(cntrRight, 'width:90px;', 'Ctrl', row5);

	//arrowRight
	let arrowRight = document.createElement('div');
	generateButton(arrowRight, 'margin-left:32px;width:50px;', '<', row5);

	//arrowDown
	let arrowDown = document.createElement('div');
	generateButton(arrowDown, 'width:50px;', 'v', row5);

	//arrowLeft
	let arrowLeft = document.createElement('div');
	generateButton(arrowLeft, 'width:50px;', '>', row5);



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


