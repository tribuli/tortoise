function shellSortAsc(array) {
  var len = array.length, temp, gap = 1, i, j;
  while(gap < len/3) {
    gap = gap * 3 + 1;
  }
  for(; gap > 0; gap = Math.floor(gap/3)) {
    for(i = gap; i < len; i++) {
      temp = array[i];
      for(j = i - gap; j >= 0 && array[j] > temp; j -= gap) {
        array[j+gap] = array[j];
      }
      array[j+gap] = temp;
    }
  }
  return array;
}
