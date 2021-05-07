


class Student {
    static id = 1
    static listOfStudents = []


    constructor(enrollee) {
        Object.assign(this, enrollee)
        this.id = Student.id++
        this.isSelfPayement
        if (this.ratingPoint >= 800) {
            this.isSelfPayement = false
        } else {
            this.isSelfPayement = true
        }
        function compare(a, b) {
            const c = a.ratingPoint
            const d = b.ratingPoint
            const e = a.schoolPoint
            const f = b.schoolPoint
            let comparison = 0;
            if (c == d) {
                if (e > f) {
                    comparison = -1;
                } else if (e < f) {
                    comparison = 1;
                }
                return comparison;
            } else if (c > d) {
                comparison = -1;
            } else if (c < d) {
                comparison = 1;
            }
            return comparison;


        }



        Student.listOfStudents.push(this)
        Student.listOfStudents.sort(compare)
        for (let i = 0; i < Student.listOfStudents.length; i++) {
            if (i > 4) {
                Student.listOfStudents[i].isSelfPayement = true
            }

        }

    }

}



function newStudents(array) {
    for (i = 0; i < array.length; i++) {
        new Student(array[i])
    }
}
newStudents(studentArr)
const students = Student.listOfStudents
console.log(students)









class CustomString {

    constructor(string) {

        this.reverse = (string) => {
            return string.split("").reverse().join("");
        }


        this.ucFirst = () => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        this.ucWords = (string) => {
            let str = string.split(' ')
            for (let i = 0; i < str.length; i++) {
                str[i] = str[i][0].toUpperCase() + str[i].substr(1);
            }
            return str.join(' ')

        }



    }
}


const myString = new CustomString('qwerty qwerty qwerty')
console.log(myString.reverse('qwerty'));
console.log(myString.ucFirst('qwerty'));
console.log(myString.ucWords('qwerty qwerty qwerty'));



class Validator {
    constructor(string) {

        this.checkIsEmail = (string) => {

            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return re.test(string.toLowerCase());
        }

        this.checkIsDomain = (string) => {
            const re = /^((www\.)|(http:\/\/)|(https:\/\/))?[^<>()[\]\.,;:\s@\"]+[\.]((com)|(org)|(net))$/
            return re.test(string.toLowerCase());
        }

        this.checkIsDate = (string) => {
            const re = /^(((0|1|2)\d)|30|31)\.((10|11|12)|(0[1-9]))\.[1-2]\d\d\d$/;
            return re.test(string)

        }

        this.checkIsPhone = (string) => {
            const re = /^(\+|00)38\s?\(?0(5|6|7|9)\d\)?\s?\d\d\d(-|\s)?\d\d(-|\s)?\d\d$/
            return re.test(string);
        }


    }
}


const validator = new Validator()


console.log(validator.checkIsEmail('vasya.pupkin@gmail.com'));
console.log(validator.checkIsDomain('google.com'))
console.log(validator.checkIsDate('30.11.2019'))
console.log(validator.checkIsPhone('+38 (066) 937-99-92'));






