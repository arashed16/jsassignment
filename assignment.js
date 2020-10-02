

// feet to mile
function feetToMile(feet) {
    var mile = feet/5280; 
    return mile;
}

var measureFeetToMile = feetToMile(10560);
console.log(measureFeetToMile);


//wood calculator

function woodCalculator( chair, table, khat ){
 
var chair = chair*1;

var table = table*3;

var khat = khat*5;

 var totalWoodNeeded = chair + table + khat;

return totalWoodNeeded;
    
   
}

var totalWood = woodCalculator(14 , 5, 12);

console.log(totalWood);


//brick Calculator


function brickCalculator(floor){
   var totalBrick;
   if(floor<=10){
       totalBrick = floor * 15 * 1000;
   } else if(floor<=20){
       totalBrick = (10 * 15 *1000) + ((floor-10) * 12 * 100);
   }else{
       totalBrick = (10 * 15 *1000) + (10 * 12 *1000 )+ ((floor-20) * 10 * 100);
   }

return totalBrick;

}


console.log(brickCalculator(30));


// tinyFriend

function tinyFriend(myFriends){
    var tiny = myFriends[0];
    for(i = 0; i < myFriends.length; i++){
        var name = myFriends[i];
        if(name.length < tiny.length){
            tiny = name;
        }
        return tiny;
    }
}

var friendsAre = [ "mintuali" , "pintuchowdhury" ,"kamiluddin", "Basirsamsjaman"];
console.log(tinyFriend(friendsAre));