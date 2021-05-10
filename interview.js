// function convert(nameA, nameB) {
// 	var dif = 0
//     var lenA = nameA.length, lenB = nameB.length
//     if(lenA > lenB) {
//         nameB.concat()
//     }

// }

// let str = "123"
// let a = Symbol(0)
// let arr = new Array(3).fill(a)
// arr.concat(['a', 'b'])
// console.log(arr);
// let arr = [1, 2, 3]
// console.log(arr.slice(0, 2));

// function walk(son, n) {
//     console.log(son, n)
//     let pb = 0
//     if(n == 0) {
//         pb = 1
//         for(let p of son) {
//             pb = pb * (1-p)
//             console.log(pb)
//         }
//         return pb
//     }
//     for(let i = 0; i < son.length; i++) {
//         if(i = son.length - 1) {
//             pb += son[i] * walk(son.slice(0,i), --n)
//         } else {
//             pb += son[i] * walk(son.slice(0,i).concat(son.slice(i+1, son.length)), --n)
//         }
//     }
//     return pb
// }
// return walk(box, num) * 10000

// console.log('1234' == '1234')

function convert(nameA, nameB) {
    if(!nameA.length || !nameB.length) return 0
	var dif = 0, plus = 0
    var arrA = nameA.split(""), arrB = nameB.split("")
    var lenA = arrA.length, lenB = arrB.length
    if(lenA - lenB > 1 || lenB - lenA > 1) return 0
    var sym = Symbol(0)
    if(lenA > lenB) {
        arrB = arrB.concat(new Array(lenA - lenB).fill(sym))
        for(let i = 0;i < lenA; i++) {
            if(arrB[i] != arrA[i]) {
                if(arrB[i] == sym) {
                    plus++
                }
                else dif++
            }
        }
    } else if(lenA == lenB) {
        for(let i = 0;i < lenA; i++) {
            if(nameA[i] != nameB[i]) dif++
        }
    } else {
        arrA = arrA.concat(new Array(lenB - lenA).fill(sym))
        for(let i = 0;i < lenB; i++) {
            if(arrA[i] != arrB[i]) {
                if(arrA[i] == sym) {
                    plus++
                }
                else dif++
            }
        }
    }
	return (dif + plus) > 1 ? 0 : 1
}