$(document).ready(function() {
	$('#protect').html("���������� ������");
	var terms = {'length': false, 'az': false, 'AZ': false, 'symbols': false, 'int': false};
	var protect;
	var error;
	
	$('#password').keyup(function() {
		var pwd = $(this).val();
		protect = 0;
		
		if ( (pwd.length > 6) || (pwd.length == 6) )	//��������� ������ �� ����� >=6 ��������
		{
			terms['length'] = true;
		} else {
			terms['length'] = false;
		}
		
		if ((/[a-z]/).test(pwd))	//�������� �� ������� ��������� �������� ����
		{
			terms['az'] = true;
		} else {
			terms['az'] = false;
		}
		
		if ((/[A-Z]/).test(pwd))	//�������� �� ������� ��������� ��������� ����
		{
			terms['AZ'] = true;
		} else {
			terms['AZ'] = false;
		}
		
		if ((/[!#$%^\*&\@\?\+]/).test(pwd))	//�������� �� ������� ��������
		{
			terms['symbols'] = true;
		} else {
			terms['symbols'] = false;
		}
		
		if ((/[0-9]/).test(pwd))	//�������� �� ������� ����
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
		
		if ((/^[a-zA-Z0-9!#$%_^\*&\@\?\+]*$/).test(pwd)) {	//�������� �� ������� ��������
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
				$('#protect').html("�������� ������");
			} else if ( protect == 4 ) {
				$('#protect').css({"color": "#FFFF00"});
				$('#protect').html("�������� ������");
				
			} else {
				$('#protect').css({"color": "#A21F1F"});
				$('#protect').html("���������� ������");
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