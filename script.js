const container = document.querySelector("aside .puzzles");
const reset = document.querySelector("button.reset");
const implement = document.querySelector("button.acceptSquares");
const information = document.querySelector("h4 em");
let divs = [];
var valueofsquares = 0;
function boardOnLoad(size=16,widthValue=32){
    information.textContent = "Click to start drawing";
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
        const div = document.createElement("div");  
        div.classList.add('basic');
        div.setAttribute("style","height:"+widthValue+"px;width:"+widthValue+"px");
        container.appendChild(div);
        container.addEventListener("mousedown",function(){
            information.textContent = "You're an artist, remember that";
            div.addEventListener("mouseover",function(){
                div.classList.add('hover');
            });
        });
        }
    }
}
function newBoard(value,widthValue){
    const divs = document.querySelectorAll("div");
    for(let k=0;k<divs.length;k++){
    container.removeChild(divs[k]);
    }
    boardOnLoad(value,widthValue);
}
reset.addEventListener("click",function(){
    const divs = document.querySelectorAll('div.hover');
    for(let i=0;i<divs.length;i++){
    divs[i].classList.remove('hover');
    divs[i].classList.add('basic');
    }
});
implement.addEventListener("click",function(){
    const value = document.querySelector("input#numberOfSquares").value;
    if(value>100 || value==NaN || value<1){
        alert("insert number smaller than 100 and bigger than 1");
    }
    else{
    const widthValue = 512/value;
    newBoard(value, widthValue);
    }
});
    
