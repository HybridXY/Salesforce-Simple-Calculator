({
    //Retrieves id for created record when successful
    handleSuccess : function(component, event, helper) {
    var responseJSON = event.getParams();
    var recordId = responseJSON.id; 
    component.set("v.recordId", recordId);
},
    //Prepopulate records before submitting.
    handleSubmit: function(component, event, helper) {
            event.preventDefault();       // stop the form from submitting
        	var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;
            var fields = event.getParam('fields');
         	fields.Result__c = component.get("v.result");
         	fields.timestamp__c = dateTime;
            component.find('recordEditForm').submit(fields);
        },
    //Identifying current selection and running the appropriate operation
    currentOperation : function(component, event, helper) {
        var selectedOperation = component.find("operationList").get("v.value");
        if (selectedOperation == "1"){
            var a = component.get('c.Add');
        	$A.enqueueAction(a);
        }
        if (selectedOperation == "2"){
             var a = component.get('c.Sub');
        	$A.enqueueAction(a);
        }
        if (selectedOperation == "3"){
              var a = component.get('c.Mul');
        	$A.enqueueAction(a);
        }
        if (selectedOperation == "4"){
              var a = component.get('c.Divi');
        	$A.enqueueAction(a);
            
        }
    },
    //Four basic operation which includes the logic for gcd calculations.
		Add : function(component, event, helper) {
        var a = component.get("v.num1");
        var b = component.get("v.num2");
        var total = parseInt(a) + parseInt(b);
        component.set("v.result",total);
        var c = Math.floor(Math.random() * (142 - 22) + 22);
        var d = Math.floor(total);
        var R;
  		while ((c % d) > 0)  {
            R = c % d;
            c = d;
            d = R;
  		}
        component.set("v.gcd", d);
            
    },
    Sub : function(component, event, helper) {
        var a = component.get("v.num1");
        var b = component.get("v.num2");
        var total = parseInt(a) - parseInt(b);
        component.set("v.result",total);
        var c = Math.floor(Math.random() * (142 - 22) + 22);
        var d = Math.floor(total);
        var R;
  		while ((c % d) > 0)  {
            R = c % d;
            c = d;
            d = R;
  		}
        component.set("v.gcd", d);
    },
     
    Mul : function(component, event, helper) {
        var a = component.get("v.num1");
        var b = component.get("v.num2");
        var total = parseInt(a) * parseInt(b);
        component.set("v.result",total);
        var c = Math.floor(Math.random() * (142 - 22) + 22);
        var d = Math.floor(total);
        var R;
  		while ((c % d) > 0)  {
            R = c % d;
            c = d;
            d = R;
  		}
        component.set("v.gcd", d);
    },
    Divi : function(component, event, helper) {
        var a = component.get("v.num1");
        var b = component.get("v.num2");
        var total = parseInt(a) / parseInt(b);
        component.set("v.result",total);
        var c = Math.floor(Math.random() * (142 - 22) + 22);
        var d = Math.floor(total);
        var R;
  		while ((c % d) > 0)  {
            R = c % d;
            c = d;
            d = R;
  		}
        component.set("v.gcd", d);
    }


})