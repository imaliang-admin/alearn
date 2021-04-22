const moment = require('moment-timezone');

module.exports = {
    title: "alearn",
    description: "一个Java方向的编程知识整理平台",
    head: [
        ["link", {rel: "icon", href: `/favicon.ico`}],
        ['meta', {name: 'keywords', content: 'alearn,aliang,java,springboot,springcloud,编程,知识整理'}],
        ["script", { type: "text/javascript", src: "/js/baidutongji.js" }],
    ],
    base: "/",
    markdown: {
        lineNumbers: true,
    },
    theme: "antdocs",
    themeConfig: {
        nav: require("./config/nav"),
        sidebar: require("./config/sidebar"),
        lastUpdated: "最后更新于 ",
        smoothScroll: true,
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/imaliang/alearn',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'github',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://github.com/imaliang/alearn',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我完善此页面！',
        locales: {
            // 键名是该语言所属的子路径
            // 作为特例，默认语言可以使用 '/' 作为其路径。
            '/': {
                lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
                title: 'alearn',
                description: '一个Java方向的编程知识整理平台'
            }
        }
    },
    plugins: [
        "@vuepress/back-to-top",
        "@vuepress/nprogress",
        ["@vuepress/medium-zoom", true],
        "@vuepress/active-header-links",
        "@vuepress/plugin-nprogress",
        ["@mr-hope/copy-code", {
            selector: 'div[class*="language-"] pre',
            duration: 2000,
            showInMobile: false
        }],
        ["@vuepress/last-updated", {
            transformer: (timestamp, lang) => {
                return moment(timestamp).tz('Asia/Shanghai').locale(lang).format('yyyy-MM-DD HH:mm:ss')
            }
        }]
    ],
    extendMarkdown: (md) => {
        md.use(require("markdown-it-mark"));
    },
};
