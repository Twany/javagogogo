module.exports = {
    port: "3000",
    dest: "docs",
    ga: "UA-xxxxxxxxxxx-1",
    base: "/",
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank',
            rel: 'noopener noreferrer'
        }
    },
    locales: {
        // 主页描述
        "/": {
            lang: "zh-CN",
            title: "渐悟的备忘录",
            description: "不断成长的知识索引树"
        }
    },
    head: [
        // ico
        ["link", {
            rel: "icon",
            href: `/favicon.ico`
        }],
        // meta
        ["meta", {
            name: "robots",
            content: "all"
        }],
        ["meta", {
            name: "author",
            content: "Twany"
        }],
        ["meta", {
            name: "keywords",
            content: "Java 全栈知识体系, java体系, java知识体系, java框架,java详解,java学习路线,java spring, java面试, 知识体系, java技术体系, java编程, java编程指南,java开发体系, java开发,java教程,java,java数据结构, 算法, 开发基础"
        }],
        ["meta", {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }],
        // baidu statstic
        ["script", {
            src: "https://hm.baidu.com/hm.js?xxxxxxxxxxx"
        }]
    ],
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', {
            selector: 'img',
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
        }],
        [
            'vuepress-plugin-code-copy', true
        ],
        // see: https://vssue.js.org/guide/vuepress.html#usage
        ['@vssue/vuepress-plugin-vssue', {
            // set `platform` rather than `api`
            platform: 'github',
            // all other options of Vssue are allowed
            owner: 'Twany',
            repo: 'tech-arch-doc-comments',
            clientId: 'xxxxxxxxxxx',
            clientSecret: 'xxxxxxxxxxxxxxxxxxxxxx',
        }],
        // see: https://vuepress.github.io/zh/plugins/copyright/#%E5%AE%89%E8%A3%85
        // ['copyright', {
        //     noCopy: false, // 允许复制内容
        //     minLength: 100, // 如果长度超过 100 个字符
        //     authorName: "",
        //     // clipboardComponent: "请注明文章出处, [Java 全栈知识体系]()"
        // }],
        // see: https://github.com/ekoeryanto/vuepress-plugin-sitemap
        ['sitemap', {
            hostname: ''
        }],

        // see: https://github.com/IOriens/vuepress-plugin-baidu-autopush
        ['vuepress-plugin-baidu-autopush', {

        }],
        // see: https://github.com/znicholasbrown/vuepress-plugin-code-copy

        // ...
    ],
    themeConfig: {
        //repo: "realpdai/tech-arch-doc",
        docsRepo: "realpdai/tech-arch-doc",
        //logo: "/logo.png",
        editLinks: true,
        sidebarDepth: 0,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [{
                        text: '计算机基础',
                        items: [{
                                text: '序言',
                                link: '/md/csbasic/preface.md'
                            },
                            {
                                text: '体系结构',
                                items: [{
                                    text: '计算机系统导论',
                                    link: '/md/csbasic/csapp_intro.md'
                                }]
                            },
                            {
                                text: '操作系统',
                                items: [{
                                        text: '操作系统导论',
                                        link: '/md/csbasic/os_intro.md'
                                    },
                                    {
                                        text: 'Linux 0.1.1 架构剖析',
                                        link: '/md/csbasic/linux_0_1_1_analysis.md'
                                    }
                                ]

                            },
                            {
                                text: '计算机网络',
                                items: [{
                                    text: '计算机网络导论',
                                    link: '/md/csbasic/internet_intro.md'
                                }]
                            },
                            {
                                text: '数据库系统',
                                items: [{
                                    text: '数据库导论',
                                    link: '/md/csbasic/database_intro.md'
                                }]
                            },
                        ]
                    },
                    {
                        text: '八股文',
                        link: '/md/java/basic/java-basic'
                    },
                    {
                        text: '项目',
                        link: '/md/project/yxdt'
                    },
                    {
                        text: '面试准备',
                        link: '/md/prepare/cv'
                    },
                    {
                        text: '关于',
                        link: '/md/about/me/about-me'
                    }
                    // md/java/basic/java-basic.md
                ],
                sidebar: {
                    "/md/csbasic/": getSidebar4OsBasic(),
                    "/md/about/": genSidebar4About(),
                    "/md/java/": genSidebar4Java(),
                    "/md/project/": genSidebar4Project(),
                    "/md/prepare/": genSidebar4Prepare(),
                }
            }
        }
    }
};

// 计算机基础
function getSidebar4OsBasic() {
    return ['preface',
    {
        title: "体系结构",
        collapsable: true,
        sidebarDepth: 1,
        children: [
            "csapp_intro"
        ]
        },
        {
            title: "操作系统",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "os/os_intro",
                "os/linux_0_1_1_analysis",
            ]
        },
        {
            title: "计算机网络",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "internet/internet_intro"
            ]
        },
        {
            title: "数据库系统",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "database/database_intro"
            ]
        },
    ]
}
// java
function genSidebar4Java() {
    return [{
            title: "Java",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "java-basic",
                "java-collection",
                "java-concurrent",
                "java-jvm",
                "sourceCode"
            ]
        },
        {
            title: "计算机基础",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "network",
                "os",
                "linux",
                "git"
            ]
        },
        {
            title: "数据库",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "sql",
                "mysql",
                "redis",
            ]
        },
        {
            title: "框架 | 中间件",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "spring",
                "springboot",
                "mybatis",
                "kafka"
            ]
        },
        {
            title: "分布式",
            collapsable: true,
            sidebarDepth: 1,
            children: []
        },
        {
            title: "智力题",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "inteli",
                "scene"
            ]
        },
        {
            title: "系统设计",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "scene",
                "scene"
            ]
        }
    ];
}

// 项目
function genSidebar4Project() {
    return [{
        title: "项目",
        collapsable: false,
        sidebarDepth: 1,
        children: [
            "yxdt",
            "lottery"
        ]
    }];
}

// 面试准备
function genSidebar4Prepare() {
    return [{
        title: "面试准备",
        collapsable: false,
        sidebarDepth: 1,
        children: [
            "cv",
            "interview_experience"
        ]
    }];
}

// About page
function genSidebar4About() {
    return [{
            title: "关于",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "me/about-me.md",
            ]
        },
        {
            title: "关于 - 本文档的搭建",
            collapsable: false,
            sidebarDepth: 0,
            children: []
        }
    ];
}