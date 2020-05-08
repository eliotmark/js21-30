function countEvens(arr) {
    var count = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] % 2 == 0) {
            count++;
        }
    }
    return count;
}

function countHi(str) {
    var count = 0;
    for(var i=0; i<str.length; i++) {
        if((str.substring(i, i+1) == "h") && (str.substring(i+1, i+2) == "i")) {
             count++;
        }
    }
    return count;
}

function no14(arr) {
    var one = 0;
    var four = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == 1) {
            one++;
        }
        if(arr[i] == 4) {
            four++;
        }
    }
    if(one>0 && four>0) {
        return false;
    }
    return true;
}

function either24(arr) {
    var two = 0;
    var four = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i]==2 && arr[i+1]==2) {
            two++
        }
        if(arr[i]==4 && arr[i+1]==4) {
            four++
        }
    }
    if(two>0 && four>0) {
        return false;
    }
    if(two>0 && four==0) {
        return true;
    }
    if(two==0 && four>0) {
        return true;
    }
    return false;
}

function makeChocolate(small, big, goal) {
    var x = goal-big*5;
    var y = 1;
    while(x<0) {
        x=goal-(big-y)*5;
        y++;
    }
    if(x>small) {
        return -1;
    }
    if(x>=0) {
        return x;
    }
}

function luckySum(a, b, c) {
    if(a == 13) {
        a=0;
        b=0;
        c=0;
    }
    if(b == 13) {
        b=0;
        c=0;
    }
    if(c == 13) {
        c=0;
    }
    return a + b + c;
}

function maxBlock(x) {
    var y = 1;
    var z = 0;
    for(var i=0; i<x.length; i++) {
        if(x.substring(i, i+1) == x.substring(i+1, i+2)) {
            y++;
        }else{
            if(y>z) {
                z=y;
            }
            y=1;
        }
    }
    return z;
}

function linearIn(inner, outer) {
    var x = 0;
    var y = 0;
    for(var i=0; i<outer.length; i++) {
        x = outer[i];
        for(var j=0; j<inner.length; j++) {
            if(x == inner[j]) {
                y++;
                break;
            }
        }
    }
    if(y == outer.length) {
        return true;
    }
    return false;
}

function countTriple(x) {
    var y=0;
    for(var i=0; i<x.length; i++) {
        if((x.substring(i, i+1) == x.substring(i+1, i+2)) && (x.substring(i, i+1) == x.substring(i+2, i+3))) {
            y++;
        }
    }
    return y;
}

function sameEnds(x) {
    var first = "";
    var last = "";
    if(x.length%2 == 0) {
        first = x.substring(0, x.length/2);
        last = x.substring(x.length/2, x.length);
    }else{
        first = x.substring(0, x.length/2+.5);
        last = x.substring(x.length/2+.5, x.length);
    }
    var y = 0;
    for(var i=0; i<last.length; i++) {
        if(last.substring(i, i+1) == first.substring(0, 1)) {
            y = 0;
            for(var j=i; j<last.length; j++) {
                if(last.substring(j, j+1) == first.substring(y, y+1)) {

                }else{
                    break;
                }
                y++;
                if(j == last.length-1) {
                    return first.substring(0, y);
                }
            }
        }
    }
    return "";
}

function tester() {
    document.getElementById("output").innerHTML += countEvens([6, 4, 3]);
    document.getElementById("output").innerHTML += countHi("hi it's me");
    document.getElementById("output").innerHTML += no14([7, 4, 9]);
    document.getElementById("output").innerHTML += either24([2, 3, 1]);
    document.getElementById("output").innerHTML += makeChocolate(7, 6, 10);
    document.getElementById("output").innerHTML += luckySum([8, 2, 13]);
    document.getElementById("output").innerHTML += maxBlock("hiiitisme");
    document.getElementById("output").innerHTML += linearIn([2, 4, 6, 8], [4, 6]);
    document.getElementById("output").innerHTML += countTriple("hiiitisme");
    document.getElementById("output").innerHTML += sameEnds("hihellohi");
}