var system = require('system');

var page = require('webpage').create();


// system.args permite leer los parámetros pasados a phantom
page.open(system.args[1], function(status){

	if(status==="success"){
	
		console.log("success");
	
		var el = page.evaluate(function(){
			return document.getElementById("mensaje");		
		});
		
		console.log(el.innerText);
	}
	phantom.exit(1);	
});
