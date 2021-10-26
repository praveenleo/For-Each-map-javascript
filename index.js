// function bubblesort(array){
// for(i=0;i<array.length-1;i++){
//   for(j=0;j<array.length-1-i;j++){
//      if(array[j]>array[j+1]){
//        const temp=array[j];
//        array[j]=array[j+1];
//        array[j+1]=temp;
//      }
//   }
// }
// return array;
// }
// console.log(bubblesort([1,8,7,5,22,17,23,52,47,35,95,121,76,20]));  


// const newArr = employees.map((e :any) => {
//   let skills :any = [];
//   e.skills.forEach((s:any) => {
//       // console.log(s)
//       Skills.forEach(skill => {
//           // console.log(skill)
//           if (s === skill.id) {
//               skills.push(skill.skillName);
//           }
//       })
//   });
//   e.skills = skills;
//   return e
// })

// console.log(newArr)


// function leo(){

// let arr = [3, 5, 7, 9, 11, 2];
// // arr=bubbleSort(arr);
// console.log("sorted array", arr);
// arr.forEach((item, index) => {
//         if (item > arr[index + 1]) {
//             arr[index] = arr[index + 1];
//             arr[index + 1] = item;
//             console.log("arrayIndex", arr[index + 1]);
//             console.log("Array", arr);
//         }
// })

// }


// let bubbleSort = (inputArr) => {
//   let len = inputArr.length;
//   for (let i = 0; i < len; i++) {
//       for (let j = 0; j < len; j++) {
//           if (inputArr[j] > inputArr[j + 1]) {
//               let tmp = inputArr[j];
//               inputArr[j] = inputArr[j + 1];
//               inputArr[j + 1] = tmp;
//           }
//       }
//   }
//   return inputArr;
// };






// function blSort(arr) {
//   arr.forEach((i, j) => {
//      arr.forEach((k, l) => {
//         if (l < arr.length - j - 1 && arr[l] > arr[l + 1]) {
//            var temp = arr[l]
//            arr[l] = arr[l + 1]
//            arr[l + 1] = temp
//            l++
//         }
//      });
//   });
//   console.log(arr)
// }
// var arr = [234, 43, 55, 63, 5, 6, 235, 547];
// blSort(arr)


// function bubblesort(array){
// for(i=0;i<array.length-1;i++){
//   for(j=0;j<array.length-1-i;j++){
//      if(array[j]>array[j+1]){
//        const temp=array[j];
//        array[j]=array[j+1];
//        array[j+1]=temp;
//      }
//   }
// }
// return array;
// }
// console.log(bubblesort([1,8,7,5,22,17,23,52,47,35,95,121,76,20]));  


// function leo() {
//   const number = [10, 20, 15, 17, 35, 38, 33, 32];
//   console.log(number);
//   number.forEach((one, two) => {
//     console.log("item", one);
//     console.log("index", two);
//     number.forEach((three, four) => {
//       if (four < number.length - two - 1 && number[four] > number[four + 1]) {
//         var temp = number[four]
//         number[four] = number[four + 1]
//         number[four + 1] = temp
//         four++
//       }
//     });

//   });
//   console.log(number)
// }



// function bubbleSort(arr, n)
//     {
//         var i, j, temp;
//         var swapped;
//         for (i = 0; i < n - 1; i++)
//         {
//             swapped = false;
//             for (j = 0; j < n - i - 1; j++)
//             {
//                 if (arr[j] > arr[j + 1])
//                 {
//                     // swap arr[j] and arr[j+1]
//                     temp = arr[j];
//                     arr[j] = arr[j + 1];
//                     arr[j + 1] = temp;
//                     swapped = true;
//                 }
//             }

//             // IF no two elements were
//             // swapped by inner loop, then break
//             if (swapped == false)
//                 break;
//         }
//     }




function leo() {
  const number = [10, 20, 15, 17, 35, 38, 33, 32];
  const numbers=number.map((a,b,c)=>{

  })
  console.log(number);
  number.forEach((one, two) => {
    
    // console.log("item", one);
    // console.log("index", two);
    number.forEach((three, four) => {
      if (four < number.length - two - 1 && number[four] > number[four + 1]) {
        var temp = number[four]
        number[four] = number[four + 1]
        number[four + 1] = temp
        four++
      }
    });

  });
  console.log(number)

}

//   const numbers=number.map(function(){
//     let result=number.forEach((one, two) => {
//       // console.log("item", one);
//       // console.log("index", two);
//       number.forEach((three, four) => {
//         if (four < number.length - two - 1 && number[four] > number[four + 1]) {
//           var temp = number[four]
//           number[four] = number[four + 1]
//           number[four + 1] = temp
//           four++
//         }
//       });
//   return result;
//     });
//   })
//   console.log(number);
//   console.log("map",numbers);
// }



// function leo(){
// const employees = [
//   {
//       id: 1,
//       name: 'Hema',
//       skills: [2, 4]
//   },
//   {
//       id: 2,
//       name: 'Ravi',
//       skills: [1, 4]
//   },
//   {
//       id: 3,
//       name: 'Raja',
//       skills: [1, 3]
//   },
//   {
//       id: 4,
//       name: 'Priya',
//       skills: [3]
//   },
// ]

// const Skills = [
//   {
//       id: 1,
//       skillName: 'Angular',

//   },
//   {
//       id: 2,
//       skillName: 'Node'
//   },
//   {
//       id: 3,
//       skillName: 'React',

//   },
//   {
//       id: 4,
//       skillName: 'Python'
//   },
// ]


// // const nestedArra = Skills.map((id, skillName) => [id, skillName]);

// const newArr = employees.map((e) => {
//   let skills = [];
//   e.skills.forEach((s) => {
//       // console.log(s)
//       Skills.forEach(skill => {
//           // console.log(skill)

//           if (s === skill.id) {
//               skills.push(skill.skillName);
//           }
//       })
//   });
//   e.skills = skills;
//   return e
// })

// console.log(newArr)

// }