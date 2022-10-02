let arr = {
    name: `Aminjon`,
    surname: `Xodjamov`,
    age: 15,
    isMarried: false,
}

let assign = {
    passport: {
        serries: `AC`,
        number: 65165736836712,
        date: 28,
        location: {
            country: `UZB`,
            city: `Samarkand`
        }
    }
}


let assignObj = { ...arr, ...assign }
console.log(assignObj);

let values = Object.values(assignObj)
let keys = Object.keys(assignObj)
let arr_2 = [...keys, ...values,]

let types = {
    number: [],
    str: [],
    boolean: [],
    obj: [],
}

arr_2.map(item => {
    if (typeof (item) === 'number') types.number.push(item)
    else if (typeof (item) === 'string') types.str.push(item)
    else if (typeof (item) === 'boolean') types.boolean.push(item)
    else if (typeof (item) === 'object') types.obj.push(item)
})


console.log(keys);
console.log(values);
console.log(arr_2);
console.log(types);