window.onload = function() {
    setShift();
    setVacation();
    openMenu();
    getCurrentWeekDays();
};

function getEmployees() {
    fetch('http://shift.sharapov.uz:8080', {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data),
    })
        .then(response => console.log)
        .catch();
}

function openMenu() {
    let menu = document.getElementById('menu');
    let dropdown = document.getElementById('drop');

    menu.onmouseenter = function () {
        dropdown.classList.add('menu-open');
    };
    menu.onmouseleave = function () {
        dropdown.classList.remove('menu-open');
    }
}

function showEmployees(employees) {
    let employeeTable = document.getElementById('employeeList');
    employeeTable.innerHTML = '';

    let setWeekDays;
    (setWeekDays = () => {
        let headerRow = document.createElement('tr');
        employeeTable.appendChild(headerRow);

        let headerCell = document.createElement('th');
        headerCell.textContent = 'Сотрудник';
        headerRow.appendChild(headerCell);

        let date = getMonday(new Date());

        for (let i = 0; i < 7; i++) {
            date.setDate(date.getDate() + 1);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            day = day < 10 ? '0' + day : day;
            month = month < 10 ? '0' + month : month;

            let dayCell = document.createElement('th');
            dayCell.textContent = day + '.' + month + '.' + year;
            headerRow.appendChild(dayCell);

            console.log(day + '.' + month + '.' + year);
        }
    })();

    employees.forEach((employee) => {
        let employeeRow = document.createElement('tr');
        employeeTable.appendChild(employeeRow);

        let employeeCell = document.createElement('td');
        employeeCell.textContent = employee.name;
        employeeRow.appendChild(employeeCell);

        for (let i = 0; i < 7; i++) {
            let emptyCell = document.createElement('td');
            emptyCell.className = 'shift';
            employeeRow.appendChild(emptyCell);
        }

        setShift();
    });
}

function setShift() {
    let shiftCell = document.getElementsByClassName('shift');
    for (let i = 0; i < shiftCell.length; i++) {
        shiftCell[i].onclick = function () {
            if (this.classList.contains('shift-selected')) {
                this.classList.remove('shift-selected');
            } else {
                this.classList.add('shift-selected');
            }
        }
    }
}

function setVacation() {
    let shiftCell = document.getElementsByClassName('shift-cancel');
    for (let i = 0; i < shiftCell.length; i++) {
        shiftCell[i].onclick = function () {
            if (this.classList.contains('shift-vacation')) {
                this.classList.remove('shift-vacation');
            } else {
                this.classList.add('shift-vacation');
            }
        }
    }
}

function getMonday(d) {
    d = new Date(d);
    let day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6:1);
    return new Date(d.setDate(diff));
}

function getCurrentWeekDays() {
    let d = getMonday(new Date());
    console.log(d);

    for (let i = 0; i < 6; i++) {
        d.setDate(d.getDate() + 1);

        console.log(d);
    }
}





