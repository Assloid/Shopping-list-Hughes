let text = document.getElementById("searchbox").value;
let list = document.createElement("list");
let node = document.createTextNode(text);

list.innerHTML = "<i class='closeButton'>X</i>";
let close = document.getElementsByClassName("closeButton");

let i;
for(i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}


function addItemFunction() {
    const shoppingList = document.getElementById("shopping");
    const itemText = document.getElementById("searchbox").value;

  if (itemText !== "") {

    const listItem = document.createElement("li");
    listItem.textContent = itemText;

    shoppingList.appendChild(listItem);

    itemText.value = "";
  }
    
    
}

