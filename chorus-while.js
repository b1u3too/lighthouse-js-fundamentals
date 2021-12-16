//PRACTICE FROM COMPASS LOOPING EXAMPLES
const chorus = "Let's dance!";

let repeat = -15;

while (repeat < 10) {
  console.log(chorus + repeat + " times!");
  repeat === 5 ? console.log("*change key*"): repeat--;
  repeat+=2;
}

console.log("Until the sun comes up!");