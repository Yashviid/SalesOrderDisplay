sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel,MessageBox) {
    "use strict";

    return Controller.extend("app.salesorderdisplay.controller.SalesOrderView", {
        onInit: function () {

        },
        onSelect:function(oEvent){
            var oItem=oEvent.getParameter("selectedItem")
            var key=oItem.mProperties.key
            //BusinessPartnerSet('0100000000')/ToSalesOrders
            //var entity= "/BusinessPartnerSet('" + key + "')/ToSalesOrders"
            var entity= "/BusinessPartnerSet('" + key + "')/ToSalesOrder"
            var oModel=this.getOwnerComponent().getModel()
            var that=this
            oModel.read(entity,{
                success:function(odata, response){
                    if(response.statusCode==="200" || response.statusText==="OK"){
                        var oJModel=new JSONModel(odata) //loadData
                        that.getView().setModel(oJModel,"SOModel")
                    }

                    
                },
                error:function(error){
                    if(error.statusCode==="404" || error.statusText==="Not Found"){
                        sap.m.MessageBox.show(error.message)
                    }
                }
            })

        }
    });
});
