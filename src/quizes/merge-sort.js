//merge sort

//it is a sorting algorithm where by we split the array/list/items into two halves
//we sort the left half
//we sort the right half
//we merge the two halves


//ASSIGNMENT 2
// Build a function mergeSort that takes in an array and returns a sorted array,
// using a recursive merge sort methodology.
// An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], 
// and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

// Tips:

// Think about what the base case is and what behavior is happening again and again
// and can actually be delegated to someone else (e.g. that same function!).
// It may be helpful to check out the background videos again 
// if you don’t quite understand what should be going on.


//function merge, which combines both the left and right items together
const merge =(left, right)=>{
    const finalArray =[];
    const leftIndex =0;
    const rightIndex =0;


    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            finalArray.push(left[leftIndex]);
            leftIndex++;
        }else{
            finalArray.push(right[rightIndex]);
            rightIndex++;
        }


    }

    //if there are any elements remaining in left or right, push them to the array
    return finalArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}



const mergeSort=(myArray)=>{

    //case 1 (base case)
    if(myArray.length <= 1){
        return myArray;

    }else //case 2 (recursive case)
    {
        //divide the array into equal halves
        const middle = Math.floor(myArray/2);
        //from zero to the middle is left
        const leftHalf = myArray.slice(0, middle);
        //from middle to end is right
        const rightHalf =myArray.slice(middle);

        //Recursively sort the left and right halves
        const sortedLeft = mergeSort(leftHalf);
        const sortedRight = mergeSort(rightHalf);
        
        
        //merge the sorted halves
        return merge(sortedLeft, sortedRight);
    }
}

export{mergeSort};