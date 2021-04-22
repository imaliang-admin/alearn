const moment = require('moment-timezone');

module.exports = {
    title: "alearn",
    description: "一个Java方向的编程知识整理平台",
    head: [
        ['meta', {name: 'keywords', content: 'alearn,aliang,java,springboot,springcloud,编程,知识整理'}]
    ],
    base: "/",
    markdown: {
        lineNumbers: true,
    },
    theme: "antdocs",
    themeConfig: {
        nav: [
            {
                text: "Java",
                link: "/java/",
            },
            {
                text: "线程",
                link: "/thread/",
            },
            // {
            //     text: "中间件",
            //     link: "/middleware/",
            // },
            // {
            //     text: "SpringBoot",
            //     link: "/springboot/",
            // },
            // {
            //     text: "SpringCloud",
            //     link: "/springcloud/",
            // },
            {
                text: "个人博客",
                link: "https://www.aliang.link/",
            },
            {
                text: "GitHub",
                link: "https://github.com/imaliang/alearn",
            },
        ],
        sidebar: {
            "/java": [
                "/java/",
                "/document/installation",
                {
                    title: "开始",
                    collapsable: true,
                    children: [
                        "/document/creating-project",
                        "/document/cli-service"
                    ],
                },
            ],
            "/thread": [
                {
                    title: "配置指南",
                },
            ],
        },
        lastUpdated: "上次编辑于 ",
        smoothScroll: true,
        repo: "https://github.com/imaliang/alearn",
        repoLabel: "查看源码",
        docsDir: "docs",
        docsBranch: "master",
        editLinks: true,
        editLinkText: "在 GitHub 上编辑此页",
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
