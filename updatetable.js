var y;
var yfield = document.getElementById("y");
yfield.addEventListener("change", function (element) {
    y = element.target.value;
    console.log(y);
});
//выбор Y

var xfield = document.getElementById('x');
var x;
xfield.addEventListener("change", function () {
    x = this.value;
    // this в этом контексте - элемент, который запустил фукнцию. То же, что и select.value;
    console.log(x);
});
//выбор X

var r = 0;
var zfield1 = document.getElementById('r1');

zfield1.addEventListener("change", function () {
    let choise = document.getElementById('r1').value;
    console.log(choise);
    r = choise;
});

var zfield2 = document.getElementById('r2');

zfield2.addEventListener("change", function () {
    let choise = document.getElementById('r2').value;
    console.log(choise);
    r = choise;
});

var zfield3 = document.getElementById('r3');

zfield3.addEventListener("change", function () {
    let choise = document.getElementById('r3').value;
    console.log(choise);
    r = choise;
});

var zfield4 = document.getElementById('r4');

zfield4.addEventListener("change", function () {
    let choise = document.getElementById('r4').value;
    console.log(choise);
    r = choise;
});

var zfield5 = document.getElementById('r5');

zfield5.addEventListener("change", function () {
    let choise = document.getElementById('r5').value;
    console.log(choise);
    r = choise;
});

//мегакривой выбор R


function showError(message) {
    $('#errors').append(`<li text-align: center >${message}</li>`);
}

function takeRequest(status, text) {
    console.log(text);
    let Answer = text;
    if (Answer == "number_is_not_numeric") {
        const table = document.getElementById("result-table1");
        const tbody = table.getElementsByTagName("tbody")[0];
        const row = document.createElement("tr");
        const cell_x = document.createElement("td");
        cell_x.innerHTML = "number_is_not_numeric";
        row.appendChild(cell_x);
    } else {
        let arr = [6];
        for (i = 0; i < 6; i++) {
            arr[i] = "";
        }
        let k = 0;
        while (k < 6) {
            for (i = 0; i < Answer.length; i++) {
                if (Answer[i] == '/') {
                    k++;
                } else {
                    arr[k] = arr[k] + Answer[i];
                }
            }
        }
        if (arr[0] == "61") {
            arr[0] = "Попал";
        } else {
            arr[0] = "Не попал!";
        }

        const table = document.getElementById("result-table");
        const tbody = table.getElementsByTagName("tbody")[0];
        const row = document.createElement("tr");
        const cell_x = document.createElement("td");
        const cell_y = document.createElement("td");
        const cell_R = document.createElement("td");
        const cell_hit = document.createElement("td");
        const cell_request_time = document.createElement("td");
        const cell_timing = document.createElement("td");
        cell_x.innerHTML = arr[1];
        cell_y.innerHTML = arr[2];
        cell_R.innerHTML = arr[3];
        cell_hit.innerHTML = arr[0];
        cell_request_time.innerHTML = arr[4];
        cell_timing.innerHTML = arr[5];
        row.appendChild(cell_x);
        row.appendChild(cell_y);
        row.appendChild(cell_R);
        row.appendChild(cell_hit);
        row.appendChild(cell_request_time);
        row.appendChild(cell_timing);
        tbody.appendChild(row);
        for (i = 0; i < 6; i++) {
            console.log(arr[i]);
        }
        // for (let j in arr) {
        //     const element = document.getElementById(j);
        //     if (element) {
        //         element.innerHTML = (arr[j]);
        //     }
        // };


        //generateRowFromElem(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
        //submit();
    }
}


var button = document.getElementById("button");
button.addEventListener("click", function (e) {
    $('#errors').empty();
    if (isNaN(parseFloat(y))) {
        showError("Ошибка: Y не является числом");
    } else if (y.length >= 18 && (y[0] == 5 || y[1] == 5)){
        showError("Ведите число с меньшим количеством цифр после запятой");
    } else {
        if (y > 5 || y < -5) {
            showError("Ошибка: Y не входит в область допустимых значений");
        } else {
            e.preventDefault();
            let xhr = new XMLHttpRequest();
            xhr.open("get", "checkbox.php?x=" + x + "&y=" + y + "&r=" + r
                + "&startTime=" + new Date().getTime() + '&timeZone=' + new Date().getTimezoneOffset());
            xhr.onloadend = () => {
                takeRequest(xhr.status, xhr.responseText);
            }
            xhr.send();
        }
    }
});
