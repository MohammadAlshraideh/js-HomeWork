////1
class Employee {


    constructor(
        id, name, surname, salary, workExperience, isPrivileges, gender
    ) {
        this.id = id
        this.name = name
        this.surname = surname
        this.salary = salary
        this.workExperience = workExperience
        this.isPrivileges = isPrivileges
        this.gender = gender

    }


}

const employeeObj = new Employee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'Male')


////2
Employee.prototype.getFullName = function () {

    return console.log(`${this.surname} ${this.name} `)
}


////3

let createEmployesFromArr = (array) => {

    let arr = []
    for (let a = 0; a < array.length; a++) {


        employ = new Employee(
            array[a].id, array[a].name, array[a].surname, array[a].salary,
            array[a].workExperience, array[a].isPrivileges, array[a].gender
        )

        arr.push(employ)



    }
    return arr
}


const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)


emplyeeConstructArr.unshift(employeeObj)




////4

const getFullNamesFromArr = (arr) => {
    let y = []
    for (let i = 0; i < arr.length; i++) {

        y.push(arr[i].getFullName())
    }
    return y
}

getFullNamesFromArr(emplyeeConstructArr)





////5

const getMiddleSalary = (arr) => {
    let mS = 0
    for (let i = 0; i < arr.length; i++) {

        mS += Math.floor(arr[i].salary / arr.length)

    }
    return console.log(mS)

}

getMiddleSalary(emplyeeConstructArr)





/////6


const getRandomEmployee = (arr) => {

    rand = Math.floor(Math.random() * arr.length)

    return console.log(arr[rand])

}

getRandomEmployee(emplyeeConstructArr)





////7

class Emploee {

    constructor(employee) {

        Object.assign(this, employee)

    }
    get fullInfo() {
        return `id - ${this.id}, name - ${this.name}, surname - ${this.surname}`
    }

    set fullInfo({ name, salary, email }) {

        this.name = name
        this.salary = salary
        this.email = email
    }

}


const newObj = new Emploee(emplyeeArr[0])

newObj.fullInfo = { name: 'Вася', salary: 9000, email: 'ex@mail.ua' }

console.log(newObj);
console.log(newObj.fullInfo)