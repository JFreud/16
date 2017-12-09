var list = document.getElementById("thelist");
var elements = document.getElementsByTagName("li");
var num = 8;

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

var heading = document.getElementById("h");
var changeTitle = function(e){
  heading.innerHTML = this.innerHTML;
};

var changeBack = function(e){
  heading.innerHTML = "Hello World!";
};

var removed = function(e){
  this.innerHTML = "remove";
  list.removeChild(this);
};

for (i = 0; i<elements.length; i++){
  var element = elements[i];
  element.addEventListener("mouseover", changeTitle);
  element.addEventListener("mouseleave", changeBack);
  element.addEventListener("click", removed);
}
