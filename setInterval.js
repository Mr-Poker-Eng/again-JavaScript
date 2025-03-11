// console.log(1)
// console.log(2)
// console.log(3)

// setTimeout(() => {
//     console.log("hello")
// }, 6000)

let count = 0;
const clockID = setInterval(() => {
    // console.log("munim")

    count++;
    console.log(count)
    if(count === 9){
        clearInterval(clockID);
    }
}, 3000)


// console.log(clockID)
// +