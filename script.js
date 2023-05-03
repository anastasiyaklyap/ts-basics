var btnElem = document.querySelector('.sum-btn');
var numInput = document.querySelector('.num-input');
// function sum(a:number, b:number) {
//   console.log(a + b);
// }
// btnElem.addEventListener('click', () => { sum(5, +numInput.value) });
var persons = [];
function addPerson(firstName, lastName) {
    var name = firstName + lastName;
    persons.push(name);
}
var firstName = 'John';
var lastName = 'Doe';
var age = 18;
var person = {
    firstName: firstName,
    lastName: lastName,
};
addPerson(person.firstName, person.lastName);
addPerson('Amanda', 'Doe');
addPerson('Thomas', 'Jefferson');
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 1] = "Admin";
    Roles[Roles["Moderator"] = 2] = "Moderator";
    Roles[Roles["User"] = 3] = "User";
})(Roles || (Roles = {}));
var JohnDoe = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    role: Roles.Admin,
};
var AmandaDoe = {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    role: Roles.Moderator,
};
var ThomasJefferson = {
    id: 'rwe5345sfst3453543',
    firstName: 'John',
    lastName: 'Doe',
    role: Roles.User,
};
var names = [
    JohnDoe.firstName,
    AmandaDoe.firstName,
    ThomasJefferson.firstName,
];
var JohnDoeSummary = [
    JohnDoe.firstName,
    JohnDoe.lastName,
    JohnDoe.role,
];
function join(valOne, valTwo) {
    if (typeof valOne === 'number' && typeof valTwo === 'number') {
        return valOne + valTwo;
    }
    else if (typeof valOne === 'string' && typeof valTwo === 'string') {
        return valOne + valTwo;
    }
    else {
        return false;
    }
}
function showMyName(name) {
    console.log(name);
}
showMyName('John');
function square(a) {
    return a * a;
}
square(10);
function sum(title) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return title + ' = ' + numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
sum('Numbers', 1, 6, 10);
var executeFunc = function (func) {
    var title = 'Lorem Ipsum';
    func(title, 24, ['Sport', 'Movies', 'Soccer']);
};
executeFunc(function (title, age, hobbies) {
    return true;
});
