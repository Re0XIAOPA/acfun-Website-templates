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


    // login
    document.getElementById('frmContact').addEventListener('click', function (event) {
        event.preventDefault(); // 阻止默认链接点击行为

        // 获取手机号和密码输入框的值
        var phoneNumber = document.querySelector('input[name="phone"]').value;
        var password = document.getElementById('password').value;

        // 检查手机号和密码是否都已填写
        if (phoneNumber.trim() === '' || password.trim() === '') {
            alert('请确保手机号和密码都已填写！');
            return;
        }

        // 这里可以添加Ajax请求验证用户信息的逻辑，但根据要求，我们直接进行跳转
        // 实际应用中，您需要与服务器验证这些凭据

        // 模拟登录成功后的处理，比如页面跳转
        alert('登录成功！'); // 实际项目中可以移除此alert或用更友好的方式通知用户
        window.location.href = 'index.html'; // 跳转到主页
    });


}
