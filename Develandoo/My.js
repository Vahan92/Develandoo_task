let printing = function(obj){
    document.getElementById("print").textContent= "Number of cells: " + obj.value;
}

let draw = function() {    
    let inputVal = document.getElementById("num").value;
    let forCells = document.getElementById("forCells");
    if (inputVal < 4 || inputVal > 100) {
        alert("Please enter a number between 4 and 100, or you are going to get this annoying alert notification :)");       
    } else {        
        var i = 0;       
        let fragment = document.createDocumentFragment();

        while ( i < inputVal) {
            let newSpan = document.createElement('span');
            newSpan.innerText = i;
            let newDiv = document.createElement('div');
            newDiv.appendChild(newSpan);
            fragment.appendChild(newDiv);
            i++;
            document.getElementById('resets').disabled = false;
            document.getElementById('colourises').disabled = false;
            document.getElementById('draws').disabled = true;
        }
        forCells.appendChild(fragment);       
    }
}

let getRandomColor = function () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

let colourise = function () {
    let toColour = forCells.children;
    var i;
    for (i = 0; i < toColour.length; i++) {
        (function(i){setTimeout(function(){
            toColour[i].style.backgroundColor = getRandomColor();
            toColour[i].style.transition = "all 1.5s";
        }, 1500*i);
    })(i);
    };
}

let reset = function() {
    while (forCells.firstChild) {
        forCells.removeChild(forCells.firstChild);
    }
}

