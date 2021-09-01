/**
 * The Adapter Pattern converts the interface of a class
 * into another interface the clients expect. Adapter lets
 * classes work together that couldn’t otherwise because of
 * incompatible interfaces.
 *
 * The goal of a adapter is not to add behaviour or modify behaviour
 * but pass on the request from one interface to another.
 */
var Client = /** @class */ (function () {
    function Client(employee) {
        this.employee = employee;
    }
    Client.prototype.askForHelp = function () {
        console.log('Requested help from employee');
        this.employee.help();
    };
    return Client;
}());
var GoogleIntern = /** @class */ (function () {
    function GoogleIntern() {
    }
    GoogleIntern.prototype.assist = function () {
        console.log('Google intern is request to assist');
    };
    return GoogleIntern;
}());
var googleIntern = new GoogleIntern();
/**
 * const client = new Client(googleIntern);
 * client.askForHelp();
 *
 * Here Client is not compatible with Intern but is compatible with an employee.
 * So adapter will make both compatible by passing on the calls. No modification
 * or addition of behaviour is needed.
 *
 */
var InternToEmployeeAdapter = /** @class */ (function () {
    function InternToEmployeeAdapter(intern) {
        this.intern = intern;
    }
    InternToEmployeeAdapter.prototype.help = function () {
        this.intern.assist();
    };
    return InternToEmployeeAdapter;
}());
var client = new Client(new InternToEmployeeAdapter(googleIntern));
client.askForHelp();
