class Calculator2 {
    constructor() {
        this.inputNumberOne = document.getElementById('num1');
        this.inputNumberTwo = document.getElementById('num2');
        this.sumButton = document.getElementById('sum');
        this.result = document.getElementById('result');
        this.wireEvents();
    }
    wireEvents() {
        this.sumButton.addEventListener('click', event => {
            let num1 = Number(this.inputNumberOne.value);
            let num2 = Number(this.inputNumberTwo.value);
            this.result.innerHTML = this.suma(num1, num2).toString();
        });
    }
    suma(num1, num2) {
        return num1 + num2;
    }
}
window.onload = function () {
    new Calculator2();
};
