console.log ("JavaScript is working!");
let colors = ["orange","blue","green","purple"]
let post = {
    title: "My Post",
    description: "My First post, awesome",
    likeCount: 12,
    comments: ["cool!","nice job!"]
};

console.log(colors);
console.log(post);

let age=33;

if (age>18) {
    console.log ("you are an adult!")
} else {
    console.log ("you are a kid!")
}

for (let i = 0; i < 10; i++) {
    console.log (i);  
}

console.log (colors);

colors.forEach (color => { 
    console.log (color);
});

console.log ("this is the end of code")
