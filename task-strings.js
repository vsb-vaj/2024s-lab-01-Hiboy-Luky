// Check functions which could help you solve these tasks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// 1 =================================
// Write function to parameterize a string.
// Example:
// console.log(parametrize("Javascript is the best"));
// "javascript-is-the-best"

// Your code:
const parametrize = (input) => {
    return input.toLowerCase().split(' ').join('-');
};

// 2 =================================
// Write function that takes object and return sentence
// Example:
// giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"})
// ➞ Hello Obi-wan from Starwars universe! It is nice to meet you! You look awesome for your 40, young Jedi!

// Your code:
const giveSentenceForPerson = (obj) => {
    return `Hello ${obj.name} from ${obj.location}! It is nice to meet you! You look awesome for your ${obj.age}, young ${obj.position}!`;
};

// 3 =================================
// Write function that takes string and replace all `a`, `e`, `i`, `o` with *
// Example:
// replace("Hello Javascript") ➞ "H*ll* J*v*scr*pt"

// Your code:
const replace = (input) => {
    const chars = ['a', 'e', 'i', 'o'];
    let result = []
    for (let i = 0; i < input.length; i++) {
        if (chars.includes(input[i])) {
            result.push('*');
        } else {
            result.push(input[i]);
        }
    }
    return result.join('');
};
