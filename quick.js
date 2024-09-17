async function partition(array, l, h){
    let allBars = document.querySelectorAll(".bar");
    allBars[h].style.background = "red";
    await new Promise((resolve) => 
            setTimeout(() => {
                resolve()}, delay));
    let pivot = array[h];
    let i = l-1;
    for(let j=l; j<=h-1; j++){
        allBars[j].style.background = "orange";
        await new Promise((resolve) => 
            setTimeout(() => {
                resolve()}, delay));
        if(array[j] < pivot){
            i++;
            [allBars[i].style.height, allBars[j].style.height] = [allBars[j].style.height, allBars[i].style.height];
            [array[i], array[j]] = [array[j], array[i]];
            allBars[i].style.background = "black";
        }
        await new Promise((resolve) => 
            setTimeout(() => {
                resolve()}, delay));
        if(i >= 0 ) 
        allBars[i].style.background = "white";
        allBars[j].style.background = "white";
    }
    
    allBars[i+1].style.background = "yellow";
    [allBars[i+1].style.height, allBars[h].style.height] = [allBars[h].style.height, allBars[i+1].style.height];
    [array[i+1], array[h]] = [array[h], array[i+1]];
    allBars[i+1].style.background = "white";
    allBars[h].style.background = "white";
    await new Promise((resolve) => 
            setTimeout(() => {
                resolve()}, delay));
    return(i+1);
}
async function quickSort(array, low, high){    
    if(low < high){
        let pi = await partition(array ,low, high);
        await quickSort(array, low, pi-1);
        await quickSort(array, pi+1, high);
    }
    disableButton(4, false);
}

let quick = document.getElementById("quick");       
quick.addEventListener("click", () => {
    disableButton(4, true);
    quickSort(array, 0, array.length-1);
})
