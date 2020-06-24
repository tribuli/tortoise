
function selectionSortAsc(array) {
  var len = array.length;
  var times = len - 1;
  var i = 0, j, minIndex, temp;
  for(; i < times; i++) {
    minIndex = i;
    for(j = i + 1; j < len; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}

function selectionSortDesc(array) {
  var len = array.length;
  var times = len - 1;
  var i = 0, j, maxIndex, temp;
  for(; i < times; i++) {
    maxIndex = i;
    for(j = i + 1; j < len; j++) {
      if(array[j] > array[maxIndex]) {
        maxIndex = j;
      }
    }
    if (i !== maxIndex) {
      temp = array[i];
      array[i] = array[maxIndex];
      array[maxIndex] = temp;
    }
  }
  return array;
}
