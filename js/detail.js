var preview_img = document.querySelector('.preview_img');
var mask = document.querySelector('.mask');
var big = document.querySelector('.big');
var big_img = document.querySelector('.big_img');

// 在preview_img盒子上监听鼠标事件
preview_img.addEventListener('mouseover', function () {
    mask.style.display = 'block';
    big.style.display = 'block';
});

preview_img.addEventListener('mouseout', function () {
    mask.style.display = 'none';
    big.style.display = 'none';
});

preview_img.addEventListener('mousemove', function (e) {
    // 获取鼠标在页面中的坐标
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    // 获取preview_img盒子在页面中的位置
    var boxLeft = preview_img.getBoundingClientRect().left + window.scrollX;
    var boxTop = preview_img.getBoundingClientRect().top + window.scrollY;

    // 获取鼠标在preview_img盒子里面的坐标
    var x = mouseX - boxLeft;
    var y = mouseY - boxTop;

    // 让遮罩层跟着鼠标移动，最好让鼠标位于遮罩层盒子的中间
    var moveX = x - mask.offsetWidth / 2;
    var moveY = y - mask.offsetHeight / 2;

    // 限制遮罩层的移动范围在preview_img盒子里面
    if (moveX <= 0) {
        moveX = 0;
    } else if (moveX >= preview_img.offsetWidth - mask.offsetWidth) {
        moveX = preview_img.offsetWidth - mask.offsetWidth;
    }

    if (moveY <= 0) {
        moveY = 0;
    } else if (moveY >= preview_img.offsetHeight - mask.offsetHeight) {
        moveY = preview_img.offsetHeight - mask.offsetHeight;
    }

    // 更新遮罩层的位置
    mask.style.left = moveX + 'px';
    mask.style.top = moveY + 'px';

    // 计算放大图像的移动距离
    var ratioX = big_img.offsetWidth / preview_img.offsetWidth;
    var ratioY = big_img.offsetHeight / preview_img.offsetHeight;

    big_img.style.left = -moveX * ratioX + 'px';
    big_img.style.top = -moveY * ratioY + 'px';
});

// 假设所有的缩略图都包含在一个特定的容器中，比如 ".thumbnail-list"
var thumbnailList = document.querySelector('.thumbnail-list');
var thumbnails = thumbnailList.querySelectorAll('img.thumbnail');

// 为每个缩略图添加点击事件监听器
thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function (e) {
        // 阻止缩略图的默认行为（如果有链接的话）
        e.preventDefault();

        // 更新主图的src属性为点击缩略图的src
        preview_img.querySelector('img').src = this.src;

        // 同时更新放大镜内的图片src
        big_img.src = this.src;

        // 如果需要，可以在这里添加额外的逻辑，比如隐藏/显示遮罩层或调整放大镜位置
    });
});
