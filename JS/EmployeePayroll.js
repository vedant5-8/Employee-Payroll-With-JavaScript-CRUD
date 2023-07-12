class EmployeePayrollData {

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRE = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRE.test(name))
            this._name = name;
        else throw 'Invalid name';
    }

    get profilePic() {
        return this._profilePic;
    }

    set profilePic(profilePic) {
        this._profilePic = profilePic
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        let today = new Date();
        let dateLimit = new Date();
        dateLimit.setDate(today.getDate() - 30);
        if (startDate >= dateLimit && startDate <= today)
            this._startDate = startDate;
        else throw 'Start date must be within the last 30 days';
    }

    get note() {
        return this._note;
    }

    set note(note) {
        this._note = note;
    }

    toString() {
        return "Id = " + this.id + "\nName = " + this.name + "\nGender = " + this.gender + "\nProfile Picture = " + 
        this.profilePic + "\nDepartment = " + this.department + "\nSalary = " + this.salary + 
        "\nStart Date = " + this.startDate + "\nNote = " + this.note;
    }

}
