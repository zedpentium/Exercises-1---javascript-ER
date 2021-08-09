/*!
  * Eric R javascrip looks
*/
var myContent = document.getElementById("wrapper");
myContent.style.backgroundColor = "darkgray";


/* update time every second */
setInterval(function (){ // Exercise 1
  var todayDate = new Date();
    /*var format = "YYYY-MMM-DD DDD";
    dateConvert(todayDate,format)*/
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  
  var dayNameResult = weekday[todayDate.getDay()];
  
  var fulldatetime = dayNameResult + ", " + todayDate.toLocaleString();
  document.getElementById('datetimeweek').innerHTML = fulldatetime;
  }, 1000);



function checkIfLeapYear() { // Exercise 2 & 3
  var yesNoAnswer;
  var isFirstJan;
  var userinputyear = document.getElementById("inputyear").value;
  var isItLeapYear = ((userinputyear % 4 == 0) && (userinputyear % 100 != 0)) || (userinputyear % 400 == 0);

  if (isItLeapYear == true) {
    yesNoAnswer = " IS a leapyear.";
  } else {
    yesNoAnswer = " is NOT leapyear.";
  } 

  var resultofyearcheck = "The year: " + userinputyear + yesNoAnswer;
  document.getElementById('resultofcheck').innerHTML = " " + resultofyearcheck;


  var firstJanYear = new Date(userinputyear, 0, 1);

  if ( firstJanYear.getDay() === 0 ) {
    isFirstJan = " IS a Sunday";
  } else {
    isFirstJan = " is NOT a Sunday";
  }

var isFirstjanOnSunday = "1st January of " + userinputyear + isFirstJan;
document.getElementById('resultOfFirstJanCheck').innerHTML = " " + isFirstjanOnSunday;
}


function checkGuessedNr() { // Exercise 4

  var theRndNr = Math.floor(Math.random() * 10) + 1;
  var isGuessCorrect;

  var userinputGuess = document.getElementById("inputNrGuess").value;

  if (userinputGuess == theRndNr) {
    isGuessCorrect = " is CORRECT, Good Job! ;)";
  } else {
    isGuessCorrect = " is wrong. The number " + theRndNr +  " did not match.";
  } 

  var resultofguesscheck = "Your guess: " + userinputGuess + isGuessCorrect;
  document.getElementById('resultofguess').innerHTML = " " + resultofguesscheck;
}


function daysTilXmasNow() { // Exercise 5

var dateNow = new Date();
var daysuntilXmas = new Date(dateNow.getFullYear(), 11, 24);

if (dateNow.getMonth()==11 && dateNow.getDate()>24) 
{
  daysuntilXmas.setFullYear(daysuntilXmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;

  daysleftxmas = (Math.ceil((daysuntilXmas.getTime()-dateNow.getTime())/(one_day))) + " days";
  document.getElementById('showdaystoxmas').innerHTML = daysleftxmas;
}



function reverseUserInput() { // Exercise 6
  var userinputStr = document.getElementById("inputNrAndLetters").value;

  var newReversedString = "";

    for (var ind = userinputStr.length - 1; ind >= 0; ind--) {
      newReversedString += userinputStr[ind];
    }

  document.getElementById('reversedResulOfInput').innerHTML = "Heres input in reverse order: " + newReversedString;
}



function textmanipulUserInput() { // Exercise 7
  var userinputStr = document.getElementById("inputUserText").value;
  var array1 = [];

    for (var x = 0, y=1; x < userinputStr.length; x++,y++) {
     array1[x]=userinputStr.substring(x, y);
      }

  var combi = [];
  var temp= "";
  var slent = Math.pow(2, array1.length);
  
  for (var i = 0; i < slent ; i++) {
      temp= "";
      for (var j=0;j<array1.length;j++) {
          if ((i & Math.pow(2,j))){ 
              temp += array1[j];
          }
      }
      if (temp !== "") {
          combi.push(temp);
      }
  }
    //console.log(combi.join("\n"));
    document.getElementById('textmanipulResult').textContent = "Heres all combinations of the text: " + combi.join(", ");
  }
  

/* function getArrayMutations(arr, perms = [], len = arr.length) { // all permutation of a array
  if (len === 1) perms.push(arr.slice(0))

  for (let i = 0; i < len; i++) {
    getArrayMutations(arr, perms, len - 1)

    len % 2 // parity dependent adjacent elements swap
      ? [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]]
      : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
  }

  return perms
}*/


function textmanipulUserInput2() { // Exercise 8
  var userinputStr = document.getElementById("inputUserText2").value.toLowerCase();
  var array1 = [];
  
    for (var x = 0, y=1; x < userinputStr.length; x++,y++) {
     array1[x]=userinputStr.substring(x, y);
      }

    document.getElementById('textmanipulResult2').textContent = "Input of letters/word, sorted letters alphabetically: " + array1.sort();
  }


  function textmanipulUserInput3() { // Exercise 9
    var userinputValue = document.getElementById("inputUserText3").value;
    var inputArray = [];
    
      for (var x = 0, y=1; x < userinputValue.length; x++,y++) {
        inputArray[x]=userinputValue.substring(x, y);
        }

        inputArray[0] = inputArray[0].toUpperCase()

      for (let index = 0; index < inputArray.length; index++) {
        const elementInArray = inputArray[index];

        if (elementInArray == " ") {
          inputArray[index + 1] = inputArray[index + 1].toUpperCase()
        }
        
      }

      document.getElementById('textmanipulResult3').textContent = "First letter uppercase in each word: " + inputArray.join("");
    }


    function primeNrUserInput() { // Exercise 10
      var userinputValue = document.getElementById("inputNumberToCheck").value;
      
  
        document.getElementById('primeNrResult3').textContent = "First letter uppercase in each word: " + inputArray.join("");
      }


