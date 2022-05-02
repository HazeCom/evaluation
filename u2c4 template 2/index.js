// write js code here corresponding to index.html
// You should add submit event on the form

var dataArr = JSON.parse(localStorage.getItem('schedule')) || [];
var form = document.querySelector('#masaiForm');
form.addEventListener('submit',addMatch);
function addMatch(){
      event.preventDefault();
      var obj = {}
      for (var i = 0; i<form.length-1; i++){
            obj[form[i].id] = form[i].value;
       }
      
      dataArr.push(obj);
      localStorage.setItem('schedule', JSON.stringify(dataArr));
}