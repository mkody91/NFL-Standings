





$(document).ready(function(){

		var jsonData;

		$.getJSON("https://api.fantasydata.net/nfl/v2/JSON/Standings/2015?subscription-key=3c48652a252840d09ffa2abf78a2605d", function(data) {
			alert(data[1].name);
		});


    $.ajax({
        url: "https://api.fantasydata.net/nfl/v2/JSON/Standings/2015?subscription-key=3c48652a252840d09ffa2abf78a2605d",
        type: "GET"
    })
    .done(function(data) {
        alert("success");
				jsonData = data;
				alert(data[0].Name);

    })
    .fail(function(data) {
        alert("error");
				alert(data.Name);
    });


		//Starts by hiding the sub-buttons which are the individual divisions
		$(".subButton").hide();
		//function for what happens when you click on the afc main button
		$("#afcMain").click(function(){
			$(".mainButton").hide();
			$(".afc.subButton").show();
		});

		$("#nfcMain").click(function(){
			$(".mainButton").hide();
			$(".nfc.subButton").show();
		});


		$("#afcNorth").click(function(){
			$(".subButton").hide();
		});
		$("#afcEast").click(function(){
			$(".subButton").hide();
		});
		$("#afcSouth").click(function(){
			$(".subButton").hide();
		});
		$("#afcWest").click(function(){
			$(".subButton").hide();
		});
		$("#nfcNorth").click(function(){
			$(".subButton").hide();
		});
		$("#nfcEast").click(function(){
			$(".subButton").hide();
		});
		$("#nfcSouth").click(function(){
			$(".subButton").hide();
		});
		$("#nfcWest").click(function(){
			$(".subButton").hide();
		});
		$("#previous").click(function(){
			if($(".subButton:hidden" && ".mainButton:hidden")){
				$(".subButton").show();
				$(".mainButton").hide();
			}
			if($(".mainButton:hidden" && "subButton:visible")){
				$(".mainButton").show();
				$(".subButton").hide();
			}
		});



});
