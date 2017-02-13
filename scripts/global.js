$(function() {
    /*文本和图片*/
    addDdesc('点击文本显示具体信息', $('#list dl:eq(0)'), 'demo11.html');
    addDdesc('鼠标悬浮显示信息', $('#list dl:eq(0)'), 'demo12.html');
    addDdesc('图片轮转', $('#list dl:eq(0)'), 'demo13.html');
    addDdesc('图片放大镜', $('#list dl:eq(0)'), 'demo14.html');
    /*表单和表格*/  
    addDdesc('表格变色', $('#list dl:eq(1)'), 'demo21.html')
    addDdesc('JD注册界面', $('#list dl:eq(1)'), 'demo22.html')
    /*其他玩法*/
    addDdesc('模拟 Loading...', $('#list dl:eq(2)'), 'demo31.html')
    /*加载函数*/
    mouse();
    toggleDlist();
})

//在目标元素里添加dd a标签
//参数1：string，dd a的文本值
//参数2：jQuery对象，目标元素
//参数3：超链接url
function addDdesc(description, $targetElement, url) {
    var dd = '<dd><a href="'+ url + '">' + description +'</a></dd>';
    $targetElement.append(dd);
}

//设置#list h1和#list dd在鼠标悬浮和离开的状态
function mouse() {
    $('#list h1, #list dd').hover(function() {
        $(this).addClass('hover').stop().animate({
            borderRadius: '8px', 
            paddingLeft: '20px'
        }, 300)
        .children('a').css({'color': 'black', 'fontWeight': 'bold'});       
    }, function() {
        $(this).removeClass('hover').stop().animate({
            borderRadius: '5px', 
            paddingLeft: '0px'          
        }, 300)
        .children('a').css({'color': 'white', 'fontWeight': 'normal'});
    })
}

//#list h1绑定click事件，dl默认隐藏，切换显示和隐藏
function toggleDlist() {
    $('#list dl').hide();
    $('#list h1').click(function() {
        $(this).next().toggle(400);
        return false;
    })
}