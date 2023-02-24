counter = 1

function createElem(){
    
    let newInput = document.getElementById("input").value

    if (newInput !== ""){

        let newDiv = document.createElement('div')
        newDiv.className = "grid"
        newDiv.id = "gridElem"+counter
        
        let elements = document.getElementById("elements")
        
        elements.appendChild(newDiv)
        
        newDiv.innerText = newInput

        document.getElementById("input").value = ""

        counter++
    }
}

document.body.addEventListener('keypress', (e) => {if(e.key == 'Enter') createElem()})

function remove(){
    
    let myMain = document.getElementById("elements");
    while (myMain.firstChild) {
    myMain.removeChild(myMain.lastChild);
    }
     counter = 1

}


