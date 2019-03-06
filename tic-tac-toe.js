
const winCombos = [ 
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8], 
    [0,4,8], 
    [6,4,2]

]

console.log(winCombos)


let turn = document.getElementById("turn")


 
function selectWinnerBoxes(b1,b2,b3){
    b1.style.background = "red"; 
    b2.style.background = "red"; 
    b3.style.background = "red"; 
}




function getWinner(winOrLose) {

    let box0 = document.getElementById ("box0"); 
    let box1 = document.getElementById ("box1");
    let box2 = document.getElementById ("box2");
    let box3 = document.getElementById ("box3");
    let box4 = document.getElementById ("box4");
    let box5 = document.getElementById ("box5");
    let box6 = document.getElementById ("box6");
    let box7 = document.getElementById ("box7");
    let box8 = document.getElementById ("box8");

    // get all possibilities

    if (box0.innerHTML !== "" && box0.innerHTML == box1.innerHTML && box0.innerHTML == box2.innerHTML){ 
        selectWinnerBoxes (box0, box1, box2);
        return true; 
    }

    if (box3.innerHTML !== "" && box3.innerHTML == box4.innerHTML && box3.innerHTML == box5.innerHTML){ 
        selectWinnerBoxes (box3, box4, box5);
        return true;
    }
    1
    if (box6.innerHTML !== "" && box6.innerHTML == box7.innerHTML && box6.innerHTML == box8.innerHTML){ 
        selectWinnerBoxes (box6, box7, box8);
        return true;
    }

    if (box0.innerHTML !== "" && box0.innerHTML == box3.innerHTML && box0.innerHTML == box6.innerHTML){ 
        selectWinnerBoxes (box0, box3, box6);
        return true;
    }

    if (box1.innerHTML !== "" && box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML){ 
        selectWinnerBoxes (box1, box4, box7);
        return true;
    }

    if (box2.innerHTML !== "" && box2.innerHTML == box5.innerHTML && box2.innerHTML == box8.innerHTML){ 
        selectWinnerBoxes (box2, box5, box8);
        return true;
    }

    if (box0.innerHTML !== "" && box0.innerHTML == box4.innerHTML && box0.innerHTML == box8.innerHTML){ 
        selectWinnerBoxes (box0, box4, box8);
        return true;
    }

    if (box6.innerHTML !== "" && box6.innerHTML == box4.innerHTML && box6.innerHTML == box2.innerHTML){ 
        selectWinnerBoxes (box6, box4, box2);
        return true;
    }
    return false; 
}

// set event onclick 
// boxes => all boxes
// X_or_O => to set X or O into the box

let boxes =  document. querySelectorAll("#main div"); 

X_or_O = 0 ;


for (let i = 0; i<boxes.length; i++){
    boxes[i].onclick = function() {
        if (this.innerHTML != "X" && this.innerHTML != "O" ){
        if (X_or_O % 2 ==0){
            this.innerHTML = "X"
            turn.innerHTML = "O turn now"
            getWinner()
            if (getWinner()){
                window.alert("X wins!") 
                turn.innerHTML = "X wins!"
            }
            
            X_or_O += 1;}

            else {
                this.innerHTML = "O"
                turn.innerHTML = "X turn now"
                getWinner()
                if (getWinner()){
                    window.alert("O wins!") 
                    turn.innerHTML = "X wins!"

                }
            
                X_or_O += 1;
            }
        }
    }
}   


function replay() {
    let elements = document.querySelectorAll('.box');
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = '';
        elements[i].style.background = 'white';
    }
} 
