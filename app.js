//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords()
function findWords(string, names) {
   
    for (let i = 0; i &lt; names.length; i++) {
       
        if (string.toLowerCase().includes(names[i].toLowerCase())) {
           
            console.log(`Matched ${names[i]}`);
        } else {
           
            console.log(&quot;No Match&quot;);
        }
    }
}

let dog_string = &quot;Hello Max, my name is Dog, and I have purple eyes!&quot;;
let dog_names = [&quot;Max&quot;, &quot;HAS&quot;, &quot;PuRple&quot;, &quot;dog&quot;];

findWords(dog_string, dog_names);



2....
--Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr)


answer2

function replaceEvens(arr) {
   
    for (let i = 0; i &lt; arr.length; i += 2) {
       
        arr.splice(i, 1, &quot;even index&quot;);
    }
}
let arr = [&quot;Max&quot;, &quot;Baseball&quot;, &quot;Reboot&quot;, &quot;Goku&quot;, &quot;Trucks&quot;, &quot;Rodger&quot;];

replaceEvens(arr);

console.log(arr);
