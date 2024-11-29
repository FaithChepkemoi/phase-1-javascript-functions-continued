// code your solution here
//function razzle()
//{
//    console.log ("You've been razzled!")
//}
//razzle();
//function razzle(lawyer="Bily", target="em") {
  //  console.log `${lawyer} razzle-dazzle ${target}!`
//}
//razzle(); //=> Billy razzle-dazzles 'em!
//razzle("Methuselah", "T'challah");
function saturdayFun(string){

    return `This Saturday, I want to roller-skate!`
}
function mondayWork(){
    return `go to the office`
}
function saturdayFun(){
    return `This Saturday, I want to bathe my dog!`
}
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`; // Return the activity
}
function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`

}

function wrapAdjective(wrapper = '*') {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`; 
    };
}