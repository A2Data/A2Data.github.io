//游戏主要逻辑
var board = [];
var score = 0;
var best =0;
var startx,starty,endx,endy;
window.onbeforeunload = function(){
    console.log('load')
    if(score>best)
        best = score;
    localStorage.setItem('2048data',JSON.stringify({'board':board,'score':score,'best':best}));
}

$(function () {
    var info = JSON.parse(localStorage.getItem('2048data'));
    if (info != null){ //之前游戏信息存在缓存
        board = info.board;
        score = info.score;
        best = info.best;
    }
    else
        newGame();
    updateBoardView();
    $('#score').text(score);
    $('#best').text(best);
})

$(document).keydown(function (event) {//监听键盘按键
    // console.log(board)
    switch (event.keyCode){
        case 37://left
            moveLeft();
            break;
        case 38://up
            moveUp();
            break;
        case 39://right
            moveRight()
            break;
        case 40://down
            moveDown()
            break;
    }
    $("#score").text(score)
    if(score>best)
        $("#best").text(score)
    if(noSpace() && !canMoveUp() && !canMoveRight() && !canMoveDown() && !canMoveLeft()){
        alert("Game Over!")
    }
})

//监听移动端滑动
document.addEventListener('touchstart',function (event) {
    startx = event.touches[0].pageX;
    starty = event.touches[0].pageY;
})
document.addEventListener('touchend',function (event) {
    endx = event.changedTouches[0].pageX;
    endy = event.changedTouches[0].pageY;
    var left = $(".game-container").offset().left;//game-container块的坐标
    var top = $(".game-container").offset().top;
    event.preventDefault();
    if (startx>left && startx<left+cellSize*4+cellSpace*5 && starty>top && starty<top+cellSize*4+cellSpace*5) {//起始滑动位置在game-container中
        if (Math.abs(endx - startx) > 30 || Math.abs(endy - starty) > 30) {
            if (Math.abs(endx - startx) > Math.abs(endy - starty)) {
                if (endx - startx > 0)
                    moveRight();
                else
                    moveLeft();
            }
            else {
                if (endy - starty > 0)
                    moveDown();
                else
                    moveUp();
            }
        }
    }
})

function newGame() {
    score = 0;
    for(let i = 0; i < 4; i++){
        board[i] = []
        for (let j = 0; j < 4; j++){
            board[i][j] = 0;
        }
    }
    updateBoardView();
    ranNumber();
    ranNumber();
}

function ranNumber() { //随机在一个位置生成一个数字
    while (!noSpace()){
        var ranx = parseInt(Math.floor(Math.random()*4));
        var rany = parseInt(Math.floor(Math.random()*4));
        if (board[ranx][rany] == 0)
            break;
    }
    var rannum = Math.random()<0.8 ? 2 : 4;
    board[ranx][rany] = rannum;
    showNumber(ranx,rany,rannum);
}

function noSpace() {//判断是否全部格子都被占满
    for (let i = 0; i<4; i++){
        for(let j =0; j<4; j++) {
            if(board[i][j] == 0)
                return false
        }
    }
    return true
}

function updateBoardView() { //更新显示
    $(".number-cell").remove();
    for (let i =0; i < 4; i++)
        for (let j = 0; j<4; j++){
            $(".grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
            var theNumberCell = $('#number-cell-'+i+'-'+j);
            if(board[i][j] == 0){
                theNumberCell.css('width','0px');
                theNumberCell.css('height','0px');
                theNumberCell.css('top',getPosTop(i)+53);
                theNumberCell.css('left',getPosLeft(j)+53);
            }
            else {
                theNumberCell.css('width',cellSize);
                theNumberCell.css('height',cellSize);
                theNumberCell.css('top',getPosTop(i));
                theNumberCell.css('left',getPosLeft(j));
                theNumberCell.css('background-color',getCellColor(board[i][j]));
                theNumberCell.css('color',getNumColor(board[i][j]));
                theNumberCell.text(board[i][j]);
            }
        }
}




//判断是否可以移动
function canMoveLeft(){
    for (let i = 0; i<4; i++){
        for (let j = 1; j<4; j++){
            if(board[i][j] != 0)
                if (board[i][j-1] == 0 || board[i][j-1] == board[i][j])
                    return true
        }
    }
    return false
}
function canMoveRight(){
    for (let i = 0; i<4; i++){
        for (let j = 0; j<3; j++){
            if(board[i][j] != 0)
                if (board[i][j+1] == 0 || board[i][j+1] == board[i][j])
                    return true
        }
    }
    return false
}
function canMoveUp(){
    for (let i = 1; i<4; i++){
        for (let j = 0; j<4; j++){
            if(board[i][j] != 0)
                if (board[i-1][j] == 0 || board[i-1][j] == board[i][j])
                    return true
        }
    }
    return false
}
function canMoveDown(){
    for (let i = 0; i<3; i++){
        for (let j = 0; j<4; j++){
            if(board[i][j] != 0)
                if (board[i+1][j] == 0 || board[i+1][j] == board[i][j])
                    return true
        }
    }
    return false
}

//移动合并
function moveLeft() {
    if(!canMoveLeft())
        return;
    for(let x = 0; x<4; x++){
        var merged = [false,false,false,false]; //判断是否已经合并过
        for(let y = 1; y<4; y++) {
            if (board[x][y] !=0){//当前行从左至右寻找有数字点
                var currentnum = board[x][y]; //当前移动点的数字
                var last = y; //当前点移动或寻找的过程中记录移动后位置
                for(var n = y-1; n>=0; n--){//从右往左寻找空格或可合并格
                    if(board[x][n] == 0){
                        board[x][n] = currentnum;
                        board[x][last] = 0;
                        last = n;
                        continue;
                    }
                    else if(board[x][n] == currentnum && !merged[n]){
                        board[x][n] = currentnum * 2;
                        score+= currentnum * 2;
                        board[x][last] = 0;
                        last = n;
                        merged[n] = true;
                        continue;
                    }
                    else
                        break;//相邻格不能移动和合并直接结束
                }
                moveAnimation(x,y,x,n+1,merged[n+1])//移动动画
            }
        }
    }
    setTimeout("updateBoardView()",200) //移动完成后更新视图
    setTimeout("ranNumber()",200)//等待移动动画完成后再生成新数字
}
function moveRight() {
    if(!canMoveRight())
        return;
    for(let x = 0; x<4; x++){
        var merged = [false,false,false,false]; //判断是否已经合并过
        for(let y = 2; y>=0; y--) {
            if (board[x][y] !=0){//当前行从右至左寻找有数字点
                var currentnum = board[x][y]; //当前移动点的数字
                var last = y
                for(var n = y+1; n<4; n++){//从左往右寻找空格或可合并格
                    if(board[x][n] == 0){
                        board[x][n] = currentnum;
                        board[x][last] = 0;
                        last = n;
                        continue;
                    }
                    else if(board[x][n] == currentnum && !merged[n]){
                        board[x][n] = board[x][n] * 2;
                        score+= currentnum * 2;
                        board[x][last] = 0;
                        last = n;
                        merged[n] = true;
                        continue;
                    }
                    else
                        break;
                }
                moveAnimation(x,y,x,n-1,merged[n-1])
            }
        }
    }
    setTimeout("updateBoardView()",200)
    setTimeout("ranNumber()",200)
}
function moveUp() {
    if(!canMoveUp())
        return;
    for(let y = 0; y<4; y++){
        var merged = [false,false,false,false]; //判断是否已经合并过
        for(let x = 1; x<4; x++) {
            if (board[x][y] !=0){//当前列从上至下找有数字点
                var currentnum = board[x][y];//当前移动点的数字
                var last = x;
                for(var n = x-1; n>=0; n--){//从下至上寻找空格或可合并格
                    if(board[n][y] == 0){
                        board[n][y] = currentnum;
                        board[last][y] = 0;
                        last = n;
                        continue;
                    }
                    else if(board[n][y] == currentnum && !merged[n]){
                        board[n][y] = board[n][y] * 2;
                        score+= currentnum * 2;
                        board[last][y] = 0;
                        last = n;
                        merged[n] = true;
                        continue;
                    }
                    else
                        break;
                }
                moveAnimation(x,y,n+1,y,merged[n+1])
            }
        }
    }
    setTimeout("updateBoardView()",200)
    setTimeout("ranNumber()",200)
}
function moveDown() {
    if(!canMoveDown())
        return;
    for(let y = 0; y<4; y++){
        var merged = [false,false,false,false] //判断是否已经合并过
        for(let x = 2; x>=0; x--) {
            if (board[x][y] !=0){//当前列从下至上找有数字点
                var currentnum = board[x][y] //当前移动点的数字
                var last = x;
                for(var n = x+1; n<4; n++){//从当前点上至下寻找空格或可合并格
                    if(board[n][y] == 0){
                        board[n][y] = currentnum;
                        board[last][y] = 0
                        last = n;
                        continue;
                    }
                    else if(board[n][y] == currentnum && !merged[n]){
                        board[n][y] = board[n][y] * 2;
                        score+= currentnum * 2;
                        board[last][y] = 0;
                        last = n;
                        merged[n] = true;
                        continue;
                    }
                    else
                        break;
                }
                moveAnimation(x,y,n-1,y,merged[n-1])
            }
        }
    }
    setTimeout("updateBoardView()",200)
    setTimeout("ranNumber()",200)
}