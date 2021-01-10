console.log('hello world');

function getNow() {
	return new Date().getTime();
}

function cons(...arg) {
	console.log(arg);
}

function myAjax() {
	let xhr;
	if(XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
}