import "./styles.css";

window.appendList = function appendList() {
  var ul = document.getElementById("listitems");
  var li = document.createElement("li");
  var item = document.getElementById("item");
  li.appendChild(document.createTextNode(item.value));
  ul.appendChild(li);
};

window.deleteList = function deleteList() {
  var ul = document.getElementById("listitems");
  while (ul.firstChild) ul.removeChild(ul.firstChild);
};
