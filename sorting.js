function randomIntFromInterval(min, max){
    return Math.floor(Math.random()*(max-min+1) + min);
}

// to create new array
function newArray(no_of_bar){
for(let i=0; i < no_of_bar; i++){
    array.push(randomIntFromInterval(1, 100));
    const bar = document.createElement("div");
    bar.id = "bar"+i;
    bar.className = "bar";
    let height = (50*array[i])/10;
    bar.style.height = height+"px";
    document.getElementById("bars").appendChild(bar);
    }
}


// when New Array Button is clicked
const newArrayBtn = document.getElementById("newarray");
newArrayBtn.addEventListener('click', () => {
    if(Array.isArray(array) && array.length == 0){
        newArray(25);
    }else{
        const parent = document.getElementById("bars");
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
        array.splice(0, array.length);
        newArray(25);
    }
});

// when the range silder is changed
var arr_size = document.querySelector("#arr_sz");
arr_size.addEventListener("input", range);
function range(event){
    let barRange = event.target.value;
    if(Array.isArray(array) && array.length == 0) newArray(barRange);
    else{
        const parent = document.getElementById("bars");
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
        array.splice(0, array.length);
        newArray(barRange);
    }
}

// when the speed range slider is changed
var speed_slider = document.querySelector("#speed_slider");
speed_slider.oninput = function(){
    delay = speed_slider.value;
}

// disable button
function disableButton(buttonId, status){
    button = [newarray, bubble, selection, insertion, quick, merge];
    for(let i=0; i<button.length; i++){
        if(i !== buttonId){
            if(status){
                button[i].disabled = true;
                document.getElementById("arr_sz").disabled = true;
            }else{
                button[i].disabled = false;
                document.getElementById("arr_sz").disabled = false;
            }
        }
    }
}