document.addEventListener("DOMContentLoaded", function () {
    const cityPopup = document.getElementById('cityPopup');
    const switchCityBtn = document.getElementById('switchCityBtn');
    const closePopupBtn = document.getElementById('closePopup');
    const confirmCityBtn = document.getElementById('confirmCity');
    const cancelBtn = document.getElementById('Cancel');
    const provinceSelect = document.getElementById('provinceSelect');
    const citySelect = document.getElementById('citySelect');
    const districtSelect = document.getElementById('districtSelect');
    const defaultProvincial = document.getElementById('defaultprovincial');
    const defaultCity = document.getElementById('defaultCity');
    const defaultCounty = document.getElementById('defaultcounty');

    const provinces = {
        "北京": ["北京市"],
        "上海": ["上海市"],
        "江苏省": ["南京市", "苏州市", "无锡市"],
        "浙江省": ["杭州市", "宁波市"],
        "广东省": ["广州市", "深圳市"],
        "湖南省": ["长沙市", "常德市"]
    };

    const cities = {
        "北京市": ["东城区", "西城区"],
        "上海市": ["黄浦区", "徐汇区"],
        "南京市": ["玄武区", "秦淮区"],
        "苏州市": ["姑苏区", "吴中区"],
        "无锡市": ["滨湖区", "锡山区"],
        "杭州市": ["上城区", "下城区"],
        "宁波市": ["海曙区", "江北区"],
        "广州市": ["越秀区", "天河区"],
        "深圳市": ["福田区", "罗湖区"],
        "长沙市": ["雨花区", "岳麓区"],
        "常德市": ["武陵区", "鼎城区"]
    };

    function populateSelect(select, options) {
        select.innerHTML = '';
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.text = option;
            select.appendChild(opt);
        });
    }

    switchCityBtn.addEventListener('click', () => {
        cityPopup.style.display = 'block';
    });

    closePopupBtn.addEventListener('click', () => {
        cityPopup.style.display = 'none';
    });

    cancelBtn.addEventListener('click', () => {
        cityPopup.style.display = 'none';
    });

    provinceSelect.addEventListener('change', () => {
        const selectedProvince = provinceSelect.value;
        if (selectedProvince && provinces[selectedProvince]) {
            populateSelect(citySelect, provinces[selectedProvince]);
            citySelect.disabled = false;
            districtSelect.disabled = true;
            districtSelect.innerHTML = ''; // 清空区县选择框
        } else {
            citySelect.disabled = true;
            districtSelect.disabled = true;
        }
    });

    citySelect.addEventListener('change', () => {
        const selectedCity = citySelect.value;
        if (selectedCity && cities[selectedCity]) {
            populateSelect(districtSelect, cities[selectedCity]);
            districtSelect.disabled = false;
        } else {
            districtSelect.disabled = true;
        }
    });

    confirmCityBtn.addEventListener('click', () => {
        const selectedProvince = provinceSelect.value;
        const selectedCity = citySelect.value;
        const selectedDistrict = districtSelect.value;

        if (!selectedProvince || !selectedCity || !selectedDistrict) {
            alert("请完整选择省、市、县");
            return;
        }

        // 更新页面上的默认省市县文本
        defaultProvincial.textContent = selectedProvince;
        defaultCity.textContent = selectedCity;
        defaultCounty.textContent = selectedDistrict;

        console.log('Selected:', selectedProvince, selectedCity, selectedDistrict);
        cityPopup.style.display = 'none';
    });

    // 初始化省份选择框
    populateSelect(provinceSelect, Object.keys(provinces));
    provinceSelect.dispatchEvent(new Event('change')); // 手动触发省份选择框的change事件
});
