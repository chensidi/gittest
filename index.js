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
	if(xhr) {
		xhr.open(method, url);
	}
}