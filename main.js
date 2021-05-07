/////1

const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

let result = []

function city(obj) {

    for (i = 0; i < Object.keys(citiesAndCountries).length; i++) {
        result.push(Object.keys(obj)[i] + ' this is ' + obj[Object.keys(obj)[i]])
    }
    console.log(result);
}

city(citiesAndCountries)







///2



function getArray(amount) {

    a = []
    b = []
    for (i = 1; i <= amount; i++) {
        b.push(i)

    }

    for (j = 1; j <= amount; j++) {
        if (j % 3 == 0) {
            a.push(b.slice(j - 3, j - amount % 3))
        }
    }
    console.log(a);
}

getArray(9)





///3


const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Suterday', 'Sunday'],
}

function getNameOfDay(lang, day) {

    day--

    if (lang == 'en') {

        console.log(namesOfDays.en[day]);

    } else if (lang == 'ru') {
        console.log(namesOfDays.ru[day]);
    }



}

getNameOfDay('en', 3)






//4




function smallNum(array) {

    let result = []

    array.sort((a, b) => a - b)

    for (i = 0; i < array.length; i++) {

        if (array[i] > 0 && array[i] % 1 == 0 && array.length >= 4) {

            if (array[i + 1] == array[i] == false) {

                result.push(array[i])

            }
        }
    }
    result = result[0] + result[1]

    if (isNaN(result)) {

        console.log('error');

    } else {

        console.log(result);
    }


}
let arr = [19, 5, 42, 2, 77]
smallNum(arr)




////5



let array = [0, 0, 1, 0]

let conResult = 0
let power = 0

for (i = array.length - 1; i >= 0; i--) {
    power++

    conResult += array[i] * (2 ** (power - 1))
}


console.log(conResult);
