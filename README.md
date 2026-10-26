# Claude 中文阅读库

把 Claude 官方博客（[claude.dev](https://claude.dev/blog/)）里值得反复读的文章译成中文，按原文排版重排后发布。

站点：<https://yueningbo.github.io/claude-zh-blog/>

## 技术栈

Jekyll（GitHub Pages 原生构建，无需 CI）：

```
_config.yml          站点配置 / 永久链接 / 插件
_layouts/
  default.html       外壳：导航、深浅色按钮、页脚
  post.html          文章：目录、标题区、原文链接、上下篇
_includes/head.html  <head>（SEO、RSS、主题预加载）
_posts/              文章（HTML 正文 + YAML front matter）
assets/css/site.css  全站样式（设计 token + 排版 + 列表页）
assets/js/site.js    深浅色、阅读进度、目录生成与高亮
index.html           首页：按时间倒序列出文章
tags.html            标签聚合页
404.html             404
feed.xml             由 jekyll-feed 自动生成
```

## 写一篇新文章

1. 在 `_posts/` 新建 `YYYY-MM-DD-slug.html`，开头写 front matter：

   ```yaml
   ---
   layout: post
   title: "文章标题"
   date: 2026-10-15 09:00:00 +0800
   category: 工程
   category_en: Engineering
   authors: 原作者1、原作者2
   read_time: 14
   source: https://claude.dev/blog/xxx/
   source_name: claude.dev
   summary: 首页卡片上的一句话摘要。
   tags: [AI 编码, 工程实践]
   ---
   ```

2. 正文直接写 HTML（沿用现有文章的 class）：`<div class="lede">` 导语、`<h2 id="...">` 分节、`<figure class="art">` 配图。
3. 目录会自动从 `h2[id]` 生成，不用手写。
4. 本地预览：

   ```bash
   gem install jekyll jekyll-feed jekyll-sitemap   # 只需一次
   jekyll serve --baseurl ""
   ```

   线上把 `baseurl` 设为 `/claude-zh-blog`（已在 `_config.yml` 固定），别改。
5. `git push` 后约一分钟 GitHub Pages 自动构建。

## 翻译约定

- 术语保留英文：pull request / PR、diff、agent、subagent、skill、lint、commit、main、flag、on-call、eval
- 配图用**内联 SVG**：文字直接译在图里，颜色走 CSS 变量，跟随深浅色切换
- 每篇保留原文链接、作者、发布日期、阅读时长
- 长句按中文语序重写，不做逐词直译

## 版权

译文非官方，版权归原作者与 Anthropic 所有；每篇均标注原文出处并附链接。如原作者要求，会立即撤下对应内容。
