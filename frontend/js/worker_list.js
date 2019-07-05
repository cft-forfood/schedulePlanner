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
    showEmployeeList: () => {
        let cooksArr = model.filterEmployeeList('Повар');
        let waitersArr = model.filterEmployeeList('Официант');

        view.showEmployeeList(cooksArr, 'cooks', 'Повара');
        view.showEmployeeList(waitersArr, 'waiters', 'Официанты');
    },
    showEmployeeMenu: () => {
        view.showEmployeeMenu(model.getWorkers);
    },
    data: []
};

window.onload = () => {

    // $.ajax({
    //     type: 'GET',
    //     url: 'https://cors-anywhere.herokuapp.com/http://bosses.sharapov.uz:8800/workers',
    //     success: function (data) {
    //         model.getWorkers = data;
    //         console.log(model.getWorkers)
    //     }
    // });

    controller.openMenu();
    controller.showEmployeeList();
    controller.showEmployeeMenu();
};