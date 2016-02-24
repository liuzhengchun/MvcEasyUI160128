/*
*** Author: z.c.liu
*** Corporation: 兰台信息
*** DateTime: 2016/1/28
*** Description:预处理JS库
*/
var cache_index;
var cache_row;
/**预处理页面初始加载**/
$(function(){
    /**动态加载卷列**/
    $('#archives_dg').datagrid({
        fit: true,
        method: 'get',
        resizable:true,
        fitColumns: true,
        singleSelect: true,
        striped: true,
        nowrap: true,
        loadMsg: '正在努力加载中...',
        pagination: true,
        rownumbers: true,
        remoteSort: false,
        multiSort: true,
        remoteFilter: true,
        pageSize: 10,
        pageList: [10, 20, 30],
        loadFilter: function (data) {
            if (data.d) {
                return data.d;
            } else {
                return data;
            }
        },
        onDblClickRow: function (index, row) {
            $('#files_dg').datagrid({ url: '/ArchiveManage/LoadFilesData' });
        },
        onRowContextMenu: function (e, index, row) {
            e.preventDefault();
            cache_index = index;
            cache_row = row;
            $('#myarchive_menu').menu('show', {
                left: e.pageX,
                top: e.pageY
            });
        }
    });
    /**分页操作**/
    var p = $('#archives_dg').datagrid('getPager');
    $(p).pagination({
        beforePageText: '第',
        afterPageText: '页    共 {pages} 页',
        displayMsg: '当前显示 {from} - {to} 条记录  共 {total} 条信息'
    });

    /**加载文件信息**/
    $('#files_dg').datagrid({
        fit:true,
        method: 'get',
        fitColumns: true,
        singleSelect: true,
        striped: true,
        nowrap: true,
        loadMsg: '正在努力加载中...',
        pagination: true,
        rownumbers: true,
        remoteSort: false,
        multiSort: true,
        remoteFilter: true,
        pageSize: 10,
        columns: [[
           { field: 'Id', title: '', sortable: true, hidden: true },
           { field: 'A_Number', title: '案卷号', sortable: true },
           { field: 'F_Number', title: '文件编号', sortable: true },
           { field: 'F_Name', title: '文件题名', sortable: true },
           { field: 'F_Year', title: '年代号', sortable: true },
           { field: 'F_TotalNum', title: '页数', sortable: true },
           { field: 'F_PIC', title: '负责人', sortable: true },
           { field: 'F_Date', title: '文件日期', sortable: true, editor: 'datetimebox', formatter: formatDateBoxFull },
           { field: 'F_GuiDate', title: '归档日期', sortable: true, editor: 'datetimebox', formatter: formatDateBoxFull }
        ]],
        onDblClickRow: function (index, row) {
            $('#filecontent_dg').datagrid({ url: '/ArchiveManage/LoadFileContent' });
        },
        onRowContextMenu: function (e, index, row) {
            e.preventDefault();
            cache_index = index;
            cache_row = row;
            $('#myfiles_menu').menu('show', {
                left: e.pageX,
                top: e.pageY
            });
        }
    });
    /**分页操作**/
    var p = $('#files_dg').datagrid('getPager');
    $(p).pagination({
        beforePageText: '第',
        afterPageText: '页    共 {pages} 页',
        displayMsg: '当前显示 {from} - {to} 条记录  共 {total} 条产品信息'
    });

    /**加载文件内容信息**/
    $('#filecontent_dg').datagrid({
        fit:true,
        method: 'get',
        fitColumns: true,
        singleSelect: true,
        striped: true,
        nowrap: true,
        loadMsg: '正在努力加载中...',
        pagination: false,
        rownumbers: true,
        remoteSort: false,
        multiSort: true,
        remoteFilter: true,
        pageSize: 10,
        pageList: [10, 20, 30],
        onRowContextMenu: function (e, index, row) {
            e.preventDefault();
            cache_index = index;
            cache_row = row;
            $('#mycontent_menu').menu('show', {
                left: e.pageX,
                top: e.pageY
            });
        }
    });
    /**分页操作**/
    var p = $('#filecontent_dg').datagrid('getPager');
    $(p).pagination({
        beforePageText: '第',
        afterPageText: '页    共 {pages} 页',
        displayMsg: '当前显示 {from} - {to} 条记录  共 {total} 条产品信息'
    });

    /**点击树加载数据**/
    $('#myadvance  .easyui-tree').tree({
        onClick: function (node) {
            $('#archives_dg').datagrid({
                url: '/ArchiveManage/LoadArchiveData'
            });
        }
    });
})

/**案卷修改选择加载**/
function SelectArchive() {
    var s = cache_row;
    $('#txt_Id').textbox('setValue', s.Id);
    $('#txt_AchiveId').textbox('setValue', s.Catalog_ID);
    $('#txt_AchiveName').textbox('setValue', s.Name);
    $('#txt_A_Year').textbox('setValue', s.Year);
    $('#txt_A_Number').textbox('setValue', s.PageCount);
    $('#txt_A_PIC').textbox('setValue', s.Archarge);
    $('#txt_StartDate').datebox('setValue', s.Startday);
    $('#txt_EndDate').datebox('setValue', s.Enday);
    $('#txt_A_StartDate').datebox('setValue', s.Lastday);
}

/**案卷表单清空**/
function ClearArchive() {
    $('#txt_Id').textbox('setValue', '');
    $('#txt_AchiveId').textbox('setValue','');
    $('#txt_AchiveName').textbox('setValue','');
    $('#txt_A_Year').textbox('setValue','');
    $('#txt_A_Number').textbox('setValue','');
    $('#txt_A_PIC').textbox('setValue','');
    $('#txt_StartDate').datebox('setValue','');
    $('#txt_EndDate').datebox('setValue','');
    $('#txt_A_StartDate').datebox('setValue','');
}

/**案卷弹出对话框及操作**/
function ArchiveForm(e) {
    if (e == 1) {/*新增*/
        ClearArchive();
        $('#archive_form').dialog('open').dialog('setTitle', "新增案卷");
        //var id = $('#txt_Id').val();
        //var aid = $('#txt_AchiveId').val();
        //var aname = $('#txt_AchiveName').val();
        //var ayear = $('#txt_A_Year').val();
        //var anum = $('#txt_A_Number').val();
        //var apic = $('#txt_A_PIC').val();
        //var sdate = $('#txt_StartDate').datebox('getValue');
        //var edate = $('#txt_EndDate').datebox('getValue');
        //var asdate = $('#txt_A_StartDate').datebox('getValue');
        //$('#archive_ff').ajaxSubmit({
        //    url: "/ArchiveManage/ArchiveControl",
        //    data: { _type: 1, _id: id, _aid: aid, _aname: aname, _ayear: ayear, _anum: anum, _apic: apic, _sdate: sdate, _edate: edate, _asdate: asdate },
        //    dataType:"String",
        //    success: function(data){
        //        if (data["0"] == "1") {
        //            $('#archive_form').dialog('close');
        //            $('#archives_dg').datagrid("reload", {});
        //            $('#myadvance .easyui-tree').tree("reload");
        //        } else {
        //            msg("新增失败，请刷新重试");
        //            return;
        //        }
        //    }
        //});
        $('#archives_submit').bind("click", function () {
            if (!$("#archive_form").form('validate')) {
                return false;
            }
            $('#archives_submit').unbind("click");
            var id = $('#txt_Id').val();
            var aid = $('#txt_AchiveId').val();
            var aname = $('#txt_AchiveName').val();
            var ayear = $('#txt_A_Year').val();
            var anum = $('#txt_A_Number').val();
            var apic = $('#txt_A_PIC').val();
            var sdate = $('#txt_StartDate').datebox('getValue');
            var edate = $('#txt_EndDate').datebox('getValue');
            var asdate = $('#txt_A_StartDate').datebox('getValue');
            $.post("/ArchiveManage/ArchiveControl", { _type: 1, _id: id, _aid: aid, _aname: aname, _ayear: ayear, _anum: anum, _apic: apic, _sdate: sdate, _edate: edate, _asdate: asdate }, function (data) {
                if (data["0"] == "1") {
                        $('#archive_form').dialog('close');
                        $('#archives_dg').datagrid("reload", {});
                        $('#myadvance .easyui-tree').tree("reload");
                    } else {
                        msg("新增失败，请刷新重试");
                        return;
                    }
            });
        });
    }
    else if (e == 2) {/*克隆*/
        SelectArchive();
        $('#archive_form').dialog('open').dialog('setTitle', "克隆案卷");
    }
    else if (e == 3) {
        SelectArchive();
        $('#archive_form').dialog('open').dialog('setTitle', "修改案卷");
        $('#archives_submit').bind("click",function () {
            $.messager.confirm("修改提示", "确定要修改吗？", function (r) {
                if (r) {
                    if (!$("#archive_form").form('validate')) {
                        return false;
                    }
                    $('#archives_submit').unbind("click");
                    var id = $('#txt_Id').val();
                    var aid = $('#txt_AchiveId').val();
                    var aname = $('#txt_AchiveName').val();
                    var ayear = $('#txt_A_Year').val();
                    var anum = $('#txt_A_Number').val();
                    var apic = $('#txt_A_PIC').val();
                    var sdate = $('#txt_StartDate').datebox('getValue');
                    var edate = $('#txt_EndDate').datebox('getValue');
                    var asdate = $('#txt_A_StartDate').datebox('getValue');
                    $.post("/ArchiveManage/ArchiveControl", { _type: 3, _id: id, _aid: aid, _aname: aname, _ayear: ayear, _anum: anum, _apic: apic, _sdate: sdate, _edate: edate, _asdate: asdate }, function (data) {
                        if (data["0"] == "1") {
                            $('#archive_form').dialog('close');
                            $('#archives_dg').datagrid("reload", {});
                            $('#myadvance .easyui-tree').tree("reload");
                        } else {
                            msg("修改失败，请刷新重试");
                            return;
                        }
                    });
                }
            });
        });
        
    }
    else if (e == 4) {/**删除**/
        var s = $('#archives_dg').datagrid("getSelected");
        if (s) {
            $.messager.confirm("警告", "确定要删除吗？", function (r) {
                if (r) {
                    $.post("/ArchiveManage/ArchiveControl", { _type: 4, _id: s.Id }, function (data) {
                        if (data["0"] == '1') {
                            $('#archives_dg').datagrid("reload", {});
                            $('#myadvance .easyui-tree').tree("reload");
                        } else {
                            msg("删除失败，请刷新，重试");
                            return;
                        }
                    });
                }
            });
        } else {
            msg("抱歉，您还没有选择，请选择");
            return;
        }
    }
}

/**文件弹出对话框及操作**/
function FilesForm(e) {
    if (e == 1) {/*新增*/
        $('#FilesTest_form').dialog('open').dialog('setTitle', "新增文件");
        $('#bnt_sumbit_filestest').click(function () {
            if (!$("#archive_form").form('validate')) {
                return false;
            }
            var _aname = $('#txt_AchiveName').val();
            var _ayear = $('#txt_A_Year').val();
            var _anum = $('#txt_A_Number').val();
            var _apic = $('#txt_A_PIC').val();
            var _sdate = $('#txt_StartDate').datebox('getValue');
            var _edate = $('#txt_EndDate').datebox('getValue');
            var _asdate = $('#txt_A_StartDate').datebox('getValue');
            var arr = [_id, _aid, _aname, _ayear, _anum, _apic, _sdate, _edate, _asdate];
            if (db == null) {
                alert("抱歉，数据库连接失败");
                return;
            } else {
                var ret = db.fetchAll('select * from T_Achives', function (ret) { alert('ok') });
                alert("!" + ret);
                //db.insert("T_Achives",);
            }
        });
    }
    else if (e == 2) {/*修改*/
        $('#FilesTest_form').dialog('open').dialog('setTitle', "克隆文件");

    }
    else if (e == 3) {
        $('#FilesTest_form').dialog('open').dialog('setTitle', "修改文件");
    }
    else if (e == 4) {
        $('#FilesTest_form').dialog('close');
    }
}

/**文件内容弹出对话框及操作**/
function ContentForm(e) {
    if (e == 1) {
        
        $('#ContentForm').dialog('open').dialog('setTitle', "新增");
        
    }
    
}