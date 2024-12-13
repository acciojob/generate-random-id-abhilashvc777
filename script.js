function makeid(l) {
  // write your code here
	let regex = /^[a-zA-Z0-9]$/
	let id = ""
	let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	for(let i=0; i<l; i++){
		let a = Math.floor(Math.random()*char.length)
		id = id+char.substring(a,a+1)
	}
	return id 
} 

// Do not change the code below.
const l = prompt("Enter a number.");  
alert(makeid(l));
