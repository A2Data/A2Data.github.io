//cell大小颜色等样式
var cellSize//格子大小
var cellSpace//格子间距
$(function () {
    if (document.body.clientWidth>500) { //屏幕可视大小大于500px
        cellSize = 106.25;
        cellSpace = 15;
    }
    else{
        cellSize = 57.5;
        cellSpace = 10;
    }
})
function getCellColor(num) { //返回单元格背景色
    switch (num){
        case 2:
            return "#eee4da";
            break;
        case 4:
            return "#ede0c8";
            break;
        case 8:
            return "#f2b179";
            break;
        case 16:
            return "#f59563";
            break;
        case 32:
            return "#f67c5f";
            break;
        case 64:
            return "#f65e3b";
            break;
        case 128:
            return "#edcf72";
            break;
        case 256:
            return "#edcc61";
            break;
        case 512:
            return "#9c0";
            break;
        case 1024:
            return "#33b5e5";
            break;
        case 2048:
            return "#09c";
            break;
    }
    return "rgba(238, 228, 218, 0.35)";
}

function getNumColor(num) { //返回对应数字颜色
    if (num ==2 || num==4)
        return "#776e65";
    else
        return "white";
}

function getPosTop(row) {//根据行数得到top
    // var row = Math.floor(index/4);
    return (cellSize * row + cellSpace * (row+1))
}
function getPosLeft(col) {//根据列数得到left
    // var col = Math.floor(index - index/4);
    return (cellSize * col + cellSpace * (col+1))
}