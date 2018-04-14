//加载比赛赛况
function loadGameResult() {
    $.ajax({
        type: "POST",//请求方式
        url: "../../Data/gameResult.json",
        dataType: "json",
        success: function (result) {
            showGameResultList(result);
        }
    });
}

//展示比赛赛况方法
function showGameResultList(gameResult) {
    $("#gameResultList").html("");
    for (var i = 0; i < gameResult.length; i++) {
        $("#gameResultList").append("<li><span id='gameone_" + i + "'></span>&nbsp;&nbsp;<span id='gameonescore_" + i + "'></span>&nbsp;&nbsp;  vs  </span>&nbsp;&nbsp;<span id='gametwoscore_" + i + "'></span>&nbsp;&nbsp;<span id='gametwo_" + i + "'></li><hr/>");
        $("#gamename").html(gameResult[i].gameName);
        $("#gameone_" + i).html(gameResult[i].gameOne);
        $("#gameonescore_" + i).html(gameResult[i].gameOneScore);
        $("#gametwo_" + i).html(gameResult[i].gameTwo);
        $("#gametwoscore_" + i).html(gameResult[i].gameTwoScore);
    }
}

//读取视频列表
function loadVideoList(index) {
    var url = "";
    switch (index) {
        case 0:
            url = "../../Data/ronnie.json";
            break;
        case 1:
            url = "../../Data/ding.json";
            break;
        case 2:
            url = "../../Data/selby.json";
            break;
        case 3:
            url = "../../Data/zhanghaigen.json";
            break;
        case 4:
            url = "../../Data/lwb.json";
            break;
    }
    $.ajax({
        type: "POST",//请求方式
        url: url,
        dataType: "json",
        success: function (result) {
            showVideoList(result);
        }
    });
}

//展示经典比赛
function showVideoList(videoList) {
    for (var i = 0; i < videoList.length; i++) {
        var videourl=videoList[i].videoGameWebAddress;
        $("#videoShowDiv").append("<div class='layui-col-md3'><div class='panel'><div class='panel-body text-center'><a href='"+videourl+"'><img alt='Mystical' class='img-lg img-circle mar-btm'src='" + videoList[i].videoImgPath + "' width='200' height='150'/><p style='margin-top: 5px;' id='video_" + i + "'></p></a></div></div></div>");
        $("#video_" + i).html(videoList[i].videoName);
    }
}

//打开链接
function openHrefLocation(url) {
    window.open(url);
}