
let ul = document.querySelector('#ul1');
ul.innerHTML += ul.innerHTML; // 简化字符串拼接
let lis = document.querySelectorAll('#li1');
let btns = document.querySelectorAll('.btnawa');
let container = document.querySelector('.container'); // 只需查询一次

let spa = -2;
ul.style.width = `${lis[0].offsetWidth * lis.length}px`;

function move() {
    let newLeft = ul.offsetLeft + spa;
    // 限制ul的滚动范围
    newLeft = Math.min(0, Math.max(-ul.offsetWidth / 2, newLeft));
    ul.style.left = `${newLeft}px`;
}

let timer = setInterval(move, 30);

let isMouseOverContainer = false;

function handleContainerHover(isOver) {
    isMouseOverContainer = isOver;
    if (isOver) {
        clearInterval(timer);
        btns.forEach(btn => btn.style.display = 'block');
    } else {
        timer = setInterval(move, 30);
        btns.forEach(btn => btn.style.display = 'none');
    }
}

container.addEventListener('mouseover', () => handleContainerHover(true));
container.addEventListener('mouseout', event => {
    // 确保鼠标不是从.btnawa直接移动到.container外部
    if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) {
        handleContainerHover(false);
    }
});

btns[0].addEventListener('click', () => { spa = -2; });
btns[1].addEventListener('click', () => { spa = 2; });





































// // 获取ul元素，并为其追加一组相同图片（为了做到无缝衔接）
// let ul = document.querySelector('#ul1');
// ul.innerHTML = ul.innerHTML + ul.innerHTML;
// // 获取所有的li元素和.btn元素
// let lis = document.querySelectorAll('#li1');
// let btns = document.querySelectorAll('.btnawa');
// let btnsss = document.querySelectorAll('.btnsss');
// let container = document.querySelectorAll('.container');
// // 每次滚动的跨度（正数向右，负数向左，默认向左滚动）
// let spa = -2;
// // 计算并设置ul的总宽度
// ul.style.width = lis[0].offsetWidth * lis.length + 'px';

// // 滚动函数
// function move() {
//     if (ul.offsetLeft < -ul.offsetWidth / 2) {
//         // 向左走时，判断图片是否走完（这里本来时4张图片，加上后面追加的4张相同的，共有8张，所以需要用ul的总宽度来除以2进行判断），走完时重新开始
//         ul.style.left = '0';
//     }
//     if (ul.offsetLeft > 0) {
//         // 向右走时，判断图片是否走完
//         ul.style.left = -ul.offsetWidth / 2 + 'px';
//     }
//     // 设置偏移位置
//     ul.style.left = ul.offsetLeft + spa + 'px';
// }

// // 定时器，每30毫秒执行一次move函数
// let timer = setInterval(move, 30);

// // 为ul绑定事件，悬停停止，移开滚动
// ul.addEventListener('mousemove', function () {
//     clearInterval(timer);
// })
// ul.addEventListener('mouseout', function () {
//     timer = setInterval(move, 30);
// })

// // 为两个按钮绑定点击事件
// // 向左走
// btns[0].addEventListener('click', function () {
//     spa = -2;
// })
// // 向右走
// btns[1].addEventListener('click', function () {
//     spa = 2;
// })

// document.querySelector('.container').addEventListener('mouseover', function () {
//     document.querySelectorAll('.btnawa').forEach(function (btn) {
//         btn.style.display = 'block'; // 或者使用 'inline-block' 根据你的样式需求
//     });
// });

// document.querySelector('.container').addEventListener('mouseout', function (event) {
//     // 这里添加一个判断，确保鼠标是从.container内部移动到.btnawa上时不会触发mouseout
//     if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) {
//         document.querySelectorAll('.btnawa').forEach(function (btn) {
//             btn.style.display = 'none';
//         });
//     }
// });