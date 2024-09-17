async function mergeSort(arr, l, r){
    if(l<r){
        let mid = Math.floor((l+r)/2);
        await mergeSort(arr, l, mid);
        await mergeSort(arr, mid+1, r);
        await mergeElements(arr, l, mid, r);
    }
}

async function mergeElements(array, l, mid, r){
    let allBars = document.querySelectorAll(".bar");
    let i, j, k;
    i = l;
    j = mid+1;
    k = l;
    var tempArr = [];
    while(i<=mid && j<=r){
        allBars[i].style.background = "yellow";
        allBars[j].style.background = "yellow";
        await new Promise((resolve) => 
            setTimeout(() => {
                resolve()}, delay));
        if(array[i] <= array[j])
        tempArr[k++] = array[i++];
        else 
        tempArr[k++] = array[j++];
    }
    if(i > mid){
        while(j <= r){
            tempArr[k++] = array[j++];
        }
    }else{
        while(i <= mid){
            tempArr[k++] = array[i++];
        }
    }

    for(let k=l; k<=r; k++){
        array[k] = tempArr[k];
        let height = (50*tempArr[k])/10;
        allBars[k].style.height = height+"px";
        allBars[k].style.background = "blue";
        await new Promise((resolve) => 
            setTimeout(() => {
                resolve()}, delay));
    }
}


let merge = document.getElementById("merge");
merge.addEventListener("click", async() => {
    disableButton(5, true);
    await mergeSort(array, 0, array.length-1);
    disableButton(5, false);
});
