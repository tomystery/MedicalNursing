/**
 * Created by zhm on 17.2.11.
 */
//树形菜单开始
function treeMenu(){
    //点击第一层的+号
    $("div.pnav-box div.box-title a.btn-fold").click(function (e) {
        e.preventDefault();
        $(this).addClass("hidden");
        $(this.parentNode).find("a.btn-unfold").removeClass("hidden");
        $(this.parentNode.parentNode).find("ul.box-list").removeClass("hidden");
    });
    //点击第一层的-号
    $("div.pnav-box div.box-title a.btn-unfold").click(function (e) {
        e.preventDefault();
        $(this).addClass("hidden");
        $(this.parentNode).find("a.btn-fold").removeClass("hidden");
        $(this.parentNode.parentNode).find("ul.box-list").addClass("hidden");
    });
}
treeMenu();
//树形菜单结束