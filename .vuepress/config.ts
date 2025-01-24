import {defineUserConfig} from "vuepress";
import recoTheme from "vuepress-theme-reco";
import {viteBundler} from '@vuepress/bundler-vite'
import {webpackBundler} from '@vuepress/bundler-webpack'

export default defineUserConfig(
    {
        title: "AquaMaster",
        description: "浦东小清华专业团队的博客",
        bundler: viteBundler(),
        // bundler: webpackBundler(),
        theme: recoTheme(
            {
                primaryColor: '#3DE1AD',
                logo: "https://q1.qlogo.cn/g?b=qq&nk=1460811251&s=100",
                author: "ZPlus",
                authorAvatar: "/tx.jpg",
                docsRepo: "https://github.com/SSPUAquaMaster/blog",
                docsBranch: "main",
                docsDir: ".",
                lastUpdatedText: "",
                // series 为原 sidebar
                series: {
                    // "/docs/theme-reco/": [
                    //     {
                    //         text: "module one",
                    //         children: ["home", "theme"],
                    //     },
                    //     {
                    //         text: "module two",
                    //         children: ["api", "plugin"],
                    //     },
                    // ],
                },
                navbar: [
                    {
                        text: "主页",
                        icon: "Home",
                        link: "/"
                    },
                    {
                        text: "博客",
                        icon: "Blog",
                        link: "/blogs"
                    },
                    {
                        text: "文档",
                        icon: "Document",
                        children: [
                            {
                                text: "暂无",
                                link: "#"
                            },
                        ],
                    },
                    {
                        text: "类别",
                        icon: "CollapseCategories",
                        children: [
                            {
                                text: "原创",
                                link: "/tags/yuanchuang/1.html"
                            },
                            {
                                text: "编程",
                                link: "/categories/biancheng/1.html"
                            },
                            {
                                text: "教学",
                                link: "/categories/jiaoxue/1.html"
                            },
                            {
                                text: "进度",
                                link: "/categories/jindu/1.html"
                            },
                        ]
                    },
                    {
                        text: "标签",
                        icon: "Tag",
                        children: [
                            {
                                text: "原创",
                                link: "/tags/yuanchuang/1.html"
                            },
                            {
                                text: "编程",
                                link: "/tags/biancheng/1.html"
                            },
                            {
                                text: "教学",
                                link: "/tags/jiaoxue/1.html"
                            },
                            {
                                text: "进度",
                                link: "/tags/jindu/1.html"
                            },
                        ]
                    },
                ],
                bulletin: {
                    title: "公告",
                    body: [
                        {
                            type: "text",
                            content: `🎉🎉🎉 官博上线啦！！！皆大欢喜！皆大欢喜！！！`,
                            style: "font-size: 16px;",
                        },
                        {
                            type: "hr",
                        },
                        {
                            type: "text",
                            content: `在这里，我们将会分享各种各样的知识`,
                            style: "font-size: 15px;",
                        },
                        {
                            type: "hr",
                        },
                        {
                            type: "title",
                            content: "社交链接",
                        },
                        {
                            type: "text",
                            content: `
                            <ul>
                                <li>
                                    <a href="https://github.com/SSPUAquaMaster">
                                        GitHub
                                    <a/>
                                </li>
                                <li>
                                    <a href="https://twitter.com/">
                                        X
                                    <a/>
                                </li>
                                <li>
                                    <a href="https://t.me/">
                                        Telegram
                                    <a/>
                                </li>
                            </ul>`,
                            style: "font-size: 12px;",
                        },
                        {
                            type: "hr",
                        },
                        {
                            type: "title",
                            content: "邮箱",
                        },
                        {
                            type: "text",
                            content: `
                            <ul>
                                <li>
                                    SSPUAquaMaster@gmail.com
                                </li>
                            </ul>`,
                            style: "font-size: 12px;",
                        },
                        {
                            type: "hr",
                        },
                        {
                            type: "buttongroup",
                            children: [
                                {
                                    text: "点赞",
                                    link: "#",
                                    style: "font-size: 16px",
                                },
                            ],
                        },
                    ],
                },
                // commentConfig: {
                //     // type: 'valine',
                //     // // options 与 1.x 的 valineConfig 配置一致
                //     // options: {
                //     //     appId: 'xxx',
                //     //     appKey: 'xxx',
                //     //     placeholder: '你有什么想说的吗',
                //     //     // verify: true, // 验证码服务
                //     //     // notify: true,
                //     //     recordIP: true,
                //     //     hideComments: true // 隐藏评论
                //     // },
                // },
            }
        ),
        // debug: true,
    }
);
