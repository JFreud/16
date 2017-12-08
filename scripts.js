var addElement = function(e) {
  var list = document.getElementById("thelist");
  var item = document.createElement("li");
  var text = document.createTextNode("item x");
  item.appendChild(text);
  list.appendChild(item);
}

var button = document.getElementById("b");
button.addEventListener("click", addElement);
