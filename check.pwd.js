$(document).ready(function() {
	$('#protect').html("ненадежный пароль");
	var terms = {'length': false, 'az': false, 'AZ': false, 'symbols': false, 'int': false};
	var protect;
	var error;
	
	$('#password').keyup(function() {
		var pwd = $(this).val();
		protect = 0;
		
		if ( (pwd.length > 6) || (pwd.length == 6) )	//проверяем пароль на длину >=6 символов
		{
			terms['length'] = true;
		} else {
			terms['length'] = false;
		}
		
		if ((/[a-z]/).test(pwd))	//проверка на наличие латинских строчных букв
		{
			terms['az'] = true;
		} else {
			terms['az'] = false;
		}
		
		if ((/[A-Z]/).test(pwd))	//проверка на наличие латинских заглавных букв
		{
			terms['AZ'] = true;
		} else {
			terms['AZ'] = false;
		}
		
		if ((/[!#$%^\*&\@\?\+]/).test(pwd))	//проверка на наличие символов
		{
			terms['symbols'] = true;
		} else {
			terms['symbols'] = false;
		}
		
		if ((/[0-9]/).test(pwd))	//проверка на наличие цифр
		{
			terms['int'] = true;
		} else {
			terms['int'] = false;
		}
		
		for (key in terms) {
			if (terms[key]) {
				protect++;
			}
		}
		
		if ((/^[a-zA-Z0-9!#$%_^\*&\@\?\+]*$/).test(pwd)) {	//проверка на наличие символов
			error = false;
		} else {
			error = true;
		}
		
		if (error)
		{
			$('.help-block').css({'color':'#A21F1F'});
		} else {
			if ( protect == 5 ) {
				$('#protect').css({"color": "#0C640C"});
				$('#protect').html("надежный пароль");
			} else if ( protect == 4 ) {
				$('#protect').css({"color": "#FFFF00"});
				$('#protect').html("неплохой пароль");
				
			} else {
				$('#protect').css({"color": "#A21F1F"});
				$('#protect').html("ненадежный пароль");
			}
			$('.help-block').css({'color':'#000000'});
		}
	});

	$('#html-head').click(function(){
		$('#html-head-code').slideToggle('slow');
	});
	$('#html-body').click(function(){
		$('#html-body-code').slideToggle('slow');
	});
	$('#js').click(function(){
		$('#js-code').slideToggle('slow');
	});
});