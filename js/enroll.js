// 当页面所有元素加载之后才能获取到
window.onload = function () {

    // ==========================================================

    // 下拉菜单
    // 获取元素
    const dropdown = document.querySelector('#dropdown')
    console.log(dropdown) //测试是否获取到元素
    const dropdownLi = dropdown.children
    // 通过父元素获取子元素
    console.log(dropdownLi) //测试是否获取到子元素集合

    // 用循环，将所有发生在li元素上的事件重复执行
    for (let i = 0; i < dropdownLi.length; i++) {
        // 鼠标移到li元素上，dl下拉菜单显示出来
        dropdownLi[i].addEventListener('mouseover', function () {
            // dl下拉菜单显示出来
            // 在li元素上加一个显示样式
            this.classList.add('show')
        })
        // 鼠标移出li元素上，dl下拉菜单隐藏起来
        dropdownLi[i].addEventListener('mouseout', function () {
            // dl下拉菜单隐藏起来
            // 在li元素上删除显示样式
            this.classList.remove('show')
        })
    }


    // enroll
    // 生成随机验证码
    function generateCode() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    // 获取短信验证码按钮点击事件
    document.getElementById('getcode').addEventListener('click', function () {
        document.getElementById('ovo').innerText = generateCode(); // 显示验证码
        document.getElementById('ovo').classList.remove('display-none'); // 显示验证码元素
    });

    // 检查手机号格式
    function validatePhoneNumber(phoneNumber) {
        var regex = /^1[3-9]\d{9}$/;
        return regex.test(phoneNumber);
    }

    // 登录按钮点击事件
    document.getElementById('frmContact').addEventListener('click', function (event) {
        event.preventDefault(); // 阻止默认链接跳转行为

        var phoneNumber = document.querySelector('input[name="phone"]').value;
        var enteredCode = document.getElementById('code').value;
        var generatedCode = parseInt(document.getElementById('ovo').innerText);
        var password = document.getElementById('password').value;
        var passRepeat = document.getElementById('passrepeat').value;
        var isChecked = document.getElementById('agreeTerms').checked;

        // 手机号验证
        if (!validatePhoneNumber(phoneNumber)) {
            alert("请输入正确的手机号");
            return;
        }

        // 验证码验证
        if (enteredCode !== generatedCode.toString()) {
            alert("短信验证码错误");
            return;
        }

        // 密码一致性检查
        if (password !== passRepeat) {
            alert("两次输入的密码不一致");
            return;
        }

        // 协议确认
        if (!isChecked) {
            alert("请先同意使用协议");
            return;
        }

        // 所有条件通过，这里可以执行登录操作，例如发送Ajax请求
        alert("登录成功");
        window.location.href = 'index.html';
    });


}
