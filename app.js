console.log("Hello World!\n==========\n");

// Exercise 1 Section
// for(let i = 1; i < 100; i++)
//     if(i % 2 == 0){
//         continue;
//     }else{
//         console.log(i);
//     }



// // Exercise 2 Section
// for(let i = 1; i < 100; i++) {
//     console.log(i);
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FIZZBUZZ");
//        }else{
//         if(i % 3 == 0){
//             console.log("FIZZ");
//         }
//         if(i % 5 == 0){
//             console.log("BUZZ");
//         }
//    }
// }

// // Exercise 1 with While
// let i = 1;
// while(i < 100){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
//     i++;
// }

// //Exercise 2 using a do/while
// let x = 1;
// do{ 
//     console.log(x);
//     if(x % 3 == 0 && x % 5 == 0){
//         console.log("FIZZBUZZ");
//     }else{
//         if(x % 3 == 0){
//             console.log("FIZZ");
//         }
//         if(x % 5 == 0){
//             console.log("BUZZ");
//         }
//     }
//     x++
// }while(x < 100);


//Exercise 4 section
let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for(let i = 1; i <= n; i++){

    if(i == value){
        console.log(`found ${value}`);
        break;
    }
    if(i == n){
        console.log(`Did not find ${value}`);
    }
    
}