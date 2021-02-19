// Since you all have been reading about functional programming,
// let's create some useful functional-style JS.
//
// You have an array and you want to group it by some logic.
// In the \_functional\_ style you define that logic using a function
// and use it as an argument.
//
//
//
// ```
//
// // Let's say you want to group your pomeranians by weight class.
// pomeranians = [
//   { name: 'Osito', weight_kg: 3.5 },
//   { name: 'Maní', weight_kg: 3.9 },
//   { name: 'Bella', weight_kg: 7.2 }
// ]
// groupBy(pomeranians, (p) => Math.floor(p.weight_kg))\
// /*
//  {
//   '3': [
//         { name: 'Osito', weight_kg: 3.5 },
//         { name: 'Maní', weight_kg: 3.9 }
//       ],
//   '7': [{ name: 'Bella', weight_kg: 7.2 }]
//  }
// */
//
//  // or string by their length
// groupBy(['one', 'two', 'three'], (s) => s.length);
// // => { '3': ['one', 'two'], '5': ['three'] }
//
// ```
//
//
//
// Implement groupBy. Use other existing functions on Array if you want.
//

function groupBy(arr, logic){
  let labels= arr.map(logic);
  let returnObj = {};

    for(let x=0;x<arr.length;x++){
       if(returnObj.hasOwnProperty(labels[x])) {
          returnObj[labels[x]].push(arr[x])
       } else {
         returnObj[labels[x]]=[arr[x]]
       }

    }
      return returnObj;
}


       // if(i===labels.length-1){
      //   returnArry.push(arr[x])
      //   returnOb[labels[i].toString()] = returnArry;
        
      // }
       

      // if (logic(arr[x])==labels[i]){
      //   //console.log('x',x)
      //   //console.log('i',i)
      //   returnArry.push(arr[x])
      //   console.log('if',returnArry)
      //   // if (x == arr.length-1){
      //   //   returnOb[labels[i].toString()] = returnArry;
      //   // }
      // }
      //else {
        // push arry into object before setting to empty
        // console.log('x',x)
        // console.log('i',i)
        // console.log('else',returnArry)
        
        // if(returnArry.length > 0){
        //     console.log('hi')
        //     console.log('i',i)
        //     returnOb[labels[i].toString()] = returnArry;
        //     //console.log(returnOb)
        // }
        // returnArry = [];
        // i++
        // console.log('i',i)

        // // SOMETHING WRONG WITH THIS IF STATEMENT LOOP
        // if (i == labels.length-1){
        //   returnArry.push(arr[x])
        //   console.log('i',i)
        //   console.log(returnOb)
        //   returnOb[labels[i].toString()] = returnArry;
        //   console.log(returnOb)

      
  
 



pomeranians = [
     { name: 'Osito', weight_kg: 3.5 },
     { name: 'Maní', weight_kg: 3.9 },
     { name: 'Bella', weight_kg: 7.2 }
   ]

console.log(groupBy(pomeranians, (p) => Math.floor(p.weight_kg)));

module.exports = groupBy;
