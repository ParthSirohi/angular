class Person{
    public name:string;    
    public age:number;
    public email:string;
    private secrets:string[]
    protected income:number;

    public Eat(... Food:string[]){
        console.log(this.name+ " likes to eat");
        for(var i=0;i<Food.length;i++){
            console.log(Food[i]);
      
      }
    }
    public AssignIncome(income:number){
        this.income=income;
    }
}


class ITOfficer extends Person{
    public PrintTotalRefund(){
        console.log(this.name+ " has received a total refund of ");
        if(this.income>300000){
            console.log("INR 10000");
        }
        else{
            console.log("INR 3000");
        }
    }
}
var auditor=new ITOfficer();
auditor.name="Prakash";
auditor.Eat("Food");
auditor.AssignIncome(400000);
auditor.PrintTotalRefund();

// var John= new Person();
// John.name="John";
// John.email="John@abc.com";
// John.age=25;
// John.Eat("Paneer");

// var Bob= new Person();
// Bob.name= "Bob";
// Bob.email="Bob@abc.com";
// Bob.Eat("Chicken");
