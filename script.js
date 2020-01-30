let money = prompt('Ваш бюджет?');
let name =prompt('Название Вашего магазина');

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false
}

for(let i = 0; i < 5; i++){
    let a = prompt('Какой тип товара будем продавать?');
    mainList.shopGoods[i];
}

mainList.shopGoods[0] = prompt('Какой тип товара будем продавать?');
mainList.shopGoods[1] = prompt('Какой тип товара будем продавать?');
mainList.shopGoods[2] = prompt('Какой тип товара будем продавать?');

alert(mainList.budget / 30);

console.log(mainList);