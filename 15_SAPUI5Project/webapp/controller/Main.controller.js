sap.ui.define(["sap/ui/core/mvc/Controller",
			   "tortoise/model/model",
			   "sap/m/Button",
			   "sap/m/MessageBox"],
	  function(Controller, models, Btn, MessageBox){
	  	"use strict";
	  	return Controller.extend("tortoise.controller.Main",{
	  		//like constructor of a class, its called hook method
	  		//it is a built in method, when the controller object is created by SAPUI5
	  		//Right after that, the UI5 will call this method - once in lifetime of a controller
	  		//All the initilization code can be kept in this method
	  		onInit: function(){
	  			//debugger;	
	  			var oModel = models.createJSONModel("model/mockData/mydata.json");
	  			//Step 3: Make the model aware to the application
	  			//This is our DEFAULT model - no name
	  			sap.ui.getCore().setModel(oModel, "def");
	  			sap.ui.getCore().setModel(oModel);
	  			//Step 4 : BINDING <DO IT IN VIEW>
	  			var oModel2 = models.createJSONModel("model/mockData/avengers.json");
	  			//NAMED Model
	  			sap.ui.getCore().setModel(oModel2, "avg");
	  			//model with metadata info
	  			var metaData = {
	  				"bindingInfo" : {
	  					"actDefaultModel" : "default"
	  				}
	  			};
	  			var oMetaDataModel = models.createEmptyJSONModel();
	  			oMetaDataModel.setData(metaData);
	  			this.getView().byId("infoForm").setModel(oMetaDataModel);
	 
	  		},
	  		onBeforeRendering: function(){
	  			//debugger;	
	  		
	  		},
	  		onAfterRendering: function(){
	  			//debugger;	
  				$("#idMax--zkas").fadeOut(350, function(){
	  				$("#idMax--zkas").fadeIn(350)	;
	  			});
	  		},
	  		onExit: function(){
	  		//	debugger;	
	  		},
	  		pacman: function(){
	  			var defModel = this.getView().byId("infoForm").getModel().getProperty("/bindingInfo/actDefaultModel");
	  			//MessageBox.show(defModel);
	  			if (defModel == "default") {
	  				var oNewModel = sap.ui.getCore().getModel("avg");
	  				sap.ui.getCore().setModel(oNewModel);
	  				this.getView().byId("infoForm").getModel().setProperty("/bindingInfo/actDefaultModel", "avg");
	  			} else {
	  				var oDefaultModel = sap.ui.getCore().getModel("def");	
	  				sap.ui.getCore().setModel(oDefaultModel);
	  				this.getView().byId("infoForm").getModel().setProperty("/bindingInfo/actDefaultModel", "default");
	  			}

	  		},
	  		mario: function(){
	  			//alert("this was called in controller");
	  			//TODO: check the value user entered in input field
	  			//methods / function / api
	  			var oPass = sap.ui.getCore().byId("idPwd"); 
	  			var userName = sap.ui.getCore().byId("idUser").getValue();
	  			var password = oPass.getValue();
	  			
	  			if(userName === "Anubhav" && password === "Demo@121"){
	  				debugger;
	  				this.pacman();
	  			}else{
	  				alert("bad credentials");
	  			}
	  			
	  		}
	  		
	  	});
	  }
);