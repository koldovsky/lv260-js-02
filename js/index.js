
let autos = ['BMW X6', 'Mercedes GLK', 'Chevrolet Malibu'];
// print(autos[0]);
// print(autos[1]);
// print(autos[2]);
// print(autos[3]);

autos[3] = 'Ford Mustang';
autos.push('Ferrari Laferrari');
autos[10] = 'Honda Accord';

// for (let i = 0; i < autos.length; i++) {
//     print(autos[i]);
// }

// print(autos.length);

function print(data) {
    document.write(data + '<br>');
}

// autos.forEach(print);

// autos.forEach(function(el) {
//     print(el);
// });

// autos.reverse();
// autos.sort();
// autos.forEach( el => print(el) );

let numbers = [];
for (let i = 0; i <= 100; i++) {
    numbers.push(i);
}
numbers.sort(function(a,b){
    return a - b;
});
// numbers.forEach(print);
// print(numbers.join(''));


let garage = {};
garage['white'] = 'BMW X6';
garage['red'] = 'Ferrari Laferrari';
garage['black'] = 'Chevrolet Malibu';

// print(garage.length);
// garage.forEach(print);

// let count = 0;
// for (let key in garage) {
//     count++
// }

// print(Object.keys(garage).length);

// let ferrariLaferrari = {};
// ferrariLaferrari.name = 'Laferrari';
// ferrariLaferrari.make = 'Ferrari';
// ferrariLaferrari.year = 2015;

// ferrariLaferrari.run = function() {
//     print(this.name + ' is running');
// }

// ferrariLaferrari.run();

// new => this = {};
// function Car(name, make, year) {
//     this.name = name;
//     this.make = make;
//     this.year = year;
//     this.run =  function() {
//         print(this.name + ' is running');
//     }
//     return this;
// }

// let bmwX6 = new Car('X6', 'BMW', 2016);
// bmwX6.run();
// let disco = new Car('Discovery', 'Land Rover', 2007);
// disco.run();

// let zaz = Car('Sens', 'ZAZ', 2000);
// let vaz = Car('Kalina', 'VAZ', 2000);
// zaz.run();
// vaz.run();

// function sample() {
//     'use strict';
//     x = 10;
// }

// sample();
// print(x);

// class SuperCar {
//     constructor(name, make, year) {
//         this.name = name;
//         this.make = make;
//         this.year = year;
//     }
//     run() {
//         print(this.name + ' is running');
//     }
// }

// let bugattiVeyron = new SuperCar('Veyron', 'Bugatti', 2014);
// bugattiVeyron.run();

function count() {
    let counter = 0;
    return function() {
        return ++counter;        
    };
}

let counter = count();
print(counter());
print(counter());
print(counter());
print(counter());