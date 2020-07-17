//converting feet to mile
function feetToMile(feet){
    if(feet < 0){
        return 'please give a positive number';
    }
    var mile = feet * 0.00018939 ;
    return mile;

}
var result = feetToMile(10);
console.log(result);

// Wood Calculator
function woodCalculator(chair ,table , bed ){
    var chair = chair * 1 ;
    var table = table * 3;
    var bed = bed * 5;
    var total = chair + table + bed;
    return total;
}
console.log(woodCalculator(20,20,20));


//brick Calculator
function brickCalculator(building){
    if(building > 0 && building <= 10){
        var TotalNumberofBricks = 0;
        TotalNumberofBricks = building * 15 * 1000;
        return TotalNumberofBricks;
    }
    else if(building > 10 && building <= 20){
        TotalNumberofBricks = (10 * 15 * 1000) + ((building -10) * 12 * 1000);
        return TotalNumberofBricks;
    }
    else{
        TotalNumberofBricks =  (10 * 15 * 1000) + (10 * 12 * 1000) + ((building-20) * 10 * 1000);
        return TotalNumberofBricks;
    }

}
console.log(brickCalculator(15 ));

//tinyFriend
function tinyFriend(friends) {
    var smallest = friends [0];
    for(var i = 1 ; i < friends.length ; i++){
            var myFriends = friends[i];
            if(myFriends.length < smallest.length){
                smallest = myFriends;
                
            }
    }
    return smallest;
}
var smallestCharacter = tinyFriend(["joya", "Rupa", "Jareen", "Ratul","Roy","hu"]);
console.log(smallestCharacter);
