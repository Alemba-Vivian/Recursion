import './Styles/style.css';

import {fibs} from './quizes/fibonacci';
import { fibsRec } from './quizes/fibonacci';
import { mergeSort } from './quizes/merge-sort';



console.log(fibs(8));  //return    [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8));  //return  [0, 1, 1, 2, 3, 5, 8, 13]

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));  // return [0, 1, 1, 2, 3, 5, 8, 13];
console.log(mergeSort([105, 79, 100, 110]));   //return  [79, 100, 105, 110]



