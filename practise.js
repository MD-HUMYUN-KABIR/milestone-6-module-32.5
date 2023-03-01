const arrow = arrow => arrow / 5;
console.log(arrow(5));
//
const arrowThree = (arrow1,arrow2) => (arrow1+2)*(arrow2+2);
console.log(arrowThree(2,2));
//
const arr3 = (num1,num2,num3) => num1*num2*num3;
console.log(arr3(2,2,2));
//
const arrowTh = (arrow1,arrow2) => {
    const arr1 = arrow1 + 2;
    const arr2 = arrow2 + 2;
    const arrm = arr1 * arr2;
    return arrm;
}
console.log(arrowTh(2,2));
//
const numbers = [1,2,3,4,5,6,7,8,9,10];
const output = numbers.map(number => number * 5);
console.log(output);
//
const odd = numbers.filter(number => number % 2 !== 0);
console.log(odd);
//
const arrOfObject = [
    {name:'samsung',price:500},
    {name:'samsung',price:400},
    {name:'samsung',price:4000},
    {name:'samsung',price:5000}
]
const prices = arrOfObject.find(arr => arr.price === 5000);
console.log(prices);
//
const {name} = {name:'samsung',price:500};
console.log(name);
//
const arrr = [12,45,78];
const [three] = [arrr[2]];
console.log(three);
//
const defaul = (a,b,c=7) => a+b+c;
console.log(defaul(2,2));
//
const obj = {
    name: {
        age:12,
        friends:{
            name:'rahim',
            name2:'karim',
            ageArr:[25,29],
            girl:{
                name:'ashka',
                name2:'bashkha'
            }
        }
    },
    age:15,
    hobby:{
        hobby1:'gardening',
        hobby2:'play'
    },
    occupation : 'student'
}
//
console.log(obj.name.friends.ageArr[1]);
console.log(obj.name.friend?.ageArr[1]);