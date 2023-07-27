console.log('Hello')

for (let i = 1; i < 20; i++)
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " -- Divi 3&5");
    }
    else if (i % 5 == 0) {
        console.log(i + " -- Divi 5");
    }
    else if (i % 3 == 0) {
        console.log(i + " -- Divi 3");
    }
    else {
        console.log(i)
    }



