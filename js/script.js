$(document).ready (function () {

	$(".link").click(function () {
		var findDivToShow = $(this).data('divname');
		$(".activeDiv").hide();
		$(".activeDiv").removeClass("activeDiv").addClass("hiddenDiv");
		$("#"+findDivToShow).addClass("activeDiv");
		$(".activePage").removeClass("activePage");
		$(this).addClass("activePage");
		if ($('#mobileIndicator').is(':visible')) {
			if ($('#navBar').is(':visible')) {
				$('#navBar').hide();
			}
		}
		$(".activeDiv").fadeIn();
	});

	$("#navButton").click(function () {
        $("#navBar").slideToggle();
    });

});