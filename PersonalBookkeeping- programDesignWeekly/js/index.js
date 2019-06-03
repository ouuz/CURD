let data;
//数据初始化
$.ajax({
    url: "http:/127.0.0.1:8022/find", //127.0.0.1：8022/sort
    type: "get",
    data: {},
    async: false,
    success: function(res) {
        data = res.data
    },
    error: function(err) {

    }
})

window.onload = function() {
    //导入初始化数值
    for (let i = 0; i < data.length; i++) {
        $('.am-panel-group').append(`  
                <div class="am-panel am-panel-default">
                    <div class="am-panel-hd">
                        <h4 class="am-panel-title" data-am-collapse="{parent: '#accordion', target: '#do-not-say-${data[i].id}'}">
                            <ul class="list flex">
                            <li >${data[i].id}</li>
                            <li>${data[i].time}</li>           
                                <li class="value type">${data[i].type}</li>
                                <li class="value num">${data[i].num}</li>
                                <li class="value pay_type">${data[i].pay_type}</li>
                                <li class="value note">${data[i].note}</li>
                                 <li style="display:inline-block"><button type="button" class="am-close" id="${data[i].id}">&times;</button></li>
                            </ul>
                        </h4>
                    </div>
                    <div id="do-not-say-${data[i].id}" class="am-panel-collapse am-collapse">
                        <div class="am-panel-bd flex">
                        <div class="sortBtn">
                            <select data-am-selected>
                                    <option value="a">餐饮费</option>
                                    <option value="b">服饰美容</option>
                                    <option value="c"> 生活日用</option>
                                    <option value="d">住房缴费</option>
                                    <option value="e">交通出行</option>
                                    <option value="f">通讯物流</option>
                                    <option value="g">文教娱乐</option>
                                    <option value="h">健康</option>
                                    <option value="i">其他消费</option>
                                </select>
                            </div>
                            <div class="moneyBtn">
                                <select data-am-selected>
                                    <option value="a">现金</option>
                                    <option value="b">银行卡</option>
                                    <option value="c">支付宝</option>
                                    <option value="d">信用卡</option>
                                    <option value="e">余额宝</option>
                                </select>
                            </div>
                            <div class="figureBtn">
                                <div class="text">
                                    <p><input type="number" class="am-form-field am-radius" value="${data[i].num}" /></p>
                                </div>
                            </div>
                        
                            <div class="time">
                                <div class="am-input-group am-datepicker-date" data-am-datepicker="{format: 'yyyy-mm-dd'}">
                                    <input type="text" class="am-form-field"value="${data[i].time}" readonly>
                                    <span class="am-input-group-btn am-datepicker-add-on">
                                        <button class="am-btn am-btn-default" type="button"><span class="am-icon-calendar"></span> </button>
                                    </span>
                                </div>
                            </div>
                            <div class="note flex">
                                <p><input type="text" class="am-form-field am-radius" value="${data[i].note}"/></p>
                            </div>
                            <button type="button" class="am-btn am-btn-primary am-btn-block alter" id="${data[i].id}">修改</button>
                        </div>
                    </div>
                </div>`);
    }
    //增加

    $(".add").click(function() {

        let id = Number(data[data.length - 1].id) + 1,
            type = $('.sort').find('option:selected').text(),
            pay_type = $('.money').find('option:selected').text(),
            num = $('.figure').find('input').val(),
            note = $('.note').find('input').val(),
            time = $('.time').find('input').val();


        data.push({
            id: `${id}`,
            time: $('.time').find('input').val(),
            type: $('.sort').find('option:selected').text(),
            pay_type: $('.money').find('option:selected').text(),
            num: $('.figure').find('input').val(),
            note: $('.note').find('input').val()
        })
        console.log($('.time').find('input').val())
        $('.am-panel-group').append(`  
                    <div class="am-panel am-panel-default">
                    <div class="am-panel-hd">
                        <h4 class="am-panel-title" data-am-collapse="{parent: '#accordion', target: '#do-not-say-${id}'}">
                            <ul class="list flex">
                                <li>${id}</li>
                                <li>${$('.time').find('input').val()}</li>
                                <li>${$('.sort').find('option:selected').text()}</li>
                                <li>${$('.figure').find('input').val()}</li>
                                <li>${$('.money').find('option:selected').text()}</li>
                                <li>${$('.note').find('input').val()}</li>
                                <li style="display:inline-block"><button type="button" class="am-close" id="${id}">&times;</button></li>
                            </ul>
                        </h4>
                    </div>
                    <div id="do-not-say-${id}" class="am-panel-collapse am-collapse">
                    <div class="am-panel-bd flex">
                    <div class="sortBtn">
                        <select data-am-selected>
                                <option value="a">餐饮费</option>
                                <option value="b" >服饰美容</option>
                                <option value="c"> 生活日用</option>
                                <option value="d">住房缴费</option>
                                <option value="e">交通出行</option>
                                <option value="f">通讯物流</option>
                                <option value="g">文教娱乐</option>
                                <option value="h">健康</option>
                                <option value="i">其他消费</option>
                            </select>
                        </div>
                        <div class="moneyBtn">
                            <select data-am-selected>
                                <option value="a">现金</option>
                                <option value="b">银行卡</option>
                                <option value="c">支付宝</option>
                                <option value="d">信用卡</option>
                                <option value="e">余额宝</option>
                            </select>
                        </div>
                        <div class="figureBtn">
                            <div class="text">
                                <p><input type="number" class="am-form-field am-radius" value="${$('.figure').find('input').val()}"/></p>
                            </div>
                        </div>
                       
                        <div class="time">
                            <div class="am-input-group am-datepicker-date" data-am-datepicker="{format: 'yyyy-mm-dd'}">
                                <input type="text" class="am-form-field"  value="${$('.time').find('input').val()}" readonly>
                                <span class="am-input-group-btn am-datepicker-add-on">
                                    <button class="am-btn am-btn-default" type="button"><span class="am-icon-calendar"></span> </button>
                                </span>
                            </div>
                        </div>
                        <div class="note flex">
                            <p><input type="text" class="am-form-field am-radius"  value="${$('.money').find('option:selected').text()}"/></p>
                        </div>
                        <button type="button" class="am-btn am-btn-primary am-btn-block alter" id="${id}">修改</button>
                    </div>
                </div>
            </div>`);
        $.ajax({
            url: "http:/127.0.0.1:8022/add",
            type: "get",
            data: {
                id: parseInt(id),
                time: time,
                type: type,
                pay_type: pay_type,
                num: num,
                note: note
            },
            async: false,
            success: function(res) {
                data = res.data
            },
            error: function(err) {

            }
        })

    });

    //删除和修改

    document.querySelector(".list1").onclick = function(ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (target.className == "am-close") {
            if (data.find(function(x) { return x.id == target.id })) {
                data.splice(data.findIndex(function(x) { return x.id == target.id }), 1);
                target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode.parentNode.parentNode.parentNode);
                $.ajax({
                    url: "http:/127.0.0.1:8022/delete",
                    type: "get",
                    data: {
                        id: parseInt(target.id),
                    },
                    async: false,
                    success: function(res) {},
                    error: function(err) {}
                })
            }
        } else if (target.innerText == "修改") {
            if (data.find(function(x) { return x.id == target.id })) {

                data[data.findIndex(function(x) { return x.id == target.id })] = {
                    id: `${target.id}`,
                    type: target.parentNode.parentNode.querySelector('.sortBtn').querySelector('select')[target.parentNode.parentNode.querySelector('.sortBtn').querySelector('select').selectedIndex].text,
                    pay_type: target.parentNode.parentNode.querySelector('.moneyBtn').querySelector('select')[target.parentNode.parentNode.querySelector('.sortBtn').querySelector('select').selectedIndex].text,
                    num: Number($('.figureBtn').find('input').val()),
                    note: target.parentNode.querySelector('.note').querySelector('input').value,
                    time: target.parentNode.querySelector('.time').querySelector('input').value
                };
                console.log(target.parentNode.ElementChild)
                target.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.innerHTML = `
                    <li >${data[data.findIndex(function(x) { return x.id == target.id })].id}</li>
                    <li>${data[data.findIndex(function(x) { return x.id == target.id })].time}</li>           
                    <li class="value type">${data[data.findIndex(function(x) { return x.id == target.id })].type}</li>
                    <li class="value num">${data[data.findIndex(function(x) { return x.id == target.id })].num}</li>
                    <li class="value pay_type">${data[data.findIndex(function(x) { return x.id == target.id })].pay_type}</li>
                    <li class="value note">${data[data.findIndex(function(x) { return x.id == target.id })].note}</li>
                    <li style="display:inline-block"><button type="button" class="am-close" id="${data[data.findIndex(function(x) { return x.id == target.id })].id}">&times;</button></li>
                `;

                console.log(target.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.innerHTML)
                console.log(target.parentNode.parentNode.querySelector('.sortBtn').querySelector('select')[target.parentNode.parentNode.querySelector('.sortBtn').querySelector('select').selectedIndex].text)
                $.ajax({
                    url: "http:/127.0.0.1:8022/updata",
                    type: "get",
                    data: {
                        id: `${target.id}`,
                        type: target.parentNode.parentNode.querySelector('.sortBtn').querySelector('select')[target.parentNode.parentNode.querySelector('.sortBtn').querySelector('select').selectedIndex].text,
                        pay_type: target.parentNode.parentNode.querySelector('.moneyBtn').querySelector('select')[target.parentNode.parentNode.querySelector('.sortBtn').querySelector('select').selectedIndex].text,
                        num: Number($('.figureBtn').find('input').val()),
                        note: target.parentNode.querySelector('.note').querySelector('input').value,
                        time: target.parentNode.querySelector('.time').querySelector('input').value
                    },
                    async: false,
                    success: function(res) {
                        //data = res.data
                        console.log(res);
                    },
                    error: function(err) {

                    }
                })

            }
        }

    }

    //搜索
    var key1 = '餐饮费',
        key2 = '现金';
    document.querySelector(".specialListNav").onclick = function() {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        console.log(target.innerText)
        if (target.innerText == key1 || target.innerText == key2) {} else {
            switch (target.innerText) {
                case '餐饮费':
                case '服饰美容':
                case '生活日用':
                case '交通出行':
                case '通讯物流':
                case '住房缴费':
                case '文教娱乐':
                case '健康':
                case '其他消费':
                    $.ajax({
                        url: "http:/127.0.0.1:8022/find",
                        type: "get",
                        data: { type: target.innerText },
                        async: false,
                        success: function(res) {
                            data = res.data;
                            key1 = target.innerText;
                            document.querySelector("#accordion").innerHTML = '';
                            for (let i = 0; i < data.length; i++) {
                                $('.am-panel-group').append(`  
                                        <div class="am-panel am-panel-default">
                                            <div class="am-panel-hd">
                                                <h4 class="am-panel-title" data-am-collapse="{parent: '#accordion', target: '#do-not-say-${data[i].id}'}">
                                                    <ul class="list flex">
                                                    <li >${data[i].id}</li>
                                                    <li>${data[i].time}</li>           
                                                        <li class="value type">${data[i].type}</li>
                                                        <li class="value num">${data[i].num}</li>
                                                        <li class="value pay_type">${data[i].pay_type}</li>
                                                        <li class="value note">${data[i].note}</li>
                                                        <li style="display:inline-block"><button type="button" class="am-close" id="${data[i].id}">&times;</button></li>
                                                    </ul>
                                                </h4>
                                            </div>
                                            <div id="do-not-say-${data[i].id}" class="am-panel-collapse am-collapse">
                                                <div class="am-panel-bd flex">
                                                <div class="sortBtn">
                                                    <select data-am-selected>
                                                            <option value="a">餐饮费</option>
                                                            <option value="b">服饰美容</option>
                                                            <option value="c"> 生活日用</option>
                                                            <option value="d">住房缴费</option>
                                                            <option value="e">交通出行</option>
                                                            <option value="f">通讯物流</option>
                                                            <option value="g">文教娱乐</option>
                                                            <option value="h">健康</option>
                                                            <option value="i">其他消费</option>
                                                        </select>
                                                    </div>
                                                    <div class="moneyBtn">
                                                        <select data-am-selected>
                                                            <option value="a">现金</option>
                                                            <option value="b">银行卡</option>
                                                            <option value="c">支付宝</option>
                                                            <option value="d">信用卡</option>
                                                            <option value="e">余额宝</option>
                                                        </select>
                                                    </div>
                                                    <div class="figureBtn">
                                                        <div class="text">
                                                            <p><input type="number" class="am-form-field am-radius" value="${data[i].num}" /></p>
                                                        </div>
                                                    </div>
            
                                                    <div class="time">
                                                        <div class="am-input-group am-datepicker-date" data-am-datepicker="{format: 'yyyy-mm-dd'}">
                                                            <input type="text" class="am-form-field"value="${data[i].time}" readonly>
                                                            <span class="am-input-group-btn am-datepicker-add-on">
                                                                <button class="am-btn am-btn-default" type="button"><span class="am-icon-calendar"></span> </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="note flex">
                                                        <p><input type="text" class="am-form-field am-radius" value="${data[i].note}"/></p>
                                                    </div>
                                                    <button type="button" class="am-btn am-btn-primary am-btn-block alter" id="${data[i].id}">修改</button>
                                                </div>
                                            </div>
                                        </div>`);
                            }
                        },
                        error: function(err) {

                        }
                    })
                    break;
                case '现金':
                case '信用卡':
                case '银行卡':
                case '支付宝':
                case '余额宝':
                    $.ajax({
                        url: "http:/127.0.0.1:8022/find",
                        type: "get",
                        data: { pay_type: target.innerText },
                        async: false,
                        success: function(res) {
                            data = res.data;
                            key2 = target.innerText;
                            document.querySelector("#accordion").innerHTML = '';
                            for (let i = 0; i < data.length; i++) {
                                $('.am-panel-group').append(`  
                                        <div class="am-panel am-panel-default">
                                            <div class="am-panel-hd">
                                                <h4 class="am-panel-title" data-am-collapse="{parent: '#accordion', target: '#do-not-say-${data[i].id}'}">
                                                    <ul class="list flex">
                                                    <li >${data[i].id}</li>
                                                    <li>${data[i].time}</li>           
                                                        <li class="value type">${data[i].type}</li>
                                                        <li class="value num">${data[i].num}</li>
                                                        <li class="value pay_type">${data[i].pay_type}</li>
                                                        <li class="value note">${data[i].note}</li>
                                                        <li style="display:inline-block"><button type="button" class="am-close" id="${data[i].id}">&times;</button></li>
                                                    </ul>
                                                </h4>
                                            </div>
                                            <div id="do-not-say-${data[i].id}" class="am-panel-collapse am-collapse">
                                                <div class="am-panel-bd flex">
                                                <div class="sortBtn">
                                                    <select data-am-selected>
                                                            <option value="a">餐饮费</option>
                                                            <option value="b">服饰美容</option>
                                                            <option value="c"> 生活日用</option>
                                                            <option value="d">住房缴费</option>
                                                            <option value="e">交通出行</option>
                                                            <option value="f">通讯物流</option>
                                                            <option value="g">文教娱乐</option>
                                                            <option value="h">健康</option>
                                                            <option value="i">其他消费</option>
                                                        </select>
                                                    </div>
                                                    <div class="moneyBtn">
                                                        <select data-am-selected>
                                                            <option value="a">现金</option>
                                                            <option value="b">银行卡</option>
                                                            <option value="c">支付宝</option>
                                                            <option value="d">信用卡</option>
                                                            <option value="e">余额宝</option>
                                                        </select>
                                                    </div>
                                                    <div class="figureBtn">
                                                        <div class="text">
                                                            <p><input type="number" class="am-form-field am-radius" value="${data[i].num}" /></p>
                                                        </div>
                                                    </div>
            
                                                    <div class="time">
                                                        <div class="am-input-group am-datepicker-date" data-am-datepicker="{format: 'yyyy-mm-dd'}">
                                                            <input type="text" class="am-form-field"value="${data[i].time}" readonly>
                                                            <span class="am-input-group-btn am-datepicker-add-on">
                                                                <button class="am-btn am-btn-default" type="button"><span class="am-icon-calendar"></span> </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="note flex">
                                                        <p><input type="text" class="am-form-field am-radius" value="${data[i].note}"/></p>
                                                    </div>
                                                    <button type="button" class="am-btn am-btn-primary am-btn-block alter" id="${data[i].id}">修改</button>
                                                </div>
                                            </div>
                                        </div>`);
                            }
                        },
                        error: function(err) {

                        }
                    })
                    break;
                case '搜索':
                    $.ajax({
                        url: "http:/127.0.0.1:8022/find",
                        type: "get",
                        data: { note: document.querySelector("#searchNote").value },
                        async: false,
                        success: function(res) {
                            data = res.data;
                            document.querySelector("#accordion").innerHTML = '';
                            for (let i = 0; i < data.length; i++) {
                                $('.am-panel-group').append(`  
                                        <div class="am-panel am-panel-default">
                                            <div class="am-panel-hd">
                                                <h4 class="am-panel-title" data-am-collapse="{parent: '#accordion', target: '#do-not-say-${data[i].id}'}">
                                                    <ul class="list flex">
                                                    <li >${data[i].id}</li>
                                                    <li>${data[i].time}</li>           
                                                        <li class="value type">${data[i].type}</li>
                                                        <li class="value num">${data[i].num}</li>
                                                        <li class="value pay_type">${data[i].pay_type}</li>
                                                        <li class="value note">${data[i].note}</li>
                                                        <li style="display:inline-block"><button type="button" class="am-close" id="${data[i].id}">&times;</button></li>
                                                    </ul>
                                                </h4>
                                            </div>
                                            <div id="do-not-say-${data[i].id}" class="am-panel-collapse am-collapse">
                                                <div class="am-panel-bd flex">
                                                <div class="sortBtn">
                                                    <select data-am-selected>
                                                            <option value="a">餐饮费</option>
                                                            <option value="b">服饰美容</option>
                                                            <option value="c"> 生活日用</option>
                                                            <option value="d">住房缴费</option>
                                                            <option value="e">交通出行</option>
                                                            <option value="f">通讯物流</option>
                                                            <option value="g">文教娱乐</option>
                                                            <option value="h">健康</option>
                                                            <option value="i">其他消费</option>
                                                        </select>
                                                    </div>
                                                    <div class="moneyBtn">
                                                        <select data-am-selected>
                                                            <option value="a">现金</option>
                                                            <option value="b">银行卡</option>
                                                            <option value="c">支付宝</option>
                                                            <option value="d">信用卡</option>
                                                            <option value="e">余额宝</option>
                                                        </select>
                                                    </div>
                                                    <div class="figureBtn">
                                                        <div class="text">
                                                            <p><input type="number" class="am-form-field am-radius" value="${data[i].num}" /></p>
                                                        </div>
                                                    </div>
            
                                                    <div class="time">
                                                        <div class="am-input-group am-datepicker-date" data-am-datepicker="{format: 'yyyy-mm-dd'}">
                                                            <input type="text" class="am-form-field"value="${data[i].time}" readonly>
                                                            <span class="am-input-group-btn am-datepicker-add-on">
                                                                <button class="am-btn am-btn-default" type="button"><span class="am-icon-calendar"></span> </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="note flex">
                                                        <p><input type="text" class="am-form-field am-radius" value="${data[i].note}"/></p>
                                                    </div>
                                                    <button type="button" class="am-btn am-btn-primary am-btn-block alter" id="${data[i].id}">修改</button>
                                                </div>
                                            </div>
                                        </div>`);
                            }
                        },
                        error: function(err) {

                        }
                    })
                    break;
            }
        }
    }

    //排序

    $("#sort").click(function() {
        $.ajax({
            url: "http:/127.0.0.1:8022/sort",
            data: {},
            type: "get",
            async: false,
            success: function(res) {
                data = res.data;
                for (let i = 0; i < data.length; i++) {
                    $('.am-panel-group').append(`  
                    <div class="am-panel am-panel-default">
                        <div class="am-panel-hd">
                            <h4 class="am-panel-title" data-am-collapse="{parent: '#accordion', target: '#do-not-say-${data[i].id}'}">
                                <ul class="list flex">
                                <li >${data[i].id}</li>
                                <li>${data[i].time}</li>           
                                    <li class="value type">${data[i].type}</li>
                                    <li class="value num">${data[i].num}</li>
                                    <li class="value pay_type">${data[i].pay_type}</li>
                                    <li class="value note">${data[i].note}</li>
                                    <li style="display:inline-block"><button type="button" class="am-close" id="${data[i].id}">&times;</button></li>
                                </ul>
                            </h4>
                        </div>
                        <div id="do-not-say-${data[i].id}" class="am-panel-collapse am-collapse">
                            <div class="am-panel-bd flex">
                            <div class="sortBtn">
                                <select data-am-selected>
                                        <option value="a">餐饮费</option>
                                        <option value="b">服饰美容</option>
                                        <option value="c"> 生活日用</option>
                                        <option value="d">住房缴费</option>
                                        <option value="e">交通出行</option>
                                        <option value="f">通讯物流</option>
                                        <option value="g">文教娱乐</option>
                                        <option value="h">健康</option>
                                        <option value="i">其他消费</option>
                                    </select>
                                </div>
                                <div class="moneyBtn">
                                    <select data-am-selected>
                                        <option value="a">现金</option>
                                        <option value="b">银行卡</option>
                                        <option value="c">支付宝</option>
                                        <option value="d">信用卡</option>
                                        <option value="e">余额宝</option>
                                    </select>
                                </div>
                                <div class="figureBtn">
                                    <div class="text">
                                        <p><input type="number" class="am-form-field am-radius" value="${data[i].num}" /></p>
                                    </div>
                                </div>

                                <div class="time">
                                    <div class="am-input-group am-datepicker-date" data-am-datepicker="{format: 'yyyy-mm-dd'}">
                                        <input type="text" class="am-form-field"value="${data[i].time}" readonly>
                                        <span class="am-input-group-btn am-datepicker-add-on">
                                            <button class="am-btn am-btn-default" type="button"><span class="am-icon-calendar"></span> </button>
                                        </span>
                                    </div>
                                </div>
                                <div class="note flex">
                                    <p><input type="text" class="am-form-field am-radius" value="${data[i].note}"/></p>
                                </div>
                                <button type="button" class="am-btn am-btn-primary am-btn-block alter" id="${data[i].id}">修改</button>
                            </div>
                        </div>
                    </div>`);
                }
            },
            error: function(err) {

            }
        })
    })
}