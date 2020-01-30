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
    if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50){
        console.log('Все верно!');
        mainList.shopGoods[i] = a;
    }
}

alert(mainList.budget / 30);

console.log(mainList);