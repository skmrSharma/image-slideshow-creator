var imageList = image_file_list;
//console.log(imageList);
//console.log(imageList.length);
if(imageList.length > 21){
	alert("Too many images !! Reduce the number of images");
	window.open("", "_self").close();	// open a blank window (replacing current one) and then close it
}
for (var i = 1; i <= imageList.length; i++) {
	$(".the-slides").prepend("<input type=\"radio\" name=\"r\" id=\"r"+i+"\">");
}

$(".the-slides").append("<div class=\"slide s1\"><img src=\""+imageList[0]+"\"></div>");
for (var i = 1; i < imageList.length; i++) {
	$(".the-slides").append("<div class=\"slide \"><img src=\""+imageList[i]+"\"></div>");
}
for (var i = 1; i <= imageList.length; i++) {
	$(".navigation").append("<label for=\"r"+i+"\" class=\"bar\"></label>");
}
$(".the-slides").css("width", 100*imageList.length+"%");
$(".slide").css("width", 100/imageList.length+"%");
$("#r1").prop("checked", true);
//console.log($("#r1").prop("checked"));
//$("#r1:checked ~ .s1").css("margin-left", 0);
//$("#r2:checked ~ .s1").css("margin-left", -25+"%");
//$("#r2:checked ~ .s1").hide();
//$("#r3:checked ~ .s1").css("margin-left", -50+"%");
//$("#r4:checked ~ .s1").css("margin-left", -75+"%");
//$(".s1").hide();
//$("input[type='radio']:checked").
//console.log($("input[type='radio']:checked").attr('name'));

$("input[type='radio']").change(function(){
	var radioId = $("input[type='radio']:checked").attr('id');
	//console.log(radioId);
	var radioIdNum = +(radioId.slice(1));
	//console.log(radioIdNum);	
	$("#"+radioId+":checked ~ .s1").css("margin-left", -((radioIdNum-1)*100/imageList.length)+"%");
});