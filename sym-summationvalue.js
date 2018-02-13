(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "summationvalue",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function(){ 
			return { 
				DataShape: 'Table',
				Height: 150,
				Width: 150 
			} 
		}
	}

	symbolVis.prototype.init = function(scope, elem) { 
	
	this.onDataUpdate = dataUpdate;
	
	function dataUpdate (data) {
	if (!data) return;
	
	if (!data.Rows[0].Label){

		
		for (var i=0; i < data.Rows.length; i++){
		data.Rows[i].Label=scope.Rows[i].Label;		
		}
	}


	scope.Rows=data.Rows;
	


	scope.Total=0;

	scope.setTotal= function(row)
	{
		
		if(row){
			scope.Total+=row.Value*1;
		}
	}
	
	} 
	

	};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
