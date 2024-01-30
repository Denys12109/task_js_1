const len = 7;

//quarter

for (let i = 0; i < len; i++) {
    let str = '';
    for (let j = 0; j < len; j++) {
    str += '*';
    }
    console.log(str);
}



//triangle up

////////////////
//    *        3
//   ***       2
//  *****      1
// *******     0


for (let i = 0; i < len; i++) {
    const stars = (2 * i) + 1;
    const spaces = (len - i) - 1;
    console.log(' '.repeat(spaces), '*'.repeat(stars));
}



//triangle down

////////////////
// *******    3
//  *****     2
//   ***      1
//    *       0

for (let i = len - 1 ; i >= 0; i--) {
    const stars = (2 * i) + 1;
    const spaces = (len - i) - 1;
    console.log(' '.repeat(spaces), '*'.repeat(stars));
}



//triangle right

////////////////
// *
// **
// ***
// ****
// ***
// **
// *


for(let i = 0; i < len; i++) {
    let str = '';
    for(let j = 0; j <= i; j++) {
        str += '*';
    }
    console.log(str);
}
  

for(let i = 6; i > 0; i--) {
    let str = '';
    for(let j = 0; j < i; j++) {
        str += '*';
    }
    console.log(str);
}



////////////////
//    *
//   **
//  ***
// ****
//  ***
//   **
//    *



for (let i = 0; i < len; i++) {
    let str = '';
    for (let j = 0; j < len; j++) {
      str += j >= len - i - 1 ? '*' : ' ';
    }
    console.log(str);
}
  

for (let i = len - 2; i >= 0; i--) {
    let str = '';
    for (let j = 0; j < len; j++) {
        str += j >= len - i - 1 ? '*' : ' ';
    }
    console.log(str);
}






