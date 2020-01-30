let money = prompt('Ваш бюджет?');
let name =prompt('Название Вашего магазина');

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false
}

mainList.shopGoods[0] = promt('Какой тип товара будем продавать?');
mainList.shopGoods[1] = promt('Какой тип товара будем продавать?');
mainList.shopGoods[2] = promt('Какой тип товара будем продавать?');

alert(mainList.budget / 30);

console.log(mainList);