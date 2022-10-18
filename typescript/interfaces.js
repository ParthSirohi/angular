var KpmgEmp = /** @class */ (function () {
    function KpmgEmp() {
    }
    KpmgEmp.prototype.WorkHoursClause = function () {
        console.log(this.Empname + " should work for 8 hours a day for 5 days a week");
    };
    KpmgEmp.prototype.CheckInClause = function () {
        console.log("".concat(this.Empname, " should come to office by ") + this.ShiftStartTime);
    };
    return KpmgEmp;
}());
var Parth = new KpmgEmp;
Parth.Empname = "Parth";
Parth.EmpID = 123;
Parth.designation = "Analyst";
Parth.ShiftStartTime = "9am";
Parth.WorkHoursClause();
Parth.CheckInClause();
