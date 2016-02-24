// JavaScript Document
/*
* 璁捐鍣ㄧ鏈夌殑閰嶇疆璇存槑 
* 涓€
* UE.leipiFormDesignUrl  鎻掍欢璺緞
* 
* 浜�
*UE.getEditor('myFormDesign',{
*          toolleipi:true,//鏄惁鏄剧ず锛岃璁″櫒鐨勬竻鍗� tool
*/
UE.leipiFormDesignUrl = 'formdesign';
/**
 * 鏂囨湰妗�
 * @command textfield
 * @method execCommand
 * @param { String } cmd 鍛戒护瀛楃涓�
 * @example
 * ```javascript
 * editor.execCommand( 'textfield');
 * ```
 */
UE.plugins['text'] = function () {
	var me = this,thePlugins = 'text';
	me.commands[thePlugins] = {
		execCommand:function () {
			var dialog = new UE.ui.Dialog({
				iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/text.html',
				name:thePlugins,
				editor:this,
				title: '鏂囨湰妗�',
				cssRules:"width:600px;height:310px;",
				buttons:[
				{
					className:'edui-okbutton',
					label:'纭畾',
					onclick:function () {
						dialog.close(true);
					}
				},
				{
					className:'edui-cancelbutton',
					label:'鍙栨秷',
					onclick:function () {
						dialog.close(false);
					}
				}]
			});
			dialog.render();
			dialog.open();
		}
	};
	var popup = new baidu.editor.ui.Popup( {
		editor:this,
		content: '',
		className: 'edui-bubble',
		_edittext: function () {
			  baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
			  me.execCommand(thePlugins);
			  this.hide();
		},
		_delete:function(){
			if( window.confirm('纭鍒犻櫎璇ユ帶浠跺悧锛�') ) {
				baidu.editor.dom.domUtils.remove(this.anchorEl,false);
			}
			this.hide();
		}
	} );
	popup.render();
	me.addListener( 'mouseover', function( t, evt ) {
		evt = evt || window.event;
		var el = evt.target || evt.srcElement;
        var leipiPlugins = el.getAttribute('leipiplugins');
		if ( /input/ig.test( el.tagName ) && leipiPlugins==thePlugins) {
			var html = popup.formatHtml(
				'<nobr>鏂囨湰妗�: <span onclick=$$._edittext() class="edui-clickable">缂栬緫</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">鍒犻櫎</span></nobr>' );
			if ( html ) {
				popup.getDom( 'content' ).innerHTML = html;
				popup.anchorEl = el;
				popup.showAnchor( popup.anchorEl );
			} else {
				popup.hide();
			}
		}
	});
};
/**
 * 瀹忔帶浠�
 * @command macros
 * @method execCommand
 * @param { String } cmd 鍛戒护瀛楃涓�
 * @example
 * ```javascript
 * editor.execCommand( 'macros');
 * ```
 */
UE.plugins['macros'] = function () {
    var me = this,thePlugins = 'macros';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/macros.html',
                name:thePlugins,
                editor:this,
                title: '瀹忔帶浠�',
                cssRules:"width:600px;height:270px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                },
                {
                    className:'edui-cancelbutton',
                    label:'鍙栨秷',
                    onclick:function () {
                        dialog.close(false);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup( {
        editor:this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
              baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
              me.execCommand(thePlugins);
              this.hide();
        },
        _delete:function(){
            if( window.confirm('纭鍒犻櫎璇ユ帶浠跺悧锛�') ) {
                baidu.editor.dom.domUtils.remove(this.anchorEl,false);
            }
            this.hide();
        }
    } );
    popup.render();
    me.addListener( 'mouseover', function( t, evt ) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var leipiPlugins = el.getAttribute('leipiplugins');
        if ( /input/ig.test( el.tagName ) && leipiPlugins==thePlugins) {
            var html = popup.formatHtml(
                '<nobr>瀹忔帶浠�: <span onclick=$$._edittext() class="edui-clickable">缂栬緫</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">鍒犻櫎</span></nobr>' );
            if ( html ) {
                popup.getDom( 'content' ).innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor( popup.anchorEl );
            } else {
                popup.hide();
            }
        }
    });
};
/**
 * 鍗曢€夋
 * @command radio
 * @method execCommand
 * @param { String } cmd 鍛戒护瀛楃涓�
 * @example
 * ```javascript
 * editor.execCommand( 'radio');
 * ```

UE.plugins['radio'] = function () {
    var me = this,thePlugins = 'radio';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/radio.html',
                name:thePlugins,
                editor:this,
                title: '鍗曢€夋',
                cssRules:"width:590px;height:370px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                },
                {
                    className:'edui-cancelbutton',
                    label:'鍙栨秷',
                    onclick:function () {
                        dialog.close(false);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup( {
        editor:this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
              baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
              me.execCommand(thePlugins);
              this.hide();
        },
        _delete:function(){
            if( window.confirm('纭鍒犻櫎璇ユ帶浠跺悧锛�') ) {
                baidu.editor.dom.domUtils.remove(this.anchorEl,false);
            }
            this.hide();
        }
    } );
    popup.render();
    me.addListener( 'mouseover', function( t, evt ) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var leipiPlugins = el.getAttribute('leipiplugins');
        if ( /input/ig.test( el.tagName ) && leipiPlugins==thePlugins) {
            var html = popup.formatHtml(
                '<nobr>鍗曢€夋: <span onclick=$$._edittext() class="edui-clickable">缂栬緫</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">鍒犻櫎</span></nobr>' );
            if ( html ) {
                popup.getDom( 'content' ).innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor( popup.anchorEl );
            } else {
                popup.hide();
            }
        }
    });
};
 */

/**
 * 澶嶉€夋
 * @command checkbox
 * @method execCommand
 * @param { String } cmd 鍛戒护瀛楃涓�
 * @example
 * ```javascript
 * editor.execCommand( 'checkbox');
 * ```
 */
 /*
UE.plugins['checkbox'] = function () {
    var me = this,thePlugins = 'checkbox';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/checkbox.html',
                name:thePlugins,
                editor:this,
                title: '澶嶉€夋',
                cssRules:"width:600px;height:200px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                },
                {
                    className:'edui-cancelbutton',
                    label:'鍙栨秷',
                    onclick:function () {
                        dialog.close(false);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup( {
        editor:this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
              baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
              me.execCommand(thePlugins);
              this.hide();
        },
        _delete:function(){
            if( window.confirm('纭鍒犻櫎璇ユ帶浠跺悧锛�') ) {
                baidu.editor.dom.domUtils.remove(this.anchorEl,false);
            }
            this.hide();
        }
    } );
    popup.render();
    me.addListener( 'mouseover', function( t, evt ) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var leipiPlugins = el.getAttribute('leipiplugins');
        if ( /input/ig.test( el.tagName ) && leipiPlugins==thePlugins) {
            var html = popup.formatHtml(
                '<nobr>澶嶉€夋: <span onclick=$$._edittext() class="edui-clickable">缂栬緫</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">鍒犻櫎</span></nobr>' );
            if ( html ) {
                popup.getDom( 'content' ).innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor( popup.anchorEl );
            } else {
                popup.hide();
            }
        }
    });
};
*/
/**
 * 鍗曢€夋缁�
 * @command radios
 * @method execCommand
 * @param { String } cmd 鍛戒护瀛楃涓�
 * @example
 * ```javascript
 * editor.execCommand( 'radio');
 * ```
 */
UE.plugins['radios'] = function () {
    var me = this,thePlugins = 'radios';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/radios.html',
                name:thePlugins,
                editor:this,
                title: '鍗曢€夋缁�',
                cssRules:"width:590px;height:370px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                },
                {
                    className:'edui-cancelbutton',
                    label:'鍙栨秷',
                    onclick:function () {
                        dialog.close(false);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup( {
        editor:this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
              baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
              me.execCommand(thePlugins);
              this.hide();
        },
        _delete:function(){
            if( window.confirm('纭鍒犻櫎璇ユ帶浠跺悧锛�') ) {
                baidu.editor.dom.domUtils.remove(this.anchorEl,false);
            }
            this.hide();
        }
    } );
    popup.render();
    me.addListener( 'mouseover', function( t, evt ) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var leipiPlugins = el.getAttribute('leipiplugins');
        if ( /span/ig.test( el.tagName ) && leipiPlugins==thePlugins) {
            var html = popup.formatHtml(
                '<nobr>鍗曢€夋缁�: <span onclick=$$._edittext() class="edui-clickable">缂栬緫</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">鍒犻櫎</span></nobr>' );
            if ( html ) {
                var elInput = el.getElementsByTagName("input");
                var rEl = elInput.length>0 ? elInput[0] : el;
                popup.getDom( 'content' ).innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor( rEl);
            } else {
                popup.hide();
            }
        }
    });
};
/**
 * 澶嶉€夋缁�
 * @command checkboxs
 * @method execCommand
 * @param { String } cmd 鍛戒护瀛楃涓�
 * @example
 * ```javascript
 * editor.execCommand( 'checkboxs');
 * ```
 */
UE.plugins['checkboxs'] = function () {
    var me = this,thePlugins = 'checkboxs';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/checkboxs.html',
                name:thePlugins,
                editor:this,
                title: '澶嶉€夋缁�',
                cssRules:"width:600px;height:400px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                },
                {
                    className:'edui-cancelbutton',
                    label:'鍙栨秷',
                    onclick:function () {
                        dialog.close(false);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup( {
        editor:this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
              baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
              me.execCommand(thePlugins);
              this.hide();
        },
        _delete:function(){
            if( window.confirm('纭鍒犻櫎璇ユ帶浠跺悧锛�') ) {
                baidu.editor.dom.domUtils.remove(this.anchorEl,false);
            }
            this.hide();
        }
    } );
    popup.render();
    me.addListener( 'mouseover', function( t, evt ) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var leipiPlugins = el.getAttribute('leipiplugins');
        if ( /span/ig.test( el.tagName ) && leipiPlugins==thePlugins) {
            var html = popup.formatHtml(
                '<nobr>澶嶉€夋缁�: <span onclick=$$._edittext() class="edui-clickable">缂栬緫</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">鍒犻櫎</span></nobr>' );
            if ( html ) {
                var elInput = el.getElementsByTagName("input");
                var rEl = elInput.length>0 ? elInput[0] : el;
                popup.getDom( 'content' ).innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor( rEl);
            } else {
                popup.hide();
            }
        }
    });
};
/**
 * 澶氳鏂囨湰妗�
 * @command textarea
 * @method execCommand
 * @param { String } cmd 鍛戒护瀛楃涓�
 * @example
 * ```javascript
 * editor.execCommand( 'textarea');
 * ```
 */
UE.plugins['textarea'] = function () {
    var me = this,thePlugins = 'textarea';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/textarea.html',
                name:thePlugins,
                editor:this,
                title: '澶氳鏂囨湰妗�',
                cssRules:"width:600px;height:330px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                },
                {
                    className:'edui-cancelbutton',
                    label:'鍙栨秷',
                    onclick:function () {
                        dialog.close(false);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup( {
        editor:this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
              baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
              me.execCommand(thePlugins);
              this.hide();
        },
        _delete:function(){
            if( window.confirm('纭鍒犻櫎璇ユ帶浠跺悧锛�') ) {
                baidu.editor.dom.domUtils.remove(this.anchorEl,false);
            }
            this.hide();
        }
    } );
    popup.render();
    me.addListener( 'mouseover', function( t, evt ) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        if ( /textarea/ig.test( el.tagName ) ) {
            var html = popup.formatHtml(
                '<nobr>澶氳鏂囨湰妗�: <span onclick=$$._edittext() class="edui-clickable">缂栬緫</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">鍒犻櫎</span></nobr>' );
            if ( html ) {
                popup.getDom( 'content' ).innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor( popup.anchorEl );
            } else {
                popup.hide();
            }
        }
    });
};
/**
 * 涓嬫媺鑿滃崟
 * @command select
 * @method execCommand
 * @param { String } cmd 鍛戒护瀛楃涓�
 * @example
 * ```javascript
 * editor.execCommand( 'select');
 * ```
 */
UE.plugins['select'] = function () {
    var me = this,thePlugins = 'select';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/select.html',
                name:thePlugins,
                editor:this,
                title: '涓嬫媺鑿滃崟',
                cssRules:"width:590px;height:370px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                },
                {
                    className:'edui-cancelbutton',
                    label:'鍙栨秷',
                    onclick:function () {
                        dialog.close(false);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup( {
        editor:this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
              baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
              me.execCommand(thePlugins);
              this.hide();
        },
        _delete:function(){
            if( window.confirm('纭鍒犻櫎璇ユ帶浠跺悧锛�') ) {
                baidu.editor.dom.domUtils.remove(this.anchorEl,false);
            }
            this.hide();
        }
    } );
    popup.render();
    me.addListener( 'mouseover', function( t, evt ) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var leipiPlugins = el.getAttribute('leipiplugins');
        if ( /select|span/ig.test( el.tagName ) && leipiPlugins==thePlugins) {
            var html = popup.formatHtml(
                '<nobr>涓嬫媺鑿滃崟: <span onclick=$$._edittext() class="edui-clickable">缂栬緫</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">鍒犻櫎</span></nobr>' );
            if ( html ) {
                if(el.tagName=='SPAN')
                {
                    var elInput = el.getElementsByTagName("select");
                    el = elInput.length>0 ? elInput[0] : el;
                }
                popup.getDom( 'content' ).innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor( popup.anchorEl );
            } else {
                popup.hide();
            }
        }
    });

};
/**
 * 杩涘害鏉�
 * @command progressbar
 * @method execCommand
 * @param { String } cmd 鍛戒护瀛楃涓�
 * @example
 * ```javascript
 * editor.execCommand( 'progressbar');
 * ```
 */
UE.plugins['progressbar'] = function () {
    var me = this,thePlugins = 'progressbar';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/progressbar.html',
                name:thePlugins,
                editor:this,
                title: '杩涘害鏉�',
                cssRules:"width:600px;height:450px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                },
                {
                    className:'edui-cancelbutton',
                    label:'鍙栨秷',
                    onclick:function () {
                        dialog.close(false);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup( {
        editor:this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
              baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
              me.execCommand(thePlugins);
              this.hide();
        },
        _delete:function(){
            if( window.confirm('纭鍒犻櫎璇ユ帶浠跺悧锛�') ) {
                baidu.editor.dom.domUtils.remove(this.anchorEl,false);
            }
            this.hide();
        }
    } );
    popup.render();
    me.addListener( 'mouseover', function( t, evt ) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var leipiPlugins = el.getAttribute('leipiplugins');
        if ( /img/ig.test( el.tagName ) && leipiPlugins==thePlugins) {
            var html = popup.formatHtml(
                '<nobr>杩涘害鏉�: <span onclick=$$._edittext() class="edui-clickable">缂栬緫</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">鍒犻櫎</span></nobr>' );
            if ( html ) {
                popup.getDom( 'content' ).innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor( popup.anchorEl );
            } else {
                popup.hide();
            }
        }
    });
};
/**
 * 浜岀淮鐮�
 * @command qrcode
 * @method execCommand
 * @param { String } cmd 鍛戒护瀛楃涓�
 * @example
 * ```javascript
 * editor.execCommand( 'qrcode');
 * ```
 */
UE.plugins['qrcode'] = function () {
    var me = this,thePlugins = 'qrcode';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/qrcode.html',
                name:thePlugins,
                editor:this,
                title: '浜岀淮鐮�',
                cssRules:"width:600px;height:370px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                },
                {
                    className:'edui-cancelbutton',
                    label:'鍙栨秷',
                    onclick:function () {
                        dialog.close(false);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup( {
        editor:this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
              baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
              me.execCommand(thePlugins);
              this.hide();
        },
        _delete:function(){
            if( window.confirm('纭鍒犻櫎璇ユ帶浠跺悧锛�') ) {
                baidu.editor.dom.domUtils.remove(this.anchorEl,false);
            }
            this.hide();
        }
    } );
    popup.render();
    me.addListener( 'mouseover', function( t, evt ) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var leipiPlugins = el.getAttribute('leipiplugins');
        if ( /img/ig.test( el.tagName ) && leipiPlugins==thePlugins) {
            var html = popup.formatHtml(
                '<nobr>浜岀淮鐮�: <span onclick=$$._edittext() class="edui-clickable">缂栬緫</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">鍒犻櫎</span></nobr>' );
            if ( html ) {
                popup.getDom( 'content' ).innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor( popup.anchorEl );
            } else {
                popup.hide();
            }
        }
    });
};
/**
 * 鍒楄〃鎺т欢
 * @command listctrl
 * @method execCommand
 * @param { String } cmd 鍛戒护瀛楃涓�
 * @example
 * ```javascript
 * editor.execCommand( 'qrcode');
 * ```
 */
UE.plugins['listctrl'] = function () {
    var me = this,thePlugins = 'listctrl';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/listctrl.html',
                name:thePlugins,
                editor:this,
                title: '鍒楄〃鎺т欢',
                cssRules:"width:800px;height:400px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                },
                {
                    className:'edui-cancelbutton',
                    label:'鍙栨秷',
                    onclick:function () {
                        dialog.close(false);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup( {
        editor:this,
        content: '',
        className: 'edui-bubble',
        _edittext: function () {
              baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
              me.execCommand(thePlugins);
              this.hide();
        },
        _delete:function(){
            if( window.confirm('纭鍒犻櫎璇ユ帶浠跺悧锛�') ) {
                baidu.editor.dom.domUtils.remove(this.anchorEl,false);
            }
            this.hide();
        }
    } );
    popup.render();
    me.addListener( 'mouseover', function( t, evt ) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var leipiPlugins = el.getAttribute('leipiplugins');
        if ( /input/ig.test( el.tagName ) && leipiPlugins==thePlugins) {
            var html = popup.formatHtml(
                '<nobr>鍒楄〃鎺т欢: <span onclick=$$._edittext() class="edui-clickable">缂栬緫</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">鍒犻櫎</span></nobr>' );
            if ( html ) {
                popup.getDom( 'content' ).innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor( popup.anchorEl );
            } else {
                popup.hide();
            }
        }
    });
};

UE.plugins['more'] = function () {
    var me = this,thePlugins = 'more';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/more.html',
                name:thePlugins,
                editor:this,
                title: '鐜╄浆琛ㄥ崟璁捐鍣紝涓€璧峰弬涓庯紝甯姪瀹屽杽',
                cssRules:"width:600px;height:200px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
};
UE.plugins['error'] = function () {
    var me = this,thePlugins = 'error';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/error.html',
                name:thePlugins,
                editor:this,
                title: '寮傚父鎻愮ず',
                cssRules:"width:400px;height:130px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
};
UE.plugins['leipi'] = function () {
    var me = this,thePlugins = 'leipi';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/leipi.html',
                name:thePlugins,
                editor:this,
                title: '琛ㄥ崟璁捐鍣� - 娓呭崟',
                cssRules:"width:620px;height:220px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
};
UE.plugins['leipi_template'] = function () {
    var me = this,thePlugins = 'leipi_template';
    me.commands[thePlugins] = {
        execCommand:function () {
            var dialog = new UE.ui.Dialog({
                iframeUrl:this.options.UEDITOR_HOME_URL + UE.leipiFormDesignUrl+'/template.html',
                name:thePlugins,
                editor:this,
                title: '琛ㄥ崟妯℃澘',
                cssRules:"width:640px;height:380px;",
                buttons:[
                {
                    className:'edui-okbutton',
                    label:'纭畾',
                    onclick:function () {
                        dialog.close(true);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
};

UE.registerUI('button_leipi',function(editor,uiName){
    if(!this.options.toolleipi)
    {
        return false;
    }
    //娉ㄥ唽鎸夐挳鎵ц鏃剁殑command鍛戒护锛屼娇鐢ㄥ懡浠ら粯璁ゅ氨浼氬甫鏈夊洖閫€鎿嶄綔
    editor.registerCommand(uiName,{
        execCommand:function(){
            editor.execCommand('leipi');
        }
    });
    //鍒涘缓涓€涓猙utton
    var btn = new UE.ui.Button({
        //鎸夐挳鐨勫悕瀛�
        name:uiName,
        //鎻愮ず
        title:"琛ㄥ崟璁捐鍣�",
        //闇€瑕佹坊鍔犵殑棰濆鏍峰紡锛屾寚瀹歩con鍥炬爣锛岃繖閲岄粯璁や娇鐢ㄤ竴涓噸澶嶇殑icon
        cssRules :'background-position: -401px -40px;',
        //鐐瑰嚮鏃舵墽琛岀殑鍛戒护
        onclick:function () {
            //杩欓噷鍙互涓嶇敤鎵ц鍛戒护,鍋氫綘鑷繁鐨勬搷浣滀篃鍙�
           editor.execCommand(uiName);
        }
    });
/*
    //褰撶偣鍒扮紪杈戝唴瀹逛笂鏃讹紝鎸夐挳瑕佸仛鐨勭姸鎬佸弽灏�
    editor.addListener('selectionchange', function () {
        var state = editor.queryCommandState(uiName);
        if (state == -1) {
            btn.setDisabled(true);
            btn.setChecked(false);
        } else {
            btn.setDisabled(false);
            btn.setChecked(state);
        }
    });
*/
    //鍥犱负浣犳槸娣诲姞button,鎵€浠ラ渶瑕佽繑鍥炶繖涓猙utton
    return btn;
});
UE.registerUI('button_template',function(editor,uiName){
    if(!this.options.toolleipi)
    {
        return false;
    }
    //娉ㄥ唽鎸夐挳鎵ц鏃剁殑command鍛戒护锛屼娇鐢ㄥ懡浠ら粯璁ゅ氨浼氬甫鏈夊洖閫€鎿嶄綔
    editor.registerCommand(uiName,{
        execCommand:function(){
            try {
                leipiFormDesign.exec('leipi_template');
                //leipiFormDesign.fnCheckForm('save');
            } catch ( e ) {
                alert('鎵撳紑妯℃澘寮傚父');
            }
            
        }
    });
    //鍒涘缓涓€涓猙utton
    var btn = new UE.ui.Button({
        //鎸夐挳鐨勫悕瀛�
        name:uiName,
        //鎻愮ず
        title:"琛ㄥ崟妯℃澘",
        //闇€瑕佹坊鍔犵殑棰濆鏍峰紡锛屾寚瀹歩con鍥炬爣锛岃繖閲岄粯璁や娇鐢ㄤ竴涓噸澶嶇殑icon
        cssRules :'background-position: -339px -40px;',
        //鐐瑰嚮鏃舵墽琛岀殑鍛戒护
        onclick:function () {
            //杩欓噷鍙互涓嶇敤鎵ц鍛戒护,鍋氫綘鑷繁鐨勬搷浣滀篃鍙�
           editor.execCommand(uiName);
        }
    });

    //鍥犱负浣犳槸娣诲姞button,鎵€浠ラ渶瑕佽繑鍥炶繖涓猙utton
    return btn;
});
UE.registerUI('button_preview',function(editor,uiName){
    if(!this.options.toolleipi)
    {
        return false;
    }
    //娉ㄥ唽鎸夐挳鎵ц鏃剁殑command鍛戒护锛屼娇鐢ㄥ懡浠ら粯璁ゅ氨浼氬甫鏈夊洖閫€鎿嶄綔
    editor.registerCommand(uiName,{
        execCommand:function(){
            try {
                leipiFormDesign.fnReview();
            } catch ( e ) {
                alert('leipiFormDesign.fnReview 棰勮寮傚父');
            }
        }
    });
    //鍒涘缓涓€涓猙utton
    var btn = new UE.ui.Button({
        //鎸夐挳鐨勫悕瀛�
        name:uiName,
        //鎻愮ず
        title:"棰勮",
        //闇€瑕佹坊鍔犵殑棰濆鏍峰紡锛屾寚瀹歩con鍥炬爣锛岃繖閲岄粯璁や娇鐢ㄤ竴涓噸澶嶇殑icon
        cssRules :'background-position: -420px -19px;',
        //鐐瑰嚮鏃舵墽琛岀殑鍛戒护
        onclick:function () {
            //杩欓噷鍙互涓嶇敤鎵ц鍛戒护,鍋氫綘鑷繁鐨勬搷浣滀篃鍙�
           editor.execCommand(uiName);
        }
    });

    //鍥犱负浣犳槸娣诲姞button,鎵€浠ラ渶瑕佽繑鍥炶繖涓猙utton
    return btn;
});

UE.registerUI('button_save',function(editor,uiName){
    if(!this.options.toolleipi)
    {
        return false;
    }
    //娉ㄥ唽鎸夐挳鎵ц鏃剁殑command鍛戒护锛屼娇鐢ㄥ懡浠ら粯璁ゅ氨浼氬甫鏈夊洖閫€鎿嶄綔
    editor.registerCommand(uiName,{
        execCommand:function(){
            try {
                leipiFormDesign.fnCheckForm('save');
            } catch ( e ) {
                alert('leipiFormDesign.fnCheckForm("save") 淇濆瓨寮傚父');
            }
            
        }
    });
    //鍒涘缓涓€涓猙utton
    var btn = new UE.ui.Button({
        //鎸夐挳鐨勫悕瀛�
        name:uiName,
        //鎻愮ず
        title:"淇濆瓨琛ㄥ崟",
        //闇€瑕佹坊鍔犵殑棰濆鏍峰紡锛屾寚瀹歩con鍥炬爣锛岃繖閲岄粯璁や娇鐢ㄤ竴涓噸澶嶇殑icon
        cssRules :'background-position: -481px -20px;',
        //鐐瑰嚮鏃舵墽琛岀殑鍛戒护
        onclick:function () {
            //杩欓噷鍙互涓嶇敤鎵ц鍛戒护,鍋氫綘鑷繁鐨勬搷浣滀篃鍙�
           editor.execCommand(uiName);
        }
    });

    //鍥犱负浣犳槸娣诲姞button,鎵€浠ラ渶瑕佽繑鍥炶繖涓猙utton
    return btn;
});