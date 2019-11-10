$(document).ready(function () {

    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
    });

    $(function(){
		$("#phone_number").mask("+7(999) 999-9999");
	});

});
