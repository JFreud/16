var list = document.getElementById("thelist");
var listfib = document.getElementById("listfib");
var elements = document.getElementsByTagName("li");
var num = 8;
var curfib = 1;


var fib = function(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

var addElement = function(e){
  var newthing = document.createElement("li");
  newthing.innerHTML = "thing " + num;
  num++;
  list.appendChild(newthing);
  newthing.addEventListener("mouseover", changeTitle);
  newthing.addEventListener("mouseleave", changeBack);
  newthing.addEventListener("click", removed);
};

var button = document.getElementById("b");
button.addEventListener("click", addElement);

var fibutton = document.getElementById("bfib");
fibutton.addEventListener("click", addFib);

var heading = document.getElementById("h");
var changeTitle = function(e){
  heading.innerHTML = this.innerHTML;
};

var changeBack = function(e){
  heading.innerHTML = "Hello World!";
};

var removed = function(e){
  this.innerHTML = "remove";
  num--;
  list.removeChild(this);
};

var fibremoved = function(e){
  this.innerHTML = "remove";
  curfib--;
  list.removeChild(this);
};

var addFib = function(e) {
  console.log("afboawbaw");
  var newt = document.createElement("li");
  console.log(fib(curfib));
  newt.innerHTML = "" + fib(curfib);
  curfib++;
  listfib.appendChild(newt);
  newt.addEventListener("mouseover", changeTitle);
  newt.addEventListener("mouseleave", changeBack);
  newt.addEventListener("click", fibremoved);
}

for (i = 0; i<elements.length; i++){
  var element = elements[i];
  element.addEventListener("mouseover", changeTitle);
  element.addEventListener("mouseleave", changeBack);
  element.addEventListener("click", removed);
}
