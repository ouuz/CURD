 //新建代办项的打开关闭
 let newTodo = document.querySelector("#new-todo");
 let delBtn = document.querySelector("#addmenu-cancel");
 let addlist = document.querySelector("#addlist");

 function openClose(obj) {
     obj.addEventListener('click', function() {
         addlist.style.display = addlist.style.display == "block" ? "none" : "block";
     });
 }
 openClose(newTodo);
 openClose(delBtn);

 //  增加代办项

 let addSave = document.querySelector("#addmenu-save");
 let List = document.querySelector('#labelList');
 addSave.addEventListener('click', addList);

 function addList() {
     let text = document.querySelector('#addlist-text').value;
     let li = document.createElement('li');

     if (text !== "") {
         li.innerHTML +=
             ` <input type="checkbox" onclick="del_li(this)" class="checkbox">
            <span> ${text} </span>
            <button class = "btn_save" onclick="modify(this)">修改 </button>
            <button class = "btn_del"  onclick="del_li(this)">删除 </button>`;

         List.appendChild(li);
         document.querySelector('#addlist-text').value = "";
         addlist.style.display = "none";
     }
 }


 //删除 和 已完成

 function del_li(obj) {
     let Parentnode = obj.parentNode.parentNode;
     let li = obj.parentNode;
     Parentnode.removeChild(li);

     let liNum = Parentnode.querySelectorAll("li");
     if (!liNum.length) {
         Parentnode.innerHTML += '<li>快来添加待办清单吧!</li>';
     }
 }


 //修改

 function modify(obj) {
     let oldSpan = obj.previousElementSibling.innerText;
     addlist.style.display = "block";
     document.querySelector("#addlist-text").value = oldSpan;
     document.querySelector("#addlist-text").oninput = function() {

         if (document.querySelector("#addlist-text").value === oldSpan) {
             addSave.style.color = "#ddd";
             addSave.removeEventListener('click', addList);
         } else {
             addSave.style.color = "blue";
             obj.previousElementSibling.innerText = document.querySelector("#addlist-text").value;
             obj.parentNode.parentNode.removeChild(obj.parentNode);
         }

     }
 }