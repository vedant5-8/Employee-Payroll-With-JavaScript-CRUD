const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
        
    } catch (e) {
        return
    }
}

// day 46 - UC4 - save the employee payroll object to localstorage

function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    }
    else {
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}

// day 46 - UC3 create employee payroll object on save

const createEmployeePayroll = ()=> {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e)
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#year') + "-" + getInputValueById('#month') + "-" + getInputValueById('#day');
    employeePayrollData.startDate = new Date(Date.parse(date));
    let formattedDate = employeePayrollData.startDate.toLocaleDateString("en-GB");
    alert(employeePayrollData.toString().replace(employeePayrollData.startDate, formattedDate));
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if (item.checked) setItems.push(item.value);
    });
    return setItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementById = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

// day 46 - UC 5 reset the form when click the reset button

const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name = profile]');
    unsetSelectedValues('[name = gender]');
    unsetSelectedValues('[name = department]');
    setValue('#salary', '');
    setValue('#notes', '');
    const today = new Date();
    setValue('#day', today.getDate())
    setValue('#month', today.getMonth() + 1)
    setValue('#year', today.getFullYear())
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    })
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
