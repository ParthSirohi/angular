interface IEmpContract{
    WorkHoursClause();
    CheckInClause();

}

class KpmgEmp implements IEmpContract{
    public EmpID:number;
    public Empname: string;
    public designation:string;
    public ShiftStartTime:string;

    WorkHoursClause(){
        console.log(`${this.Empname} should work for 8 hours a day for 5 days a week`)

    }
    CheckInClause() {
        console.log(`${this.Empname} should come to office by `+this.ShiftStartTime);
    }
}

var Parth = new KpmgEmp;
Parth.Empname="Parth";
Parth.EmpID=123;
Parth.designation="Analyst";
Parth.ShiftStartTime="9am";
Parth.WorkHoursClause();
Parth.CheckInClause();