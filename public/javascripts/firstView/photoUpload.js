// var inputs = document.querySelectorAll( '#photoUrl' );
// Array.prototype.forEach.call( inputs, function( input )
// {
var uploaderInput = document.querySelector( '#photoUrl' );
var uploaderLabel	= uploaderInput.nextElementSibling;
var	labelVal = uploaderLabel.innerHTML;

uploaderInput.addEventListener( 'change', function( e )
{
	var fileName = '';
	if( this.files && this.files.length > 1 )
		fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
	else
		fileName = e.target.value.split( '\\' ).pop();

	if( fileName ){
    if(fileName.length>13){
      fileName = fileName.slice(0,13)+ "...";
    }
		uploaderLabel.querySelector( 'span' ).innerHTML = fileName;
  }
	else
		uploaderLabel.innerHTML = labelVal;
});
// });
