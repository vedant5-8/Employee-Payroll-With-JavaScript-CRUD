class Employee {
    constructor(name, gender, salary, department, startDate) {
        this._name = name;
        this._gender = gender;
        this._salary = salary;
        this._department = department;
        this._startDate = startDate;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        let regex = /^[A-Z]{1}[a-z]{3,}$/;
        if (regex.test(value)) {
            this._name = value;
        } else {
            throw new Error("Invalid name");
        }
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get department() {
        return this._department;
    }

    set department(value) {
        this._department = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(value) {
        let today = new Date();
        let dateLimit = new Date();
        dateLimit.setDate(today.getDate() - 30);
        if (new Date(value) >= dateLimit && new Date(value) <= today) {
            this._startDate = value;
        } else {
            throw new Error("Start date must be within the last 30 days");
        }
    }
}
