(function(){

	Calculadora = {
		sumar: function(a, b){
			if(!this._isNumeric(a)){
				throw new Error("el valor " + a + " no es num�rico");
			};
			if(!this._isNumeric(b)){
				throw new Error("el valor " + b + " no es num�rico");
			};
			return a + b;
		},
		restar: function(a, b){
			if(!this._isNumeric(a)){
				throw new Error("el valor " + a + " no es num�rico");
			};
			if(!this._isNumeric(b)){
				throw new Error("el valor " + b + " no es num�rico");
			};
			return a - b;
		},
		_isNumeric: function(obj){		
			if(obj - parseFloat( obj ) >= 0) return true;
			return false;		
		}
	};

}());