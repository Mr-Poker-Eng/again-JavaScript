//practice task 1

// setTimeout(() => {
//     console.log("the message is......")
// }, 5000);

//practice task 2
// const delayedGreeting = ((name, delayTime) => {
//    setTimeout(() => {
//         console.log("hello,", name);
//     }, delayTime)
// })

// delayedGreeting("Munim", 5000)  


// practice task 3
// function tellJoke(){
//     console.log("Why don't scientists trust atoms? Because they make up everything!");
// }

//     const jokeInterval = setInterval(() => {
//         tellJoke();
//     }, 2000);

//     setTimeout(() => {
//         clearTimeout(jokeInterval);
//     }, 10000);


//practice task 4

// const datas = 
async function fetchData(){
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
        data = await response.json();
    console.log(data)

    // for(let data of datas){
    //     data = await response.json();
    // console.log(data)
    // }
}

fetchData()