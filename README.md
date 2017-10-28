# Entertaining Tasks

## Closure & function setTimeout

### What is this loop's  result?

```
const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    });
}
```

#### Right answer

```
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
```

#### Needed result

```
Index: 0, element: 10
Index: 1, element: 12
Index: 2, element: 15
Index: 3, element: 21
```

### Result correction. Method 1

Used 3-th argument for `setTimeout()` function to send loop variable into the closure

```
const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function(i) {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 0, i);
}
```

### Result correction. Method 2

Used ES-6 `let` keyword for define the loop variable

```
const arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    });
}
```
