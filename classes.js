class Person {
    // fName = '';
    // lName= '';
    // bDate = 0;
    constructor(firstName, lastName, birthDate) {
        this.fName = firstName;
        this.lName = lastName;
        this.bDate = birthDate;
    }

    age = function () {
        return new Date().getFullYear() -this.bDate;
    }
}

const nasim = new Person('Nasim', 'Reza', '1993');
const jay = new Person('jay', 'radan', '1992')

console.log(nasim.lName);
console.log(nasim.age());

// Student class will inherit all properties and methods from Person class

class Student extends Person {
    constructor(firstName, lastName, birthDate, className, classType){
        // this.fName = firstName;
        // this.lName = lastName;
        // this.bDate = birthDate;

        //call the constructor of the parent class 
        super(firstName, lastName, birthDate);
        this.className = className;
        this.classType = classType;
    }
    // age() {
    //     return new Date().getFullYear() - this.bDate;
    // }
    getDetails() {
        return `${this.fName} ${this.lName} is a student in ${this.className} 
        , studying ${this.classType} and is ${this.age()} years old`;
    }

}

const Nasim = new Student('Nasim', 'Reza', 1993, 'FBW e07-1', 'Web Dev');
const Lara = new Student('Lara','Cilia',1989, 'German language A1.2' );
console.log(Nasim.getDetails());
console.log(Nasim.age());

console.log(Lara.getDetails());



//Exercise

class DailyWork {
    constructor(day, startTime, endTime) {
        this.day = day; 
        this.startTime = startTime;
        this.endTime = endTime;
    }
    getWorkHours(){
        return this.endTime - this.startTime
    }
}

const mondayWork = new DailyWork('Monday',9,17);
console.log(mondayWork.getWorkHours());

class Worker{
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
        this.workDays = [];
    }
    addWorkDay(day){
        //task- push the day inside the workDays array
        this.workDays.push(day);
    }

    getTotalWorkHours() {
        // write the code to return the total work hours 
        // for the all days in workDays array
        // for loop solution
        let sum = 0;
        for (let i = 0; i < this.workDays.length; i++)  {
            sum += this.workDays[i].getWorkHours()
        }
        return sum;

        // solution using forEach
        // let sum = 0;
        // this.workDays.forEach((item) => {
        //     sum += item.getWorkHours()
        // })
        // return sum;

        // solution using reduce
        // return this.workDays.reduce((acc, item) => acc + item.getWorkHours(), 0);


    }
}
const reza = new Worker('Nasim', 'Reza');
reza.addWorkDay(mondayWork);
reza.addWorkDay(new DailyWork('Tuesday', 9, 12));
reza.addWorkDay(new DailyWork('Wednesday', 12, 16));
reza.addWorkDay(new DailyWork('Thursday', 10, 15));
reza.addWorkDay(new DailyWork('Friday', 9, 14));
console.log(reza);
console.log(reza.workDays[0].getWorkHours());
console.log(reza.getTotalWorkHours());


