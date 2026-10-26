# Claude 中文阅读库

把 Claude 官方博客（[claude.dev](https://claude.dev/blog/)）里值得反复读的文章译成中文，按原文排版重排后放在这里。

- 首页：`index.html`（文章列表）
- 文章：`posts/<slug>.html`，每篇都是**单文件自包含**（图、表、字体栈、暗色模式都在里面，无外部依赖）
- 无需构建：改完 push，GitHub Pages 自动生效

## 加一篇新文章

1. 把排版好的 HTML 放进 `posts/`，命名用英文 slug，例如 `posts/agent-evals.html`
2. 打开 `index.html`，复制 `<section class="cards">` 里的整段 `<a class="card">`，改掉：
   - `href="posts/xxx.html"`
   - 日期 / 分类 / 阅读时长 / 来源
   - 标题、摘要、标签
3. 如果还留了 Markdown 源文件，一起放进 `posts/`，把正文顶部「阅读带图版」的链接指向同目录的 html

## 翻译约定

- 术语保留英文：pull request / PR、diff、agent、subagent、skill、lint、commit、main、flag、on-call、eval
- 图表用**内联 SVG**，文字直接译在图里，颜色用 CSS 变量，跟随深浅色切换
- 每篇顶部保留原文链接、作者、发布日期、阅读时长
- 长句按中文语序重写，不逐词直译

## 版权

译文非官方，版权归原作者与 Anthropic 所有；每篇均标注原文出处并附链接。如原作者要求，会立即撤下对应内容。
