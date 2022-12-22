
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
    case "france":
        alert("Loser in final Match and got the secound place in the world fifa cub 2022");
        break;
    case "england":
        alert("that country was eliminated in the round of 8");
        break;
    case "maracoo":
        alert("This country got the fourth place in the world cup 2022");
        break;
    case "dimateter":
        alert("That country was eliminated in the group stage");
        break;
    case "ecuador":
        alert("That country was eliminated in the group stage");
        break;
    case "senegal":
        alert("This country was eliminated in the round of 16");
        break;
    case "holland":
        alert("that country was eliminated in the round of 8");
        break;
    case "iran":
        alert("That country was eliminated in the group stage");
        break;
    case "united state":
        alert("This country was eliminated in the round of 16");
        break;
    case "european supplement":
        alert("That country was eliminated in the group stage");
        break;
    case "argentina":
        alert("Argentina is the winner of fifa world cup 2022");
        break;
    case "saudia arabia":
        alert("That country was eliminated in the group stage but (they win Argentina)");
        break;
    case "mexico":
        alert("That country was eliminated in the group stage");
        break;
    case "poland":
        alert("This country was eliminated in the round of 16");
        break;
    case "First continental supplement":
        alert("This country was eliminated in the round of 16");
        break;
    case "denmark":
        alert("That country was eliminated in the group stage");
        break;
    case "tunisia":
        alert("That country was eliminated in the group stage");
        break;
    case "spain":
        alert("This country was eliminated in the round of 16");
        break;
    case "the secound continental supplement":
        alert("That country was eliminated in the group stage");
        break;
    case "garmany":
        alert("That country was eliminated in the group stage");
        break;
    case "japan":
        alert("This country was eliminated in the round of 16");
        break;
    case "belgium":
        alert("That country was eliminated in the group stage");
        break;
    case "canada":
        alert("That country was eliminated in the group stage");
        break;
    case "croatia":
        alert("This country got the third place in the world cup 2022");
        break;
    case "brazil":
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
    case "ghana":
        alert("That country was eliminated in the group stage");
        break;
    case "uruguay":
        alert("That country was eliminated in the group stage");
        break;
    case "south korea":
        alert("This country was eliminated in the round of 16");
        break;

    default:
        alert("Argentina is the winner of fifa world cup 2022");
}

// End  club section 
