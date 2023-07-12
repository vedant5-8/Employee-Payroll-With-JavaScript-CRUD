window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
});

// Day 45 UC 5 Display employee details in tabular format using template literals

/* 
const createInnerHTML = () => {
    const innerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td>
            <img class="profile" src="Images/profile3.jpeg" alt="profile">
        </td>
        <td>Vedant Patil</td>
        <td>Male</td>
        <td>
            <div class="dept-label">IT</div>
            <div class="dept-label">HR</div>
        </td>
        <td>96000</td>
        <td>16 Jun 2023</td>
        <td>
            <button class="btn btn-delete" id="1" onclick="remove(this)">Delete</button>
            <button class="btn btn-update" id="1" onclick="update(this)">Update</button>
        </td>
    </tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
} 
*/

// 
/* 
const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salaly</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr>
            <td>
                <img class="profile" src="Images/profile3.jpeg" alt="profile">
            </td>
            <td>Vedant Patil</td>
            <td>Male</td>
            <td>
                <div class="dept-label">IT</div>
                <div class="dept-label">HR</div>
            </td>
            <td>96000</td>
            <td>16 Jun 2023</td>
            <td>
                <button class="btn btn-delete" id="1" onclick="remove(this)">Delete</button>
                <button class="btn btn-update" id="1" onclick="update(this)">Update</button>
            </td>
        </tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
}
 */


/* 
const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salaly</th><th>Start Date</th><th>Actions</th>";
    let empPayrollData = createEmployeePayrollJSON()[0];
    const innerHtml = `${headerHtml}
        <tr>
            <td>
                <img class="profile" src="${empPayrollData._profilePic}" alt="profile">
            </td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>
                <div class="dept-label">${empPayrollData._department[0]}</div>
                <div class="dept-label">${empPayrollData._department[1]}</div>
            </td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <button name="${empPayrollData._id}" class="btn btn-delete" id="1" onclick="remove(this)">Delete</button>
                <button name="${empPayrollData._id}" class="btn btn-update" id="1" onclick="update(this)">Update</button>
            </td>
        </tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
}
*/

// 

let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHTML();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salaly</th><th>Start Date</th><th>Actions</th>";
    if (empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for(const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" src="${empPayrollData._profilePic}" alt="profile"></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <button name="${empPayrollData._id}" class="btn btn-delete" onclick="remove(this)">Delete</button>
                    <button name="${empPayrollData._id}" class="btn btn-update" onclick="update(this)">Update</button>
                </td>
            </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Vedant Patil',
            _gender: 'Male',
            _department: ['Engineering', 'IT'],
            _salary: '50000',
            _startDate: '16 Jun 2023',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: 'Images/profile3.jpeg'
        },
        {
            _name: 'Janhavi Patil',
            _gender: 'Female',
            _department: ['Marketing', 'Sales', 'Finance'],
            _salary: '30000',
            _startDate: '28 Jun 2023',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: 'Images/profile4.jpeg'
        }
    ];
    return empPayrollListLocal;
}