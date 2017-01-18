jQuery(function($) {
	let formData = window.localStorage.getItem('formData');
	let fbOptions = {
		dataType: 'xml'
	};

	if(formData) {
	  fbOptions.formData = JSON.parse(formData);
    }
	// let fb = $('.build-wrap').formBuilder(fbOptions);
	// var formBuilder = $('.build-wrap').formRender(fbOptions).data('formBuilder');
	var formBuilder = $('.build-wrap').formBuilder(fbOptions).data('formBuilder');
	// formData = formBuilder.formData;
	$('.form-builder-save').click(function() {
		window.localStorage.setItem('formData', JSON.stringify(formBuilder.formData)); // TODO: SAVE INTO DB?
	});

});
// jQuery(document).ready(function($) {
//   var buildWrap = document.querySelector('.build-wrap'),
//     renderWrap = document.querySelector('.render-wrap'),
//     editBtn = document.getElementById('edit-form'),
//     formData = window.sessionStorage.getItem('formData'), // <== TODO: Read from DB HERE
//     editing = true,
//     fbOptions = {
//       dataType: 'json'
//     };
//
//   if (formData) {
//     fbOptions.formData = JSON.parse(formData);
//   }
//
//   var toggleEdit = function() {
//     document.body.classList.toggle('form-rendered', editing);
//     editing = !editing;
//   };
//
//   var formBuilder = $(buildWrap).formBuilder(fbOptions).data('formBuilder');
//
//   $('.form-builder-save').click(function() {
//     toggleEdit();
//     $(renderWrap).formRender({
//       dataType: 'json',
//       formData: formBuilder.formData
//     });
//
//     window.localStorage.setItem('formData', JSON.stringify(formBuilder.formData));
//   });
//
//   editBtn.onclick = function() {
//     toggleEdit();
//   };
// });
