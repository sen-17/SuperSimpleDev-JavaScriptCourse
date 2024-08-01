
/* 
function getLastValue (array){
  console.log(array[array.length-1])
}

getLastValue(['hello', 'hi', 'good','bye',]);

function arraySwap (array){
  const lastIndex = array.length - 1;
  const firstValue = array [0];
  const lastValue = array[lastIndex];

  array[0]=lastValue;
  array[lastIndex]=firstValue;

  return array;

}

console.log(arraySwap([1,20,22,24,5]));
console.log(arraySwap(['hi','hello','hey']))


const randomNumber = 0

for(let i = 5; i > randomNumber; i-= 1 ){
  console.log(i)
}
 

      const nums = [1,2,3];
      const result =[];

      for(let i = 0; i < nums.length; i++){
        result.push(nums[i] + 1)
      }

      console.log(result);
       
      const result = [];
      function addOne(array){
        
        for (let i = 0 ; i < array.length ; i++){
          result.push(array[i] + 1);
        }
        return result



      }

      console.log(addOne([1,2,3]));
     
      const result = [];
      
      function addNum(array,num){
        for(i = 0; i < array.length ; i++){
          result.push(array[i] + num)
        }
        return result;
      }
      

      console.log(addNum([1,2,3],3))
      
       const result =[];

      function addArray(array1,array2){
        for(i=0 ; i < array1.length && i < array2.length ; i++){
          result.push(array1[i] + array2[i]);
        }
        return result
      }

      console.log(addArray([1,1,2],[1,1,3]))

      function countPositive (nums){
        let result = 0;
        for(let i=0; i < nums.length ; i++){
          if(nums[i] > 0){
            result++;
          }
        
        }
       

        return result;
        
      }

     console.log(countPositive([1,-2,5])) 

     const variable2 = [];
     function minMax (nums){
      const x = nums[1];
      const y = nums[2];
      const z = nums[3];
      let result = '';
      for (let i = 0 ; i < nums.length; i++){
        if (x > y > z){
          result = `max ${x} , min ${z}`
        }else if (y >x > z){
          result = `max ${y} , min ${z}`
        } else if (x > z > y){
          result = `max ${x} , min ${y}`
        } else if (y > z > x){
          result = `max ${y} , min ${x}`
        } else if  (z > x > y){
          result = `max ${z} , min ${y}`
        }else if (z > y >x){
          result = `max ${z} , min ${x}`
        } else if (['']){
          result = `max ${null} , min ${null}`
        } else if (i = i){
          result = `max ${i} , min ${i}`
        }

        return result;
      }
     }

     console.log(minMax([1,-3,5]));
     console.log(minMax([-2,3,-5,7,10]))
     console.log(minMax([]))
      */

     let myArray = ['hello','world','Search','good'];
     let index = -1;

     for(let i = 0 ; i < myArray.length ; i++){
      if (myArray[i] === 'Search'){
        console.log([i] = 'Search');
      }else {
        console.log(-1);
      }
     }

    



