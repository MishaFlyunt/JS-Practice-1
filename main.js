//JS-LOOPS-Practice

//1 Заповнити список arr1 10 значеннями 0,1,2,3,4.... за допомогою циклу for;
let arr = [];
for (let i = 0; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);

//2 Заповнити список arr2 10 значеннями 0,1,2,3,4.... за допомогою циклу while;
let arr1 = [];
let i = 0;
while (i <= 10) {
    arr1.push(i);
    i++
}
console.log(arr1);

//3 Заповнити список arr3 100 випадковими значеннями використовуючи random за
// допомогою циклу for;
let arr2 = [];
for (let i = 0; i < 100; i++) {
    arr2.push(Math.floor(Math.random() * 100))
}
console.log(arr2);

//4 У заповненому випадковими значеннями списку arr3 перевірити кількість
// елементів значення яких менше за 20 за допомогою циклу for;
let smaller = 0;
for (let i = 0; i < arr2.length - 1; i++) {
    if (arr2[i] < 20) {
        smaller++
    }
}
console.log(`Менші значення - ${smaller}`);

//5 У заповненому випадковими значеннями списку arr3 перевірити кількість
// елементів значення яких рівна 7 за допомогою циклу for;
let seven = 0;
for (let i = 0; i <= arr2.length - 1; i++) {
    if (arr2[i] == 7) {
        seven++
    }
}
console.log(`Рівні 7 - ${seven}`);

//6 У заповненому випадковими значеннями списку arr3 перевірити кількість
// парних та непарних елементів, вивести ці дані в консоль за допомогою циклу
// for;
let pair = 0;
let notPair = 0;
for (let i = 0; i <= arr2.length - 1; i++) {
    if (arr2[i] % 2 == 0) {
        pair++
    } else if (arr2[i] % 2 != 0) {
        notPair++
    }
}
console.log(`Парні - ${pair}`);
console.log(`Непарні - ${notPair}`);