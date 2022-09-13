function selectionSort(arr) {
    let min;
    for(let i=0; i<arr.length; i++){
        min = i;

        for (let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]];
    }

    return arr;
}

console.log(selectionSort([8, 898,54,21,8,2,2121,8741,84,1,5651,3184,61,3846835,13,38,1,1656,54]));