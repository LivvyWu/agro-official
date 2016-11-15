var express = require('express');
var router = express.Router();


var menus = [
    {
        "item": "一、簡介(Introduction)", "itemdesc" : "簡介內容",
        "subitems": []
    },
    {
        "item": "二、API服務(API Service)",
        "subitems": [
            {
                "name": "取得我的農場", "sub": [
                {
                    "name": "URL描述 (URL Description)",
                    "desc": "在農業4.0共通平台建立user個人資訊。",
                    "http": "POST",
                    "url": "/agri/v1/user/create/"
                },
                {
                    "name": "請求參數 (Request Paramters)",
                    "desc": "在農業4.0共通平台查詢個人資料。",
                    "http": "POST",
                    "url": "/agri/v1/user/create/"
                },
                {
                    "name": "回應格式(JSON) (Response Object (JSON))",
                    "desc": "在農業4.0共通平台修改個人資料。",
                    "http": "POST",
                    "url": "/agri/v1/user/create/"
                },
                {
                    "name": "請求範例 (Example Request)",
                    "desc": "在農業4.0共通平台刪除個人資料。",
                    "http": "POST",
                    "url": "/agri/v1/user/create/"
                },
                {
                    "name": "回應範例 (Example Response)",
                    "desc": "在農業4.0共通平台刪除個人資料。",
                    "http": "POST",
                    "url": "/agri/v1/user/create/"
                },
                ]
            }
        ]
    },
    {
        "item": "",
        "subitems": []
    },
    {
        "item": "三、農場詳細資訊",
        "subitems": []
    },
    {
        "item": "四、附錄",
        "subitems": []
    }
    // {
    //     "item": "使用者存取介面",
    //     "subitems": [
    //         {"name" : "建立個人資料", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "查詢個人資料", "desc" : "在農業4.0共通平台查詢個人資料。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "修改個人資料", "desc" : "在農業4.0共通平台修改個人資料。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "刪除個人資料", "desc" : "在農業4.0共通平台刪除個人資料。", "http": "POST", "url" : "/agri/v1/user/create/"}
    //     ]
    // },
    // {
    //     "item": "物聯網設備存取介面",
    //     "subitems": [
    //         {"name" : "上傳單筆感測器資料", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "上傳多筆感測器資料", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得感測器列表", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得特定感測器資料", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得作動器列表", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得特定感測器資料", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"}
    //     ]
    // },
    // {
    //     "item": "場域存取介面",
    //     "subitems": [
    //         {"name" : "取得農場列表", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得特定農場資料", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得特定農場感測器列表", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得特定農場作動器列表", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得特定農場環境參數資訊", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取取得特定農場環境參數歷史資訊", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"}
    //     ]
    // },
    // {
    //     "item": "生產計劃存取介面",
    //     "subitems": [
    //         {"name" : "創建生產計畫", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得作物種類列表", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得特定種類作物品種列表", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"}
    //     ]
    // },
    // {
    //     "item": "知識庫存取介面",
    //     "subitems": [
    //         {"name" : "取得作物種類列表", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得特定種類作物品種列表", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"}
    //     ]
    // },
    // {
    //     "item": "專家建議存取介面",
    //     "subitems": [
    //         {"name" : "取得專家環控建議", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得套裝作物列表", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得套裝栽種詳細資訊", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"}
    //     ]
    // },
    // {
    //     "item": "栽培曆存取介面",
    //     "subitems": [
    //         {"name" : "取得栽培曆列表", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "取得特定栽培曆詳細資訊", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"}
    //     ]
    // },
    // {
    //     "item": "田間作業存取介面",
    //     "subitems": [
    //         {"name" : "新增一筆田間作業(Field Task)資料", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "列出所有田間作業(Field Task)資料", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "修改一筆田間作業(Field Task)資料", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"},
    //         {"name" : "刪除一筆田間作業(Field Task)資料", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"}
    //     ]
    // },
    // {
    //     "item": "第三方介面存取介面",
    //     "subitems": [
    //         {"name" : "取得外部介面單位列表", "desc" : "在農業4.0共通平台建立user個人資訊。", "http": "POST", "url" : "/agri/v1/user/create/"}
    //     ]
    // }
];

var tagDesc = [
    {"tag": "TOKEN", "required": "Y", "desc": "使用者認證", "format": "123456789"},
    {"tag": "ACCOUNT", "required": "Y", "desc": "使用者認證", "format": "xxxxyyyy"},
    {"tag": "PASSWORD", "required": "Y", "desc": "使用者認證", "format": "OOOXXX"},
    {"tag": "NAME", "required": "Y", "desc": "使用者認證", "format": "王小明"},
    {"tag": "EMAIL", "required": "Y", "desc": "使用者認證", "format": "XXXXXOOOOO@gmail.com"},
    {"tag": "TELEPHONE", "required": "Y", "desc": "使用者認證", "format": "0912345678"},
    {"tag": "ADDRESS", "required": "Y", "desc": "使用者認證", "format": "OO市OOOXXX路XX巷OO號"}
];


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('apis', {title: 'apis', menus: menus, tagDesc: tagDesc});
});

module.exports = router;
