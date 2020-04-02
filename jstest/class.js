// class Car {
//     constructor(color, mileage) {
//         this.color = color;
//         this.mileage = mileage;
//     }
// }

// let myCar = new Car('yellow', 0);

// console.log(myCar);


// class Person {
//     constructor(surname, name, age, gender) {
//         this.surname = surname;
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }

// let client = new Person('Aliyev', 'Eldar', 23, 'Male');

// console.log(client);

// class Car {
//     constructor(color, mileage) {
//         this.color = color;
//         this.mileage = mileage;
//     }
//     increaseMileage(distance) {
//         this.mileage += distance
//     }
// }

// let myCar = new Car('yellow', 0);
// myCar.increaseMileage(100);

// console.log(myCar);


// class Person {
//     constructor(surname, name, age, gender) {
//         this.surname = surname;
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     celebrateBirthday(birthday) {
//         this.age+= birthday
//     }
// }

// let client = new Person('Aliyev', 'Eldar', 23, 'Male');
// client.celebrateBirthday(1);

// console.log(client);



// class Transaction {
//     constructor(fromClient, toClient, amount, comission ) {
//         this.fromClient = fromClient;
//         this.toClient = toClient;
//         this.amount = amount;
//         this.comission = comission;
//     }
//     calculateCommission() {
//         this.comission=this.amount*this.comission/100;
//     }
// }

// let transaction = new Transaction('Christian', 'Daniel', 1000, 5);

// transaction.calculateCommission();

// console.log(transaction);





// class Vehicle {
//     constructor(maxSpeed, color) {
//         this.maxSpeed = maxSpeed;
//         this.color = color;
//     }
// }

// class Car extends Vehicle {
//     constructor(maxSpeed, color, mileage) {
//         super(maxSpeed,color);
//         this.mileage = mileage;

//     }
// }

// class Bike extends Vehicle {
//     constructor(maxSpeed, color, hasBasket) {
//         super(maxSpeed,color);
//         this.hasBasket = hasBasket;
//     }
// }

// let myCar = new Car (200, 'red', 100);

// console.log(myCar);

// let myBike = new Bike (30, 'black', true);

// console.log(myBike);








// class Person {
//     constructor(surname, name, age, gender) {
//         this.surname = surname;
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }

// let client = new Person('Aliyev', 'Eldar', 23, 'Male');

// class Client extends Person {
//     constructor(surname, name, age, gender,accountNumber) {
//     super(surname, name, age, gender);
//     this.accountNumber = accountNumber;
//     }
// }

// class Employee extends Person {
//     constructor(surname, name, age, gender,department) {
//     super(surname, name, age, gender);
//     this.department = department;
//     }
// }

// let client1 = new Client ('Ivan', 'Ivanov' , 45, 'Male', 123456789);

// console.log(client1);

// let client2 = new Employee('Axmed', 'Axmedov', 35, 'Male', 'business');

// console.log(client2);






//Наследование методов



// class Vehicle {
//     constructor(maxSpeed, color) {
//       this.maxSpeed = maxSpeed;
//       this.color = color;
//     }
//     changeColor(color) {
//       this.color = color;
//     }
//   }
  
   
  
//   class Car extends Vehicle {
//     constructor(maxSpeed, color, mileage) {
//       super(maxSpeed, color);
//       this.mileage = mileage;
//     }
//   }
  
   
  
//   class Bike extends Vehicle {
//     constructor(maxSpeed, color, hasBasket) {
//       super(maxSpeed, color);
//       this.hasBasket = hasBasket;
//     }
//   }
  
   
  
//   let myCar = new Car(200, 'red', 100);
//   myCar.changeColor('black');
//   console.log(myCar);






//class Person {
//     constructor(surname, name, age, gender) {
//         this.surname = surname;
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     updateName(newName) {
//         this.name = newName
//     }
// }


// let client = new Person('Aliyev', 'Eldar', 23, 'Male');

// client.updateName('Orxan');
// console.log(client);

// class Client extends Person {
//     constructor(surname, name, age, gender,accountNumber) {
//     super(surname, name, age, gender);
//     this.accountNumber = accountNumber;
//     }
// }


// class Employee extends Person {
//     constructor(surname, name, age, gender,department) {
//     super(surname, name, age, gender);
//     this.department = department;
//     }
// }

// let client1 = new Client ('Ivan', 'Ivanov' , 45, 'Male', 123456789);

// client1.updateName('Ilkin');

// console.log(client1);

// let client2 = new Employee('Axmed', 'Axmedov', 35, 'Male', 'business');

// client.updateName('Alex');

// console.log(client2);








//ZADACA 2 

class Employee {
    constructor(name, isAviable, workingPlace){
        this.name = name;
        this.isAviable = isAviable;
        this.workingPlace = ['Home', 'Office']

    }
    changeAvaliability(isAviable){
        this.isAviable = isAviable
    }
}

class OfficeEmployee extends Employee {
    constructor(name, isAviable, workingPlace, officeNumber){
    super(name, isAviable, workingPlace)
        this.officeNumber = officeNumber
    }
    changeOfficeNumber(officeNumber){
        this.officeNumber = officeNumber
    }
}
class RemoteEmployee extends Employee {
    constructor(name, isAviable, workingPlace, phoneNumbers){
    super(name, isAviable, workingPlace)
    this.phoneNumbers = [+994553698521, +994702369854, +994512698536]

    }
    addPhoneNumber(phoneNumbers){
        this.phoneNumbers.unshift(phoneNumbers)
    }

}


let office = new OfficeEmployee('Ruslan','Aviable', [1], +994503769585 );

office.changeOfficeNumber(+994553854214);
console.log(office);

let remote = new RemoteEmployee('Emil', 'Aviable', [0], [2] );

remote.addPhoneNumber([+994557865236]);
console.log(remote);