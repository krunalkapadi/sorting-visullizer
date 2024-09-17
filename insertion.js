async function insertionSort(){
    let n = array.length;
    let allBars = document.querySelectorAll('.bar');
    for(let  i=1; i<n; i++){
        let temp = array[i];
        let tempBarHeight = allBars[i].style.height;
        let j = i-1;
        allBars[i].style.background = "#A084CA";
        await new Promise((resolve) => 
            setTimeout(() => {
                resolve()}, delay));
        while(j >= 0 && array[j] > temp){
            allBars[j].style.background = "#A084CA";
            allBars[j+1].style.height = allBars[j].style.height;
            array[j+1] = array[j];
            await new Promise((resolve) => 
            setTimeout(() => {
                resolve()}, delay));
            j--;
        }
        var x = 0;
        while(x <=i){
            allBars[x].style.background = "white";
            x++;
        }
        array[j+1] = temp;
        allBars[j+1].style.height = tempBarHeight;
    }
    disableButton(3, false);
}

let insertion = document.getElementById("insertion");
insertion.addEventListener("click", () => {
    disableButton(3, true);
    insertionSort();
})
