var getbyinput=document.getElementsByName('todo_input')[0];
var getbybutton=document.getElementsByTagName('button')[0];
var getbydiv=document.getElementsByClassName('todos')[0];
var count=0
getbybutton.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.setAttribute("key",count);
    paragraph.innerHTML=getbyinput.value;
    getbydiv.appendChild(paragraph);
    getbyinput.value="";
    paragraph.addEventListener('click',function(){
        getbydiv.removeChild(paragraph);
    })
    count+=1
})