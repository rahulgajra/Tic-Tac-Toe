let boxes=document.querySelectorAll(".box"); 
let sle=document.querySelector(".hh"); 
let back=document.getElementById("rahul"); 
let start1=document.querySelector(".start"); 
let rest1=document.querySelector(".restart");
let turn0=true;   
let result=true;
let count=0;
let winner=[ 
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8], 
    [0,4,8],
    [2,4,6]
] 
boxes.forEach((box) => {
        box.addEventListener("click",()=>{ 
           
            if(turn0===true)
            { 
                box.innerText="O"; 
                turn0=false;
            } 
            else
            { 
                box.innerText="X";
                turn0=true; 
            }
            
            box.disabled=true; 
            count++;
            checkwinner();
        }) 
    });
const newgame=()=> 
{ 
    turn0=true; 
    for(box of boxes)
    { 
        box.disabled=false; 
        box.innerText="";
    } 
    sle.innerText="congrats!the winner is...";
}
const showwinner=(p)=> 
{ 
    sle.innerText=` the winner is ${p}`;    
    result=false;
    
} 
    
const dis=()=> 
{ 
    for(box of boxes) 
    { 
        box.disabled=true;
    }
}
    
const checkwinner=()=>
{   
    
    for(pattern of winner) 
    {    
             
               let p=boxes[pattern[0]].innerText; 
               let m=boxes[pattern[1]].innerText; 
               let n=boxes[pattern[2]].innerText;

        if(p!="" && m!="" && n!="" && p===m && m===n)
           { 
                
                 showwinner(p);
                 dis();

           }
    } 

    if(count===9 && result===true)
    {  
        sle.innerText="opps! no one is winner,please restart";

    }
}

start1.addEventListener("click",newgame); 
rest1.addEventListener("click",newgame);
     