$(document).ready(function(e){
    setUpEvent();
});

function setUpEvent(){
    $('#show').click(function(){
        $('#image').show();
    });
    
    $('#hide').click(function(){
        $('#image').hide();
    });

    $('#change').click(function(){
        $('#image').toggle();_
    })
}