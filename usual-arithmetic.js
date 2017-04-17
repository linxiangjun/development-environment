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
    for(let i = h; i < arr.length; i++) {
      for(let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
        let t = arr[j];
        arr[j] = arr[j - h];
        arr[j - h] = t;
      }
    }
    h = --h / 3;
  }
  return arr;
}

/*
  归并算法

  时间复杂度：O(nlogn)，属于稳定的排序
*/

function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle),
      params = merge(mergeSort(left), mergeSort(right));

      params.unshift(0, arr.length);

      arr.splice.apply(arr, params);

      return arr;

  function merge(left, right) {
    let result = [],
        il = 0,
        ir = 0;

    while(il < left.length && ir < right.length) {
      if(left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    } 
    return result.concat(left.slice(il)).concat(right.slice(ir));
  }
}

/*
  冒泡排序算法

  时间复杂度：O(n^2)
*/

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i; j++) {
      if(arr[j] > arr[j + 1]) {
        let t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }
  return arr;
}
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
  斐波拉契数列

  定义：F(0) = 1; F(1) = 1; F(n) = F(n - 1) + F(n -2) (n >= 2, n ∈ N*)

  尾递归优化(在ES6中，只要使用尾递归，就不会发生栈溢出，相对节省内存)
*/

function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}
