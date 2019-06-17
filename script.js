const sayHello = () => alert('Hello world!')
sayHello()

//Zadanie 1
const hello = 'Hello'
const world = 'World'

const hellorworld = `${hello}${world}`

// Zadanie 2
const multiply = (a, b = 1) => a * b
console.log(multiply(2, 5))
console.log(multiply(6, 6))
console.log(multiply(5))

// Zadanie 3
const avr = (...args) => {
    let sum = 0
    args.forEach(arg => {
        sum += arg
    })
    return (sum/args.length)
}

console.log(average(1))
console.log(average(1, 3))
console.log(average(1, 3, 6, 6))

// Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
console.log(average(...grades))

// Zadanie 5
const data = [1, 4, 'Iwona', false, 'Nowak']
const [, , firstname, , lastname] = data
console.log(firstname)
console.log(lastname)