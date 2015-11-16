





$(document).ready(function(){

		var jsonData;

		$.getJSON("data/data.json", function(data) {
			jsonData = data;
		});

/*
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

*/

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
			$("#data").html(jsonData[4].Name + ", " + jsonData[4].Wins + " - " + jsonData[4].Losses + "<br />"
			 							+ jsonData[5].Name + ", " + jsonData[5].Wins + " - " + jsonData[5].Losses + "<br />"
										+ jsonData[6].Name + ", " + jsonData[6].Wins + " - " + jsonData[6].Losses + "<br />"
										+ jsonData[7].Name + ", " + jsonData[7].Wins + " - " + jsonData[7].Losses).show();
		});
		$("#afcEast").click(function(){
			$(".subButton").hide();
			$("#data").html(jsonData[0].Name + ", " + jsonData[0].Wins + " - " + jsonData[0].Losses + "<br />"
			 							+ jsonData[1].Name + ", " + jsonData[1].Wins + " - " + jsonData[1].Losses + "<br />"
										+ jsonData[2].Name + ", " + jsonData[2].Wins + " - " + jsonData[2].Losses + "<br />"
										+ jsonData[3].Name + ", " + jsonData[3].Wins + " - " + jsonData[3].Losses).show();
		});
		$("#afcSouth").click(function(){
			$(".subButton").hide();
			$("#data").html(jsonData[8].Name + ", " + jsonData[8].Wins + " - " + jsonData[8].Losses + "<br />"
			 							+ jsonData[9].Name + ", " + jsonData[9].Wins + " - " + jsonData[9].Losses + "<br />"
										+ jsonData[10].Name + ", " + jsonData[10].Wins + " - " + jsonData[10].Losses + "<br />"
										+ jsonData[11].Name + ", " + jsonData[11].Wins + " - " + jsonData[11].Losses).show();
		});
		$("#afcWest").click(function(){
			$(".subButton").hide();
			$("#data").html(jsonData[12].Name + ", " + jsonData[12].Wins + " - " + jsonData[12].Losses + "<br />"
			 							+ jsonData[13].Name + ", " + jsonData[13].Wins + " - " + jsonData[13].Losses + "<br />"
										+ jsonData[14].Name + ", " + jsonData[14].Wins + " - " + jsonData[14].Losses + "<br />"
										+ jsonData[15].Name + ", " + jsonData[15].Wins + " - " + jsonData[15].Losses).show();
		});
		$("#nfcNorth").click(function(){
			$(".subButton").hide();
			$("#data").html(jsonData[20].Name + ", " + jsonData[20].Wins + " - " + jsonData[20].Losses + "<br />"
			 							+ jsonData[21].Name + ", " + jsonData[21].Wins + " - " + jsonData[21].Losses + "<br />"
										+ jsonData[22].Name + ", " + jsonData[22].Wins + " - " + jsonData[22].Losses + "<br />"
										+ jsonData[23].Name + ", " + jsonData[23].Wins + " - " + jsonData[23].Losses).show();

		});
		$("#nfcEast").click(function(){
			$(".subButton").hide();
			$("#data").html(jsonData[16].Name + ", " + jsonData[16].Wins + " - " + jsonData[16].Losses + "<br />"
			 							+ jsonData[17].Name + ", " + jsonData[17].Wins + " - " + jsonData[17].Losses + "<br />"
										+ jsonData[18].Name + ", " + jsonData[18].Wins + " - " + jsonData[18].Losses + "<br />"
										+ jsonData[19].Name + ", " + jsonData[19].Wins + " - " + jsonData[19].Losses).show();
		});
		$("#nfcSouth").click(function(){
			$(".subButton").hide();
			$("#data").html(jsonData[24].Name + ", " + jsonData[24].Wins + " - " + jsonData[24].Losses + "<br />"
			 							+ jsonData[25].Name + ", " + jsonData[25].Wins + " - " + jsonData[25].Losses + "<br />"
										+ jsonData[26].Name + ", " + jsonData[26].Wins + " - " + jsonData[26].Losses + "<br />"
										+ jsonData[27].Name + ", " + jsonData[27].Wins + " - " + jsonData[27].Losses).show();
		});
		$("#nfcWest").click(function(){
			$(".subButton").hide();
			$("#data").html(jsonData[28].Name + ", " + jsonData[28].Wins + " - " + jsonData[28].Losses + "<br />"
			 							+ jsonData[29].Name + ", " + jsonData[29].Wins + " - " + jsonData[29].Losses + "<br />"
										+ jsonData[30].Name + ", " + jsonData[30].Wins + " - " + jsonData[30].Losses + "<br />"
										+ jsonData[31].Name + ", " + jsonData[31].Wins + " - " + jsonData[31].Losses).show();
		});
		$("#previous").click(function(){
			if($(".subButton:hidden" && ".mainButton:hidden")){
				$(".subButton").show();
				$(".mainButton").hide();
				$("#data").hide();
			}
				if($(".subButton:hidden" && ".mainButton:visible")){
					$(".subButton").hide();
					$(".mainButton").show();
					$("#data").hide();
			}
		});
});
