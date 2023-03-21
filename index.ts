function reset(): void {
    
    let inputNumber: HTMLInputElement = <HTMLInputElement>document.getElementById("number");
    inputNumber.value = String("");

    let span: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("count");
    span.innerHTML = String("3");

    let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
    p.innerHTML = String("");
}

function check(): void {
    let max: number = 16, min: number = 15;
    const serectNumber: number = Math.floor(Math.random() * (max - min + 1) ) + min;
    let inputNumber: HTMLInputElement = <HTMLInputElement>document.getElementById("number");
    let numberCheck: number = Number(inputNumber.value);
    let span: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("count");
    let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");

    if (span.innerHTML == String("3")) {
        span.innerHTML = String("2");
        if (numberCheck == serectNumber) {
            p.innerHTML = String("100 diem");
        } else { 
            if (numberCheck < serectNumber) { 
                p.innerHTML = String("Số của bạn nhỏ quá"); 
            } else {  
                p.innerHTML = String("Số của bạn lớn quá");
            };
        };
    } else if (span.innerHTML == String("2")) {
        span.innerHTML = String("1")
        if (numberCheck == serectNumber) {
            p.innerHTML = String("50 diem");
        } else { 
            if (numberCheck < serectNumber) { 
                p.innerHTML = String("Số của bạn nhỏ quá"); 
            } else {  
                p.innerHTML = String("Số của bạn lớn quá");
            };
        }
    } else {
        span.innerHTML = String("0")
        if (numberCheck == serectNumber) {
            p.innerHTML = String("30 diem");
        } else { 
            p.innerHTML = String("Game Over");
        };
    };
};

export {};