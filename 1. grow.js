// coding challenge 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078

const grow = (x) => x.reduce((acc,curr) => acc * curr)
    

console.log(grow([1, 2, 3, 4]))