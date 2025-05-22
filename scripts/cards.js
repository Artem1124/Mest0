const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    name: "Москва",
    link: "https://cdn.culture.ru/images/0ed8639c-ed61-5cf3-af66-2fc0015e2ce5",
  },
];

// [{}, {}, {}, {}, {}, {}];

// [1,2,3,4,5]
// [card1, card2, card3, card4, card5]

// let x = ['a' , 'b' , 'c' , 'd' , 'e']
// console.log(x.length) //5

//регулярный запрос - фильтр

//Флаг. символ, который улучшает поиск
// /флаг g - ищет все повторения символов. все повторы
// /флаг i - не учитывает регистр. и большие и маленькие
//Спецсимвол принимают участие внутри запроса
// . - замена любой буквы цифры символа
//  \d - заменяет любую цифру
//  \D - не цифры
//  \w - любая цифра, англ буква и нижн подчерк
//  \W - не цифра, русские буквы, все кроме _
// экранирование \символ
//Метод (match)

//ДЗ. Написать регулярный запрос, который
// найдет все даты
let reg = / /gi;
let stroka = `
  Даты основания некоторых IT-компаний:
  Yandex: 23.09.1997
  Apple: 01/04/1976
  IBM: 16-06-1911
  IBM: 16!06!1911
`;

console.log(stroka.match(reg));
