var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.Works = function () {
        var tasks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tasks[_i] = arguments[_i];
        }
        console.log(this.name + " are the tasks");
        for (var i = 0; i < tasks.length; i++) {
            console.log(tasks[i]);
        }
    };
    Employee.prototype.TakesOff = function (days) {
        console.log(this.name + " days are were taken off");
        for (var i = 0; i < 30; i++) {
            console.log(days[i]);
        }
    };
    return Employee;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.AssignWork = function () {
        console.log(this.name + " has been assigned Developing an App");
    };
    Admin.prototype.AssignIncrement = function () {
        console.log(this.name + " has received a increment of 10000");
    };
    return Admin;
}(Employee));
var Rohan = new Employee();
Rohan.name = "Rohan";
Rohan.Email = "ro@abc.com";
Rohan.Desingation = "Analyst";
Rohan.Id = 123;
var Anush = new Employee();
Anush.name = "Anush";
Anush.Email = "anush@abc.com";
Anush.Desingation = "Analyst";
Anush.Id = 124;
var Manager = new Admin();
Manager.name = "Prakash";
Manager.Email = "Pra@abc.com";
Manager.Id = 567;
Manager.Desingation = "Manager";
Manager.AssignWork();
Manager.AssignIncrement();
