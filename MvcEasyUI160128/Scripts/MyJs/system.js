/**系统管理**/
$(function(){
	$('#menlei_dg').datagrid({
		  method: 'get',
		  fitColumns: true,
		  singleSelect: true,
		  striped: true,
		  nowrap: true,
		  url: 'Data/datagrid_data1.json',
		  loadMsg: '正在努力加载中...',
		  pagination: true,
		  rownumbers: true,
		  pageSize: 10,
		  pageList: [10, 20, 30],
		  onClickRow:function(index,row){ 
			  },
		  onDblClickRow:function(index,row){
			 
			  } ,
	      onRowContextMenu:function(e,index,row){
	
			  }
	  });
	  /*******************************/
	  var p = $('#menlei_dg').datagrid('getPager');
	  $(p).pagination({
		  beforePageText: '第',
		  afterPageText: '页    共 {pages} 页',
		  displayMsg: '当前显示 {from} - {to} 条记录  共 {total} 条产品信息'
	  });
	  /*******************************/
	
	})