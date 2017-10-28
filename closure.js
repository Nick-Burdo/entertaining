"use strict";

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    });
}

for (var i = 0; i < arr.length; i++) {
    setTimeout(function(i) {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 0, i);
}

for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    });
}

