counter = 1

function createElem(){
    
    var newInput = document.getElementById("input").value

    if (newInput !== ""){

        var newDiv = document.createElement('div')
        newDiv.className = "grid"
        newDiv.id = "gridElem"+counter
        
        var elements = document.getElementById("elements")
        
        elements.appendChild(newDiv)
        
        newDiv.innerText = newInput

        document.getElementById("input").value = ""

        counter++
    }
}

document.body.addEventListener('keypress', (e) => {if(e.key == 'Enter') createElem()})

function remove(){
    
    var myMain = document.getElementById("elements");
    while (myMain.firstChild) {
    myMain.removeChild(myMain.lastChild);
    }
    
    counter = 1

}


