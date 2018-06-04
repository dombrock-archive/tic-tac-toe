var game_over = false;
var turn = "player";
var cached_val = "_";
var checks = [
        // 0
        [[1,2],[3,6],[4,8]],
        // 1
        [[0,2],[4,7]],
        // 2
        [[0,1],[5,8],[6,4]],
        // 3
        [[0,6],[4,5]],
        // 4
        [[0,8],[1,7],[2,6],[3,5]],
        // 5
        [[2,8],[3,4]],
        // 6
        [[0,3],[4,2],[7,8]],
        // 7
        [[1,4],[6,8]],
        // 8
        [[0,4],[2,5],[6,7]]
        ];
        
function SetMsg(message){
    $(".message").fadeIn("slow");
    $(".message").html(message);
}


function WinConditions(){
    var boxes = [];
    $(".btn").each(function(index){
        boxes.push($(this).html());
    });
    for (check_num = 0; check_num < checks.length; check_num++) { 
        if(WinCheckSpace(boxes,check_num)){
            return true;
        }
    } 
    var blanks = 0;
    
    for (box_num = 0; box_num < boxes.length;box_num++){
        if(boxes[box_num]=="_"){
            blanks = blanks+1;
        }
    }
    
    if(blanks==0){
        SetMsg("The board is full and this move does not result in a win.");
        game_over = true;
        return "full";
    }
}
function WinCheckSpace(boxes,space){
        fin = false;
        for(i=0;i<checks[space].length;i++){
            if(WinCheck(boxes,space,checks[space][i][0],checks[space][i][1])){
                fin = true;
                game_over = true;
                //alert("fin"+space+checks[space][i][0]+checks[space][i][1]);
                $("#box-"+space).addClass("btn-fade-win");
                $("#box-"+checks[space][i][0]).addClass("btn-fade-win");
                $("#box-"+checks[space][i][1]).addClass("btn-fade-win");
            }
        }
        if(fin){
            game_over = true;
            return true;
        }
        return false;

}
function WinCheck(boxes, one, two, three){
    if(boxes[one] == "X" && boxes[two]=="X" && boxes[three]=="X"){
        SetMsg("You Won Somehow... Did you cheat??");
        return true;
    }else if(boxes[one] == "0" && boxes[two]=="0" && boxes[three]=="0"){
        SetMsg("You Lost!");
        return true;
    }
    else{
        return false;
    }
}
function AICheckSpace(boxes,space){
    if(boxes[space]!="0" && boxes[space] !="X"){
        var hit = false;
        for(i=0;i<checks[space].length;i++){
            if(AICheck(boxes,checks[space][i][0],checks[space][i][1])){
                hit = true;
            }
        }
        if(hit){
            $("#box-"+space).html("0");
            $("#box-"+space).addClass("btn-fade");
            return true;
        }
        return false;
    }
}
function AIMove(){
    if(turn!="AI"){
        alert("AI IS ATTEMPTING TO MOVE OUT OF TURN");
    }
    console.log("AI MOVE");
    var boxes = [];
    $(".btn").each(function(index){
        boxes.push($(this).html());
    });
    if(WinConditions()){
        return;
    }
    var moved = false;
    for (check_num = 0; check_num < checks.length; check_num++) { 
        if(AICheckSpace(boxes,check_num)){
            moved = true;
        }
    }   
    if(moved == false){
        var choice = 4;
        while(boxes[choice]=="X" || boxes[choice]=="0"){
            choice = Math.floor(Math.random() * 9);
        }
        $("#box-"+choice).html("0");
        $("#box-"+choice).addClass("btn-fade");

    }
    if(WinConditions()){
        return;
    }
    turn="player";
    
}
function AICheck(boxes,one,two){
    if(boxes[one] == "X" && boxes[two]=="X"){
        return true;
    }else{
        return false;
    }
}
$(".message").fadeOut(0);