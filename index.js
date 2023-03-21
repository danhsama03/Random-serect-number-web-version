"use strict";
exports.__esModule = true;
function reset() {
    var max = 16, min = 15;
    var serectNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    var inputNumber = document.getElementById("number");
    inputNumber.value = String("");
    var span = document.getElementById("count");
    span.innerHTML = String("3");
    var p = document.getElementById("result");
    p.innerHTML = String("");
}
function check() {
    var inputNumber = document.getElementById("number");
    var numberCheck = Number(inputNumber.value);
    var span = document.getElementById("count");
    var p = document.getElementById("result");
    if (span.innerHTML == String("3")) {
        span.innerHTML = String("2");
        if (numberCheck == serectNumber) {
            p.innerHTML = String("100 diem");
        }
        else {
            if (numberCheck < serectNumber) {
                p.innerHTML = String("Số của bạn nhỏ quá");
            }
            else {
                p.innerHTML = String("Số của bạn lớn quá");
            }
            ;
        }
        ;
    }
    else if (span.innerHTML == String("2")) {
        span.innerHTML = String("1");
        if (numberCheck == serectNumber) {
            p.innerHTML = String("50 diem");
        }
        else {
            if (numberCheck < serectNumber) {
                p.innerHTML = String("Số của bạn nhỏ quá");
            }
            else {
                p.innerHTML = String("Số của bạn lớn quá");
            }
            ;
        }
    }
    else {
        span.innerHTML = String("0");
        if (numberCheck == serectNumber) {
            p.innerHTML = String("30 diem");
        }
        else {
            p.innerHTML = String("Game Over");
        }
        ;
    }
    ;
}
;
