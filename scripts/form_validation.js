$(function() {
    $('#register').validate({
        rules: {
            username: {
                minlength: 4
            },
            psw: {
                minlength: 6
            },
            psw2: {
                equalTo: '#psw'  //验证两个输入框的内容是否相同
            }
        },
        //自定义错误信息
        messages: {
            username: {
                minlength: '<i class="Hui-iconfont Hui-iconfont-shenhe-tingyong"></i> 长度只能在4-20个字符之间'
            },
            psw: {
                minlength: '<i class="Hui-iconfont Hui-iconfont-shenhe-tingyong"></i> 长度只能在6-20个字符之间'
            },
            psw2: {
                equalTo: '<i class="Hui-iconfont Hui-iconfont-shenhe-tingyong"></i> 两次密码输入不一致'
            }
        },
        //自定义错误位置
        errorPlacement: function(error, element) {  
            $(error).insertAfter(element);  
        }
    })

    //限制表单
    $('#username').attr('maxLength', '20');
    $('#psw').attr('maxLength', '20');
    $('#psw2').attr('maxLength', '20');
    $('#mobile').attr('maxLength', '11');
    $('#v-code').attr('maxLength', '4');
    $('#m-code').attr('maxLength', '6');
})