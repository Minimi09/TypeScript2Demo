class Calculator2 {
 
      private inputNumberOne: HTMLInputElement;
      private inputNumberTwo: HTMLInputElement;
      private sumButton : HTMLButtonElement;
      private result: HTMLSpanElement;

      constructor(){
        this.inputNumberOne = <HTMLInputElement> document.getElementById('num1');
        this.inputNumberTwo = <HTMLInputElement> document.getElementById('num2');
        this.sumButton = <HTMLButtonElement> document.getElementById('sum');
        this.result = <HTMLSpanElement> document.getElementById('result');

            this.wireEvents();
      }

    wireEvents(){
        this.sumButton.addEventListener('click',event=>{
            let num1 = Number(this.inputNumberOne.value);
        let num2 = Number(this.inputNumberTwo.value);
        this.result.innerHTML=this.suma(num1,num2).toString();
        });
        
    }

    suma(num1 : number, num2 :number) : number
    {
        return num1+num2;
    }
}

window.onload = function()
{
  new Calculator2();
  
}