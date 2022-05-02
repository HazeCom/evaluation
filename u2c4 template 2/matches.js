// write js code here corresponding to matches.html

var tbody = document.querySelector('tbody');

var dataArr = JSON.parse(localStorage.getItem('schedule'))

display(dataArr)
var sel = document.querySelector('#filterVenue');
sel.addEventListener('change',van)
function van(){
      var x = document.querySelector('#filterVenue').value;
      var vanue = dataArr.filter(function(el){
            return el.venue == x
      })
      display(vanue)
      // window.location.reload();
      
}
function display(dataArr){
      tbody.innerHTML = "";
      dataArr.map(function(el){
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            td1.innerText = el.matchNum;
            var td2 = document.createElement('td');
            td2.innerText = el.teamA;
            var td3 = document.createElement('td');
            td3.innerText = el.teamB;
            var td4 = document.createElement('td');
            td4.innerText = el.date;
            var td5 = document.createElement('td');
            td5.innerText = el.venue;
            var td6 = document.createElement('td');
            td6.innerText = 'Add as Favourites';
            td6.style.color = "green"
            td6.style.cursor = "pointer"
            td6.addEventListener('click', function bookmark(){
                  // var favourites = [];
                  var favourites = JSON.parse(localStorage.getItem('favourites')) || [];
                  favourites.push(el);
                  localStorage.setItem('favourites' , JSON.stringify(favourites))
                  // console.log(favourites)
            })
            
            tr.append(td1,td2,td3,td4,td5,td6);
            tbody.append(tr);
            // console.log(tbody)
})
}



