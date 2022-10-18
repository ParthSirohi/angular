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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.Eat = function () {
        var Food = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Food[_i] = arguments[_i];
        }
        console.log(this.name + " likes to eat");
        for (var i = 0; i < Food.length; i++) {
            console.log(Food[i]);
        }
    };
    Person.prototype.AssignIncome = function (income) {
        this.income = income;
    };
    return Person;
}());
var ITOfficer = /** @class */ (function (_super) {
    __extends(ITOfficer, _super);
    function ITOfficer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITOfficer.prototype.PrintTotalRefund = function () {
        console.log(this.name + " has received a total refund of ");
        if (this.income > 300000) {
            console.log("INR 10000");
        }
        else {
            console.log("INR 3000");
        }
    };
    return ITOfficer;
}(Person));
var auditor = new ITOfficer();
auditor.name = "Prakash";
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
// Bob.Eat("Chicken", "Daaru");
