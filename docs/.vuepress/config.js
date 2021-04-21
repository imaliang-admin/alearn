module.exports = {
    title: "alearn",
    description: "一个Java方向的编程知识整理平台",
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
            {
                text: "中间件",
                link: "/middleware/",
            },
            // {
            //     text: "SpringBoot",
            //     link: "/springboot/",
            // },
            {
                text: "SpringCloud",
                link: "/springcloud/",
            },
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
        lastUpdated: "上次编辑于",
        smoothScroll: true,
        repo: "https://github.com/imaliang/alearn",
        repoLabel: "查看源码",
        docsDir: "docs",
        docsBranch: "master",
        editLinks: true,
        editLinkText: "在 GitHub 上编辑此页",
    },
    plugins: [
        "@vuepress/back-to-top",
        ["@vuepress/medium-zoom", true],
        "@vuepress/active-header-links",
        "@vuepress/last-updated",
        "@vuepress/plugin-nprogress",
    ],
    extendMarkdown: (md) => {
        md.use(require("markdown-it-mark"));
    },
};
