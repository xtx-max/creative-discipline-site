# 选股雷达

一个独立静态网站，用来做条件选股、候选排序和个股分析拆解。

当前版本内置示例股票数据，适合验证产品界面和筛选逻辑；真实使用前需要接入行情、财报、公告、新闻和数据更新时间。

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

## 功能

- 市场、行业、综合分、动量、质量、估值风险、回撤风险等条件筛选
- 均衡、成长、质量、防守四类策略预设
- 候选股票排序与前五对比
- 单只股票 70% 量化 + 30% 主观分析
- 风险闸门、反方观点、数据缺口提示
- 一键复制当前个股分析

## 边界

- 不依赖旧项目、旧后端、旧数据库或旧启动脚本。
- 不输出个股买卖建议。
- 当前示例数据不代表实时行情或真实推荐。
- 只用于研究筛选、分析记录和复盘。
