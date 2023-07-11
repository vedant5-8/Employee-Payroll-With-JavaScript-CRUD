// Salary slider 

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}

// Start Date

// Start Date Select Tag

const days = document.querySelector("#day");
const months = document.querySelector("#month");
const years = document.querySelector("#year");

// Populate the day select element with options
for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    days.appendChild(option);
}

// Populate the month select element with options
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthNames.forEach((name, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = name;
    months.appendChild(option);
});

// Populate the year select element with options
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 2020; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    years.appendChild(option);
}

// Update the number of days based on the selected month and year
function updateDays() {
    const selectedMonth = months.value;
    const selectedYear = years.value;
    let numDays;

    if (selectedMonth === "2") {
        // February
        if ((selectedYear % 4 === 0 && selectedYear % 100 !== 0) || selectedYear % 400 === 0) {
            numDays = 29;
        } 
        else {
            numDays = 28;
        }
    } else if (["4", "6", "9", "11"].includes(selectedMonth)) {
        // April, June, September, November
        numDays = 30;
    } else {
        // All other months
        numDays = 31;
    }

    // Update the day select element
    while (days.firstChild) {
        days.removeChild(days.firstChild);
    }
    for (let i = 1; i <= numDays; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        days.appendChild(option);
    }
}

months.addEventListener("change", updateDays);
years.addEventListener("change", updateDays);

// Set the initial values to today's date
const today = new Date();
days.value = today.getDate();
months.value = today.getMonth() + 1;
years.value = today.getFullYear();

// validate name and salary using regex

function save(event) {
    event.preventDefault();
    let name = document.querySelector('#name').value;
    let gender = document.querySelector('input[name=gender]:checked').value;
    let departments = document.querySelectorAll('input[type=checkbox]:checked');
    let salary = document.querySelector('#rangeValue').value;
    let day = document.querySelector('#day').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;
    let startDate = new Date(year, month - 1, day);
    let employee = new Employee(name, gender, departments, salary, startDate);
    try {
        employee.name = name;
        employee.startDate = startDate;
        alert(`Employee Name: ${employee.name}\nGender: ${employee.gender}\nSalary: ${employee.salary}\nDepartment: ${employee.departments}\nStart Date: ${employee.startDate}`);
    } catch (error) {
        if (error.message === "Invalid name") {
            document.querySelector('#name + .texterror').textContent = error.message;
        } else if (error.message === "Start date must be within the last 30 days") {
            document.querySelector('.selector .texterror').textContent = error.message;
        }
    }
}