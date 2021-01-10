console.log('hello world');

function getNow() {
	return new Date().getTime();
}

function cons(...arg) {
	console.log(arg);
}

function myAjax(method, url, params) {
	let xhr;
	if(XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	if(!xhr) return;
	xhr.open(method, url); //设置方法和路径
	xhr.send();
}