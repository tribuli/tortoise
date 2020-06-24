// 插入排序 1
function insertionSortAsc(array) {
  var i = 1, len = array.length, preIndex, current;
  for(; i < len; i++) {
    preIndex = i - 1;
    current = array[i]
    while(preIndex >= 0 && array[preIndex] > current) {
      array[preIndex+1] = array[preIndex];
      preIndex--;
    }
    array[preIndex+1] = current;
  }
  return array;
}

function insertionSortDesc(array) {
  var i = 1, len = array.length, preIndex, current;
  for(; i < len; i++) {
    preIndex = i - 1;
    current = array[i];
    while(preIndex >= 0 && array[preIndex] < current) {
      array[preIndex+1] = array[preIndex];
      preIndex--;
    }
    array[preIndex+1] = current;
  }
  return array;
}
