function askQuestions(){


	var firstName=prompt('What is your first name?');
	var lastName=prompt('What is your last name?');
	var fullName=firstName + ' ' + lastName;
	console.log('User is called ' + fullName);

	var age = prompt ('How old are you?');
	age = parseInt(age);


	if (age >= 18){
		console.log('User is an adult');

	} else {
		console.log('User is a child');
	}

	/*
		If the user's first name is 'General' and their last name is NOT
		'Assembly', then greet the general!
		(Hint: use console.log)

	*/

	if (firstName == 'General' && lastName != "Assembly"){
	console.log('Hola General!');
	}
	var faveColour=prompt ('What is your favourite colour?');
	faveColour = faveColour.toLowerCase().trim();

	if (faveColour =='red' ||
		faveColour =='green' ||
		faveColour== 'blue' ||
		faveColour== 'yellow') {

		$('h1').css('color', faveColour);
	}

}


//When the page is loaded
$(function() {

	$('img').on('click', askQuestions);

	//WHen the user clicks an h3
	$('h3').on('click',function() {

		//toggle the next element
		$(this).next().slideToggle(8000);

	});




});



