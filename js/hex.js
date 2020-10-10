const hex = [ 1,2,3,4,5,6,7,8,9,"A","B","D","E","F"];


const btnUse = document.getElementById("btn-use");
const btn = document.getElementById("btn-color");
const color = document.querySelector(".color");
const flipper= document.querySelector(".colorflipper");



const colorflipper= () => {
let hexColor ="#";
for ( let i=0 ; i < 6; i++){
    hexColor += hex[getRandomNum()] ;          //re-assing of "hexColor" to add hex[getRandomNum()]
}

color.textContent = hexColor;
flipper.style.backgroundColor = hexColor;

}
const getRandomNum = () => {
    return Math.floor(Math.random()*hex.length);   // math.random() ganerates the random Number Multiply * with Number of array 13 
                                                   // ex : [] math.random() is] 0.45 * 13 = 13.45 [ than 
                                                   // foor(remove the number after digits) is apply so num] = 13 
                                                   // [ for loop applys function repearts again and again untill its become the 6 digit number ]
}

// const use= () => {
    
//     document.body.style.backgroundColor = flip ;
// }
btn.addEventListener("click",colorflipper);

