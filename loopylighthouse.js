for (let i = 100; i <= 200; i++) {
  //check if we'll just be writing the number directly to console
  if (i % 3 !== 0 && i % 4 !== 0) {
    console.log(i);
  } else {
    //if not writing direct to console, check which bits of message need to be added, and print that message instead
    let message = "";
    if (i % 3 === 0) {
      message += "Loopy";
    } if (i % 4 === 0) {
      message += "Lighthouse";
    }
    console.log(message);
  }
}