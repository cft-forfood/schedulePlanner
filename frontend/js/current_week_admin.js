let model = {
    getWorkers: [
        {
            id: 0,
            workerName: "Петрова Ольга Анатольевна",
            category: "Администратор",
            phoneNumber: 74957387076
        },
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
            status: "isAssigned"
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
            status: "isAssigned"
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
            status: "isAssigned"
        },
        {
            id: 16,
            date: 1562086800000,
            workerId: 2,
            status: "isAssigned"
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
            status: "isAssigned"
        },
        {
            id: 19,
            date: 1562259600000,
            workerId: 1,
            status: "isAssigned"
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
            status: "isAssigned"
        },
        {
            id: 22,
            date: 1562346000000,
            workerId: 2,
            status: "isAssigned"
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
            status: "isAssigned"
        },
        {
            id: 25,
            date: 1561914000000,
            workerId: 3,
            status: "isAssigned"
        },
        {
            id: 26,
            date: 1561914000000,
            workerId: 4,
            status: "isAssigned"
        },
        {
            id: 27,
            date: 1561914000000,
            workerId: 5,
            status: null
        },
        {
            id: 28,
            date: 1562000400000,
            workerId: 3,
            status: "isAssigned"
        },
        {
            id: 29,
            date: 1562000400000,
            workerId: 4,
            status: null
        },
        {
            id: 30,
            date: 1562000400000,
            workerId: 5,
            status: "isAssigned"
        },
        {
            id: 31,
            date: 1562086800000,
            workerId: 3,
            status: null
        },
        {
            id: 32,
            date: 1562086800000,
            workerId: 4,
            status: "isAssigned"
        },
        {
            id: 33,
            date: 1562086800000,
            workerId: 5,
            status: "isAssigned"
        },
        {
            id: 34,
            date: 1562173200000,
            workerId: 3,
            status: null
        },
        {
            id: 35,
            date: 1562173200000,
            workerId: 4,
            status: "isAssigned"
        },
        {
            id: 36,
            date: 1562173200000,
            workerId: 5,
            status: null
        },
        {
            id: 37,
            date: 1562259600000,
            workerId: 3,
            status: "isAssigned"
        },
        {
            id: 38,
            date: 1562259600000,
            workerId: 4,
            status: "isAssigned"
        },
        {
            id: 39,
            date: 1562259600000,
            workerId: 5,
            status: "isAssigned"
        },
        {
            id: 40,
            date: 1562346000000,
            workerId: 3,
            status: "isAssigned"
        },
        {
            id: 41,
            date: 1562346000000,
            workerId: 4,
            status: null
        },
        {
            id: 42,
            date: 1562346000000,
            workerId: 5,
            status: "isAssigned"
        },
        {
            id: 43,
            date: 1562432400000,
            workerId: 3,
            status: "isAssigned"
        },
        {
            id: 44,
            date: 1562432400000,
            workerId: 4,
            status: "isAssigned"
        },
        {
            id: 45,
            date: 1562432400000,
            workerId: 5,
            status: null
        }
    ],
    filterEmployeeList: function (categoryText) {
        return this.getWorkers.filter(function (cat) {
            return cat.category === categoryText;
        });
    },
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
    showEmployeeList: function (arr, id, category) {
        let employeeList = document.getElementById('employeeList');

        let rowDiv = document.createElement('div');
        rowDiv.id = id;
        employeeList.appendChild(rowDiv);

        let categoryDiv = document.createElement('div');
        categoryDiv.className = 'row categories';
        categoryDiv.textContent = category;
        rowDiv.appendChild(categoryDiv);

        for (let employee of arr) {
            let empRowDiv = document.createElement('div');
            empRowDiv.className = 'row';
            rowDiv.appendChild(empRowDiv);

            let nameDiv = document.createElement('div');
            nameDiv.className = 'column-half workers-list';
            nameDiv.textContent = employee.workerName;
            empRowDiv.appendChild(nameDiv);

            let phoneDiv = document.createElement('div');
            phoneDiv.className = 'column-half';
            phoneDiv.textContent = employee.phoneNumber;
            empRowDiv.appendChild(phoneDiv);
        }
    },
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
    showShifts: function (arr) {
        let shiftDiv = document.getElementById('shiftDivCurrent');

        let empTable = document.createElement('table');
        empTable.id = 'shiftListCurrent';
        shiftDiv.appendChild(empTable);

        let headerRow = document.createElement('tr');
        empTable.appendChild(headerRow);

        let headerCell = document.createElement('th');
        headerCell.textContent = 'ФИО сотрудника';
        headerRow.appendChild(headerCell);

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

        arr.forEach((employee) => {
            let empRow = document.createElement('tr');
            empRow.id = employee.id;
            empTable.appendChild(empRow);

            let empCell = document.createElement('td');
            empRow.appendChild(empCell);

            let empCellName = document.createElement('p');
            empCellName.textContent = employee.workerName;
            empCellName.className = 'employee-name';
            empCell.appendChild(empCellName);

            let empCellCategory = document.createElement('p');
            empCellCategory.textContent = employee.category;
            empCellCategory.className = 'employee-category';
            empCell.appendChild(empCellCategory);

            for (let i = 0; i < 7; i++) {
                let emptyCell = document.createElement('td');
                emptyCell.className = 'shift';
                empRow.appendChild(emptyCell);
            }
        });
    },
    setShift: function (arr) {
        let shiftCell = document.getElementsByClassName('shift');

        for (let shift of shiftCell) {
            let cell = this.id;

            for (let empShift of arr) {
                if (+empShift.id === +cell) {
                    this.classList.add(empShift.status);
                }
            }
        }
    },
    setShiftId: function (arr) {
        for (let j = 0; j < arr.length; j++) {
            let empTr = document.getElementById(arr[j].workerId);
            let empShifts = empTr.getElementsByClassName('shift');

            for (let i = 0; i < empShifts.length; i++) {
                let dayId = document.getElementById('shift-' + (i + 1));
                let dayShiftWeek = Date.parse(dayId.textContent);

                if (dayShiftWeek === arr[j].date) {
                    empShifts[i].id = arr[j].id;

                    if (arr[j].status === "isCancelled") {
                        empShifts[i].classList.add('isCancelled');
                    }

                    if (arr[j].status === "isAssigned") {
                        empShifts[i].classList.add('isAssigned');
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
    showShifts: () => {
        view.showShifts(model.getWorkers);
    },
    setShift: () => {
        view.setShift(model.getShifts);
    },
    setShiftId: () => {
        for (let shiftDay of model.getShifts) {
            view.setShiftId(model.getShifts);
        }
    },
};

window.onload = () => {
    controller.openMenu();
    controller.showEmployeeMenu();
    controller.showShifts();
    controller.setShift();
    controller.setShiftId();
};