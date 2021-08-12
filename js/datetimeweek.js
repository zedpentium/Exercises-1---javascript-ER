/*!
 * Eric R javascrip looks
 */
var myContent = document.getElementById("wrapper");
myContent.style.backgroundColor = "darkgray";


/* update time every second */
setInterval(function () { // Exercise 1
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

  if (firstJanYear.getDay() === 0) {
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
    isGuessCorrect = " is wrong. The number " + theRndNr + " did not match.";
  }

  var resultofguesscheck = "Your guess: " + userinputGuess + isGuessCorrect;
  document.getElementById('resultofguess').innerHTML = " " + resultofguesscheck;
}


function daysTilXmasNow() { // Exercise 5

  var dateNow = new Date();
  var daysuntilXmas = new Date(dateNow.getFullYear(), 11, 24);

  if (dateNow.getMonth() == 11 && dateNow.getDate() > 24) {
    daysuntilXmas.setFullYear(daysuntilXmas.getFullYear() + 1);
  }
  var one_day = 1000 * 60 * 60 * 24;

  daysleftxmas = (Math.ceil((daysuntilXmas.getTime() - dateNow.getTime()) / (one_day))) + " days";
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

  for (var x = 0, y = 1; x < userinputStr.length; x++, y++) {
    array1[x] = userinputStr.substring(x, y);
  }

  var combi = [];
  var temp = "";
  var slent = Math.pow(2, array1.length);

  for (var i = 0; i < slent; i++) {
    temp = "";
    for (var j = 0; j < array1.length; j++) {
      if ((i & Math.pow(2, j))) {
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

  for (var x = 0, y = 1; x < userinputStr.length; x++, y++) {
    array1[x] = userinputStr.substring(x, y);
  }

  document.getElementById('textmanipulResult2').textContent = "Input of letters/word, sorted letters alphabetically: " + array1.sort();
}


function textmanipulUserInput3() { // Exercise 9
  var userinputValue = document.getElementById("inputUserText3").value;
  var inputArray = [];

  for (var x = 0, y = 1; x < userinputValue.length; x++, y++) {
    inputArray[x] = userinputValue.substring(x, y);
  }

  inputArray[0] = inputArray[0].toUpperCase()

  for (let index = 0; index < inputArray.length; index++) {
    const elementInArray = inputArray[index];

    if (elementInArray == " ") {
      inputArray[index + 1] = inputArray[index + 1].toUpperCase()
    }

  }

  document.getElementById('textmanipulResult3').textContent = "First letter is now Upperase in each word: " + inputArray.join("");
}


function primeNrUserInput() { // Exercise 10
  var userInput = document.getElementById("inputNumberToCheck").value;
  var isItaPrimeNrText;

  if (getTrueOrFalsePrime(userInput)) {
    isItaPrimeNrText = "Yes, " + userInput + " IS a Prime number.";
  } else {
    isItaPrimeNrText = "No, " + userInput + " is NOT a Prime number.";
  }
  document.getElementById('primeNrResult').textContent = isItaPrimeNrText;
} //function endtag

function getTrueOrFalsePrime(isItPrime) { // separate check if primeNumber function, then true or false)
  if (isItPrime == 1) {
    return false;
  } else if (isItPrime == 2) {
    return true;
  } else {
    for (var x = 2; x < isItPrime; x++) {
      if (isItPrime % x == 0) {
        return false;
      } else {
        return true;
      }
    } // for loop endtag
  } // else endtag
} // function endtag


function checkValueUserInput(userInputParam) { // Exercise 11

  var typeOfValue;

  if (userInputParam === "")
    typeOfValue = "";
  else if (userInputParam === "true" || userInputParam === "false")
    typeOfValue = "boolean";
  else if (!Number.isNaN(Number(userInputParam)))
    typeOfValue = "number";
  else
    typeOfValue = typeof userInputParam;

  console.log(typeOfValue);

  document.getElementById('valueTypeOF').textContent = "This is the input Type: " + typeOfValue;
}



function checkOddAndEvenUserInput() { // Exercise 12

  var fromNr = 0;
  var toNR = 15;
  var outputOddEven = "";
  var responseOut ="";

for (let index = fromNr; index < toNR; index++) {

  if (index % 2 == 0) {
    responseOut = `${index} is EVEN`;
  } else {
    responseOut = `${index} is ODD`;
  }

  outputOddEven += responseOut + " ,";
  
} // for loop endtag

  document.getElementById('oddAndEvenResult').textContent = outputOddEven;

} // function endtag



function tenHappyNumbers() { // Exercise 13

  var outputhappy = "";

  var cnt = 10;
  var num = 1;

  while(cnt-- > 0) 
  {
      while(!happy_number(num))
          num++ ;
          outputhappy += + num + ", ";
  
      num++ ;
  }
  document.getElementById('outputhappyResult').textContent = "10 first happy numbers: " + outputhappy;

} // function endtag
  
function happy_number(num) { // Exercise 13 - Happy number calc function 
  var m, n ;
    var c = [] ;
 
    while(num != 1 && c[num] !== true) 
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    return (num == 1) ;
}
 


function joinArrayToString() { // Exercise 14

var workDaysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var outputOddEven = "";

for (let index = 0; index < workDaysArray.length; index++) {
  outputOddEven += workDaysArray[index] + ", ";
 } // for loop endtag

  document.getElementById('joinArrayToStringResult').textContent = outputOddEven + " are workdays.";

} // function endtag



function sortNrArray() { // Exercise 15

  var nrArrayInput = document.getElementById("inputSortNrArray").value;
  const theNrArray = nrArrayInput.split(", ");
  const sortedNrArray = theNrArray.sort(function(a, b){return a - b});
  
  var outputNrArray = "";
  
  for (let index = 0; index < sortedNrArray.length; index++) {
    outputNrArray += sortedNrArray[index] + ", ";
   } // for loop endtag
  
    document.getElementById('sortNrArrayResult').textContent = outputNrArray;
  
  } // function endtag



  function RemoveDuplicates() { // Exercise 16

    var nrArrayInput = document.getElementById("inputarrayRemoveDuplicates").value;
    var theNrArray = nrArrayInput.split(", ");
    var theDuplicateIndex = [];
    var theFounddups = [];
    
    for (var index = 0; index < theNrArray.length; index++) { // 1st for-loop

      for (var indUp = index + 1; indUp < theNrArray.length; indUp++) { // 2nd for-loop
        if (theNrArray[index] === theNrArray[indUp]) {
          theDuplicateIndex.push(indUp);
          //console.log("Dups index: " + indUp + ", dups value: " + theNrArray[indUp]);
          theFounddups.push(theNrArray[indUp]);
        } 

        //console.log("Index: " + index + ", Index value: " + theNrArray[index]);
      } // 2nd for-loop endtag

     
      for (let dupind = 0; dupind < theDuplicateIndex.length; dupind++) { // 3rd for-loop
        theNrArray.splice(theDuplicateIndex[dupind],1) // removes duplicates found in 2nd for-loop
      } // 3rd for-loop endtag

      theDuplicateIndex.length = 0; // to empty array for next passes

     } // 1st for-loop endtag

     var outputNrArray = "Theese are duplicates " + theFounddups.join(", ") + ", and here is the array without any duplicates: "  + theNrArray.join(", ");

      document.getElementById('RemoveDuplicatesResult').textContent = outputNrArray;
    
    } // function endtag


    function arrayRemoveNullZero() { // Exercise 17

      var nrArrayInput = document.getElementById("inputarrayRemoveNullZero").value;
      var theNrArray = nrArrayInput.split(", ");
      var theNullZeros = [];
      var theFoundNullZeros = [];
      //var willBeUniqueNrArray = theNrArray; // Copies the first array fully, to later remove duplicates
      //const sortedNrArray = theNrArray.sort(function(a, b){return a - b});
      
      // var outputNrArray = "";
      
      for (let index = 0; index < theNrArray.length; index++) {

        if (theNrArray[index] === "null" || theNrArray[index] === "0") {
          theNullZeros.push(index);
          // console.log("Dups index: " + index + ", dups value: " + theNrArray[index]);
          theFoundNullZeros.push(theNrArray[index]);
          
        } 
        // console.log("Index: " + index + ", Index value: " + theNrArray[index]);
  
       } // for-loop endtag

       for (let dupind = theNullZeros.length - 1; dupind >= 0 ; dupind--) {
        theNrArray.splice(theNullZeros[dupind],1) // removes "null" and "0" found in 2nd for-loop
       } 
       
       // theNullZeros.length = 0;

       var outputNrArray = "Found : " + theFoundNullZeros.join(", ") + " ---- and here is the array without 'null' or '0' (because inputfield is set to text. IF set to number it can not accept null): "  + theNrArray.join(", ");
  
        document.getElementById('arrayRemoveNullZeroResult').innerHTML = outputNrArray + "<br>" + "Vad är fångat index för 'null' & '0': " + theNullZeros;
      
      } // function endtag
  

      function daysInMonth() { // Exercise 18
        var monthInput = document.getElementById("inputMonth").value;
        var yearInput = document.getElementById("inputYear").value;



        document.getElementById('daysInMonthResult').innerHTML = outputNrArray;
      }