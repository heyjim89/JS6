// 	       _______ _____
// 	      / / ___// ___/
// 	 __  / /\__ \/ __ \ 
// 	/ /_/ /___/ / /_/ / 
// 	\____//____/\____/  
// 	                    
// 	    __  __________  ______   ___       __________  ____  __  ___
// 	   / / / /  _/ __ \/ ____/  /   |     / ____/ __ \/ __ \/  |/  /
// 	  / /_/ // // / / / __/    / /| |    / /_  / / / / /_/ / /|_/ / 
// 	 / __  // // /_/ / /___   / ___ |   / __/ / /_/ / _, _/ /  / /  
// 	/_/ /_/___/_____/_____/  /_/  |_|  /_/    \____/_/ |_/_/  /_/   
// 	                                                                





$(document).ready(function() {

	var clickEdit = function() {

		//Scope into object
		var edit = $('#edit');

		//Toggles to active
		edit.toggleClass('active');
	};


	$('.toggle').on('click', function() {
		clickEdit();
	});
	

	$('input').on('input', function(event) {
		event.preventDefault();

		$('#name').text($('#edit-name').val());

			// console.log('Name Edited: ' + $('#edit-name').val());

		$('#bio').text($('#edit-bio').val());

			// console.log('Bio Edited: ' + $('#edit-bio').val());

		$('#books').text($('#edit-books').val());

			// console.log('Books Edited: ' + $('#edit-books').val());

		$('#js').text($('#edit-js').val());

			// console.log('JS Edited: ' + $('#edit-js').val());


		// clickEdit();
	});

});