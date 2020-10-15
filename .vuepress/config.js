module.exports = {
  "title": "techhour",
  "description": "Liang's Blog",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "原创",
        "icon": "reco-message",
        "items": [
          {
            "text": "Fascode广告效果分析平台",
            "link": "https://dmp.fascode.com"
          },
          {
            "text": "Click URL Maker",
            "link": "https://fascode.com"
          },
          {
            "text": "AppsFlyer Demo",
            "link": "https://play.google.com/store/apps/details?id=com.appsflyer.candyapp"
          },
          {
            "text": "World Gourmet",
            "link": "https://play.google.com/store/apps/details?id=com.fascode.worldgourmet"
          },
          {
            "text": "Attribution Method",
            "link": "https://play.google.com/store/apps/details?id=com.appsflyer.attributionmethodtest.stg"
          },
          {
            "text": "Attributable",
            "link": "https://play.google.com/store/apps/details?id=com.fascode.attributable"
          },
          {
            "text": "Notification Pusher",
            "link": "https://polar-ravine-41341.herokuapp.com/"
          }
        ]
      },
      {
        "text": "关于我",
        "link": "/about/"
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/liahoo",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Liang Hu",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}