# 造局台

一个全新的独立静态网站，用来把收藏主题、投资/创作想法和执行纪律转成可复盘的产品蓝图。

## 运行

直接打开：

```text
index.html
```

或在目录内启动任意静态服务器：

```bash
python3 -m http.server 8127
```

本地校验：

```bash
./verify.sh
```

## 上传到 GitHub Pages

这个目录是独立 Git 仓库，网站文件就在仓库根目录。推荐上传方式：

```bash
git remote add origin <你的 GitHub 仓库 URL>
git push -u origin main
```

也可以用仓库内脚本完成校验、绑定远程和推送：

```bash
./push-to-github.sh <你的 GitHub 仓库 URL>
```

推送后，在 GitHub 仓库的 `Settings -> Pages` 中选择：

- Source: `GitHub Actions`

`.github/workflows/pages.yml` 会在 `main` 分支推送后自动发布静态网站。`.nojekyll` 已放在本目录中，避免 GitHub Pages 对静态资源做 Jekyll 处理。

## 边界

- 不依赖旧项目、旧后端、旧数据库或旧启动脚本。
- 不输出个股买卖建议。
- 只用于自用研究、创作判断和复盘记录。
