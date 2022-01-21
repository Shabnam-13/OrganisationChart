var addNewItemBtns = document.getElementsByClassName('addBtn');
var removeItemBtns = document.querySelectorAll('.removeBtn');
var renameItemBtns = document.querySelectorAll('.renameBtn');
var titles = document.querySelectorAll('h2');

for(const title of titles){
    title.addEventListener('click',()=>{
        var input = title.nextElementSibling;
        var renameBtn = input.nextElementSibling;
        input.style.display = "block";
        renameBtn.style.display = "inline-block";
    })
}

for(const btn of renameItemBtns){
    btn.addEventListener('click',()=>{
        var input = btn.previousElementSibling;
        var title = input.previousElementSibling;
        if(input.value != ""){
            title.innerText=input.value;
        }
        input.style.display = "none";
        btn.style.display = "none";
    })
}

for (const btn of addNewItemBtns) {
    btn.addEventListener('click', (e) => {
        var parentNode = btn.parentElement.parentElement;
        var childNode = btn.parentElement.nextElementSibling;

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
                <h2>New Item</h2>
                <input type="text">
                <div class="renameBtn fas fa-check-circle"></div>
                <div class="addBtn fas fa-plus-circle"></div>
                <div class="removeBtn fas fa-times-circle"></div>
            </div>
        </li>`

        childNode.insertAdjacentHTML('beforeend', li);
    })
}

for (const btn of removeItemBtns) {
    btn.addEventListener('click',()=>{
        var parentNode = btn.parentElement.parentElement;
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
    })
}