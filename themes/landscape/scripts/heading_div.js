hexo.extend.helper.register("heading_div", function (headingString, headingLevel) {
	
	var h1Margin = ""
	if (headingLevel == 1) {
		h1Margin = " h1-header "
	}
	var classValues = "border-bottom border-secondary" + h1Margin
	var headingString = '<h' + headingLevel + '>' + headingString + '</h' + headingLevel + '>'
	var code = '<div class="' + classValues + '">' + headingString + '</div>'

	return code;
});