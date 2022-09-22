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

// $(document).ready(function(){
//     $.get("checkbox.php", {
//         'state': 1
//     }).done(function (data) {
//         $('#result-table tr:first').after(data);
//     });
// });


function showError(message) {
    $('#errors').append(`<li text-align: center >${message}</li>`);
}

function takeRequest(status, text) {
    console.log('#');
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
        let arr = [];
        let arrtable = [];
        for (i = 0; i < 6; i++) {
            arr[i] = "";
        }
        //// 1 версия
        // let k = 0;
        // let stopline = 0;
        // while (k < 6) {
        //     for (i = 0; i < Answer.length; i++) {
        //         if(Answer[i] ==';'){
        //             stopline = i;
        //             k=7;
        //             break;
        //         }
        //         else if (Answer[i] == '/') {
        //             k++;
        //         } else {
        //             arr[k] = arr[k] + Answer[i];
        //         }
        //     }
        // }
        // arrtable.push([arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]]);
        // stopline++;
        // for (i = 0; i < 6; i++) {
        //     arr[i] = "";
        // }
        // console.log(Answer[stopline]);
        // k = 0;
        // while (k < 6) {
        //     for (i = stopline; i < Answer.length; i++) {
        //         if(Answer[i] ==';'){
        //             stopline = i;
        //             k=7;
        //         }
        //         else if (Answer[i] == '/') {
        //             k++;
        //         } else {
        //             arr[k] = arr[k] + Answer[i];
        //         }
        //     }
        // }
        // arrtable.push([arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]]);

        //////////////////////////////////////////////////////////////


        ////////////////2 версия
        // let requestln = 0;
        // let requestsnumber = "";
        // for (i = 0; i < Answer.length; i++) {
        //     if(Answer[i] != '!') {
        //         requestsnumber = requestsnumber + Answer[i];
        //     }
        //     else{
        //         requestln = i;
        //         break;
        //     }
        // }
        // console.log(requestsnumber);
        // let k = 0;
        // let stopline = requestln + 1;
        // let k1 = 0;
        // while (k1 < 2) {
        //     while (k < 6) {
        //         for (i = stopline; i < Answer.length; i++) {
        //             if (Answer[i] == ';') {
        //                 stopline = i + 1;
        //                 k = 7;
        //                 break;
        //             } else if (Answer[i] == '/') {
        //                 k++;
        //             } else {
        //                 arr[k] = arr[k] + Answer[i];
        //             }
        //         }
        //     }
        //     arrtable.push([arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]]);
        //     k=0;
        //     k1++;
        //     for (i = 0; i < 6; i++) {
        //         arr[i] = "";
        //     }
        // }


        ///////////////////////////////////////////////////////////////////////////
        let requestln = 0;
        var requestsnumber = "";
        for (i = 0; i < Answer.length; i++) {
            if (Answer[i] != '!') {
                requestsnumber = requestsnumber + Answer[i];
            } else {
                requestln = i;
                break;
            }
        }
        console.log("Номер запроса", requestsnumber);
        requestsnumber = Number(requestsnumber);
        let k = 0;
        let stopline = requestln + 1;
        let k1 = 1;
        while (k1 <= requestsnumber) {
            while (k < 6) {
                for (i = stopline; i < Answer.length; i++) {
                    if (Answer[i] == ';') {
                        stopline = i + 1;
                        k = 7;
                        break;
                    } else if (Answer[i] == '/') {
                        k++;
                    } else {
                        arr[k] = arr[k] + Answer[i];
                    }
                }
            }
            arrtable.push([arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]]);
            console.log(arr[0]);
            console.log(arr[1]);
            console.log(arr[2]);
            console.log(arr[3]);
            console.log(arr[4]);
            console.log(arr[5]);
            console.log(k1, requestsnumber);
            console.log(k1 + requestsnumber);
            k = 0;
            k1++;
            for (i = 0; i < 6; i++) {
                arr[i] = "";
            }
        }
        /////////////////////////////////////////////////////////////////////////////

        console.log(arrtable);

        $("tbody").empty();

        const table = document.getElementById("result-table");
        const tbody = table.getElementsByTagName("tbody")[0];
        const row = document.createElement("tr");
        const cell_x = document.createElement("th");
        const cell_y = document.createElement("th");
        const cell_R = document.createElement("th");
        const cell_hit = document.createElement("th");
        const cell_request_time = document.createElement("th");
        const cell_timing = document.createElement("th");

        cell_x.innerHTML = 'X';
        cell_y.innerHTML = 'Y';
        cell_R.innerHTML = 'R';
        cell_hit.innerHTML = 'Результат';
        cell_request_time.innerHTML = "Время исполнения";
        cell_timing.innerHTML = "Попадание";
        row.appendChild(cell_x);
        row.appendChild(cell_y);
        row.appendChild(cell_R);
        row.appendChild(cell_hit);
        row.appendChild(cell_request_time);
        row.appendChild(cell_timing);
        tbody.appendChild(row);

        //localStorage.setItem("myKey",JSON.stringify(arr));
        arrtable.forEach((element) => {
            console.log(element)
            const table = document.getElementById("result-table");
            const tbody = table.getElementsByTagName("tbody")[0];
            const row = document.createElement("tr");
            const cell_x = document.createElement("td");
            const cell_y = document.createElement("td");
            const cell_R = document.createElement("td");
            const cell_hit = document.createElement("td");
            const cell_request_time = document.createElement("td");
            const cell_timing = document.createElement("td");
            cell_x.innerHTML = element[0];
            cell_y.innerHTML = element[1];
            cell_R.innerHTML = element[2];
            cell_hit.innerHTML = element[3];
            cell_request_time.innerHTML = element[4];
            cell_timing.innerHTML = element[5];
            row.appendChild(cell_x);
            row.appendChild(cell_y);
            row.appendChild(cell_R);
            row.appendChild(cell_hit);
            row.appendChild(cell_request_time);
            row.appendChild(cell_timing);
            tbody.appendChild(row);
        })
        // for (i = 0; i < 6; i++) {
        //     console.log(arr[i]);
        // }
    }
}

    // $(document).ready(function () {
    //     let xhr = new XMLHttpRequest();
    //     xhr.open("GET", "checkbox.php?x=" + 0 + "&y=" + 0 + "&r=" + 0
    //         + "&startTime=" + new Date().getTime() + '&timeZone=' + new Date().getTimezoneOffset());
    //     xhr.onloadend = () => {
    //         takeRequest(xhr.status, xhr.responseText);
    //     }
    //     xhr.send();
    // });


var button = document.getElementById("button");
button.addEventListener("click", function (e) {
    $('#errors').empty();
    if (isNaN(parseFloat(y))) {
        showError("Ошибка: Y не является числом");
    } else if (y.length >= 18 && (y[0] == 5 || y[1] == 5)) {
        showError("Ведите число с меньшим количеством цифр после запятой");
    } else {
        if (y > 5 || y < -5) {
            showError("Ошибка: Y не входит в область допустимых значений");
        } else {
            e.preventDefault();
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "checkbox.php?x=" + x + "&y=" + y + "&r=" + r
                + "&startTime=" + new Date().getTime() + '&timeZone=' + new Date().getTimezoneOffset());
            xhr.onloadend = () => {
                takeRequest(xhr.status, xhr.responseText);
            }
            xhr.send();
        }
    }
});