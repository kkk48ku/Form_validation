$(function () {
    'use strict';
    //选中页面中所有的input[data-rule]
        var $inputs = $('[data-rule]'),
            $form = $('#signup'),
            inputs = [];
        $inputs.each(function (index,node) {
            //解析每一个input的验证规则
            var tmp = new Input(node);
            inputs.push(tmp);
        });

        $form.on('submit',function (e) {
            e.preventDefault();
            $inputs.trigger('blur');

            for (var i = 0; i < inputs.length; i++){
                var item = inputs[i];
                var result = item.validator.is_valid();
                if (!result) {
                    alert('注册失败，请重新检查输入格式');
                    return;
                }
            }
            alert('注册成功！');
        });
    //验证











    /*测试代码

     var test = new Input('#test');
     var valid = test.validator.is_valid();
     console.log('valid:',valid);

     var  validator = new Validator('aa',{
            pattern: '^[a-zA-Z0-9]*$'
        });

        //var result = validator.validate_max();
        //var result = validator.validate_min();
        //var result = validator.validate_maxlength();
        //var result = validator.validate_minlength();
        // var result = validator.validate_numeric();
        // var result = validator.validate_required();
        var result = validator.validate_pattern();
        console.log("result:",result);
    */
});