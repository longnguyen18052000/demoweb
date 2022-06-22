var array = [];
var text = "";
const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (let j = 0; j < 1000; j++) {
    for (let i = 1; i <= (Math.floor(Math.random() * 5) + 1); i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    array.push(text);
    text = "";
}
document.getElementById("array").innerHTML = array;

console.time('bulluesort');
//Thuật toán sắp xếp nổi bọt, bullue sort
function bubbleSort(array) {
    let start = new Date().getTime();
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = array.length - 1; j > i; j--) {
            if (array[j] < array[j - 1]) {
                let t = array[j];
                array[j] = array[j - 1];
                array[j - 1] = t;
            }
        }
    }
    let end = new Date().getTime();
    let dur = end - start;
    document.getElementById("bullue_sort").innerHTML = array;
    document.getElementById("bullue").innerHTML = dur;
}
bubbleSort(array);
console.timeEnd('bulluesort');


console.time('InterchangeSort');
//Sắp xếp đổi chỗ trực tiếp - Interchange Sort
function interChangeSort(array) {
    let start = new Date().getTime();
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                let t = array[i];
                array[i] = array[j];
                array[j] = t;
            }
        }
    }
    let end = new Date().getTime();
    let dur = end - start;
    document.getElementById("interChange_sort").innerHTML = array;
    document.getElementById("interChange").innerHTML = dur;
}
interChangeSort(array);
console.timeEnd('InterchangeSort');


console.time('InsertionSort');
//Sắp xếp chèn trực tiếp - Insertion Sort
function insertionSort(array) {
    let start = new Date().getTime();
    let pos, x;
    for (let i = 1; i < array.length; i++) {
        pos = i - 1;
        x = array[i];
        while (pos >= 0 && array[pos] > x) {
            array[pos + 1] = array[pos];
            pos--;
        }
        array[pos + 1] = x;
    }
    let end = new Date().getTime();
    let dur = end - start;
    document.getElementById("insertion").innerHTML = dur;
    document.getElementById("insertion_sort").innerHTML = array;
}
insertionSort(array);
console.timeEnd('InsertionSort');


console.time('SelectionSort');
//Array sorting với sắp xếp chọn trực tiếp - Selection Sort
function selectionSort(array) {
    let start = new Date().getTime();
    for (let i = 0; i < array.length - 1; i++) {
        let idmin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[idmin]) idmin = j;
        }

        let t = array[i];
        array[i] = array[idmin];
        array[idmin] = t;
    }
    let end = new Date().getTime();
    let dur = end - start;
    document.getElementById("selection").innerHTML = dur;
    document.getElementById("selection_sort").innerHTML = array;
}
selectionSort(array);
console.timeEnd('SelectionSort');

console.time('BinaryInsertionSort');
function binaryInsertionSort(array) {
    let start = new Date().getTime();
    let l, r, m, x;
    for (let i = 1; i < array.length; i++) {
        l = 0;
        r = i - 1;
        x = array[i];

        while (l <= r) {
            m = Math.floor((l + r) / 2);
            if (array[m] > x) r = m - 1;
            else l = m + 1;
        }

        for (let j = i; j > l; j--) array[j] = array[j - 1];
        array[l] = x;
    }
    let end = new Date().getTime();
    let dur = end - start;
    document.getElementById("binaryInsertion").innerHTML = dur;
    document.getElementById("binaryInsertion_sort").innerHTML = array;
}
binaryInsertionSort(array);
console.timeEnd('BinaryInsertionSort');

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

