define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!DOCTYPE html>\r\n<html>\r\n	<head>\r\n		<title>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.site : stack1)) != null ? stack1.title : stack1), depth0))
    + "</title>\r\n		<link rel=\"stylesheet\" href=\"/assets/css/main.css\">\r\n	</head>\r\n	<body>\r\n        <article>\r\n"
    + ((stack1 = container.invokePartial(partials["@partial-block"],depth0,{"name":"@partial-block","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </article>\r\n	</body>\r\n    <script data-main=\"/assets/js/main.js\" src=\"/assets/js/require.js\"></script>\r\n</html>";
},"usePartial":true,"useData":true}); });