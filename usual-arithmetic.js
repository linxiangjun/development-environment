/*
  author: linxiangjun
  date: 2017.3.23
  Description: usual arithmetic
*/

/*
  先写写快速排序算法，这里借鉴别人的好的写法

  时间复杂度：O(nlog n)
*/

function quickSort(arr) {
  if(arr.length <= 1) {return arr}

  let pivotIndex = Math.floor(arr.length / 2);

  let pivot = arr.splice(pivotIndex, 1)[0];

  let [left, right] = [[], []];

  for(let i = 0;i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

/*
  选择排序算法

  时间复杂度：O(n^2)
*/

function selectionSort(arr) {
  for(let i =0; i < arr.length; i++) {
    let min = i;

    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }

    if(min != i) {
      let t = arr[i];
      arr[i] = arr[min];
      arr[min] = t;
    }
  }
  return arr;
}

/*
  插入排序算法

  空间复杂度：O(n^2)
*/

function insertionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      let t = arr[j];
      arr[j] = arr[j - 1];
      arr[j -1] = t;
    }
  }
  return arr;
}

/*
  希尔排序
*/
function shellSort(arr) {
  let h = 1;
  while(h < arr.length /3) {
    h = (h * 3) + 1;
  }

  while(h >= 1) {

  }
}

/*
  归并算法
*/

/*
  冒泡排序算法
*/

/*
  二分搜索，要求数组必须为有序数组
*/

function binarySearch(arr, data) {
  let upper = arr.length - 1;
  let lower = 0;
  while(lower <= upper) {
    let mid = Math.floor((upper - lower) / 2);

    if(arr[mid] < data) {
      lower = mid + 1;
    } else if(arr[mid] > data) {
      upper = mid - 1;
    } else {
      return mid;
    }
  }
  return
}

/*
  数组中的函数 reverse() 和 sort() 也可以实现升序和倒序
*/