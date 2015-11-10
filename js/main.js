

	
	


$(document).ready(function(){
    $(function() {
        var params = {

        };
      
        $.ajax({
            url: "https://api.fantasydata.net/nfl/v2/XML/Standings/2015?subscription-key=3c48652a252840d09ffa2abf78a2605d" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","3c48652a252840d09ffa2abf78a2605d");
            },
            type: "GET",
            // Request body
            data: "{}",
        })
        .done(function(data) {
            alert("success");
        })
        .fail(function() {
            alert("error");
        });
    });
	$(".subButton").hide();
	$("#afc").click(function(){
		$(".mainButton").hide();
		$("#afc.subButton").show();
	});
	$("#nfc").click(function(){
		$(".mainButton").hide();
		$("#nfc.subButton").show();
	});
	$("#previous").click(function(){
		$(".subButton").hide();
		$(".mainButton").show();
	});
});
