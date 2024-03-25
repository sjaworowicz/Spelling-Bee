let word;

const words=["website", "bootstrap", "computer", "html", "css", "javascript", "img", "script", "stylesheet", "div", "row", "col", "container"]

document.getElementById('btn').addEventListener('click', function(){
    num=Math.floor(Math.random()*(248))
    word=words[num]
})

document.getElementById('sub').addEventListener('click',function(){
    if(document.getElementById('inp').value==word){
        alert("CORRECT!")
    }
})