//-------------ПЕРЕМЕННЫЕ--------------------
let cardTemplate = document.querySelector("#card-template"); //шаблон карточки
let cardsList = document.querySelector(".places__list"); //внутри будут карточки, это список для них
// ------------ РЕДАКТИРОВАНИЕ ПРОФИЛЯ ---------------
let popupEdit = document.querySelector(".popup_type_edit");
let openPopupEdit = document.querySelector(".profile__edit-button");
let closePopupEdit = popupEdit.querySelector(".popup__close");
let popupEditForm = popupEdit.querySelector(".popup__form");
//////////////////////////////////////////////////////////////////////////////////////////
let popupEditImage = document.querySelector(".popup_type_avatar"); //создание
let openPopupEditImage = document.querySelector(".image__edit"); //открытие
let closePopupEditImage = popupEditImage.querySelector(".popup__close"); //закрытие
let popupEditImageForm = popupEditImage.querySelector(".popup__form"); //форма
let profileImage = document.querySelector(".profile__image"); //изначальная картинка
let inputImage = document.querySelector("#link-image"); //инпут поле формы (замена прошлой картинки)
//////////////////////////////////////////////////////////////////////////////////////////
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__description");
let inputName = document.querySelector(".popup__input_type_name");
let inputJob = document.querySelector(".popup__input_type_description");
// ------------ ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ -------------
let popupCard = document.querySelector(".popup_type_new-card");
let openPopupCard = document.querySelector(".profile__add-button");
let closePopupCard = popupCard.querySelector(".popup__close");
let popupCardForm = popupCard.querySelector(".popup__form");
let inputMesto = document.querySelector(".popup__input_type_card-name");
let inputLink = document.querySelector(".popup__input_type_url");
//окно увеличения изображения
let popupImage = document.querySelector(".popup_type_image");
let closePopupImage = popupImage.querySelector(".popup__close");
//Кнопка сохранить
let editSaveButton = popupEdit.querySelector(".popup__button");
// profileName.textContent = input.value
// profileJob.textContent  =
//Механика сборки карточки
//Лайк, мусорка, увеличение изображения
function createCard(title, image) {
  let cardClone = cardTemplate.content.cloneNode(true);
  let cardImage = cardClone.querySelector(".card__image");
  let cardTitle = cardClone.querySelector(".card__title");
  let cardDelete = cardClone.querySelector(".card__delete-button");
  let cardLike = cardClone.querySelector(".card__like-button");
  cardTitle.textContent = title;
  cardImage.src = image;
  cardLike.addEventListener("click", function () {
    cardLike.classList.toggle("card__like-button_is-active");
  });
  cardDelete.addEventListener("click", function () {
    cardDelete.parentElement.remove();
  });
  cardImage.addEventListener("click", function () {
    popupImage.querySelector(".popup__image").src = image;
    popupImage.querySelector(".popup__caption").textContent = title;
    openPopup(popupImage);
  });

  cardsList.prepend(cardClone);
}
//Цикл который отображает 6 карточек
//Стартовое отображение карточек
for (let i = 0; i < initialCards.length; i++) {
  let cardClone = cardTemplate.content.cloneNode(true);
  let cardImage = cardClone.querySelector(".card__image");
  let cardTitle = cardClone.querySelector(".card__title");
  let cardLike = cardClone.querySelector(".card__like-button");
  let cardDelete = cardClone.querySelector(".card__delete-button");
  cardTitle.textContent = initialCards[i].name;
  cardImage.src = initialCards[i].link;
  cardLike.addEventListener("click", function () {
    cardLike.classList.toggle("card__like-button_is-active");
  });
  cardDelete.addEventListener("click", function () {
    cardDelete.parentElement.remove();
  });
  cardImage.addEventListener("click", function () {
    popupImage.querySelector(".popup__image").src = initialCards[i].link;
    popupImage.querySelector(".popup__caption").textContent =
      initialCards[i].name;
    openPopup(popupImage);
  });

  cardsList.append(cardClone);
}
//Обработка октрытия попапов
//имяКнопки.addEventListener("click",function(){
//    openPopup(popup popup_type_avatar)<---имя дива с формой
openPopupEditImage.addEventListener("click", function () {
  openPopup(popupEditImage);
});

openPopupEdit.addEventListener("click", function () {
  openPopup(popupEdit);
});
openPopupCard.addEventListener("click", function () {
  openPopup(popupCard);
});
//Обработка закрытия попапов
closePopupEditImage.addEventListener("click", function () {
  closePopup(popupEditImage);
});
closePopupEdit.addEventListener("click", function () {
  closePopup(popupEdit);
});
closePopupCard.addEventListener("click", function () {
  closePopup(popupCard);
});
closePopupImage.addEventListener("click", function () {
  closePopup(popupImage);
});
//открытие любого окна
function openPopup(modal) {
  modal.style.display = "flex";
}
//закрытие любого окна
function closePopup(modal) {
  modal.style.display = "none";
}
//обработка отправки формы новой карточки
popupCardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  createCard(inputMesto.value, inputLink.value);
  closePopup(popupCard);
  inputMesto.value = "";
  inputLink.value = "";
});
//изменение данных профиля
popupEditForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupEdit);
  inputName.value = "";
  inputJob.value = "";
});
popupEditImageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileImage.style.backgroundImage = `url("${inputImage.value}")`;
  closePopup(popupEditImage);
  inputImage.value = "";
});
//Array.from - создает массив из другого объекта

//стрелочная функция  const enableValidation = () => {}

//показывать ошибку и применить стили для неправильного ввода
const showError = (formElement, inputElement, errorMessage) => {
  //находим span в котором отобразим ошибку
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); //хороший костыль
  inputElement.classList.add("popup__input_type-error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
  inputElement.classList.remove("popup__input_type-success");
};
//убирает класс с ошибкой
const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
  inputElement.classList.remove("popup__input_type-error");
  inputElement.classList.add("popup__input_type-success");
};
//проверяет на валидность список инпутов
const hasInvalidInput = (inputList) => {
  //перебор всех элементов и нахождение input с неправильными данными
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
//отвечает за включение и отключение кнопки
const toggleButtonState = (inputList, buttonElement) => {
  //если данные введены неверно
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add("popup__button_inactive");
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("popup__button_inactive");
  }
};
//проверка на валидность инпута
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");
  toggleButtonState(inputList, buttonElement);
  //каждый раз когда мы что-то вводим в input поле
  //проверяется кнопка отправки(вкл выкл)
  //показывает или скрывается ошибка
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      toggleButtonState(inputList, buttonElement); //то что включает и отключает кнопку
      isValid(formElement, inputElement); //отправка данных на проверку валидности
    });
  });
};
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};
enableValidation();

// 1. enableValidation()
// 2. setEventListeners() для каждой формы
// 3. toggleButtonState и isvalid()для кнопки и инпут полей
// 4.1 toggleButtonState -> hasInvalidInput вкл или выкл кнопки
// 4.2 isvalid() -> showError либо hideError вкл или выкл ошибки
