var input = document.getElementById("inp")
var list = document.getElementById("list")
var li;
var checkbox;
var edit;
var text;
var del;
function add_list(){
    if(input.value==''){
        alert("Please input the task first!")
    }
    else{
      li = document.createElement("li")
    li.setAttribute("class","listItems")
     checkbox = document.createElement("input")
    checkbox.setAttribute("type","checkbox")
    checkbox.setAttribute("class","check")
    checkbox.setAttribute("id","done")
    checkbox.setAttribute("onclick","validate(this)")
    edit = document.createElement("button")
    edit.setAttribute("class","btn")
    edit.innerHTML='<img src="icons/icons8-edit-30.png">'
    edit.setAttribute("onclick","editItem(this)")
    del = document.createElement("button")
    del.setAttribute("class","btn")
    del.innerHTML='<img src="icons/icons8-xbox-x-30.png">'
    del.setAttribute("onclick","delItem(this)")
    text = input.value
   

    li.append(checkbox,text,edit,del)
    
    list.append(li)
    input.value=''   
    }
    
  
}
function del_all(){
        list.innerHTML=''
}
var a;
function validate(btn){
 a = btn.parentNode;    
    if (btn.checked==1){
        // console.log('checked')  
        // console.log(a)
        a.style.textDecoration="line-through"   
    }
    else{
        // console.log("unchecked")
        // console.log(a)
        a.style.textDecoration="none" 
    }
}

function editItem(editBtn) {
    var a = prompt("Enter the edited text")
    editBtn.parentNode.firstChild.nextSibling.nodeValue = a;
}

function delItem(btn) {
    btn.parentNode.remove()
}