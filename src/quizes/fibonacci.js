
//ASSIGNMENT ONE


//QUESTION 1

//Using iteration, write a function fibs which 
//takes a number and returns an array containing
// that many numbers from the Fibonacci sequence.
// Using an example input of 8, this function 
//should return the array [0, 1, 1, 2, 3, 5, 8, 13].

//Fibonacci sequence is a sequence in which each number is the sum of two preceding ones


const fibs=(num)=>{

    let firstAndSecond = [0,1];

    for(let i=2; i <= num; i++){
        firstAndSecond.push(firstAndSecond[i-2] + firstAndSecond[i-1]);
    }
    return firstAndSecond;

}


//QUESTION 2
//write another function fibsRec which solves the same problem recursively.



const fibsRec=(n)=>{
    if (n < 2) {
        return [1];   
    }
    if (n < 3) {
        return [1, 1];
    }

    var a = fibsRec(n - 1);
    a.push(a[n - 2] + a[n - 3]);
    return a;
    


}

export{fibs, fibsRec}




