$(document).ready(function(){

	function validateEmail($email) {
		if($email.length > 0){
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			return emailReg.test( $email );
		}else {
			return false;
		}
	}

	$('#send').click(function(){
		console.log('clicked');
		var done = true;
		var domain = '';
		var first_name = $("input[name='first_name']").val();
		var email = $("input[name='email']").val();
		var phone = $("input[name='phone']").val();
		var message = $("textarea[name='message']").val();
		var company = $("input[name='company']").val();
		var web = $("input[name='web']");
		var mob = $("input[name='mob']");
		var ux = $("input[name='ux']");
		var brand = $("input[name='brand']");
		if(!validateEmail(email)){
			done = false;
			$('#e').css({'border': '0.5px solid red','width':'100%'});
		}else{
			$('#e').css({'border': '0.5px solid #121212','width':'0%'});
		}

		if(first_name.length === 0 ){
			done = false;
			$('#n').css({'border': '0.5px solid red','width':'100%'});
		}else{
			$('#n').css({'border': '0.5px solid #121212','width':'0%'});
		}
		if(phone.length === 0 ){
			done = false;
			$('#p').css({'border': '0.5px solid red','width':'100%'});
		}else{
			$('#p').css({'border': '0.5px solid #121212','width':'0%'});
		}
		if(company.length === 0 ){
			done = false;
			$('#c').css({'border': '0.5px solid red','width':'100%'});
		}else{
			$('#c').css({'border': '0.5px solid #121212','width':'0%'});
		}
		if(message.length === 0 ){
			done = false;
			$('#m').css({'border': '0.5px solid red','width':'100%'});
		}else{
			$('#m').css({'border': '0.5px solid #121212','width':'0%'});
		}

		if (web.is(':checked')) {
			domain += 'Web, '
		}
		if (mob.is(':checked')) {
			domain += 'Mobile App, '
		}
		if (ux.is(':checked')) {
			domain += 'UX, '
		}
		if (brand.is(':checked')) {
			domain += 'Branding'
		}

		if(done){
			postNow(name,company,email,phone,domain,message);
		}
	});

	function postNow(first_name,company,email,phone,domain,message){
				var message = 'Thank you for your interest. We will get in touch with you as soon as possible.';
				$.post("service/contact.php", {
									name : name,
									company: company,
									email:email,
									phone:phone,
									domain:domain,
									detail:message,

}, function(result) {
		var message = 'Thank you for your interest. We will get in touch with you as soon as possible.';
		$("#send").addClass('disabled');
		$('#message').css('display','block');
});
			}

});
