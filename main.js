


/////1

const searchCandidatesByPhoneNumber = (num) => {

    let numString = () => num.toString()

    let nums = () => numString().replace(/\D/g, '')
    if (num) {
        let arr = condidateArr.filter(n => n.phone.replace(/\D+/g, '').includes(nums()))

        console.log(arr);
    }
}
searchCandidatesByPhoneNumber(94)






/////2

const getCandidateById = (id) => {

    let arr = condidateArr.filter(byId => byId._id == id)

    arr[0].registered = arr[0].registered.replace(/-/g, '/').slice(0, 10)
    let obj = arr[0]
    console.log(obj);
}
getCandidateById('5e216bc95983a76c8461f88f')



/////3


const sortCandidatesArr = (sortBy) => {
    let arr = condidateArr.filter(ordBal => ordBal.balance = ordBal.balance.replace(/,/g, '').slice(1))

    if (sortBy == 'asc') {
        console.log(arr.sort((a, b) => a.balance - b.balance))

    } else if (sortBy == 'desc') {
        console.log(arr.sort((a, b) => b.balance - a.balance))
    } else {
        console.log(arr)
    }

}

sortCandidatesArr('desc')






//////4




const getEyeColorMap = () => {

    //getting eye colors

    let allColors = condidateArr.map(col => col.eyeColor)

    // removing duplicates

    let colors = allColors.filter((item, index) => allColors.indexOf(item) == index)



    let array = []

    for (let i = 0; i < colors.length; i++) {

        obj = { [colors[i]]: condidateArr.filter(can => can.eyeColor == colors[i]) }

        array.push(obj)

    }


    console.log(array)

}


getEyeColorMap()

