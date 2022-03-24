// Create an array of Objects instead of an array of strings. Contain tweet, username, created_at and age

//  Create a function that expects one argument, have the function return true if -->
//  The age key value pair of the object is >= 18 and false otherwise


let userTweets =  [
    {
    tweet: "Sick of having to go to 2 different huts to buy pizza & sunglasses.",
    username: "RandomPerson",
    createdAt: "01-16-2010",
    age: 54,
    },

    {
    tweet: "Waabalubbadubbdub",
    username: "RickSanchez",
    createdAt: "02-16-2014",
    age: 65,
    },

    {
    tweet: "This is the most annoying part of the assignment",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
    },

    {
    tweet: "I hate applying concepts from my English high school experiences",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
    },

    {
    tweet: "Meh, directing my dislike for creating content towards creating content seems to be working",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
    },

    {
    tweet: "I hope I am doing this first step correctly...",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 17
    },

    {
    tweet: "MMMMM pretty sure six isn't enough tweets yet, well here's seven then!",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
    },

    {
    tweet: "Thankful for machines and how I hopefully won't have to re-type this nonsense a million times!!!",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
    },

    {
    tweet: "You know, I'm sure I could have just done shorter quotes...",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 16
    },

    {
    tweet: "True!",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
    }
]
console.log(userTweets);

function isOldEnough(userTweets) {
    if (userTweets.age >= 18) {
       return true;
    }else if(userTweets.age < 18){
        return false;
    }else{
        console.log("Error");
    }
    
}

let filtered = userTweets.filter(isOldEnough);

console.log(filtered);



