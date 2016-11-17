var express = require('express');
var router = express.Router();


var menus = [
    {
        "item": "一、簡介", "desc": "這邊是農場Field api簡介",
        "subitems": []
    },
    {
        "item": "二、API服務",
        "subitems": [
            {
                "name": "取得農場列表", "sub": [
                    {
                        "name": "URL描述",
                        "content": "在農業4.0共通平台使用Token取得使用者具權限檢視的農場列表。",
                        "http": "GET : /agri/v1/field/list/"

                    },
                    {
                        "name": "請求參數",
                        "dummy": true,
                        "table": "req"
                    },
                    {
                        "name": "回應格式(JSON)",
                        "dummy": true,
                        "table": "res"
                    }
                ]
            },
            {
                "name": "取得特定農場資料", "sub": [
                    {
                        "name": "URL描述",
                        "content": "在農業4.0共通平台使用農場ID取得屬於使用者自身之特定農場資料。",
                        "http": "GET : /agri/v1/field/:id/"
                    },
                    {
                        "name": "請求參數",
                        "dummy": true,
                        "content": "/agri/v1/field/create/"
                    },
                    {
                        "name": "回應格式(JSON)",
                        "dummy": true,
                        "content": "在農業4.0共通平台修改個人資料。"
                    }
                ]
            }
        ]
    },
    {
        "item": "三、附錄",
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

var reqtb = [{"tag": "TOKEN", "required": "Y", "desc": "使用者認證", "format": "123456789"}];
var restb = [
    {"tag": "field_id", "required": "Y", "desc": "農場ID", "format": "123456789"},
    {"tag": "field_name", "required": "Y", "desc": "農場名稱", "format": "埔里農場"},
    {"tag": "field_type", "required": "Y", "desc": "農場種類", "format": "1"},
    {"tag": "field_add", "required": "Y", "desc": "農場地址", "format": "南投縣埔里鎮東峰路180號"}
];
var apiRouters = [
    {
        "key" : "field",
        "name" : "取得我的農場"
    },
    {
        "key" : "user",
        "name" : "使用者存取介面"
    },
    {
        "key" : "device",
        "name" : "物聯網設備存取介面"
    },
    {
        "key" : "plan",
        "name" : "生產計劃存取介面"
    },
    {
        "key" : "knowledge",
        "name" : "知識庫存取介面"
    },
    {
        "key" : "rule",
        "name" : "專家建議存取介面"
    },
    {
        "key" : "calendar",
        "name" : "栽培曆存取介面"
    },
    {
        "key" : "fieldActivity",
        "name" : "田間作業存取介面"
    },
    {
        "key" : "interfacing",
        "name" : "第三方介面存取介面"
    }
]

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('apis', {title: 'apis', menus: menus, apiRouters: apiRouters, reqtb: reqtb, restb: restb});
});

module.exports = router;
