# 阅读与写作

一个个人博客：**收录**值得反复读的文章，也**写**自己的东西。

站点：<https://yueningbo.github.io/blog/>

- 收录：整理成中文，按原文排版重排，图表/链接完整，标明出处与原作者
- 原创：自己写的，长短不定

## 技术栈

Jekyll，GitHub Pages 原生构建，零 CI：

```
_config.yml            站名 / 地址 / 永久链接 / 插件
_layouts/
  default.html         外壳：导航、深浅色、页脚
  post.html            文章：自动目录、类型徽标、原文链接、上下篇
_includes/head.html    <head>：SEO、RSS、主题预加载
_posts/                文章（HTML 正文 + YAML front matter）
assets/css/site.css    全站样式（设计 token + 排版 + 列表页）
assets/js/site.js      深浅色 / 阅读进度 / 目录 / 首页筛选
index.html             首页：全部 + 原创/收录 筛选
tags.html              标签聚合
about.html             关于
404.html               404
feed.xml               jekyll-feed 自动生成
```

## 写一篇

新建 `_posts/YYYY-MM-DD-slug.html`。

**原创**：

```yaml
---
layout: post
kind: original
title: "标题"
date: 2026-11-02 10:00:00 +0800
category: 随笔
read_time: 6
summary: 首页卡片上的一句话摘要。
tags: [随笔, 工作方法]
---
```

**收录（译文/整理）**：多写三个字段，标题区会自动带上原作者与原文链接。

```yaml
---
layout: post
kind: translation
title: "文章标题"
date: 2026-10-15 09:00:00 +0800
category: 工程
category_en: Engineering
authors: 原作者1、原作者2
read_time: 14
source: https://example.com/xxx/
source_name: example.com
summary: 一句话摘要。
tags: [AI 编码, 工程实践]
---
```

正文直接用 HTML，沿用现有 class：

- `<div class="lede">` 导语
- `<h2 id="...">` 分节（目录自动从 `h2[id]` 生成，不用手写）
- `<figure class="art">` 配图（内联 SVG，颜色走 CSS 变量）
- `.table-wrap > table` 表格

本地预览：

```bash
gem install jekyll jekyll-feed jekyll-sitemap   # 只需一次
jekyll serve --baseurl ""
```

线上 `baseurl` 固定为 `/blog`（在 `_config.yml`），别改。`git push` 后约一分钟自动生效。

## 约定

- 术语保留英文：pull request / PR、diff、agent、subagent、skill、lint、commit、main、flag、on-call、eval
- 配图用**内联 SVG**，文字直接译在图里，跟随深浅色切换
- 收录文章保留原文链接、作者、发布日期、阅读时长
- 长句按中文语序重写，不做逐词直译

## 版权

收录内容的版权归原作者所有，每篇标注出处并附链接，原作者要求即撤下；原创内容版权归作者本人。
