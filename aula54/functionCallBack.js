function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f4');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f5');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('f6');
        if (callback) callback();
    }, rand());
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}
function f2Callback() {
    f3(f3Callback);
}
function f3Callback() {
    console.log('Hello World')
}

// f1(function () {
//     f2(function() {
//         f3(function() {
//             console.log('Olá Mundo!');
//         });
//     });
// });


