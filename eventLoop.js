function a(){
    b()
    console.log('a')
}

function b(){
    c()
    console.log('b')
}

function c(){
    d()
    console.log('c')
}

console.log("hello");

setTimeout(() => {
    console.log("setTimeout")
}, 3000)

setTimeout(() => {
    console.log("setTimeout2")
}, 3000)

function d(){
    e()
    console.log('d')
}

function e(){
    f()
    console.log('e')
}

function f(){
    console.log('f')
}

a()