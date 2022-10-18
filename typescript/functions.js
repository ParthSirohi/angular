function f1(p1) {
    if (p1 === void 0) { p1 = true; }
    console.log("value of p1 " + p1);
}
f1();
f1(false);
function f2(p1) {
    console.log(p1);
}
f2();
f2("Hello");
//using rest parameters
function f3() {
    var p1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        p1[_i] = arguments[_i];
    }
    for (var i = 0; i < p1.length; i++) {
        console.log(p1[i]);
    }
}
f3(100);
f3(100, 200, 300);
f3(1000, 2000);
var f5 = function () { return console.log("A simple function"); };
var add = function (x, y) { return x + y; };
f5();
console.log(add(199, 200));
