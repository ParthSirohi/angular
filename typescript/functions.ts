function f1(p1:boolean=true){
    console.log("value of p1 "+p1);
}
f1();
f1(false);

function f2(p1?:string){
    console.log(p1);
}

f2()
f2("Hello");

//using rest parameters
function f3(...p1:number[]){
    for(var i=0;i<p1.length;i++){
        console.log(p1[i]);
    }
}

f3(100);
f3(100,200,300);
f3(1000,2000);

var f5 = () => console.log("A simple arrow function");
var add = (x:number, y:number) => x+y;
f5();
console.log(add(199,200));
