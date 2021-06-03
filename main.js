const form = document.querySelector('.form');
const inputYourCity = document.querySelector('.weather__your-city')
const submitYourCity = document.querySelector('.weather__submit-city')


function changeYorCity() {
    // API ключ
    let apiKey = "77021688eecb9062767e4ba889643832";
    // Город погода которого нужна
    let mainUrl = 'https://api.openweathermap.org/data/2.5/weather?';
    // let city = "Светогорск"
    let city = "Светогорск"
    let url = `${mainUrl}q=${city}&lang=ru&units=metric&appid=${apiKey}`;

    function formSubmitHandler(evt) {
        evt.preventDefault();
        document.querySelector('.weather__city').textContent = inputYourCity.value;
    }
    // Отправка GET запроса
    axios.get(url).then(res => {
        // Вывод города
        document.querySelector('.weather__city').textContent = res.data.name
        city = document.querySelector('.weather__city').textContent 
        // Вывод температуры
        document.querySelector('.weather__temp').textContent = res.data.main.temp
        //Вывод "Ощущается как"
        document.querySelector('.weather__temp-feels_like').textContent = res.data.main.feels_like
        // Вывод влажности
        document.querySelector('.weather__humidity').textContent = res.data.main.humidity
        // Вывод скорости ветра
        document.querySelector('.weather__wind').textContent = res.data.wind.speed
        //Вывож описания погоды и облачности
        // document.querySelector('.weather__clouds').textContent = res.data.weather[0]['description']
        //взять иконку текущей погоды
        document.getElementById("weatherIconData").src = "http://openweathermap.org/img/w/" + res.data.weather[0]['icon'] + ".png";
    })
    city = document.querySelector('.weather__city').textContent
    form.addEventListener('submit', formSubmitHandler);
}

changeYorCity()

// // Отправляем запрос
// axios.get(url).then(res => {
//     // Выводим результат в консоль браузера
//     console.log(res.data);
// })


// Дата и время
const infoDate = document.querySelector('.currentDate')
let infoDate1 = new Date()
let infoDate2 = infoDate1.getHours() //взять час для изображения дня и ночи

function getCurrentTimeString() {
    return new Date().toTimeString().replace(/ .*/, '');
}

setInterval(
    () => infoDate.textContent = getCurrentTimeString(),
    1000
);

//Функция меняющая небесное тело, в зависимости от времени суток
function changeDayNigth(time) {
    if (time >= 7 & time <= 19) {
        return document.querySelector('.middle__img').setAttribute('src', '././images/sun.png')
    } else {
        return document.querySelector('.middle__img').setAttribute('src', '././images/01n.png')
    }

}
changeDayNigth(infoDate2)