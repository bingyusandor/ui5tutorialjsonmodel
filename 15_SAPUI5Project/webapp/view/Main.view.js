sap.ui.jsview("tortoise.view.Main",{
	
	getControllerName: function(){
		return "tortoise.controller.Main";
	},
	createContent: function(oAnubhav){
		//Create a button object
		
		var oLabel1 = new sap.m.Label({
			text: "User Name"
		});
		var oInp1 = new sap.m.Input("idUser");
		
		var oLabel2 = new sap.m.Label({
			text: "Password"
		});
		var oInp2 = new sap.m.Input("idPwd",{
			type: sap.m.InputType.Password
		});
		
		var oSpiderman = new sap.m.Button("idSpidy", {
			text: "Login",
			press: [oAnubhav.mario, oAnubhav]
		});
		return [oLabel1, oInp1, oLabel2, oInp2, oSpiderman];
	}
		
});