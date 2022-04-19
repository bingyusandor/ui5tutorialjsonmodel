sap.ui.define([],
			  function(){
			  	return {
			  		createJSONModel: function(sPath)	{
			  			//Step 1: Create a brand new model object
			  			var oModel = new sap.ui.model.json.JSONModel();
			  			//oModel.setDefaultBindingMode("OneWay");
			  			//Step 2: set the data
			  			//oModel.setData();
			  			oModel.loadData(sPath);
			  			return oModel;
			  		},
			  		
			  		createEmptyJSONModel: function()	{
			  			//Step 1: Create a brand new model object
			  			var oModel = new sap.ui.model.json.JSONModel();
			  			return oModel;
			  		},
			  		
			  		createXMLModel: function(){
			  			return "";
			  		},
			  		createResourceModel: function(){
			  			return "";
			  		}
			  	};
			  }
);