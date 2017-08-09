/**
 * Created by zhm on 17.2.11.
 */
var countPage;
var nowPag = 1;
var pageSize;
var countSize;

var starIndex;
var endIndex;

// 定义行号
var num = 1;

$(function () {
    // 注册添加用户的事件
    var addData = function () {
        var $tbody = $("#show");
        for (var i = 0; i < 80; i++) {
            var $tr = $("<tr></tr>");
            $("<td></td>").appendTo($tr);
            $("<td></td>").html("00"+parseInt('1231' + i)).appendTo($tr);
            $("<td class='tName'>张之洞</td>").appendTo($tr);
            $("<td></td>").html("男").appendTo($tr);
            $("<td></td>").html("医生").appendTo($tr);
            $("<td></td>").html("主治").appendTo($tr);
            $("<td></td>").html("北京大学第一医院").appendTo($tr);
            $("<td></td>").html("皮肤科").appendTo($tr);
            $("<td></td>").html("13858228228").appendTo($tr);
            $("<td></td>").html("湖北武汉").appendTo($tr);
            $("<td></td>").html("2015-09-06 12:21").appendTo($tr);
            $("<td></td>").html("等待审核").appendTo($tr);
            $("<td class='tEdit'></td>").html("admin").appendTo($tr);
            $tr.appendTo($tbody);
        }
        //添加按钮
        var $td1 = $('<td> <button class="rejBtn">拒绝</button> <button class="passBtn">通过</button></td>');
        $('#show tr:lt(8)').append($td1);
        $('#show tr:gt(8)').append("<td></td>");


    };

    addData();
    pageNation();

    // 注册分页操作的按钮点击事件
    $("#first").click(pageNation);
    $("#back").click(pageNation);
    $("#next").click(pageNation);
    $("#last").click(pageNation);

    for (var pageIndex = 1; pageIndex <= countPage; pageIndex++) {
        $('<button></button>').text(pageIndex).attr("id", "p" + pageIndex).attr('class', 'sel').insertBefore("#last");
    }

    for (var i = 1; i <= countSize; i++) {
        $('#p' + i).click(pageNation);
    }
});

// 分页操作的函数
var pageNation = function () {

    //选择显示条数的操作
    pageSize = 10;
    // 获取所有的数据条数
    countSize = $("#show tr").size();
    // 获取总页数
    countPage = Math.ceil(countSize / pageSize);

    // 处理翻页的操作
    if (this.nodeType == 1) {
        var idValue = $(this).attr("id");
        $("#bottomTable button").removeClass('on');


        if (nowPag == $(this).text()) {
            $(this).addClass('on');
        }
        if ("first" == idValue) {
            nowPag = 1;
        } else if ("back" == idValue) {
            // alert(nowPag);
            if (nowPag > 1) {
                nowPag--;
            }

        } else if ("next" == idValue) {
            if (nowPag < countPage) {
                nowPag++;
            }
        } else if ("last" == idValue) {
            // alert(idValue);
            nowPag = countPage;
        } else if ($(this).hasClass('sel')) {
            nowPag = $(this).text();
        }

    }

    // 获取显示开始和结束的下标
    starIndex = (nowPag - 1) * pageSize + 1;
    endIndex = nowPag * pageSize;

    if (endIndex > countSize) {
        // alert("下标大于总记录数"+endIndex);
        endIndex = countSize;
    }

    if (countSize < pageSize) {
        // alert("总记录数小小于每页的显示条数"+endIndex);
        endIndex = countSize;
    }


    if (starIndex == endIndex) {
        // 显示的操作
        $("#show tr:eq(" + (starIndex - 1) + ")").show();
        $("#show tr:lt(" + (starIndex - 1) + ")").hide();
    } else {
        // 显示的操作
        $("#show tr:gt(" + (starIndex - 1) + ")").show();
        $("#show tr:lt(" + (endIndex - 1) + ")").show();

        // 隐藏的操作
        $("#show tr:lt(" + (starIndex - 1) + ")").hide();
        $("#show tr:gt(" + (endIndex - 1) + ")").hide();
    }
};
