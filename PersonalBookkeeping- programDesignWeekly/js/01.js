let data = [
    { id: 0, time: '2019-01-01', type: '餐饮费', pay_type: '支付宝', num: 13, note: '一点点', pay: '支出' },
    { id: 1, time: '2019-01-01', type: '餐饮费', pay_type: '支付宝', num: 3, note: '早餐', pay: '支出' },
    { id: 2, time: '2019-01-01', type: '生活日用', pay_type: '余额宝', num: 27.80, note: ' 无', pay: '支出' },
    { id: 3, time: '2019-01-02', type: '餐饮费', pay_type: '支付宝', num: 3.50, note: '早餐', pay: '支出' },
    { id: 4, time: '2019-01-02', type: '餐饮费', pay_type: '余额宝', num: 10, note: '水果', pay: '支出' },
    { id: 5, time: '2019-01-03', type: '服饰美容', pay_type: '支付宝', num: 233, note: ' 无', pay: '支出' },
    { id: 6, time: '2019-01-03', type: '餐饮费', pay_type: '余额宝', num: 14, note: '午餐', pay: '支出' },
    { id: 7, time: '2019-01-04', type: '服饰美容', pay_type: '支付宝', num: 164, note: '遮瑕膏', pay: '支出' },
    { id: 8, time: '2019-01-04', type: '餐饮费', pay_type: '支付宝', num: 10, note: '水果', pay: '支出' },
    { id: 9, time: '2019-01-05', type: '餐饮费', pay_type: '余额宝', num: 5, note: '早餐', pay: '支出' },
    { id: 10, time: '2019-01-06', type: '生活日用', pay_type: '支付宝', num: 20, note: '纸巾', pay: '支出' },
    { id: 11, time: '2019-01-07', type: '餐饮费', pay_type: '支付宝', num: 14, note: '午餐', pay: '支出' },
    { id: 12, time: '2019-01-07', type: '餐饮费', pay_type: '支付宝', num: 12, note: '饺子', pay: '支出' },
    { id: 13, time: '2019-01-08', type: '交通出行', pay_type: '现金', num: 4, note: '地铁', pay: '支出' },
    { id: 14, time: '2019-01-08', type: '餐饮费', pay_type: '支付宝', num: 86, note: '火锅', pay: '支出' },
    { id: 15, time: '2019-01-09', type: '餐饮费', pay_type: '支付宝', num: 11, note: '午餐', pay: '支出' },
    { id: 16, time: '2019-01-09', type: '生活日用', pay_type: '支付宝', num: 5, note: '文具', pay: '支出' },
    { id: 17, time: '2019-01-09', type: '餐饮费', pay_type: '余额宝', num: 13, note: '晚餐', pay: '支出' },
    { id: 18, time: '2019-01-10', type: '餐饮费', pay_type: '余额宝', num: 4, note: '早餐', pay: '支出' },
    { id: 19, time: '2019-01-10', type: '服饰美容', pay_type: '支付宝', num: 327, note: ' 无', pay: '支出' },
    { id: 20, time: '2019-01-11', type: '交通出行', pay_type: '现金', num: 3, note: '地铁', pay: '支出' },
    { id: 21, time: '2019-01-11', type: '餐饮费', pay_type: '支付宝', num: 14, note: '午餐', pay: '支出' },
    { id: 22, time: '2019-01-12', type: '服饰美容', pay_type: '支付宝', num: 368, note: '裙子', pay: '支出' },
    { id: 23, time: '2019-01-12', type: '餐饮费', pay_type: '支付宝', num: 12, note: '早餐', pay: '支出' },
    { id: 24, time: '2019-01-13', type: '餐饮费', pay_type: '支付宝', num: 58, note: '烧烤', pay: '支出' },
    { id: 25, time: '2019-01-14', type: '餐饮费', pay_type: '余额宝', num: 10, note: '午餐', pay: '支出' },
    { id: 26, time: '2019-01-15', type: '餐饮费', pay_type: '支付宝', num: 13, note: '米线', pay: '支出' },
    { id: 27, time: '2019-01-16', type: '餐饮费', pay_type: '支付宝', num: 15, note: '午餐', pay: '支出' },
    { id: 28, time: '2019-01-17', type: '娱乐费', pay_type: '支付宝', num: 30, note: '抓娃娃', pay: '支出' },
    { id: 29, time: '2019-01-17', type: '餐饮费', pay_type: '支付宝', num: 13, note: '午餐', pay: '支出' },
    { id: 30, time: '2019-01-18', type: '餐饮费', pay_type: '支付宝', num: 12, note: '晚餐', pay: '支出' },
    { id: 31, time: '2019-01-18', type: '生活日用', pay_type: '支付宝', num: 24, note: '洗衣液', pay: '支出' },
    { id: 32, time: '2019-01-19', type: '餐饮费', pay_type: '余额宝', num: 9, note: '晚餐', pay: '支出' },
    { id: 33, time: '2019-01-20', type: '餐饮费', pay_type: '支付宝', num: 12, note: '午餐', pay: '支出' },
    { id: 34, time: '2019-01-21', type: '餐饮费', pay_type: '支付宝', num: 13, note: '午餐', pay: '支出' },
    { id: 35, time: '2019-01-22', type: '餐饮费', pay_type: '支付宝', num: 12, note: '水果', pay: '支出' },
    { id: 36, time: '2019-01-23', type: '餐饮费', pay_type: '支付宝', num: 11, note: '午餐', pay: '支出' },
    { id: 37, time: '2019-01-23', type: '生活日用', pay_type: '支付宝', num: 24, note: ' 无', pay: '支出' },
    { id: 38, time: '2019-01-24', type: '餐饮费', pay_type: '余额宝', num: 14, note: '午餐', pay: '支出' },
    { id: 39, time: '2019-01-24', type: '餐饮费', pay_type: '余额宝', num: 11, note: '晚餐', pay: '支出' },
    { id: 40, time: '2019-01-25', type: '餐饮费', pay_type: '支付宝', num: 13, note: '午餐', pay: '支出' },
    { id: 41, time: '2019-01-25', type: '服饰美容', pay_type: '支付宝', num: 198, note: ' 无', pay: '支出' },
    { id: 42, time: '2019-01-26', type: '餐饮费', pay_type: '支付宝', num: 9, note: '午餐', pay: '支出' },
    { id: 43, time: '2019-01-27', type: '餐饮费', pay_type: '支付宝', num: 8, note: '晚餐', pay: '支出' },
    { id: 44, time: '2019-01-27', type: '交通出行', pay_type: '余额宝', num: 11, note: ' 无', pay: '支出' },
    { id: 45, time: '2019-01-28', type: '交通出行', pay_type: '支付宝', num: 3, note: ' 无', pay: '支出' },
    { id: 46, time: '2019-01-28', type: '餐饮费', pay_type: '支付宝', num: 13, note: '一点点', pay: '支出' },
    { id: 47, time: '2019-01-29', type: '餐饮费', pay_type: '支付宝', num: 12, note: '午餐', pay: '支出' },
    { id: 48, time: '2019-01-29', type: '餐饮费', pay_type: '支付宝', num: 14, note: '晚餐', pay: '支出' },
    { id: 49, time: '2019-01-29', type: '服饰美容', pay_type: '支付宝', num: 58, note: ' 无', pay: '支出' },
    { id: 50, time: '2019-01-30', type: '餐饮费', pay_type: '支付宝', num: 13, note: '午餐', pay: '支出' },
    { id: 51, time: '2019-01-30', type: '餐饮费', pay_type: '支付宝', num: 14, note: '晚餐', pay: '支出' },
    { id: 52, time: '2019-01-31', type: '交通出行', pay_type: '支付宝', num: 2, note: ' 无', pay: '支出' },
    { id: 53, time: '2019-02-01', type: '餐饮费', pay_type: '余额宝', num: 13, note: '午餐', pay: '支出' },
    { id: 54, time: '2019-02-01', type: '餐饮费', pay_type: '支付宝', num: 11, note: '晚餐', pay: '支出' },
    { id: 55, time: '2019-02-02', type: '餐饮费', pay_type: '支付宝', num: 13, note: '午餐', pay: '支出' },
    { id: 56, time: '2019-02-02', type: '餐饮费', pay_type: '支付宝', num: 12, note: '晚餐', pay: '支出' },
    { id: 57, time: '2019-02-03', type: '餐饮费', pay_type: '支付宝', num: 14, note: '午餐', pay: '支出' },
    { id: 58, time: '2019-02-04', type: '服饰美容', pay_type: '支付宝', num: 112, note: ' 无', pay: '支出' },
    { id: 59, time: '2019-02-04', type: '餐饮费', pay_type: '余额宝', num: 11, note: '午餐', pay: '支出' },
    { id: 60, time: '2019-02-05', type: '生活日用', pay_type: '支付宝', num: 25, note: ' 无', pay: '支出' },
    { id: 61, time: '2019-02-16', type: '餐饮费', pay_type: '现金', num: 15, note: '无', pay: '支出' },
    { id: 62, time: '2019-02-17', type: '餐饮费', pay_type: '支付宝', num: 70, note: '同学聚餐', pay: '支出' },
    { id: 63, time: '2019-02-17', type: '交通出行', pay_type: '现金', num: 6, note: '无', pay: '支出' },
    { id: 64, time: '2019-02-18', type: '文教娱乐', pay_type: '银行卡', num: 60, note: 'ktv', pay: '支出' },
    { id: 65, time: '2019-02-19', type: '餐饮费', pay_type: '余额宝', num: 6, note: '早餐', pay: '支出' },
    { id: 66, time: '2019-02-19', type: '餐饮费', pay_type: '余额宝', num: 15, note: '中餐' },
    { id: 67, time: '2019-02-20', type: '生活日用', pay_type: '支付宝', num: 100, note: '生活日用', pay: '支出' },
    { id: 68, time: '2019-02-20', type: '餐饮费', pay_type: '现金', num: 40, note: '无', pay: '支出' },
    { id: 69, time: '2019-02-21', type: '餐饮费', pay_type: '支付宝', num: 10, note: '香锅', pay: '支出' },
    { id: 70, time: '2019-02-21', type: '其他消费', pay_type: '银行卡', num: 80, note: '六级缴费', pay: '支出' },
    { id: 71, time: '2019-02-22', type: '交通出行', pay_type: '支付宝', num: 12, note: '打车', pay: '支出' },
    { id: 72, time: '2019-02-22', type: '餐饮费', pay_type: '银行卡', num: 100, note: '自助餐', pay: '支出' },
    { id: 73, time: '2019-02-23', type: '生活日用', pay_type: '银行卡', num: 300, note: '衣服', pay: '支出' },
    { id: 74, time: '2019-02-23', type: '餐饮费', pay_type: '支付宝', num: 15, note: '中餐', pay: '支出' },
    { id: 75, time: '2019-02-24', type: '餐饮费', pay_type: '现金', num: 10, note: '晚餐', pay: '支出' },
    { id: 76, time: '2019-02-24', type: '餐饮费', pay_type: '支付宝', num: 30, note: '夜宵', pay: '支出' },
    { id: 77, time: '2019-02-25', type: '餐饮费', pay_type: '支付宝', num: 5, note: '早餐', pay: '支出' },
    { id: 78, time: '2019-02-25', type: '餐饮费', pay_type: '支付宝', num: 14, note: '中餐', pay: '支出' },
    { id: 79, time: '2019-02-26', type: '餐饮费', pay_type: '支付宝', num: 18, note: '中餐', pay: '支出' },
    { id: 80, time: '2019-02-26', type: '餐饮费', pay_type: '支付宝', num: 16, note: '中餐', pay: '支出' },
    { id: 81, time: '2019-02-27', type: '交通出行', pay_type: '现金', num: 18, note: '打车', pay: '支出' },
    { id: 82, time: '2019-02-28', type: '餐饮费', pay_type: '现金', num: 15, note: '中餐', pay: '支出' },
    { id: 83, time: '2019-02-28', type: '其他消费', pay_type: '余额宝', num: 200, note: '投资', pay: '支出' },
    { id: 84, time: '2019-03-1', type: '交通出行', pay_type: '现金', num: 10, note: '回家', pay: '支出' },
    { id: 85, time: '2019-03-1', type: '文教娱乐', pay_type: '支付宝', num: 60, note: '看电影', pay: '支出' },
    { id: 86, time: '2019-03-2', type: '交通出行', pay_type: '现金', num: 10, note: '回学校', pay: '支出' },
    { id: 87, time: '2019-03-2', type: '餐饮费', pay_type: '支付宝', num: 13, note: '中餐', pay: '支出' },
    { id: 88, time: '2019-03-2', type: '餐饮费', pay_type: '现金', num: 20, note: '晚餐', pay: '支出' },
    { id: 89, time: '2019-03-3', type: '其他消费', pay_type: '余额宝', num: 50, note: '买书', pay: '支出' },
    { id: 90, time: '2019-03-3', type: '餐饮费', pay_type: '支付宝', num: 10, note: '中餐', pay: '支出' },
    { id: 91, time: '2019-03-3', type: '餐饮费', pay_type: '支付宝', num: 15, note: '晚餐', pay: '支出' },
    { id: 92, time: '2019-03-4', type: '餐饮费', pay_type: '现金', num: 8, note: '早餐', pay: '支出' },
    { id: 93, time: '2019-03-4', type: '餐饮费', pay_type: '支付宝', num: 15, note: '中餐', pay: '支出' },
    { id: 94, time: '2019-03-5', type: '文教娱乐', pay_type: '银行卡', num: 40, note: '电影', pay: '支出' },
    { id: 95, time: '2019-03-5', type: '餐饮费', pay_type: '支付宝', num: 40, note: '全天', pay: '支出' },
    { id: 96, time: '2019-03-6', type: '其他消费', pay_type: '支付宝', num: 10, note: '文具', pay: '支出' },
    { id: 97, time: '2019-03-6', type: '餐饮费', pay_type: '支付宝', num: 30, note: '中餐', pay: '支出' },
    { id: 98, time: '2019-03-7', type: '餐饮费', pay_type: '支付宝', num: 18, note: '中餐', pay: '支出' },
    { id: 99, time: '2019-03-8', type: '餐饮费', pay_type: '现金', num: 35, note: '全天', pay: '支出' },
    { id: 100, time: '2019-03-8', type: '其他消费', pay_type: '支付宝', num: 15, note: '买书', pay: '支出' },
    { id: 101, time: '2019-03-9', type: '餐饮费', pay_type: '支付宝', num: 10, note: '中餐', pay: '支出' },
    { id: 102, time: '2019-03-9', type: '餐饮费', pay_type: '支付宝', num: 10, note: '晚餐', pay: '支出' },
    { id: 103, time: '2019-03-10', type: '交通出行', pay_type: '现金', num: 10, note: '打车', pay: '支出' },
    { id: 104, time: '2019-03-10', type: '餐饮费', pay_type: '支付宝', num: 27, note: '中餐', pay: '支出' },
    { id: 105, time: '2019-03-10', type: '餐饮费', pay_type: '支付宝', num: 10, note: '晚餐', pay: '支出' },
    { id: 106, time: '2019-03-11', type: '餐饮费', pay_type: '余额宝', num: 6, note: '早餐', pay: '支出' },
    { id: 107, time: '2019-03-11', type: '餐饮费', pay_type: '支付宝', num: 14, note: '中餐', pay: '支出' },
    { id: 108, time: '2019-03-11', type: '餐饮费', pay_type: '支付宝', num: 13, note: '晚餐', pay: '支出' },
    { id: 109, time: '2019-03-12', type: '餐饮费', pay_type: '支付宝', num: 20, note: '中餐', pay: '支出' },
    { id: 110, time: '2019-03-12', type: '餐饮费', pay_type: '支付宝', num: 18, note: '奶茶', pay: '支出' },
    { id: 111, time: '2019-03-13', type: '餐饮费', pay_type: '支付宝', num: 16, note: '中餐', pay: '支出' },
    { id: 112, time: '2019-03-13', type: '餐饮费', pay_type: '支付宝', num: 10, note: '晚餐', pay: '支出' },
    { id: 113, time: '2019-03-14', type: '交通出行', pay_type: '银行卡', num: 200, note: '出游', pay: '支出' },
    { id: 114, time: '2019-03-14', type: '住房缴费', pay_type: '银行卡', num: 180, note: '出游', pay: '支出' },
    { id: 115, time: '2019-03-15', type: '餐饮费', pay_type: '支付宝', num: 100, note: '午饭', pay: '支出' },
    { id: 116, time: '2019-03-15', type: '交通出行', pay_type: '银行卡', num: 200, note: '返校', pay: '支出' },
    { id: 117, time: '2019-03-16', type: '餐饮费', pay_type: '支付宝', num: 18, note: '中餐', pay: '支出' },
    { id: 118, time: '2019-03-16', type: '餐饮费', pay_type: '支付宝', num: 18, note: '晚餐', pay: '支出' },
    { id: 119, time: '2019-03-17', type: '餐饮费', pay_type: '现金', num: 30, note: '零食', pay: '支出' },
    { id: 120, time: '2019-03-18', type: '餐饮费', pay_type: '银行卡', num: 20, note: '中餐', pay: '支出' }
]






$.ajax({
    url: "http:/127.0.0.1:8022/find", //127.0.0.1：8022/sort
    type: "get",
    data: {
        id: id,
        type: type,
        ...
    },
    success: function(res) {

    },
    error: function(err) {

    }
})