/**
 * The Adapter Pattern converts the interface of a class
 * into another interface the clients expect. Adapter lets
 * classes work together that couldn’t otherwise because of
 * incompatible interfaces.
 *
 * The goal of a adapter is not to add behaviour or modify behaviour
 * but pass on the request from one interface to another.
 *
 * Naming convention: AFromBAdapter or AToBAdapter
 *
 */

/**
 * @file file implements Adapter pattern.
 */

interface Employee {
  help: () => void;
}

interface Intern {
  assist: () => void;
}

class Client {
  employee: Employee;

  constructor(employee: Employee) {
    this.employee = employee;
  }

  askForHelp(): void {
    console.log('Requested help from employee');
    this.employee.help();
  }
}

class GoogleIntern implements Intern {
  assist(): void {
    console.log('Google intern is request to assist');
  }
}

const googleIntern = new GoogleIntern();

/**
 * const client = new Client(googleIntern);
 * client.askForHelp();
 *
 * Here Client is not compatible with Intern but is compatible with an employee.
 * So adapter will make both compatible by passing on the calls. No modification
 * or addition of behaviour is needed.
 *
 */

class InternToEmployeeAdapter implements Employee {
  intern: Intern;

  constructor(intern: Intern) {
    this.intern = intern;
  }

  help():void {
    this.intern.assist();
  }
}

const client = new Client(new InternToEmployeeAdapter(googleIntern));

client.askForHelp();
