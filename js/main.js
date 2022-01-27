var addNewItemBtns = document.querySelectorAll('.addBtn');
var removeItemBtns = document.querySelectorAll('.removeBtn');
var renameItemBtns = document.querySelectorAll('.renameBtn');
var titles = document.querySelectorAll('h2');

//Methods
function removeItem(el){
        var parentNode = el.parentElement.parentElement;
        console.log(parentNode);
        var modal = document.querySelector(".confirmModal");
        const yesBtn = document.querySelector(".yesBtn");
        const noBtn = document.querySelector(".noBtn");

        modal.style.display = "block";

        yesBtn.addEventListener('click',()=>{
            parentNode.remove();
            modal.style.display = "none";
        })

        noBtn.addEventListener('click',()=>{
            modal.style.display = "none";
        })
}

function addItem(el){
    var parentNode = el.parentElement.parentElement;
    var childNode = el.parentElement.nextElementSibling;

    if (childNode == null) {
        childNode = document.createElement("ul");
        parentNode.appendChild(childNode);
    }

    // var li = document.createElement("li");
    // var node = document.createElement("div");
    // var addBtn = document.createElement("div");
    // var removeBtn = document.createElement("div");
    // var renameBtn = document.createElement("div");
    // var input=document.createElement("input");
    // var title = document.createElement("h2");

    // node.setAttribute("class","node");
    // title.innerText = "New Item";

    // renameBtn.setAttribute("class","renameBtn fas fa-check-circle");
    // addBtn.setAttribute("class","addBtn fas fa-plus-circle");
    // removeBtn.setAttribute("class","removeBtn fas fa-times-circle");

    // node.appendChild(title);
    // node.appendChild(input);
    // node.appendChild(renameBtn);
    // node.appendChild(addBtn);
    // node.appendChild(removeBtn);
    // li.appendChild(node);
    // childNode.appendChild(li);

    var li = ` <li>
        <div class="node">
            <h2 onclick="titleClikMethod(this)">New Item</h2>
            <input type="text">
            <div class="renameBtn fas fa-check-circle" onclick="renameItem(this)"></div>
            <div class="addBtn fas fa-plus-circle" onclick="addItem(this)"></div>
            <div class="removeBtn fas fa-times-circle" onclick="removeItem(this)"></div>
        </div>
    </li>`

    childNode.insertAdjacentHTML('beforeend', li);
}

function renameItem(el){
    var input = el.previousElementSibling;
    var title = input.previousElementSibling;
    if(input.value != ""){
        title.innerText=input.value;
    }
    input.style.display = "none";
    el.style.display = "none";
}

function titleClikMethod(el){
    var input = el.nextElementSibling;
    var renameBtn = input.nextElementSibling;
    input.style.display = "block";
    renameBtn.style.display = "inline-block";
}

//Events
for(const title of titles){
    title.addEventListener('click',function(){
        titleClikMethod(this);
    })
}

for(const btn of renameItemBtns){
    btn.addEventListener('click',function(){
        renameItem(this);
    })
}

for (const btn of addNewItemBtns) {
    btn.addEventListener('click', function(){
        addItem(this);
    })
}

for (var i=0; i< removeItemBtns.length; i++) {
    removeItemBtns[i].addEventListener('click',function(){
        removeItem(this);
    });
}
