window.onload = function() {
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
};