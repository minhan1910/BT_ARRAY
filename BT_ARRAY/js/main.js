function getELE(element) {
    return document.querySelector(element);
}

var a = [];

//Add element

function addElement() {
    var ele = Number(getELE("#txtAddEle").value);
    a.push(ele);

    var content = "";
    for(var i = 0; i < a.length; ++i) {
        content += (a[i] + " ");
    }

    getELE("#resultOfAdd").innerHTML = content;
}

getELE("#btnAddElement").onclick = addElement;

//Ex1

function sum() {
    if(a.length == 0)  {
        getELE("#resultOfEx10").innerHTML = "Thêm số để so sánh";
        return;
    }
    var sum = 0;
    for(var i = 0; i < a.length; ++i) {
        if(a[i] > 0) sum += a[i];
    }
    
    getELE("#resultOfEx1").innerHTML = "Tổng số dương là: " + sum;
}

getELE("#btnSum").onclick = sum;


//ex2
function count() {
    if(a.length == 0)  {
        getELE("#resultOfEx10").innerHTML = "Thêm số để so sánh";
        return;
    }
    var cnt = 0;
    for(var i = 0; i < a.length; ++i) {
        if(a[i] > 0) ++cnt;
    }

    getELE("#resultOfEx2").innerHTML = "Số dương là: " + cnt;
}

getELE("#btnCount").onclick = count;

//ex3
function findMin() {
    if(a.length == 0)  {
        getELE("#resultOfEx10").innerHTML = "Thêm số để so sánh";
        return;
    }
    var min = a[0];
    for(var i = 1; i < a.length; ++i) {
        min = a[i] < min ? a[i] : min;
    }

    getELE("#resultOfEx3").innerHTML = "Số nhỏ nhất: " + min;
}

getELE("#btnFindMin").onclick = findMin;

//ex4

function findPosMin() {
    if(a.length == 0)  {
        getELE("#resultOfEx10").innerHTML = "Thêm số để so sánh";
        return;
    }
    var posMin = a[0];
    for(var i = 1; i< a.length; ++i) {
        if(a[i] > 0) {
            posMin = a[i] < posMin ? a[i] : posMin;
        } 
    }

    if(posMin < 0) {
        getELE("#resultOfEx4").innerHTML = "Không có số dương";
    } else {
        getELE("#resultOfEx4").innerHTML = "Số dương nhỏ nhất: " + posMin;
    }
}

getELE("#btnFindPosMin").onclick = findPosMin;


//ex5

function findLastEven() {
    if(a.length == 0)  {
        getELE("#resultOfEx10").innerHTML = "Thêm số để so sánh";
        return;
    }
    var res = -1;
    for(var i = a.length - 1; i >=0 ; --i) {
        if(a[i] % 2 == 0) {
            res = a[i];
            break;
        }
    }

    if(res != -1) {
        getELE("#resultOfEx5").innerHTML = "Số chẵn cuối cùng: " + res;
    } else {
        getELE("#resultOfEx5").innerHTML = "Không có số chẵn";
    }
}

getELE("#btnFindLastEven").onclick = findLastEven;

//ex6
function outputArray() {
    var content = "";
    for(var i = 0; i < a.length; ++i) {
        content += (a[i] + " ");
    }
    return content;
}


function swap() {
    if(a.length == 0)  {
        getELE("#resultOfEx10").innerHTML = "Thêm số để so sánh";
        return;
    }
    var pos1 = Number(getELE("#txtPos1").value);
    var pos2 = Number(getELE("#txtPos2").value);

    var tmp = a[pos1];
    a[pos1] = a[pos2];
    a[pos2] = tmp;
    
    var content = outputArray();
    getELE("#resultOfEx6").innerHTML = "Mảng sau khi đổi: " + content; 
}

getELE("#btnSwap").onclick = swap;


//ex7

function asc() {
    if(a.length == 0)  {
        getELE("#resultOfEx10").innerHTML = "Thêm số để so sánh";
        return;
    }
    for(var i = 0; i < a.length - 1; ++i) {
        for(var j = i + 1; j < a.length; ++j) {
            if(a[i] > a[j]) {
                var tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }            
        }
    }

    var content = outputArray();
    getELE("#resultOfEx7").innerHTML = "Mảng sau khi sắp xếp: " +  content;
}

getELE("#btnAsc").onclick = asc;


//ex8

function check_prime(n) {
    if(n < 2) {
        return 0;
    } else if(n == 2) {
        return 1;
    } else if(n % 2 == 0) {
        return 0;
    } else {
        for(var i = 3; i*i <= n; i+=2) {
            if(n % i == 0) {
                return 0;
            }
        }
    }
    return 1;
}

function findFirstPrime() {
    if(a.length == 0)  {
        getELE("#resultOfEx10").innerHTML = "Thêm số để so sánh";
        return;
    }

    var res = -1;
    for(var i = 0; i < a.length; ++i) {
        if(check_prime(a[i])) {
            res = a[i];
            break;
        }
    }

    if(res == -1 ){
        getELE("#resultOfEx8").innerHTML = "Không có số nguyên tố";
    } else {
        getELE("#resultOfEx8").innerHTML = "Số nguyên tố đầu tiên: " +  res;
    }
}

getELE("#btnFindFirstPrime").onclick = findFirstPrime;

//Ex 9 

//Add element
var ex9 = [];

function addElementOfEx9() {

    
    var ele = Number(getELE("#txtAddEleEx9").value);
    ex9.push(ele);

    var content = "";
    for(var i = 0; i < ex9.length; ++i) {
        content += (ex9[i] + " ");
    }

    getELE("#resultOfAddEx9").innerHTML = content;
}

getELE("#btnAddOfEx9").onclick = addElementOfEx9;


function countIsInteger() {
    if(ex9.length == 0)  {
        getELE("#resultOfEx10").innerHTML = "Thêm số để so sánh";
        return;
    }

    var cnt = 0;
    for(var i = 0; i < ex9.length; ++i) {
        if(Number.isInteger(ex9[i])) ++cnt;
    }

    if(cnt == 0) {
        getELE("#resultOfEx9").innerHTML = "Không có số nguyên";
    } else {
        getELE("#resultOfEx9").innerHTML = "Số nguyên: " + cnt;
    }
}

getELE("#btnIsInteger").onclick = countIsInteger;

//ex10


function compareNegAndPos() {
    if(a.length == 0)  {
        getELE("#resultOfEx10").innerHTML = "Thêm số để so sánh";
        return;
    }

    var cmp = 0;
    for(var i = 0; i < a.length; ++i) {
        if(a[i] > 0) {
            ++cmp;
        } else {
            --cmp;
        }
    }

    if(cmp == 0) {
        getELE("#resultOfEx10").innerHTML = "Số Âm = Số Dương";
    }  else if(cmp > 0) {
        getELE("#resultOfEx10").innerHTML =  "Số Dương > Số Âm";
    } else {
        getELE("#resultOfEx10").innerHTML =  "Số Âm > Số Dương";
    }
}

getELE("#btnCompareNegAndPos").onclick = compareNegAndPos;