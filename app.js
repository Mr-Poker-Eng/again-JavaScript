const a = 10;
const first = () => {
    second();
    console.log("hello i am from first")
}

const second = () => {
    third();
    console.log("i am from second")
} 

const third = () => {
    console.log("i am from third")
}

const b = 20;

first();

console.log("i am coming at last");