// 2-masala
// function test(arg, arg2) {
//     let res = arg - arg2;
//     return res
// }
// let res = test(12,5);
// console.log(res);

// 3-masala
// let a = prompt('soz yozing');
// let b = +prompt('son yozing');

// function test(arg, arg2) {
//     let res = '';
//     for(let i = 1; i<=arg2; i++){
//     res += arg;
//     }
//     return res;
// }
// let res = test(a,b);
// console.log(res);

// 4-masala
// let a = +prompt('son');
// function test(arg) {
//     let res = arg**3; 
// return res ;
// }
// let res = test(a);
// console.log(res);

// 5-masala
// let a = +prompt('son');
// let b = +prompt('son');
// function test(arg, arg2) {
//     let res = parseInt(arg / arg2);
//     return res;
// }
// let res = test(a,b) ;
// console.log(res);

// 6-masala
// let a = +prompt('son');
// function test(arg) {
//     let res = parseInt(arg / 100 + 1);
//     return res
// }
// let res = test(a);
// console.log(res);

// 7-masala
// let a = +prompt('son');
// function test(arg) {
//     let faktorial = 1;
//     for(let i = 1; i<=arg ; i++){
//     faktorial*=i
//     }
//     return faktorial
// }
// let res = test(a);
// console.log(res);

// 8-masala
// TUSHUNMADIMM

// 9-masala
// let a = prompt('soz');
// let b = +prompt('son');
// function test(arg,arg2) {
//     let res = arg.slice(1, arg2);
//     return res;
// }
// let res = test(a,b);
// console.log(res);

// 11masala
// let a = +prompt('son');
// let b = +prompt('son');
// function test(arg,arg2) {
//     let res = Math.pow(arg,arg2);
//     return res
// }
// let res = test(a,b);
// console.log(res);

// 13-masala
// let a = prompt('soz');
// let b = prompt('soz');
// function test(arg,arg2) {
//     let res = arg.concat(arg2);
//     return res
// }
// let res = test(a,b);
// console.log(res);

// 15-masala
// let a = prompt('soz');
// function test(arg) {
//     let res = '';
//     if (typeof arg =='string' ) {
//         res = arg.charAt(0).toUpperCase() + arg.slice(1);
//     }
//     return res
// }
// let res = test(a);
// console.log(res);

// MASSIVLAR
// let a = [1,2,3,4,5];
// function test(arg) {
//     let res = 0;
//     for (const iterator of arg) {
//        res += iterator 
//     }
//     return res
// }
// let res = test(a) ;
// console.log(res);

// 2-masala
// let a = [1,2,3,4,5];
// function test(arg) {
//     let res = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//        if (arg[i] > res) {
//         res = arg[i]
//        }
//     }
//     return res
// }
// let res = test(a) ;
// console.log(res);

// 3-masala
// let a = [1,2,3,4,5];
// function test(arg) {
//     let res = arg.reverse()
//     return res
// }
// let res = test(a);
// console.log(res);

// 4-masala
// let a = [1,2,3,4,-5];
// function test(arg) {
//     let res = [];
//     for+ (let i = 0; i < arg.length; i++) {
//        if (arg[i] > 0) {
//         res.push(arg[i])
//        }
//     }
//     return res
// }
// let res = test(a) ;
// console.log(res);

// 5-masala
// let a = [1,2,3,4,5];
// function test(arg) {
//     let res = 1;
//     for (let i = 0; i < arg.length; i++) {
//        res = res + arg[i]**2;
//     }
//     return res
// }
// let res = test(a);
// console.log(res);

// 7-masala
// let a = [1,2,3];
// let b = [1,2,3];
// function test(arg,arg2) {
//     let res = arg.concat(arg2);
//     return res
// }
// let res = test(a,b);
// console.log(res);

// 8-masala
// let a = [1,2,3]
// function test(arg) {
//     let res = 0;
//     for (const iterator of arg) {
//         if (iterator % 2 == 1) {
//             res++
//         }
//     }
//     return res
// }
// let res = test(a);
// console.log(res);

// 10-masala
// let a = [5,2,3]
// function test(arg) {
//     let min = arg[0];
//     for (const iterator of arg) {
//         if (iterator < min ) {
//             min = iterator
//         }
//     }
//     return min
// }
// let min = test(a);
// console.log(min);