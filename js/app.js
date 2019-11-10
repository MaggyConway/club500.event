$(document).ready(function () {

    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
    });

    $(function(){
		$("#phone_number").mask("+7(999) 999-9999");
	});

	var deadline='2019-12-16 00:00:00';
	$('.countdown').downCount({
		date: deadline,
	});

	

});
