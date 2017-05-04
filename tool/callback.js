var currentName = ""
var valid = []

function xssi(...args){
	valid.push(currentName);
}

function report(){
	var text = "<strong>Result:</strong> Found callback parameter name(s):<br>";
	for(var i = 0; i < valid.length; i++)
		(i == valid.length -1) ? text += valid[i] : text += valid[i] + ",";
	result.innerHTML = text;
}

function testCallbackName(name){
	var script = document.createElement('script');
	script.src = url.value + "?" + name + "=xssi";
	document.head.appendChild(script);
	document.head.removeChild(script);
}

function bruteforce(names){
	for(var key in names.names){
		currentName = names.names[key];
		testCallbackName(currentName);

	}
	setTimeout(report, 2000);
}

function fetchNames(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "names.php", true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			bruteforce(JSON.parse(xhr.responseText));
		}
	}
	xhr.send();
}
test.onclick = function(){
	fetchNames();
}