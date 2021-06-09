document.getElementById('button').addEventListener('click', agechecking)

let age = 0

function agechecking () {
  age = document.getElementById('input').value
  age = parseInt(age)

  if (age >= 17) { 
  document.getElementById('para').innerHTML = 'You can watch R rated movies alone'
} else if (age >= 13) {
  document.getElementById('para').innerHTML = 'You can watch PG-13 rated movies alone'
} else if (age >= 5) {
  document.getElementById('para').innerHTML = 'You can watch G or PG rated movies alone'
} else  {
  document.getElementById ('para').innerHTML = 'You are too young to watch movies'
}
}
