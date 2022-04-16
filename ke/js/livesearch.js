$(document).ready(function(){
    $("#form").on("submit", function(e){
        e.preventDefault();
    });
    
    $("#textSearch").on("keyup", function(){
        let text = $("#textSearch").val();
        $.ajax({
            type: 'post',
            url :'http://127.0.0.1/shoetailor/client/php/product_search.php',
            data : {
                search : text
            },
            success : function(res){
                 if(check($("#textSearch").val()))
                 {
                     $(".result").html('<div class="p-5-0">'+ res +'</div>');
                 }else{
                    $(".result").html('');
                 }
                 
                 
            }
        });
       
    });
});

function check(check)
{
    if(check.length > 0)
    {
        return true;
    }
    else{
        return false;
    }
}
