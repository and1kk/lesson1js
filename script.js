// //Запитати у користувача тризначне число та перевірити, чи є в ньому однакові цифри
// let number = prompt("Ввдіть трьох значне число");
// let digits = number.split("");
// if (digits[0] === digits[1] || digits[0] === digits[2] || digits[1] === digits[2]) {
//     alert("Тут є однакові цифри");
// }else{
//     alert("Тут немає однакових цифр");
// }


//Запитати у користувача рік та перевірити, чи є він високосним. Високосний рік або кратний 400, або кратний 4 і при цьому не кратний 100.
// let year = prompt("Напишіть якийсь рік");
// if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
//     alert("Рік високосний");
// } else {
//     alert("Рік не високосний");
// }

//Написати конвертор валют. Користувач вводить кількість USD, вибирає, у яку валюту хоче перевести: EUR, UAN або AZN, та отримує відповідну суму.
// let value = prompt("Введіть суму в USD");
// let currency = prompt("Введіть EUR, UAN або AZN");
// let res = 0.0;

// if(currency == "EUR"){
//     res = value * 0.958;
// }else if(currency == "UAN"){
//     res = value * 0.0325;
// }else if(currency == "AZN"){
//     res = value * 1.7;
// }else{
//     alert("Enter EUR, UAN або AZN");
// }

// alert(value + " USD into " + currency + " will be " + res);


//Задати користувачу 3 питання, на кожне з яких є 3 варіанти відповіді. За кожну правильну відповідь нараховується 2 бали. Після питань вивести користувачу кількість набраних балів.


// let score = 0;


// let answer1 = prompt("1. Яка столиця України?\n1) Київ\n2) Львів\n3) Одеса");
// if (answer1 == "1") {
//   score += 2;
// }


// let answer2 = prompt("2. Яка річка найбільша в Україні?\n1) Дніпро\n2) Дністер\n3) Південний Буг");
// if (answer2 == "1") {
//   score += 2;
// }


// let answer3 = prompt("3. Яка з цих країн не є сусідом України?\n1) Польща\n2) Словаччина\n3) Франція");
// if (answer3 == "3") {
//   score += 2;
// }

// alert("Ви набрали " + score + " балів.");



// function isLeapYear(year) {
  
//     return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
// }

// function getNextDate() {
//     const inputDate = prompt("Введіть дату у форматі (день, місяць, рік): ");
//     const [day, month, year] = inputDate.split(',').map(Number);
    
//     const date = new Date(year, month - 1, day); 
    

//     if (month === 2 && day === 29 && !isLeapYear(year)) {
//         alert("Цей рік не високосний, тому такого дня не існує.");
//         return;
//     }

  
//     date.setDate(date.getDate() + 1);
    
//     const nextDay = date.getDate();
//     const nextMonth = date.getMonth() + 1;
//     const nextYear = date.getFullYear();

//     alert(`Наступна дата: ${nextDay} ${nextMonth} ${nextYear}`);
// }

// getNextDate();

// Запитати у користувача число та на скільки цифр його зсунути. Зсунути цифри числа та
// вивести результат (якщо число 123456 зсунути на 2 цифри, вийде 345612).
// let number = prompt("Введіть число"); // Наприклад, "123"
// let number2 = Number(prompt("Введіть число, на яке хочете все помножити")); // Наприклад, 2
// let numbersArray = number.split("").map(Number);
// let doubled = numbersArray.map(num => num + number2);
// let result = doubled.join("");
// alert(`Якщо зсунити ${number} на ${number2}, то вийде ${result}`);

// FizzBuzz. Напишіть програму, яка виводить усі числа від 1 до 100, з двома виключеннями.
// Для чисел, що діляться на 3, вона повинна вивести «Fizz», а для чисел, що діляться на 5
// (але не на 3) – «Buzz». Коли ви впораєтесь, виправте її так, щоб вона виводила «FizzBuzz»
// для всіх чисел, які діляться і на 3, і на 5.
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


let num = Math.floor(Math.random() * 100) + 1; // Загадываем число

function getUserGuess() {
    return Number(prompt("Guess the number from 1 to 100")); // Преобразуем ввод в число
}

function checkGuess() {
    let userGuess = getUserGuess(); // Получаем ввод пользователя

    if (userGuess === num) {
        alert("You guessed it right!");
    } else if (userGuess > num) {
        alert("The number is less");
        setTimeout(checkGuess, 200); // Ждём 2 сек и снова вызываем checkGuess()
    } else {
        alert("The number is greater");
        setTimeout(checkGuess, 200);
    }
}

checkGuess(); // Запускаем игру



