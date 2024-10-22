const username = Symbol("username");
const password = Symbol("password");

const user = {
    // Private
    [username]: "antonblaise",
    [password]: "123456",
    // Public
    age: 26
};

// These will be shown as "undefined"
console.log(user.username)
console.log(user.password)

// This will be shown normally
console.log(user.age)