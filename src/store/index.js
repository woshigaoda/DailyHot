import { defineStore } from "pinia";

export const mainStore = defineStore("mainData", {
  state: () => {
    return {
      // 系统主题
      siteTheme: "light",
      siteThemeAuto: true,
      // 新闻类别
      defaultNewsArr: [
        {
          label: "HelloGitHub",
          name: "hellogithub",
          order: 0,
          show: true,
        },
        {
          label: "少数派",
          name: "sspai",
          order: 1,
          show: true,
        },
        {
          label: "微信读书",
          name: "weread",
          order: 2,
          show: true,
        },
        {
          label: "豆瓣电影",
          name: "douban-movie",
          order: 3,
          show: true,
        },
        {
          label: "历史今日",
          name: "history",
          order: 4,
          show: true,
        },
        {
          label: "知乎",
          name: "zhihu",
          order: 5,
          show: true,
        },
        {
          label: "哔哩哔哩",
          name: "bilibili",
          order: 6,
          show: true,
        },
        {
          label: "NGA",
          name: "ngabbs",
          order: 7,
          show: true,
        },
        {
          label: "知乎日报",
          name: "zhihu-daily",
          order: 8,
          show: true,
        },
        {
          label: "稀土掘金",
          name: "juejin",
          order: 9,
          show: true,
        },
        {
          label: "IT之家",
          name: "ithome",
          order: 10,
          show: true,
        },
        {
          label: "36氪",
          name: "36kr",
          order: 11,
          show: true,
        },
        {
          label: "澎湃新闻",
          name: "thepaper",
          order: 12,
          show: true,
        },
        {
          label: "腾讯新闻",
          name: "qq-news",
          order: 13,
          show: true,
        },
        {
          label: "网易新闻",
          name: "netease-news",
          order: 14,
          show: true,
        },
        {
          label: "今日头条",
          name: "toutiao",
          order: 15,
          show: true,
        },
        {
          label: "今日喜加一",
          name: "ithome-xijiayi",
          order: 16,
          show: true,
        },
        {
          label: "爱范儿",
          name: "ifanr",
          order: 17,
          show: true,
        },
        {
          label: "酷安",
          name: "coolapk",
          order: 18,
          show: true,
        },
        {
          label: "气象预警",
          name: "weatheralarm",
          order: 19,
          show: true,
        },
        {
          label: "豆瓣讨论小组",
          name: "douban-group",
          order: 20,
          show: true,
        },
        {
          label: "原神",
          name: "genshin",
          order: 21,
          show: true,
        },
        {
          label: "崩坏：星穹铁道",
          name: "starrail",
          order: 22,
          show: true,
        },
        {
          label: "LOL",
          name: "lol",
          order: 23,
          show: true,
        },
      ],
      newsArr: [],
      // 链接跳转方式
      linkOpenType: "open",
      // 页头固定
      headerFixed: true,
      // 时间数据
      timeData: null,
      // 字体大小
      listFontSize: 16,
    };
  },
  getters: {},
  actions: {
    // 更改系统主题
    setSiteTheme(val) {
      $message.info(`已切换至${val === "dark" ? "深色模式" : "浅色模式"}`, {
        showIcon: false,
      });
      this.siteTheme = val;
      this.siteThemeAuto = false;
    },
    // 检查更新
    checkNewsUpdate() {
      const mainData = JSON.parse(localStorage.getItem("mainData"));
      let updatedNum = 0;
      if (!mainData) return false;
      console.log("列表尝试更新", this.defaultNewsArr, this.newsArr);
      // 执行比较并迁移
      if (this.newsArr.length > 0) {
        for (const newItem of this.defaultNewsArr) {
          const exists = this.newsArr.some(
            (news) => newItem.label === news.label && newItem.name === news.name
          );
          if (!exists) {
            console.log("列表有更新：", newItem);
            updatedNum++;
            this.newsArr.push(newItem);
          }
        }
        if (updatedNum) $message.success(`成功更新 ${updatedNum} 个榜单数据`);
      } else {
        console.log("列表无内容，写入默认");
        this.newsArr = this.defaultNewsArr;
      }
    },
  },
  persist: [
    {
      storage: localStorage,
      paths: [
        "siteTheme",
        "siteThemeAuto",
        "newsArr",
        "linkOpenType",
        "headerFixed",
        "listFontSize",
      ],
    },
  ],
});
