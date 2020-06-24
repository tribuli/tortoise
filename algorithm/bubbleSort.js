function bubbleSortAsc(array) {
  var times = array.length - 1, i = 0, j, temp;
  for(; i < times; i++) {
    for(j = times; j > i; j--) {
      if (array[j] < array[j-1]) {
        temp = array[j-1];
        array[j-1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function bubbleSortDesc(array) {
  var times = array.length - 1, i = 0, j, temp;
  for(; i < times; i++) {
    for(j = times; j > i; j--) {
      if (array[j] > array[j-1]) {
        temp = array[j-1];
        array[j-1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}