alert("Guess the color by given rbg")
var num=6;       ///For 6 colors
var a=GetRandomColor(num);    //generating random colors and storing in an array
var pickedColor=Choice();     // choice between easy or hard mode
var div=document.querySelectorAll(".square");   
var again=document.querySelector("#item1");
var mode=document.querySelectorAll(".mode");


document.querySelector("#rgb").textContent=a[2];


for(var i=0; i<div.length; i++)
{

    div[i].style.background=a[i];   //generating sqaures of random colors
    
    // if a sqaure is clicked
    div[i].addEventListener("click",function(){ 
        //checking if clicked square color matches the guessing color
        var color=this.style.backgroundColor;
        if(color===pickedColor)
        {
            
            document.querySelector("#item2").textContent="Correct!"
            document.querySelector("#item2").style.color=pickedColor;
            document.querySelector("#item1").textContent="Play Again";
            change(pickedColor);
            
        }
        
        //if clicked wrong color then hiding the clicked square
        else
        {
            this.style.backgroundColor="#2e2c2c";
            document.querySelector("#item2").textContent="Wrong!"
            document.querySelector("#item2").style.color="red";
        }
    });

};

//function to generate random color based on easy or hard mode
function GetRandomColor(num){

    var array=[];
    for(var i=0;i<num;i++){
        array[i]=RandomColor();

    }

    return array;
}

function RandomColor()
{
   var r= Math.floor(Math.random()*256);
   var g= Math.floor(Math.random()*256);
   var b= Math.floor(Math.random()*256);

   return "rgb("+r+", "+g+", "+b+")";

}

//function to hide the wrong clicked square
function change(color)
{
   for(var i=0;i<div.length;i++)
   {
       div[i].style.backgroundColor=color;
   }
   document.querySelector("h1").style.backgroundColor=color;
}


function Choice()
{
    var ar=Math.floor(Math.random()*a.length);
    return a[ar];
}

// when play again is clicked
again.addEventListener("click",function(){

    a=GetRandomColor(num);
    pickedColor=Choice();
    document.querySelector("h1").style.backgroundColor="#05bfee";
    document.querySelector("#rgb").textContent=pickedColor;
    document.querySelector("#item2").textContent="Guess It";
    document.querySelector("#item2").style.color="black";
    document.querySelector("#item1").textContent="New Colors";

    for(var i=0;i<div.length;i++){

        div[i].style.backgroundColor=a[i];
    }

});


// to highlight which mode is active
for(var i=0;i<mode.length;i++){

    mode[i].addEventListener("click",function(){

        //change the background color of selected mode to show its active
        mode[0].classList.remove("select");
        mode[1].classList.remove("select");
        this.classList.add("select");
        //if easy mode is selected then no. of colors to be generated is 3 else for hard it is 6
        this.textContent==="Easy" ? num=3 :num=6;
        reset();
    });

}

// to reset the game
function reset()
{
    a=GetRandomColor(num);
    pickedColor=Choice();
    document.querySelector("h1").style.backgroundColor="#05bfee";
    document.querySelector("#rgb").textContent=pickedColor;
    document.querySelector("#item2").textContent="Guess It";
    document.querySelector("#item2").style.color="black";

    for(var i=0;i<div.length;i++){

        //if there is color in array then display the square
        if(a[i]){
            div[i].style.backgroundColor=a[i];
            div[i].style.display="block"; 
        }
        //else hide the square
        else{
            div[i].style.display="none"; 
        }
    }

}
