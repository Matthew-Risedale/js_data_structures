function bubbleSort(arr) {
  let swapped;
  do{
    swapped = false;
    for(let i=0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i+1]) {
        let el = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = el;
        swapped = true;
      }
    }
  } while(swapped);
  return arr;
}