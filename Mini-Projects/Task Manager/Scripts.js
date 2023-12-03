let count=1;
function addTask(){
  let task = document.getElementById('task').value;
  document.getElementById('task').value=""; //Empty input content after adding task
  let row=document.createElement('tr');
  document.getElementById('myTable').appendChild(row);
  row.innerHTML=`<td>${task}</td><td><button class='delete-button' onclick="deleteTask(${count})">Delete</button></td>`
  row.setAttribute('id',`${count++}`);//Create id for the table row using count variable
}  

function deleteTask(n) {
  let row = document.getElementById(`${n}`);
  document.getElementById('myTable').removeChild(row);
}