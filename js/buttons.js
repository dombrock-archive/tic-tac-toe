$(".btn").hover(function(){
    cached_val = $(this).html()
    if($(this).html()!="0" && $(this).html()!="X"){
        $(this).html("X");
    }
},function(){
    $(this).html(cached_val);
});

$(".btn").click(function(){
    if(turn!="player"){
        SetMsg("Wait your turn!");
    }
    if(cached_val=="0" || cached_val=="X"){
        SetMsg("INVALID MOVE!");
        $(self).html(cached_val);
    }
    else if(WinConditions()){
        return;
    }
    else{
        console.log("PLAYER MOVE");
        cached_val = "X"
        turn = "AI";
        AIMove();
        if(game_over==false){
            $(".message").fadeOut();
        }
    }
});