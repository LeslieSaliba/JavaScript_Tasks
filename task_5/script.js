console.log('Hello')

let myArray = [1, 2, 3, 8, 45, 98, 102, 66, 73]
console.log(myArray.length)


for (let i = 0; i < myArray.length; i++) {
    console.log(myArray);

    let x = myArray[i];

    if (x % 2 == 0) {
        console.log(x + " is even");
    }
    else {
        console.log(x + " is odd");
    }
}
