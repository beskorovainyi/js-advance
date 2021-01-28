// Abstraction

/**
 * create a new class person
 * @param firstName
 * @param lastName
 * @param job
 * @constructor
 */
function Person(firstName, lastName, job) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;

    this.learn = function () {
        // ...
    }
}

/**
 * create a new class job
 * @param company
 * @param position
 * @param salary
 * @constructor
 */
function Job(company, position, salary) {
    this.company = company;
    this.position = position;
    this.salary = salary;
}

var john = new Person(
    'John',
    'Johnson',
  new Job('Eteam', 'Developer', 2000)
)

var peter = new Person(
    'John',
    'Johnson',
    new Job('Eteam', 'Developer', 2000)
)

console.log(john, peter);