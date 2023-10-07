//动画效果
$(window).resize(function () {//监听屏幕大小变化
    if (document.body.clientWidth>500) { //屏幕可视大小大于500px
        cellSize = 106.25;
        cellSpace = 15;
    }
    else{
        cellSize = 57.5;
        cellSpace = 10;
    }
    for (let i = 0; i<4; i++)
        for (let j = 0; j<4; j++){
            var numberCell = $('#number-cell-'+i+'-'+j);
            numberCell.animate({ //大小屏幕切换移动到对应位置
                width:cellSize,
                height:cellSize,
                top:getPosTop(i),
                left:getPosLeft(j)
            },100)
        }
})

function showNumber(i,j,rannum) {//显示随机生成的数字
    var numberCell = $('#number-cell-'+i+'-'+j);
    numberCell.css("background-color",getCellColor(rannum));
    numberCell.css("color",getNumColor(rannum));
    numberCell.text(rannum);
    numberCell.animate({
        width:cellSize,
        height:cellSize,
        top:getPosTop(i),
        left:getPosLeft(j)
    },100);
}

function moveAnimation(fromx,fromy,tox,toy,merged) { //移动动画
    var numberCell = $('#number-cell-'+fromx+'-'+fromy);
    numberCell.animate({
        top:getPosTop(tox),
        left:getPosLeft(toy)
    },100)
    if (merged){ //合并动画
        numberCell.animate({
            width:cellSize+cellSpace*2,
            height:cellSize+cellSpace*2,
            top:getPosTop(tox)-cellSpace,
            left:getPosLeft(toy)-cellSpace
        },50)
        numberCell.animate({
            width:cellSize,
            height:cellSize,
            top:getPosTop(tox),
            left:getPosLeft(toy)
        },50)
    }
}