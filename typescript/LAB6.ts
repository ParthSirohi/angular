class Employee{
    public name:String;
    public Id:Number;
    public Email:String;
    public Desingation:String;
    protected Salary:Number;

    public Works(... tasks:string[]){
        console.log(this.name+ " are the tasks");
        for(var i=0;i<tasks.length;i++){
            console.log(tasks[i]);
        }
    }

    private TakesOff(days:number){
        console.log(this.name+ " days are were taken off");
        for(var i=0;i<30;i++){
            console.log(days[i]);
        }
    }
}

class Admin extends Employee{
    public AssignWork(){
        console.log(this.name+ " has been assigned Developing an App");

    }
    public AssignIncrement(){
        console.log(this.name+ " has received a increment of 10000");

    }
}

var Rohan= new Employee();
Rohan.name="Rohan";
Rohan.Email="ro@abc.com";
Rohan.Desingation="Analyst";
Rohan.Id=123;
Rohan.Works();


var Anush= new Employee();
Anush.name="Anush";
Anush.Email="anush@abc.com";
Anush.Desingation="Analyst";
Anush.Id=124;

var Manager= new Admin();
Manager.name="Prakash";
Manager.Email="Pra@abc.com";
Manager.Id=567;
Manager.Desingation="Manager";
Manager.AssignWork();
Manager.AssignIncrement();

