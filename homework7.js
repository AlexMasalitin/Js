'use strict';

/*
 *
 * TASK 2
 *
 * Напишите функцию которая будет вызываться трижды и складывать все передаваемые ей числа
 *
 *
 * */

function add(a) {

	var sum = a;
	var inner = function(b) {

		sum += b;
		return inner;

	};
	inner.valueOf = function() {


		return sum;
	};
	return inner;
};
console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30











/*
 *
 * TASK 3
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * так же у функции должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объетке, нельзя
 *
 * */

function solution3() {

}

//let test = solution3(''); // 0
//test.method(); //1
//test.method(); //2
//test.method(); //3

// @SUPER

/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода( функция)
 *
 *  При вызове метода отобразите сумму передаваемых параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */



let jun = {};


function methodCounter(obj, name, num, fn) {

}

methodCounter(jun, 'logger', 2, function() {

});

jun.logger(1, 2, 3, 4); //2, 10
jun.logger(5, 5, 5, 5); //1, 20
jun.logger(5, 5); //ERROR ! add more methods


// @SUPER - PUPER,
/*
 * Добавьте функции methodCounter, возможность добавлять счетчик вызовов
 * */


/*
 *
 * TASK 1
 * Напишите функцию которая будет принимать 2 аргумента, массив и еще одну функцию,
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment', отобразилось в консоле последним
 *
 * */


//function makeCallback(fn) {
//  for (let i = 1; i <= 10; i++) {
//    setTimeout(function() {
//      console.log(i);
//    }, Math.round(Math.random() * 10))
//  }
//}
//
//makeCallback(function() {
//  console.log('THE LAST LAST comment')
//});