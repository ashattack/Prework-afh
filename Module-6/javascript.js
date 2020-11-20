//grow
document.getElementById("growBtn").addEventListener("click", function(){
    document.getElementById("box").style.width = "300px";
});

//blue
document.getElementById("blueBtn").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "Blue";
  });

//fade
document.getElementById("fadeBtn").addEventListener("click", function(){
    document.getElementById("box").style.opacity  =   
    document.getElementById("box").style.opacity*0.90; });

//reset
  document.getElementById("resetBtn").addEventListener("click", function(){
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "Orange";
    document.getElementById("box").style.opacity = "1";
});