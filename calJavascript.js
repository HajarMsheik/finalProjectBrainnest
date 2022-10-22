class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }

/*////////variables/////////////*/ 
var screen=document.getElementById("screen");
var currentChar, prevChar;
var numChar;
var q=new Queue();
q.enqueue("0");
q.enqueue("+");
var flag=false;
var operations=['+','-','*','/'];
/*//////////functions//////////*/ 
function clearScreen(){
    screen.value="";
    q.enqueue("0");
    q.enqueue("+");
}
/////////////////////////////////////////
function display(c){ 
  if(flag==true) {
    screen.value="";
  }
    

  screen.value+=c;
  flag=false;

 currentChar=c;
 numChar=screen.value.length;
 getprevChar();

}

// //////////////////////////////////////////////
function operate(c){
    if(flag==false) { //condition in order not to add to operations
        q.enqueue(screen.value);
        var operand1=q.dequeue();
        var operation=q.dequeue();
        var operand2=q.dequeue();
        var result;
        if(operation =="+")
        {
            result= parseFloat(operand1) + parseFloat(operand2);
        }
        if(operation =="-")
        {
          result= parseFloat(operand1) - parseFloat(operand2);
        }
        if(operation =="/")
        {
          result= parseFloat(operand1) / parseFloat(operand2);
        }
        if(operation =="*")
        {
          result= parseFloat(operand1) * parseFloat(operand2);
        }
        if(operation =="%")
        {
          result= parseFloat(operand1) % parseFloat(operand2);
        }
        q.enqueue(result);
        screen.value=result;
        q.enqueue(c);
        flag = true;
    }else{
        var operand = q.dequeue();
        q.dequeue();
        q.enqueue(operand);
        q.enqueue(c)
    }
}

function calculate() {
    q.enqueue(screen.value);
    var operand1=q.dequeue();
    var operation=q.dequeue();
    var operand2=q.dequeue();
    var result;
    if(operation =="+")
    {
        result= parseFloat(operand1) + parseFloat(operand2);
    }
    if(operation =="-")
    {
      result= parseFloat(operand1) - parseFloat(operand2);
    }
    if(operation =="/")
    {
      result= parseFloat(operand1) / parseFloat(operand2);
    }
    if(operation =="*")
    {
      result= parseFloat(operand1) * parseFloat(operand2);
    }
    if(operation =="%")
    {
      result= parseFloat(operand1) % parseFloat(operand2);
    }
    screen.value=result;
    q.enqueue("0");
    q.enqueue("+");
    
}

////////////////////////////////////
function getprevChar(){
   prevChar=screen.value.substring(numChar-2,numChar-1);
   checksyntax();

}
function checksyntax(){
 if(operations.includes(currentChar) && numChar==1){
    removeChar(); 
 }

 if(operations.includes(prevChar)&& operations.includes(currentChar)){
      if(prevChar==currentChar){
        removeChar();
      }
      else{
        overwrite();
      }
 }
}
function overwrite(){
    screen.value=screen.value.slice(0,numChar-2)+screen.value.slice(numChar-1);
}

function removeChar(){
    screen.value=screen.value.substring(0,numChar-1);
}
//////////x symbol //////////////////
function removeNb(){
    numChar=screen.value.length;
    screen.value = screen.value.slice(0, numChar -1);
}



