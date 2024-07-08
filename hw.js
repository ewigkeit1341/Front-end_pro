// ДЗ 4.7.24:
// 1. Напишите стрелочную функцию, которая принимает массив чисел и возвращает новый массив, содержащий только чётные числа.
const funArr1 = arr => arr.filter(el => el % 2 === 0);
console.log(funArr1([8, 33, -67, 4, 55, -10, 18]));


// 2. Напишите стрелочную функцию, которая принимает строку и возвращает её в верхнем регистре.
const funArr2 = str => str.map(el => el.toUpperCase())
console.log(funArr2(['hello', 'good morning', 'hi', 'very good']));

// 3. Напишите стрелочную функцию, которая принимает строку и возвращает true, если строка является палиндромом, и false в противном случае.
const funPalindrome = str => str === str.split('').reverse().join('')
console.log(funPalindrome('арозаупаланалапуазора'));



// ДЗ 5.7.24
// 1. Напишите стрелочную функцию, которая принимает два числа и возвращает их произведение (умножение)
const funArrTwo = (a, b) => a * b
console.log(funArrTwo(5, 5));


// 2. Напишите стрелочную функцию, которая принимает два числа и возвращает наименьшее из них
const minNum = (a, b) => a < b ? a : b 
console.log(minNum(3, 8));

// 3. Напишите стрелочную функцию, которая принимает число и возвращает true, если число чётное, и false, если нечётное.
const evenNum = num => num % 2 === 0 ? true : false
console.log(evenNum(9));

// 4. Напишите стрелочную функцию, которая принимает число и возвращает его квадрат.
// const squareNum1 = num => Math.pow(3, 2) // вариант 1
// console.log(squareNum1()) // вариант 1
const squareNum2 = num => num ** 2 // вариант 2
console.log(squareNum2(3)); // вариант 2


// ДЗ (опционально)
// 1. Напишите функцию, которая принимает массив со строками и возвращает новый массив, в котором к каждой строке добавлены в начало и в конец символы "!".
const stringWithExlamation = arr => arr.map(el => '!' + el + '!')
console.log(stringWithExlamation(['hello', 'good morning', 'hi', 'very good']));


// 2. Напишите функцию filterWordsByLength, которая принимает массив строк и число length и возвращает новый массив, содержащий только те строки из исходного массива, длина которых больше length.
const filterWordsByLength = (arr, num) => arr.filter(el => el.length > num)
console.log(filterWordsByLength(['hello', 'good morning', 'hi', 'very good', 'tegusigalpa rules'], 5));


// 3. Напишите функцию uniqueValues, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные элементы (без повторений).
const uniqueValues1 = arr => {
    const uniqueSet = new Set(arr); // Мы используем Set, который автоматически удаляет дубликаты.
    return Array.from(uniqueSet); // Затем мы преобразуем Set обратно в массив с помощью Array.from.
};
console.log(uniqueValues1([8, 4, 33, -67, 4, 55, -10, 33, 8, 18]));


const uniqueValues2 = arr => {
    const newArr = [];
    for (const el of arr) {
        if (!newArr.includes(el)) {
            newArr.push(el);
        }
    }
    return newArr;
};
console.log(uniqueValues2([8, 4, 33, -67, 4, 55, -10, 33, 8, 18]));

const uniqueValues3 = arr => {
    const newArr = [];
    for (const el of arr) {
        if (newArr.indexOf(el) === -1) {
            newArr.push(el);
        }
    }
    return newArr;
};
console.log(uniqueValues3([8, 4, 33, -67, 4, 55, -10, 33, 8, 18]));