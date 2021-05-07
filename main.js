//1//

for (i = 1; i <= 10; i++) {

    if (i % 3 == 0) {

        console.log('FizBuz');

    } else if (i % 2 == 0) {

        console.log('Fiz');

    } else {

        console.log('Buz');
    }
}


//2

let fact = 7
let result = 1
let str = ''
for (i = fact; i >= 1; i--) {

    result *= i

    if (i == 1) {

        str += `${i}`

    } else {

        str += `${i}⋅`
    }
}
console.log(`${fact}! = ${str} = ${result} `)



//3



let paperInPack = 500
let paperForWeek = 1200
let packsPerWeek = paperForWeek / paperInPack
let neededWeeks = 8
let result1 = (packsPerWeek * neededWeeks)
let round = (result1 - result1 % 1) + 1

if (result1 % 2 != 0) {

    console.log(round);
} else {

    console.log(result1);
}


//4


let roomNumber = 200

let floors = 9;
let roomsOnFloor = 3;
let roomsOnEachEntrance = floors * roomsOnFloor;

let floor
let porch

let rawPorch = roomNumber / roomsOnEachEntrance
if ((rawPorch - rawPorch % 1) == rawPorch) {
    porch = (rawPorch - rawPorch % 1)
} else {
    porch = (rawPorch - rawPorch % 1) + 1
}

let rawfloor = (roomNumber - (porch - 1) * roomsOnEachEntrance) / roomsOnFloor


if (rawfloor == (rawfloor - rawfloor % 1)) {
    floor = (rawfloor - rawfloor % 1)


} else {
    floor = (rawfloor - rawfloor % 1) + 1
}


console.log(`apartment ${roomNumber} porch ${porch} floor ${floor}`);





//5

let medianNumber = 6
let chars = (medianNumber * 2)
let signAfter = signBefore = medianNumber
let count = 0
let pyr = ''
for (y = 0; y < medianNumber; y++) {

    signBefore--

    signAfter++

    count++

    for (x = 1; x < chars; x++) {

        if (y < count && (x > signBefore && x < signAfter)) {

            pyr += '#'

        } else {

            pyr += '-'
        }
    }
    pyr += '\n'
}
console.log(pyr)


