const nasim = {
    fName: 'Nasim',
    lName: 'Reza',
    bYear: 1993,
    work: 'web dev student',
    addresse : {
        city: 'Berlin',
        street: 'Stockholmer strassse',
        number: '33',
        country: 'Germany',
        postalCode: '13359',
        oneLineAddress: function() {
            return `${this.street}, ${this.number}
            ${this.postalCode}, ${this.city}
            ${this.country}`;
        }
    },
    age: function () {
        return new Date().getFullYear() - this.bDate;
    }
}

//     get age() {
//         return new Date ().getFullYear() - this.bYear;  // get is used convert the method to property.
//     }
// }

console.log(nasim.addresse.oneLineAddress());

console.log(nasim.age());
// console.log(JSON.stringify(nasim));
console.log(nasim['fName']);

//  object.keys will return an array of all the keys in the project

console.log(Object.keys(nasim));

// print all the object values to the console

console.log(Object.values(nasim));

let x = 2;
let y =  3;
y = x;
y =4;
console.log(y, x); 

const obj = {
    a: 1,
    b: 2,
    bDate: 1999
}

// let nasim1 = nasim; // not copy , just reference
// Object.copy(obj1, obj2);  // copy the object

let nasim1 = {...obj,...nasim, city: 'Berlin'}; // copy

nasim1,fName = 'Nasim1';
console.log(nasim);
console.log(nasim1);