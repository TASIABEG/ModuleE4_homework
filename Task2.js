/* Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у
переданного объекта свойство с данным именем. Функция должна возвращать true или false. */

const obj = {b: 1, apple: 2, '': 3, fff: 4, var: 5,};
let str = "apple";

const str_in_obj = (a, b) => {
    for (let key in a) {
        if (key == b) {
            return true;
        }
    }
    return false;
}

let result = str_in_obj(obj, str);
console.log(result);