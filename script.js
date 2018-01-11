//Exercise One
total = 0
var input = "Enter number < 10"
var x = prompt(input)
for (var num = 0; num <= x; num++){
total += num
}

//Exercise Two
var game = "Do you want to play a game?";
var answer = "Enter a word";
var x = "";
var y = "";
do {var x = prompt(game);
  if (x == "No", x =="no") break;
	var y = prompt(answer);
	console.log(y);
} while (x == "Yes", x == "yes");

//Excercise 3
var question = "What is your name?"
var dress = prompt(question)
var name = "Would You Like to print your name?";
var x = "";
var y = "!"
count = 0
while (count < 1000000000){var x = prompt(name, "Yes or No"); if (x == "no", x == "No") break;
count++;
}console.log("Hello my name is "+dress +y.repeat(count));


//Excercise 4
var question = "What time of day is it?";
answer = ""
var answer = prompt(question, "Morning, Noon, Evening")
if (answer == "Morning"){console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.")
}
else if (answer == "Noon"){console.log("Since it is noon, you should be eating lunch. We suggest a salad.")
}
else if (answer == "Evening"){console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.")
}