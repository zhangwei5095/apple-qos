/*
 * write by waitingbar
 * time 2011.11.28
 * retime 2012.05.31
 * version 3.0
 * 注：tabTitShowC:''（tab标题最大框class）tabConShowC:''（tab内容最大框class）titMAction:''（标题鼠标作用处）conAction:''（内容区作用处）titFocC:''（标题焦点class）defaults: 0（默认显示第一个）actEven:'click'（鼠标点击起效(默认)经过的为hover）
 */
(function($){$.fn.extend({tab:function(options){var defaults={tabTitShowC:'',tabConShowC:'.left_tab_conS',titMAction:'span',conAction:'.left_tab_con',titFocC:'tabFocTit',defaults:0,actEven:'click'};options=$.extend(defaults,options);return this.each(function(){var o=options;var thisid=$(this).attr("id");$("#"+thisid+" "+o.tabConShowC+" "+o.conAction).hide();$("#"+thisid+" "+o.tabConShowC+" "+o.conAction).eq(o.defaults).show();$("#"+thisid+" "+o.tabTitShowC+" "+o.titMAction).eq(o.defaults).addClass(o.titFocC);if(o.actEven=="click"){$("#"+thisid+" "+o.tabTitShowC+" "+o.titMAction).click(function(){name=$("#"+thisid+" "+o.tabTitShowC+" "+o.titMAction).index(this);common();});}else if(o.actEven=="hover"){$("#"+thisid+" "+o.tabTitShowC+" "+o.titMAction).hover(function(){name=$("#"+thisid+" "+o.tabTitShowC+" "+o.titMAction).index(this);common();});};function common(){$("#"+thisid+" "+o.tabTitShowC+" "+o.titMAction).removeClass(o.titFocC);$("#"+thisid+" "+o.tabTitShowC+" "+o.titMAction).eq(name).addClass(o.titFocC);$("#"+thisid+" "+o.tabConShowC+">"+o.conAction).hide();$("#"+thisid+" "+o.tabConShowC+">"+o.conAction).eq(name).show();}});}});}(jQuery));