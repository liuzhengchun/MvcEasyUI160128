/*
*** Author: z.c.liu
*** Corporation: 兰台信息
*** DateTime: 2016/1/14
*** Description:综合档案管理系统V8.0版本后台管理公共js库（View层）
*/

/*
*** DateTime: 2016/1/14
*** Description:加载用户操作
*/
$(function () {
	/**时间获取**/
    ReadDateTimeShow();
    var setTimeInterval = setInterval(ReadDateTimeShow, 1000);
    /**首页**/
    $('#Admin_mytab').tabs("add", {
        title: "欢迎您",
        closable: false,
        cache: true,
        href: "/ArchiveManage/SubIndex"
    });
    /**系统菜单加载**/
    $('#system').tree({
        url: "",
        onClick: function (node) {
            if ($('#Admin_mytab').tabs('exists', node.text)) {
                $('#Admin_mytab').tabs('select', node.text);
            }
            else {
                $('#Admin_mytab').tabs('add', {
                    title: node.text,
                    href: node.attributes.url,
                    cache: false,
                    closable: true
                });
            }
        }
    });
	/**预处理加载**/
    $('#advance').tree({
        url:"",
        onClick: function (node) {
            if ($('#Admin_mytab').tabs('exists', node.text)) {
                $('#Admin_mytab').tabs('select', node.text);
            }
            else {
                $("#Admin_mytab .tabs li").each(function (index, obj) {
                    //获取所有可关闭的选项卡  
                    var tab = $(".tabs-closable", this).text();
                    $("#Admin_mytab").tabs('close', tab);
                });
                $('#Admin_mytab').tabs('add', {
                    title: node.text,
                    href: node.attributes.url,
                    cache: false,
                    closable: true
                });
            }
        }
    });
    /**统计目录**/
    $('#dataCount').tree({
        url: "",
        onClick: function (node) {
            if ($('#Admin_mytab').tabs('exists', node.text)) {
                $('#Admin_mytab').tabs('select', node.text);
            }
            else {
                $('#Admin_mytab').tabs('add', {
                    title: node.text,
                    href: node.attributes.url,
                    cache: false,
                    closable: true
                });
            }
        }
    });
})
/*
*** DateTime: 2016/1/14
*** Description:客户端显示当前时间 
*/
function ReadDateTimeShow() {
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var time = new Date().toLocaleTimeString();
    var addDate = year + "年" + month + "月" + day + "日 " + time;
    $(".sys_date").text(addDate)
}
/*
*** DateTime: 2016/1/14
*** Description:弹出修改登录账户密码对话框 
*/
function ShowAlterPasswordDialog() {
    $('#txt_old').val('');
    $('#txt_new').val('');
    $('#txt_rep').val('');
    $('#AlterPwdForm').dialog('open').dialog('setTitle', '修改登录密码');
}
/*
*** DateTime: 2016/1/14
*** Description:提交修改密码表单 
*/
function AlertPwd() {
    var oldpwd = $('#txt_old').val();
    var newpwd = $('#txt_new').val();
    var reppwd = $('#txt_rep').val();
    if (oldpwd.length <= 0) {
        msg("请输入原始密码<br />Please enter the original password ");
        return false;
    }
    if (newpwd.length <= 0) {
        msg("请输入新的密码<br />Please enter your new password ");
        return false;
    }
    if (reppwd.length <= 0) {
        msg("请重复输入一次新密码<br />Please re-enter a new password ");
        return false;
    }
    if (newpwd != reppwd) {
        msg("两次密码输入的不一致<br />Not the same password twice ");
        return false;
    }
    $.messager.confirm('修改登录密码', '确定要修改登录系统的密码吗?', function (r) {
        if (r) {

        }
    });
}
/*
*** DateTime: 2016/1/14
*** Description:退出系统
*/
function LogOut() {
    sessionStorage.clear();
    //window.location.href = "/Account/Login";
    $.post("/Account/LogOff",function (data) {
       // window.localStorage.href = "Account/Login";
    });
}

/*
*** DateTime: 2016/1/14
*** Description:弹出对话框
*/
function msg(msgtext) {
    if (msgtext[1] == '|') {
        if (msgtext[0] == '2') {
            var text = msgtext.split('|');
            $.messager.alert('提示', '<span style="font-size:12px;font-family: Microsoft Yahei">' + text[1] + '</span><br /><a href=' + text[2] + ' target="_blank">失败原因</a>', 'info');

        } else {
            $.messager.alert('提示', '<span style="font-size:12px;font-family: Microsoft Yahei">' + msgtext.substring(2, msgtext.length) + '</span>', 'info');
        }
    }
    else {
        $.messager.alert('提示', '<span style="font-size:12px;font-family: Microsoft Yahei">' + msgtext + '</span>', 'info');
    }
}

