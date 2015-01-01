chrome.devtools.inspectedWindow.eval(
	"smarty_debug",
	function(result, isException) {
		if (isException)
			document.body.innerHTML = "smarty_debug isn't enabled on this page";
		else
			function exportDialog(object){
				var temp = "";
				for(var key in object){
					temp += "<ul>";
					switch(typeof object[key]){
						case "object":
							var typeVal = Object.prototype.toString.call( object[key] ) === '[object Array]' ? 'Array [' + object[key].length + ']' : 'Object';
							temp += '<details><summary><span class="key">'+ key +'</span>: '+ typeVal +"</summary>";
							temp += exportDialog(object[key]);
							temp += "</details>";
							break;
						case "string":
							temp += "<li>";
							temp += '<span class="key">'+ key +'</span>:';
							temp += '<span class="red">"'+ object[key] + '"</span>';
							temp += "</li>";
							break;
						case "boolean":
						case "number":
							temp += "<li>";
							temp += '<span class="key">'+ key +'</span>:';
							temp += '<span class="blue">'+ object[key] + '</span>';
							temp += "</li>";
							break;
						default:
							temp += "<li>";
							temp += '<span class="key">'+ key +'</span>:';
							temp += object[key];
							temp += "</li>";
							break;        
					}
					temp += "</ul>";
				}
				return temp;
			}

			document.body.innerHTML = exportDialog(result);
	 }
);