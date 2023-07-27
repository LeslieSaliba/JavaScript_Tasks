
// Returns a random integer from 0 to 10
//(Math.random()*10+1) OU (Math.random()*11)

let random = 0;

while (random < 8) {
    random = Math.floor(Math.random() * 11);
    console.log(random);
}

