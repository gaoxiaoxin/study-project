interface ButtonBaseStyle {
    color: string,
    background: string
}

interface BorderButtonStyle extends ButtonBaseStyle {
    border: string
}


// let borderButton: BorderButtonStyle = {

// }


interface ButtonTypes {

}

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let obj = {
    a: 1
}

let a = getValue(obj, 'a');

interface Goods {
    id: string
    name: string
    price: string
    image: string
}

const goodsMap: Record<string, Goods> = {}
const goodsList: Goods[] = [
    {
        id: '1',
        name: '桃子',
        price: '19',
        image: '11111'
    }
]

goodsList.forEach(goods => {
    goodsMap[goods.name] = goods
})


console.log(goodsMap);

interface Person {
    name: string,
    age: number,
    sayName: () => void
}

class Person implements Person {
    name: string;
    age: number;
    sayName: () => void;
}