let model = {
    getWorkers: [
        {
            id: 1,
            workerName: "Волков Аскольд Федотович",
            category: "Повар",
            phoneNumber: 74954359015
        },
        {
            id: 2,
            workerName: "Медведев Лев Артемович",
            category: "Повар",
            phoneNumber: 74952146836
        },
        {
            id: 3,
            workerName: "Александрова Джульетта Леонидовна",
            category: "Официант",
            phoneNumber: 74950989007
        },
        {
            id: 4,
            workerName: "Романов Осип Петрович",
            category: "Официант",
            phoneNumber: 74954870783
        },
        {
            id: 5,
            workerName: "Максимова Василиса Андреевна",
            category: "Официант",
            phoneNumber: 74951901053
        }
    ],
    getShifts: [
        {
            id: 11,
            date: 1561914000000,
            workerId: 1,
            status: null
        },
        {
            id: 12,
            date: 1561914000000,
            workerId: 2,
            status: null
        },
        {
            id: 13,
            date: 1562000400000,
            workerId: 1,
            status: "isCancelled"
        },
        {
            id: 14,
            date: 1562000400000,
            workerId: 2,
            status: null
        },
        {
            id: 15,
            date: 1562086800000,
            workerId: 1,
            status: null
        },
        {
            id: 16,
            date: 1562086800000,
            workerId: 2,
            status: null
        },
        {
            id: 17,
            date: 1562173200000,
            workerId: 1,
            status: null
        },
        {
            id: 18,
            date: 1562173200000,
            workerId: 2,
            status: null
        },
        {
            id: 19,
            date: 1562259600000,
            workerId: 1,
            status: "isCancelled"
        },
        {
            id: 20,
            date: 1562259600000,
            workerId: 2,
            status: null
        },
        {
            id: 21,
            date: 1562346000000,
            workerId: 1,
            status: null
        },
        {
            id: 22,
            date: 1562346000000,
            workerId: 2,
            status: "isCancelled"
        },
        {
            id: 23,
            date: 1562432400000,
            workerId: 1,
            status: null
        },
        {
            id: 24,
            date: 1562432400000,
            workerId: 2,
            status: "isCancelled"
        }
    ],
    getMonday: function (date) {
        date = new Date(date);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        let day = date.getDay();
        let diff = date.getDate() - day + (day === 0 ? -6:1);

        return new Date(date.setDate(diff));
    },
    formatDate: function (date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;

        return day + '.' + month + '.' + year;
    }
};

let view = {
    showEmployeeMenu: function (arr) {
        let empName = document.getElementById('employeeNameMenu');
        let empInfo = document.getElementById('employeeMenuInfo');

        empName.textContent = arr[0].workerName;

        let empCategory = document.createElement('p');
        empCategory.className = 'category';
        empCategory.textContent = arr[0].category;
        empInfo.appendChild(empCategory);

        let empPhone = document.createElement('p');
        empPhone.className = 'telephone';
        empPhone.textContent = arr[0].phoneNumber;
        empInfo.appendChild(empPhone);
    },
    showVacation: function (emp) {
        let shiftDiv = document.getElementById('vacationDiv');

        let empTable = document.createElement('table');
        empTable.id = 'vacationList';
        shiftDiv.appendChild(empTable);

        let headerRow = document.createElement('tr');
        empTable.appendChild(headerRow);

        let date = model.getMonday(new Date());

        let dayCell = document.createElement('th');
        dayCell.className = 'shift-date';
        headerRow.appendChild(dayCell);

        let dayFormatted = document.createElement('span');
        dayFormatted.textContent = model.formatDate(date);
        dayCell.appendChild(dayFormatted);

        let dayUTC = document.createElement('span');
        dayUTC.style.display = 'none';
        dayUTC.textContent = date;
        dayUTC.id = 'shift-1';
        dayCell.appendChild(dayUTC);

        for (let i = 0; i < 6; i++) {
            date.setDate(date.getDate() + 1);

            let dayCell = document.createElement('th');
            dayCell.className = 'shift-date';
            headerRow.appendChild(dayCell);

            let dayFormatted = document.createElement('span');
            dayFormatted.textContent = model.formatDate(date);
            dayCell.appendChild(dayFormatted);

            let dayUTC = document.createElement('span');
            dayUTC.style.display = 'none';
            dayUTC.textContent = date;
            dayUTC.id = 'shift-' + (i + 2);
            dayCell.appendChild(dayUTC);
        }

        let empRow = document.createElement('tr');
        empRow.id = emp.id;
        empTable.appendChild(empRow);

        for (let i = 0; i < 7; i++) {
            let emptyCell = document.createElement('td');
            emptyCell.className = 'shift-cancel';
            empRow.appendChild(emptyCell);
        }

        let buttonDiv = document.createElement('div');
        buttonDiv.classList = 'row center mt25';
        shiftDiv.appendChild(buttonDiv);

        let button = document.createElement('button');
        button.className = 'btn-green';
        button.textContent = 'Подтвердить';
        buttonDiv.appendChild(button);
    },
    setVacationId: function (arr, emp) {
        for (let j = 0; j < arr.length; j++) {
            let empTr = document.getElementById(emp);
            let empShifts = empTr.getElementsByClassName('shift-cancel');

            for (let i = 0; i < empShifts.length; i++) {
                let dayId = document.getElementById('shift-' + (i + 1));
                let dayShiftWeek = Date.parse(dayId.textContent);

                if (dayShiftWeek === arr[j].date) {
                    empShifts[i].id = arr[j].id;
                }
            }
        }
    },
    setVacation: function (arr) {
        let shiftCell = document.getElementsByClassName('shift-cancel');

        for (let shift of shiftCell) {
            shift.onclick = function () {
                let cell = this.id;

                if (this.classList.contains('isCancelled')) {
                    this.classList.remove('isCancelled');

                    for (let empShift of arr) {
                        console.log(empShift);
                        if (+empShift.id === +cell) {
                            empShift.status = null;
                            console.log(empShift);
                        }
                    }
                } else {
                    this.classList.add('isCancelled');

                    for (let empShift of arr) {
                        console.log(empShift);
                        if (+empShift.id === +cell) {
                            empShift.status = 'isCancelled';
                            console.log(empShift);
                        }
                    }
                }
            }
        }
    },
};

let controller = {
    openMenu: () => {
        let menu = document.getElementById('menu');
        let dropdown = document.getElementById('drop');

        menu.onmouseenter = function () {
            dropdown.classList.add('menu-open');
        };
        menu.onmouseleave = function () {
            dropdown.classList.remove('menu-open');
        }
    },
    showEmployeeMenu: () => {
        view.showEmployeeMenu(model.getWorkers);
    },
    showVacation: () => {
        view.showVacation(model.getWorkers[0]);
    },
    setVacationId: () => {
        for (let shiftDay of model.getShifts) {
            view.setVacationId(model.getShifts, model.getWorkers[0].id);
        }
    },
    setVacation: () => {
        view.setVacation(model.getShifts);
    },
};

window.onload = () => {
    controller.openMenu();
    controller.showEmployeeMenu();
    controller.showVacation();
    controller.setVacationId();
    controller.setVacation();
};