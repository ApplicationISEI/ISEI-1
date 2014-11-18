// create a dictionary
var dictionary = { "key1" : "val2"};

// cast to string
var dictionaryString = JSON.stringify(dictionary);

//save in local storage
localStorage.setItem("my" , dictionaryString);

//read back from local storage
var myString = localStorage.getItem("my");

//cast back to js dictionary
var dictionary = JSON.parse(mySring);