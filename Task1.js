/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи
и значения только собственных свойств. Данная функция не должна возвращать значение. */

const obj = {b: 1, apple: 2, '': 3, fff: 4, var: 5,};

const printLogHasOwnObject = (a) => {
    for (let key in a) {
        if (a.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

printLogHasOwnObject(obj);