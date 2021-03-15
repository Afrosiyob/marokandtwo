$(document).ready(function() {

    // Quil Text Editor

    var quill = new Quill('#editor', {
        placeholder: 'Compose an epic...',
        theme: 'snow',
    });

    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;


            for (const index in input.files) {
                if (Object.hasOwnProperty.call(input.files, index)) {
                    const element = input.files[index];
                    console.log(element);

                }
            }

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = function(event) {
                    $($.parseHTML('<img>')).attr({
                        'src': event.target.result,
                    }).appendTo(placeToInsertImagePreview);
                }
                reader.readAsDataURL(input.files[i]);
            }
        }
    };

    $('#gallery-photo-add').on('change', function() {
        imagesPreview(this, 'div.gallery');
    });

});