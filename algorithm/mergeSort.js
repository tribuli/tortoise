// 归并排序 2
function mergeSort(array) {
  return split(array);
}
function split(array) {
  var len = array.length;
  if (len < 2) {
    return array;
  }

  var mid = Math.floor(len/2);
  var left = array.slice(0, mid);
  var right = array.slice(mid);
  return merge(split(left), split(right));
}

function merge(left, right) {
  var result = [];
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while(left.length) {
    result.push(left.shift());
  }
  while(right.length) {
    result.push(right.shift());
  }

  return result;
}
