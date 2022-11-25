// DAY 3 TASK
// 1st - For the given JSON iterate over all loops(for, for in, for of, forEach)
// 2nd - Create your own resume data in JSON format

// Solutions
// 1st - For the given JSON iterate over all loops(for, for in, for of, forEach)
var arr = [{
    "name" : "Goku",
    "age" : "45"
},
{
    "name" : "Naruto",
    "age" : "30"
},
{
    "name" : "Luffy",
    "age" : "17"
},
{
    "name" : "Eren",
    "age" : "25"
}
];

//for loop---------------------------------------------------------
for(var i = 0; i < arr.length; i++){
    console.log(arr[i].name, arr[i].age);
}
// OUTPUT:-
// Goku 45
// Naruto 30
// Luffy 17
// Eren 25

//for in loop--------------------------------------------------------
for(var i in arr){
    console.log(arr[i].name, arr[i].age);
}
// OUTPUT:-
// Goku 45
// Naruto 30
// Luffy 17
// Eren 25

//for of loop---------------------------------------------------------
for(var i of arr){
    console.log(i.name, i.age);
}
// OUTPUT:-
// Goku 45
// Naruto 30
// Luffy 17
// Eren 25

//forEach loop-------------------------------------------------------
arr.forEach(function(person)
{
    console.log(person.name, person.age);
});
// OUTPUT:-
// Goku 45
// Naruto 30
// Luffy 17
// Eren 25


// 2nd - Create your own resume data in JSON format-------------------------------------------------------------------------------------------
// Ans
var resume = [{

    "Name" : "Seetharaman_A",

    "Gmail" : "seetharam.ad96@gmail.com",

    "Mobile_number" : "8807305089",

    "Age" : "25",

    "Gender" : "Male",

    "Location" : "Tamilnadu",

},
{

    "Educational_qualification" : ["10th", "12th", "B.E_CIVIL"],

    "Experience" : "3 years"

},
{
    
    "Languages_known" : ["Tamil", "English"],

    "Hobbies" : ["Reading_books", "Watching_anime", "Playing_football"],

},
{

    "Area_of_interest" : "MERN_stack",

    "Skills_set" : ["Problem_solving_skills", "Time_management"],

}];

resume.forEach(function(result){
    console.log(result);
});
// OUTPUT:-
// {Name: 'Seetharaman_A', Gmail: 'seetharam.ad96@gmail.com', Mobile_number: '8807305089', Age: '25', Gender: 'Male', …}
// {Educational_qualification: Array(3), Experience: '3 years'}
// {Languages_known: Array(2), Hobbies: Array(3)}
// {Area_of_interest: 'MERN_stack', Skills_set: Array(2)}
