# ⛩️ 2026夏季博丽灵梦24H接力 · React 画廊

基于 **Vite + React 18 + Ant Design** 的工程化项目，浅色/深色双主题画廊，**完全自包含**（素材、数据、样式全部在项目内），可直接部署到服务器。

## 快速开始

```bash
npm install     # 安装依赖（含 antd，需联网；若提示 npm.ps1 执行策略，改用 npm.cmd）
npm run dev     # 启动开发服务器 → http://localhost:5173
```

> ⚠️ 依赖 antd（Divider 分割线 / Switch 主题切换），`npm install` 时自动安装。

## 项目结构

```
workplace2/
├── img/                       # 素材源（原图，不压缩）
│   ├── *.jpg|png              # 各棒作品原图（（封面）=视频封面）
│   ├── thumbs/*.thumb.jpg     # 卡片缩略图
│   └── 寄语/*.txt             # 各棒寄语（<title"…"/title> 标记标题）
├── 灵梦接力信息.md            # 棒次信息源（已整合进项目）
├── scripts/
│   ├── sync-assets.mjs        # 图片同步脚本（img/ → public/img/，硬链接）
│   └── generate-data.ps1      # 数据生成脚本（扫描 img/ + md → src/data/generated/）
├── public/img/                # 同步后的图片（自动生成）
└── src/
    ├── App.jsx                # 根组件：主题切换（antd Switch）/ 樱花/星光装饰
    ├── index.css              # 双主题变量 + 移动端适配
    ├── data/generated/        # 生成的 ES 模块数据
    └── components/            # Header / Toolbar / PromoSection / Gallery /
                               # SectionBlock / WorkCard / Carousel / DetailOverlay
```

## 主题与设计

- **主题切换**：右上角 antd `Switch`（☀️/🌙），浅色=樱花飘落背景，深色=星空闪烁背景，选择持久化到 localStorage
- **分割线**：栏目之间使用 antd `Divider` 分隔
- **移动端**：≤640px 时详情页全屏（100dvh）、双列网格、控件缩小适配

## 数据更新流程（自包含）

1. 新素材放入 `img/`（缩略图放 `img/thumbs/`，寄语放 `img/寄语/`）
2. 运行 `powershell -ExecutionPolicy Bypass -File scripts\generate-data.ps1` 重新生成数据
3. 图片同步在 `npm run dev/build` 时自动执行（`scripts/sync-assets.mjs`）

## 部署到服务器

```bash
npm run build      # 产物在 dist/（public/img 会包含全部原图）
```

将 `dist/` 目录上传到服务器（Nginx 静态托管 / 任意静态服务器均可）：

```nginx
# Nginx 示例
server {
  listen 80;
  server_name your.domain;
  root /var/www/lm24h/dist;
  location / { try_files $uri $uri/ /index.html; }
}
```

> 图片未压缩（约 700MB），如需减小部署体积，可只上传需要的部分或自行压缩 `img/` 源文件。

## 常用命令
| 命令 | 说明 |
|---|---|
| `npm run dev` | 开发服务器（热更新） |
| `npm run build` | 打包到 dist/（部署用） |
| `npm run preview` | 预览打包产物 |
| `node scripts/sync-assets.mjs` | 手动同步图片 |
| `powershell -File scripts\generate-data.ps1` | 手动重新生成数据 |
