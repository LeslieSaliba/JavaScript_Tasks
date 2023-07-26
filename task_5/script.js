console.log('Hello')

let numbers = [1, 2, 3, 8, 45, 98, 102, 66, 73]
console.log(numbers.length)


for (let i = 0; i < numbers.length; i++) {

    let x = numbers[i];

    if (x % 2 == 0) {
        console.log(x + " is even");
    }
    else {
        console.log(x + " is odd");
    }
}

// même chose, correction de Omar 
for (let i = 0; i < numbers.length; i++)
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i] + " is even"); 
    else {

        } console.log(numbers[i] + " is odd");
    }