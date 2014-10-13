(function(){

	Calculadora = {
		sumar: function(a, b){
			if(!this._isNumeric(a)){
				throw new Error("el valor " + a + " no es numérico");
			};
			if(!this._isNumeric(b)){
				throw new Error("el valor " + b + " no es numérico");
			};
			return a + b;
		},
		restar: function(a, b){
			if(!this._isNumeric(a)){
				throw new Error("el valor " + a + " no es numérico");
			};
			if(!this._isNumeric(b)){
				throw new Error("el valor " + b + " no es numérico");
			};
			return a - b;
		},
		_isNumeric: function(obj){		
			if(obj - parseFloat( obj ) >= 0) return true;
			return false;		
		}
	};

}());