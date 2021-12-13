var getbydiv=document.getElementById('container');
var select=document.getElementById('todo');
var completedtodotitles=[];
var pendingtodotitles=[];

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => {
    for( var i=0;i<data.length;i++){
        if(data[i].completed==false){
            pendingtodotitles.push(data[i].title);
        }else{
            completedtodotitles.push(data[i].title);
        }
    }
})


select.addEventListener('change',function(){
    var value1=select.value;
    if(value1==="Completed"){
        getbydiv.innerHTML="";
        for(var i=0;i<completedtodotitles.length;i++){
            var tag1=document.createElement('li');
            tag1.innerHTML=completedtodotitles[i];
            getbydiv.appendChild(tag1);
        }
    }else if(value1==="Pending"){
        getbydiv.innerHTML="";
        for(var i=0;i<pendingtodotitles.length;i++){
            var tag1=document.createElement('li');
            tag1.innerHTML=pendingtodotitles[i];
            getbydiv.appendChild(tag1);
        }
    }
})