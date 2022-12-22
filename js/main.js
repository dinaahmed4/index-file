
// start counter section

var counter = 1;


function increment() {
    document.getElementById("demo").innerHTML = counter;
    counter++;
}


function decrement() {
    document.getElementById("demo").innerHTML = counter;
    counter--;
}

//End counter section


//Start if section

var price = prompt("What is the price ?");

if (price < 20) {
    alert("The Price Is cheap");
} else if (price == 20) {
    alert("The Same Of Money ");
} else if (price > 20) {
    alert("The price Is Very Expensive");
} else {
    alert("Please Enter Number Not Text !");
}

//End if section

// Start $ section

function validate() {
    var ali = document.getElementById("dina").value;
    var result = document.getElementById("ahmed");
    if (ali == "") {
        result.innerHTML = "Please Enter Data";
        return false;
    } else if (isNaN(ali)) {
        result.innerHTML = "Please Enter Number Not Text ";
        return false;
    } else {
        result.innerHTML = ali * 24.6 + " Eygtian Pound";
        return false;
    }

}

//End $ section

// Start club section 

var club = prompt("what is the winner of fifa world cup 2022 ?");

switch (club) {
    case "France":
        alert("Loser in final Match and got the secound place in the world fifa cub 2022");
        break;
    case "England":
        alert("that country was eliminated in the round of 8");
        break;
    case "Maracoo":
        alert("This country got the fourth place in the world cup 2022");
        break;
    case "Dimateter":
        alert("That country was eliminated in the group stage");
        break;
    case "Ecuador":
        alert("That country was eliminated in the group stage");
        break;
    case "senegal":
        alert("This country was eliminated in the round of 16");
        break;
    case "Holland":
        alert("that country was eliminated in the round of 8");
        break;
    case "Iran":
        alert("That country was eliminated in the group stage");
        break;
    case "united state":
        alert("This country was eliminated in the round of 16");
        break;
    case "European supplement":
        alert("That country was eliminated in the group stage");
        break;
    case "Argentina":
        alert("Argentina is the winner of fifa world cup 2022");
        break;
    case "Saudia arabia":
        alert("That country was eliminated in the group stage but (they win Argentina)");
        break;
    case "Mexico":
        alert("That country was eliminated in the group stage");
        break;
    case "poland":
        alert("This country was eliminated in the round of 16");
        break;
    case "First continental supplement":
        alert("This country was eliminated in the round of 16");
        break;
    case "Denmark":
        alert("That country was eliminated in the group stage");
        break;
    case "Tunisia":
        alert("That country was eliminated in the group stage");
        break;
    case "spain":
        alert("This country was eliminated in the round of 16");
        break;
    case "The secound continental supplement":
        alert("That country was eliminated in the group stage");
        break;
    case "Garmany":
        alert("That country was eliminated in the group stage");
        break;
    case "japan":
        alert("This country was eliminated in the round of 16");
        break;
    case "Belgium":
        alert("That country was eliminated in the group stage");
        break;
    case "canada":
        alert("That country was eliminated in the group stage");
        break;
    case "croatia":
        alert("This country got the third place in the world cup 2022");
        break;
    case "Brazil":
        alert("that country was eliminated in the round of 8");
        break;
    case "serbia":
        alert("That country was eliminated in the group stage");
        break;
    case "switzerland":
        alert("This country was eliminated in the round of 16");
        break;
    case "cameroon":
        alert("That country was eliminated in the group stage");
        break;
    case "portugal":
        alert("that country was eliminated in the round of 8");
        break;
    case "Ghana":
        alert("That country was eliminated in the group stage");
        break;
    case "uruguay":
        alert("That country was eliminated in the group stage");
        break;
    case "south korea":
        alert("This country was eliminated in the round of 16");
        break;

    default:
        alert("This country did not qualify for the fifa world cup 2022");
}

// End  club section 
