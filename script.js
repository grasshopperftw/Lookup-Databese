// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
for (let i = 0; i < contacts.length; i++){
     if(undefined == contacts[i][prop] && contacts[i]["firstName"] == name){
        return "No such property";
    }
    else if (name == contacts[i]["firstName"]){
         return contacts[i][prop];
    }
}
return "No such contact";
}

const solution = lookUpProfile("Bob", "potato");
console.log(solution);
