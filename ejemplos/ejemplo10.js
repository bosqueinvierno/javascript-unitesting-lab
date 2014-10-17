var system = require('system');

var page = require('webpage').create();


// page.open permite abrir una página
page.open("ejemplo10.html", function(status){

	if(status==="success"){
		
		var el = page.evaluate(function(){
			return document.getElementById("mensaje");		
		});
		
		console.log(el.innerText);
	}
	phantom.exit(1);	
});
