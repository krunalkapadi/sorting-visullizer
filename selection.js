async function selectionSort(){
    let i, j, newMin, prevMin;
    let n  = array.length;
    let allBars = document.querySelectorAll(".bar");
    for(i=0; i<n-1; i++){
        prevMin = i;
        newMin = i;
        for(j=i+1; j<n; j++){
            if(newMin != prevMin){
            allBars[prevMin].style.background = "#F9F9F9";
            allBars[newMin].style.background = "#e61980";
            }else{
                allBars[newMin].style.background = "#e61980";
            }
            allBars[j].style.background = "#A084CA";
            await new Promise((resolve) => 
            setTimeout(() => {
                resolve()}, delay));
            if(array[j] < array[newMin]){
                prevMin = newMin;
                newMin = j;
            }
            allBars[j].style.background = "#F9F9F9";
        }
        if( newMin != i){
            allBars[i].style.background = 'blue';
            allBars[newMin].style.background = "#F9F9F9";
            [array[i], array[newMin]] = [array[newMin], array[i]];
            [allBars[newMin].style.height, allBars[i].style.height] = [allBars[i].style.height, allBars[newMin].style.height];
        }else{
            allBars[i].style.background = 'blue';
        }
    }
    allBars.forEach(x => {
        x.style.background = "#F9F9F9";
    })
    disableButton(2, false);
}

const selection = document.getElementById("selection");
selection.addEventListener("click", () => {
    disableButton(2, true);
    selectionSort();
});
 // Display Time Complexity based on the selected algorithm
 function displayTimeComplexity(algorithm) {
    let best, average, worst;
    algorithmNameElem.textContent = algorithm.charAt(0).toUpperCase() + algorithm.slice(1) + " Sort";

    if (algorithm === "bubble") {
        best = "O(n)";
        average = "O(n²)";
        worst = "O(n²)";
    } else if (algorithm === "merge") {
        best = "O(n log n)";
        average = "O(n log n)";
        worst = "O(n log n)";
    } else if (algorithm === "quick") {
        best = "O(n log n)";
        average = "O(n log n)";
        worst = "O(n²)";
    }

    bestComplexityElem.textContent = best;
    averageComplexityElem.textContent = average;
    worstComplexityElem.textContent = worst;
}
