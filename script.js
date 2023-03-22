//your JS code here. If required.
const div=document.querySelector('#output');

function promise(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000)
	})
}

	promise().then((data)=>{
		div.innerHTML=data;
	});