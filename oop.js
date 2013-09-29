ClassName.PUBLIC_STATIC_CONST = "public-static-const";
ClassName.publicStaticVariable = "public-static-variable";
ClassName.publicStaticFunction = function($options){ 
	return "public-static-function";
};

function ClassName()
{

	var _privateVariable = "private-variable";
	var _that = this;
	
	this.publicVariable = "public-variable";
	
	var _init = function(){
		
	}
	
    var _privateFunction = function($options)  
    {
		alert(_that.publicVariable);
		alert(_privateVariable);
		
		return "private-function";
    }

    this.publicFunction = function($options)
    {
		alert(this.publicVariable);
		alert(_privateVariable);
		
        return "public-function";
    }
	
	// initial code
	_init();

}
	
// ClassName usage
alert(ClassName.PUBLIC_STATIC_CONST);
alert(ClassName.publicStaticVariable);
alert(ClassName.publicStaticFunction());
	
var className = new ClassName();
alert(className.publicVariable);
alert(className.publicFunction());
	