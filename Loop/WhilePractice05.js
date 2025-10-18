/***

Implement a countdown timer that counts down from 21 to 15.

 */
let count = 21;

let timer = setInterval(() => {
  console.log(count);
  count--;

  if (count < 15) {
    clearInterval(timer);
    console.log("Countdown finished!");
  }
}, 1000);
