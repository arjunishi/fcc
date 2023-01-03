// // const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// // function golfScore(par, strokes) {
// //   // Only change code below this line
// //   if (strokes == 1) {
// //     return names[0];
// //   } else if (strokes <= par - 2) {
// //     return names[1];
// //   } else if (strokes === par - 1) {
// //     return names[2];
// //   } else if (strokes === par) {
// //     return names[3];
// //   } else if (strokes === par + 1) {
// //     return names[4];
// //   } else if (strokes === par + 2) {
// //     return names[5];
// //   } else {
// //     return names[6];
// //   }
// //   // Only change code above this line
// // }

// // // Change these values to test
// // console.log(golfScore(5, 4));
// // ------------------------------------------------
// // -----------return early pattern for function ----------

// // // Setup
// // function abTest(a, b) {
// //   // Only change code below this line
// //  if (a < 0 || b < 0){
// //    return undefined;;
// //  }
 

// //   // Only change code above this line

// //   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// // }

// // abTest(2,2);
// // console.log(abTest(2,2));


// ----------------counting card-------------
// let count = 0;

// function cc(card) {
//   // Only change code below this line
//  switch (card){
//    case 2:
//    case 3:
//    case 4:
//    case 5:
//    case 6:
//     count++;
//     break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//      count--;
//      break;
//  }
//   if (count > 0){
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }

  
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');
// console.log(cc(5));


// // phonetic lookup
// function phoneticLookup(val){
//     let result = "";
   
//     const lookup = {
//         firstname : "Arjun",
//         lastname : "Sharma"
//     }
//     result = lookup[val];
//     return result;
// }
// console.log(phoneticLookup('lastname'));