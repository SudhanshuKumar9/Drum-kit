var numOfDrumButton=document.querySelectorAll(".drum").length;

for(var i=0;i<numOfDrumButton;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    // new Audio("sounds/tom-1.mp3").play();
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    addButtonAnimation(buttonInnerHTML);


  });
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  addButtonAnimation(event.key);
});



function makeSound(key)
{
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      break;
    }
}

function addButtonAnimation(currentKey)
{
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed");
  },100);
}
