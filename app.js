const addFood = document.querySelector("#addNewOne")
const search = document.querySelector("#search")
const magaZine = document.querySelector("#magazine")
const newLetter = document.querySelector("#newletter")
const log_in = document.querySelector("#log_in")
const logo = document.querySelector("#logo")


const dropdown = document.getElementById("dropDown_list")
const btnDropDown = document.getElementById("btn_dropdown_list")
const boxBackground = document.getElementById("box_background")
let turn = false;
btnDropDown.addEventListener('click',()=>{
    if (turn == true){
        dropdown.style.display = "none";
        boxBackground.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
        boxBackground.style.pointerEvents = "";
        
        turn = false;
    }else{
        dropdown.style.display = "block";
        boxBackground.style.backgroundColor = "rgba(0, 0, 0, 0.534)";
        boxBackground.style.pointerEvents = "none";
        
        turn = true;
    }
   
});
logo.addEventListener('click',()=>{
    console.log("you click logo!!!");
});
search.addEventListener('click',()=>{
    console.log("you click search!!!");
});
magaZine.addEventListener('click',()=>{
    console.log("you click magazine!!!");
});
newLetter.addEventListener('click',()=>{
    console.log("you click newletter!!!");
});
log_in.addEventListener('click',()=>{
    console.log("you click log_in!!!");
});




addFood.addEventListener('click',()=>{
    console.log("you click add one menu!!!");
});

