//// 1

function count() {
    let count = 0
    return function (a) {
        count += a
        console.log(count)
    }
}

let counter = count()
counter(1)
counter(1)



////2
function updateArr() {
    let count = []
    return function (a) {

        if (a == undefined) {

            count = []

        } else {
            count.push(a)
            console.log(count)
        }

    }

}

let getUpdatedArr = updateArr()
getUpdatedArr(3)
getUpdatedArr(5)
getUpdatedArr({ name: 'Vasya' })
getUpdatedArr()
getUpdatedArr(5)




////3

const timeMeasure = () => {

    count = 0

    let start = new Date()

    return function () {

        if (count == 0) {

            console.log('Enabled');

        }

        count = Math.floor((new Date() - start) / 1000)
        console.log(count);

    }

}
let getTime = timeMeasure()






/////4

function timer(time) {
    if (time > 0) {
        const count = setInterval(() => {
            mins = Math.floor(time / 60)
            secs = time % 60
            time--

            if (mins < 10) mins = `0${mins}`
            if (secs < 10) secs = `0${secs}`
            console.log(`${mins}:${secs}`)

            if (time == 0) {

                clearInterval(count)

                const count2 = setInterval(() => {

                    console.log('00:00 Timer End')

                    clearInterval(count2)

                }, 1000);
            }

        }, 1000);

    }

}

timer(10)