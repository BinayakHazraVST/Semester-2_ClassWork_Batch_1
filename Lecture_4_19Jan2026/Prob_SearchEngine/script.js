let searchQuery = " Learn JavaScript Functions Arrow IIFE ";

searchQuery=searchQuery.trim();

console.log(searchQuery);
console.log(searchQuery.length);

let low=searchQuery.toLowerCase();
let up=searchQuery.toUpperCase();
console.log(low);
console.log(up);

let subEx=searchQuery.substring(6,16);
let slEx=searchQuery.slice(6,16);
console.log(subEx);
console.log(slEx);

let c1=low.includes("functions");
let c2=low.includes("arrow");
let c3=low.includes("iife");
console.log(c1);
console.log(c2);
console.log(c3);


console.log(searchQuery.charAt(6));
console.log(searchQuery.charCodeAt(6));


let word="javascript".toLowerCase();
let check=low.includes(word);
console.log(check);

/*
1. Trimming is necessary to remove the unnecessary spaces in the starting and the ending of the actual string to control 
its indices and perform operations with efficiency.
    Always spaces after and before the string

2. If case normalization is not done, the user experience is hamppered and the desired output is not achieved.

3. if string parsing(string converstion to other format) is not done, the wrong conversion and wrong task will be done which
would make the user experience bitter.
*/