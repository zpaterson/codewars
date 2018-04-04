
//old code: only works for multiples of 5 ending in 5
  // function dontGiveMeFive(start, end)
  // {
  //   let regionArray = [];
  //   for(var i = start; i <= end; i++) {
  //     //let divisibleByFive = i / 5;
  //     if( i % (i / 5)  === 0 && (i / 5) % 2 != 0) {
  //        console.log('Has 5 in it');
  //      }
  //      else {
  //        regionArray.push(i);
  //      }
  //    }
  //    console.log(regionArray);
  //    return regionArray.length;
  // }
  //
  // console.log(dontGiveMeFive(5,25));

// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
// Examples:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!


//a function that loops through a given range and returns the count
//of all numbers that don't have 5 in them.
function dontGiveMeFive(start, end)
{
  //will store the count of numbers that have 5 in them
  let countNumOfFives = 0;
  //will store the count of numbers that don't have 5 in them
  let countNums = 0;

  //loops over the given range and tests to see if the number
  //has a 5 in it, if it does, it will increment countNumOfFives by 1
  //otherwise it will increment the countNums variable by 1.
  for(var i = start; i <= end; i++) {
     if(/5/.test(i) === true){
       countNumOfFives++;
     }
     else {
       countNums++;
     }
   }
   //returns the count of all numbers that don't have 5 in them
   return countNums;
 }

//calls the dontGiveMeFive function, passing in a range between 1 and 69
//the function will return the count of all the numbers in this range that don't
//have 5 in them, which will be logged to the console along with the message below.
console.log("You have numbers " + dontGiveMeFive(1,69) + " that don't have 5 in them.");
