function perSecond(){
	let d = new Date();
	let time = d.toLocaleTimeString();
	console.log(time);
}
setInterval(perSecond, 1000);
