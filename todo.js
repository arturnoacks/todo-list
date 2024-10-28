
// apaga itens
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    

// troca a classe do item da lista para checked
    var list = document.querySelector('ul');
    if(list != null)
        list.addEventListener('click',
        function(ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }, 
        false);

// se apertar enter, adiciona item na lista
    document.addEventListener("keypress",
        function(ev){
        if(ev.key === "Enter")
            newItem();
        },
        false);
    

// adiciona item na lista
function newItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input-id").value;
    var t = document.createTextNode(inputValue);
    li.className = "listItem";
    li.onclick = function() {
        li.classList.toggle('checked');
    }
    li.appendChild(t);

    if (inputValue != '') 
        document.getElementById("list-id").appendChild(li);
    document.getElementById("input-id").value = "";

    var btn = document.createElement("span");
    btn.className = "close";
    btn.innerHTML = "\u00D7";
    
    li.appendChild(btn);


    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
} 