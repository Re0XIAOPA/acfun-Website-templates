// 当页面所有元素加载之后才能获取到
window.onload = function () {

	// ==========================================================
	// 轮播图
	// 获取元素
	const carousel = document.querySelector('#carousel')
	const left = document.querySelector('#left')
	const right = document.querySelector('#right')
	let image = document.querySelector('#image')
	const numList = document.querySelector('#number').getElementsByTagName('li')
	const links = document.querySelector('#links')

	// 初始化
	let add = 0
	image.src = './img/lunbo1.webp'
	numList[0].style.background = '#FF5356'
	const arr = ['https://www.acfun.cn/a/ac44878973', 'https://www.acfun.cn/v/ac44888642', 'https://www.acfun.cn/a/ac44874687', 'https://www.acfun.cn/v/ac44698766', 'https://www.acfun.cn/v/ac44674741']

	// // 鼠标移入显示左右箭头
	// carousel.addEventListener('mouseover', function () {
	// 	// 显示左右箭头
	// 	left.style.display = 'block'
	// 	right.style.display = 'block'
	// 	// 鼠标移入开始轮播
	// 	clearInterval(lunid)
	// })
	// carousel.addEventListener('mouseout', function () {
	// 	// 隐藏左右箭头
	// 	left.style.display = 'none'
	// 	right.style.display = 'none'
	// 	// 鼠标移出停止轮播
	// 	lunbo()
	// })
	// 轮播图切换图片
	let lunid

	function lunbo() {
		lunid = setInterval(function () {
			add = add + 1
			if (add > 5) {
				add = 1
			}
			links.href = arr[add - 1]
			image.src = `./img/lunbo${add}.webp`
			// image.src = './img/ad0'+add+'.jpg'

			// x代表li元素的下标
			let x = add - 1
			// 所有的li元素跟着轮播图发生改变
			for (let i = 0; i < numList.length; i++) {
				numList[i].style.background = '#EEEEEE'
				if (x == i) {
					numList[i].style.background = '#FF5356'
				}
			}
		}, 2200)
	}
	lunbo()

	// 鼠标滑过li的时候切换图片
	for (let i = 0; i < numList.length; i++) {
		numList[i].addEventListener('mouseover', function () {
			add = this.innerHTML
			links.href = arr[add - 1]
			image.src = `./img/lunbo${add}.webp`
			let x = add - 1
			// 所有的li元素跟着轮播图发生改变
			for (let i = 0; i < numList.length; i++) {
				numList[i].style.background = '#EEEEEE'
				if (x == i) {
					numList[i].style.background = '#FF5356'
				}
			}
		})
	}


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

	// ==========================================================

	// 下拉菜单 中间
	// 获取元素
	const fcontent = document.querySelector('.first_content')
	console.log(fcontent) //测试是否获取到元素
	const firstcontentLi = fcontent.children
	// 通过父元素获取子元素
	console.log(dropdownLi) //测试是否获取到子元素集合

	// 用循环，将所有发生在li元素上的事件重复执行
	for (let i = 0; i < firstcontentLi.length; i++) {
		// 鼠标移到li元素上，dl下拉菜单显示出来
		firstcontentLi[i].addEventListener('mouseover', function () {
			// dl下拉菜单显示出来
			// 在li元素上加一个显示样式
			this.classList.add('show')
		})
		// 鼠标移出li元素上，dl下拉菜单隐藏起来
		firstcontentLi[i].addEventListener('mouseout', function () {
			// dl下拉菜单隐藏起来
			// 在li元素上删除显示样式
			this.classList.remove('show')
		})
	}


}
