async function bubbleSort(){
    var i, j;
    let n  = array.length;
    let allBars = document.querySelectorAll(".bar");
    for(i=0; i<n-1; i++){
        for(j=0; j<n-i-1; j++){
            allBars[j].style.background = "#A084CA";
            allBars[j+1].style.background = "#A084CA";

            await new Promise((resolve) => setTimeout(() => {
                resolve()}, delay));

            bar1 = document.getElementById("bar"+j);
            bar2 = document.getElementById("bar"+(j+1));
            
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
                const style1 = window.getComputedStyle(bar1);
                const style2 = window.getComputedStyle(bar2);
            
                const transform1 = style1.getPropertyValue("height");
                const transform2 = style2.getPropertyValue("height");
            
                bar1.style.height = transform2;
                bar2.style.height = transform1;
            }
            bar1.style.background = "#F9F9F9";
            bar2.style.background = "#F9F9F9";
        }
        allBars[allBars.length - i - 1].style.background = "#E80F88";
    }
    allBars.forEach(x => {
        x.style.background = "#F9F9F9";
    });
    disableButton(1, false)
}

const bubble = document.getElementById("bubble");
bubble.addEventListener("click", () => {
    disableButton(1, true);
    bubbleSort();
})


