window.onload = function() {

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

    function loadEmployees() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/', true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
                alert( xhr.status + ': ' + xhr.statusText );
            } else {
                try {
                    let employees = JSON.parse(xhr.responseText);
                } catch (e) {
                    alert( "Некорректный ответ " + e.message );
                }
                showEmployees(employees);
            }

        };
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

            let date = new Date();

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

    setShift();
    openMenu();
};