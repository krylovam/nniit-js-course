//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n^0)===n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let array = [];
    for (let i = 2; i <= 20; i += 2){
        array.push(i);
    }
    return array;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let result = 0;
    for (let i = 1; i <= n; i ++){
        result += i;
    }
    return result;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 1) return 1;
    return (n + recSumTo(n-1));
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
   if (n === 1) return 1;
   return (n * factorial(n-1));
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let fib1 = 0;
    let fib2 = 1;
    for (let i = 0; i < n; i ++){
        let tmp = fib1;
        fib1 = fib2;
        fib2 += tmp;
    }
    return fib1;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
