$( document ).ready( function () {

    // Quil Text Editor

    var quill = new Quill( '#editor', {
        placeholder: 'Compose an epic...',
        theme: 'snow',
    } );

    // Multiple images preview in browser
    var imagesPreview = function ( input, placeToInsertImagePreview ) {

        if ( input.files ) {
            var filesAmount = input.files.length;


            for ( const index in input.files ) {
                if ( Object.hasOwnProperty.call( input.files, index ) ) {
                    const element = input.files[ index ];
                    console.log( element );

                }
            }

            for ( i = 0; i < filesAmount; i++ ) {
                var reader = new FileReader();
                reader.onload = function ( event ) {
                    $( $.parseHTML( '<img>' ) ).attr( {
                        'src': event.target.result,
                    } ).appendTo( placeToInsertImagePreview );
                }
                reader.readAsDataURL( input.files[ i ] );
            }
        }
    };

    $( '#gallery-photo-add' ).on( 'change', function () {
        imagesPreview( this, 'div.gallery' );
    } );






    // Drag and Drop


    const dragAndDrop = () => {


        const cards = document.querySelectorAll( '.drag_body_inner_item' );
        const columns = document.querySelectorAll( '.drag_column_body' );

        var card_item;

        const dragStart = function () {

            card_item = this;

            setTimeout( () => {
                this.classList.add( 'hide_card' );
            }, 0 );
        }




        const dragEnd = function () {
            card_item = null;
            setTimeout( () => {
                this.classList.remove( 'hide_card' );
            }, 0 );
        }

        cards.forEach( card => {
            card.addEventListener( "dragstart", dragStart );
            card.addEventListener( 'dragend', dragEnd );
        } );




        const dragOver = function ( e ) {
            e.preventDefault();
            console.log( "over" );
        }

        const dragEnter = function () {
            console.log( "enter" );

            // this.parentElement.classList.add( 'hovered_card' );
        }

        const dragLeave = function () {
            console.log( "leave" );

            // this.parentElement.classList.remove( 'hovered_card' );
        }

        const dragDrop = function ( e ) {
            console.log( e );

            this.append( card_item );
        }

        columns.forEach( column => {


            column.addEventListener( 'dragover', dragOver );
            column.addEventListener( 'dragenter', dragEnter );
            column.addEventListener( 'dragleave', dragLeave );
            column.addEventListener( 'drop', dragDrop );
        } );






    }



    dragAndDrop();



    // add table


    const inputs = document.querySelectorAll( '.modal-table-input' );


    const addBtn = document.querySelector( '.add-btn' );



    const addDataTable = function () {
        const tableTrs = document.querySelectorAll( '.table-tr' );
        const numbers = [];
        const data = [];
        // $('#myTable > tbody:last-child').append('<tr>...</tr><tr>...</tr>');
        inputs.forEach( ( input, index ) => {
            data[ index ] = input.value;

        } );

        tableTrs.forEach( ( tableTr, index ) => {
            numbers[ index ] = index + 1;
        } );


        $( '.top-table > tbody:last-child' ).append( ` <tr class="table-tr">
        <th scope="row"> ${ numbers[ numbers.length - 1 ] + 1 } </th>

        <td> ${ data[ 0 ] } </td>
        <td>${ data[ 1 ] } </td>
        <td>${ data[ 2 ] }</td>

        <td class="d-flex justify-content-end"> <button type="button" class="btn btn-primary mr-2">
          <i class="far fa-edit color-white font-weight-bold"></i>
        </button>
            <button type="button" class="btn btn-primary btn-remove">
              <i class="fas fa-times color-white font-weight-bold "></i>
        </button> </td>
    </tr>`);
    }

    addBtn.addEventListener( 'click', addDataTable );

} );