const number = prompt("Enter a valid number:");
if ( number <= 0) {
    console.log("Error: Please enter a positive number.");
  } else {
    console.log(`The first 10 multiples of  are:`);
    for (let i = 1; i <= 10; i++) {
      const multiple = number * i;
      console.log(multiple);
    }
  }

  
  