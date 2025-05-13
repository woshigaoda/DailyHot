<div align="center">
  <img alt="logo" height="120" src="./public/favicon.png" width="120"/>
  <h2>今日热榜</h2>
  <p>汇聚全网热点，热门尽览无余</p>
  <br />
  <img src="./screenshots/main.jpg" style="border-radius: 16px" />
</div>
<!-- by 黄祥宝 -->
# 今日热榜项目介绍

## 网址
[https://hot.imsyy.top/](https://hot.imsyy.top/)

## 项目概述
今日热榜是一个实时更新的热门话题聚合平台，汇集了全网各大平台的热点新闻和话题。该项目旨在为用户提供一个全面、及时的热点信息来源，帮助用户快速了解当前最热门的事件和讨论。

## 平台特点
- **多平台覆盖**：涵盖微博、抖音、知乎、哔哩哔哩、36氪等多个知名平台。
- **实时更新**：每24分钟自动更新一次，确保信息的时效性。
- **分类清晰**：按照不同的平台和类别进行分类，方便用户查找感兴趣的内容。

## 主要内容板块
### 哔哩哔哩
- 全球第一网红 vs 中国零食！给MrBeast，亿点点中国震撼！
- 富士回应一张撕拉片被炒至300多元
- 从莫斯科科看到更大的世界

### 微博
- 比尔盖茨宣布将捐出几乎全部财富
- 富士回应一张撕拉片被炒至300多元
- 盘宝兔单狼人杀

### 抖音
- 油价或将重回6元时代
- 英美就关税贸易协议条款达成一致
- 胜利日阅兵的四个历史密码

### 知乎
- 生活总会遇到不如意的事情
- 坚决拒绝美方指责抹黑
- 赵心童：天才的迷失与重生

### 36氪
- 8点1氪 | 理想汽车回应网传李想年薪6.39亿；公积金贷款利率降0.25个百分点；茅台文旅官宣代言人张艺兴
- 首台鸿蒙电脑评测首发：满眼都是鸿蒙，3000款应用够了吗？
- SKP的惊人收入为何换不来资本信心？

### 百度
- 耿爽这段话的含金量还在飙升
- 特大暴雨要来了
- Citywalk带你探索莫斯科

### 少数派
- 十年陪伴，腕上守护：Apple Watch 的健康故事
- 本周看什么 | 最近值得一看的 9 部作品
- 本周看什么 | 最近值得一看的 9 部作品

### IT之家
- 小米就 SU7 Ultra 破纤维双风道前舱盖争议致歉，未交付订单限时改回铝制前舱盖
- 华为首款鸿蒙电脑正式亮相
- 吉利汽车：建议私有化极氪

### 澎湃新闻
- 习近平同俄罗斯总统普京会谈
- 商务部再回应中美经贸高层会谈：美方要拿出诚意、拿出行动
- 圆桌 | 中俄权威专家详解双边关系：在新形势下共同应对挑战，共创发展机遇

### 今日头条
- 印度巴格利哈尔水电站重新开闸
- 女子没有爸妈被指责 丈夫抱走孩子
- 为什么这一纪念不能忘却

### 百度贴吧
- 印巴上百架战机在空中激战数小时
- 韩棋院自嗨为柯洁事件改规则
- 369越来越会拉扯了

### 稀土掘金
- 尤雨溪宣布：Vue 生态正式引入 AI！重磅福利：Cursor 向学生免费开放一年！
- 被问tsconfig.json 和 tsconfig.node.json 有什么作用，我懵了……
- 这种小工具居然也能在某鱼卖钱？我用Python一天能写100个+纯白！

### 腾讯新闻
- 见证历史与未来，一对跨越十年的关键握手
- 驻苏丹使馆建议在苏中国公民尽快撤离
- 西安5月突降冰雹，当地居民：骑车的手都被砸红

### 豆瓣电影
- [8.4] 破·地狱
- [6.9] 焚城
- [5.1] 怪兽

### 原神
- 【和旋舞节】活动：参与获得活动专属武器「弓·冷寂进音」
- 【悖理】5.6版本游戏问题集中反馈——5月8日更新
- 【七圣召唤】铸镜研炼：巧策进斗

## 使用说明
用户可以通过访问 [https://hot.imsyy.top/](https://hot.imsyy.top/) 查看各个平台的最新热门话题和新闻。页面每24分钟自动更新一次，确保用户获取到最新的信息。用户可以根据自己的兴趣选择不同的平台和类别进行浏览。

## 注意事项
部分平台可能会出现加载失败的情况，如图中知乎板块所示，此时可以点击“重试”按钮进行刷新。
<!-- by 黄祥宝 -->

# 项目技术要点

## 1. 前端框架与库
- **Vue.js**：根据提供的 GitHub 仓库信息，该网站使用 Vue.js 作为主要的前端框架。
- **Vite**：用于开发和构建工具，提供快速的热更新（HMR）和优化的构建输出。

## 2. HTTPS 安全传输与 SSL 证书管理
- **自动SSL证书**：Vercel 自动为所有自定义域名提供免费的 SSL 证书，简化了 HTTPS 的设置过程。
- **强制HTTPS重定向**：可以通过 Vercel 的 `vercel.json` 配置文件轻松实现 HTTP 到 HTTPS 的强制重定向。

## 3. 前端性能优化与资源管理
- **CDN 加速**：Vercel 自带全球 CDN，能够自动分发静态资源，减少加载时间并提高用户体验。
- **缓存策略**：
  - 使用 `Cache-Control` 和 `ETag` 标头来控制浏览器缓存。
  - 可以利用 Vercel 的边缘网络缓存功能进一步优化静态资源的加载速度。
- **图片懒加载**：通过 HTML5 的 `loading="lazy"` 属性实现图片懒加载，减少首屏加载时间。

## 4. 后端架构与实时通信
- **API 调用**：尽管 Vercel 主要用于前端部署，但也可以集成 API 网关或无服务器函数（如 AWS Lambda 或 Vercel 自己的 Serverless Functions），以处理动态数据请求。
- **WebSocket 支持**：如果需要 WebSocket 支持，通常需要额外的服务（如 Upstash Redis 或第三方服务），因为 Vercel 默认不直接支持 WebSocket。

## 5. 开发调试与安全防护
- **开发环境**：使用 Vite 提供的开发服务器进行本地开发，可以快速迭代和测试新功能。
- **安全性增强**：通过 Vercel 的内置安全特性（如自动 HTTPS 和 DDoS 保护），以及前端代码中的输入验证和 Token 验证机制来保障应用的安全性。

## 6. 服务器运维与监控
- **Vercel Dashboard**：提供详细的部署日志、性能指标和错误跟踪，帮助开发者监控应用状态。
- **无缝扩展**：得益于 Vercel 的无服务器架构，应用可以根据流量自动扩展，无需手动干预。
<!-- by 黄祥宝 -->

<!-- by 梁展毓 -->
## 部署

```bash
# 安装依赖
pnpm install

# 开发
pnpm dev

# 打包
pnpm build
方法一：使用 npm 安装 pnpm（推荐）
如果你已经安装了 Node.js（附带了 npm），可以通过以下命令安装 pnpm：

bash
npm install -g pnpm

安装完成后，重新运行：

bash
pnpm install
方法二：通过 Corepack 使用 pnpm（适用于 Node 16+）
启用 Corepack：

bash
corepack enable

然后尝试再次安装依赖：

bash
pnpm install

如果提示 corepack 不可用，请先更新 Node.js 到 v16 或更高版本。
方法三：检查是否真的安装了 pnpm
安装完 pnpm 后，你可以通过下面命令验证是否安装成功：

bash
pnpm --version

如果有输出版本号，说明安装成功。
部署过程中可能会遇到的问题与解决方法
问题 1：pnpm 命令未找到 / 不是内部或外部命令
原因分析：

pnpm 没有正确安装。
安装后没有加入系统环境变量。
使用了错误的命令行工具（如 cmd、PowerShell、bash 等路径不同）。

解决步骤：

确认是否已全局安装 pnpm：

bash
pnpm --version

如果提示命令不存在，请重新安装：

bash
npm install -g pnpm

检查 Node.js 和 npm 是否安装：

bash
node --version
npm --version

若未安装，请前往 Node.js 官网 下载并安装 LTS 版本。

对于 Windows 系统，确保安装时勾选了 “将 Node.js 添加到系统路径” 选项。或者手动将 C:\Users\用户名\AppData\Roaming\npm 加入系统环境变量 PATH。

尝试使用 npx pnpm（不推荐长期使用）：

bash
npx pnpm install
问题 2：corepack enable 提示找不到命令
原因分析：

当前使用的 Node.js 版本低于 v16，而 Corepack 是从 Node.js v16 开始引入的功能。

解决步骤：

检查 Node.js 版本：

bash
node --version


如果版本低于 v16.x，请升级 Node.js 到最新 LTS 版本。

升级 Node.js 推荐使用 nvm（Windows）或 nvm.sh（macOS/Linux）管理多个 Node.js 版本。或者卸载旧版本，前往官网下载安装新版本。

启用 Corepack：

bash
corepack enable

Vercel 部署
现已支持 Vercel 一键部署无需服务器。

请注意，需要修改环境变量中的 API 地址。

Powered by Vercel

<!-- by 梁展毓 -->


## 开发指南

### 代码结构说明

以下是项目目录结构及各个文件夹/文件的作用说明：

# 项目结构

项目根目录

- public
  - favicon.png      # 网站图标，显示在浏览器标签页中。
  - index.html       # 主 HTML 文件，作为应用程序的入口点。
  - 其他静态资源/     # 不需要处理的静态资源（如图片、图标）。

- src
  - assets        # 存放静态资源，如图片、字体和样式表。
  - components    # 可复用的 Vue.js 组件。
    - Header.vue   # 头部组件，处理顶部导航栏。
    - Footer.vue   # 底部组件，显示页面底部内容。
    - ...          # 其他共享组件。
  - views         # 包含显示给用户的主要页面。
    - Home.vue     # 主页面视图。
    - Topic.vue    # 显示特定平台热点话题的页面。
    - ...          # 其他页面视图。
  - services      # 用于处理后端通信的 API 服务文件。
    - api.js       # 包含 HTTP 请求逻辑，用于从服务器获取数据。
    - utils.js     # API 响应处理的工具函数。
  - App.vue          # 根 Vue.js 组件，作为应用程序的入口点。
  - main.js          # 主 JavaScript 文件，初始化 Vue 应用。
  - router.js        # 处理应用的路由和页面导航。

- tests             # 包含项目的单元测试和集成测试。
  - components/      # 针对单个组件的测试。
  - views/           # 针对主要页面的测试。
  - ...              # 其他测试文件。

- .github           # GitHub 配置文件。
  - ISSUE_TEMPLATE/  # GitHub 问题模板。
  - workflows/       # CI/CD 自动化测试和部署的工作流。
  - ...              # 其他 GitHub 相关文件。

- package.json         # 项目元数据和依赖管理。
- pnpm-lock.yaml       # 锁定文件，确保依赖版本一致。
- README.md            # 项目的主要文档。

此结构保证了关注点的分离，使项目更易于维护和扩展。
<!-- by 沈家昊 -->


<!-- by 程俊豪 -->
# 今日热榜用户指南（User Guide）

## 一、功能模块说明（Feature Modules）

### 1. 多源内容聚合（Multi-source Content Aggregation）

系统集成了多个主流平台的实时热点数据，利用后端爬虫调度系统（crawler scheduler）定时抓取并缓存内容，前端通过统一接口（RESTful API）加载并展示。当前支持的数据源包括但不限于：

- 哔哩哔哩（Bilibili）：视频热评、播放量排行；
- 微博（Weibo）：热搜词条及热度趋势；
- 抖音（Douyin）：短视频话题热度；
- 知乎（Zhihu）：高热度问答（支持异常状态反馈）；
- 其他平台：如百度热搜、36氪快讯、小红书笔记、IT之家快报、少数派推荐等。

### 2. 动态数据更新机制（Live Refresh Logic）


各数据模块底部显示“最近更新时间”，用于标示数据抓取的最近时间点。数据通过自动刷新与手动刷新并行控制：

- 后端定时任务（cron job）默认每隔10分钟更新一次缓存；
- 前端可通过刷新按钮（Refresh Trigger）手动发起 HTTP 请求，强制更新 UI。

### 3. 用户交互与系统控件（UI Controls）

- 刷新按钮（Manual Refresh）：立即发起前端请求并刷新全部模块数据；
- 主题切换（Theme Toggle）：切换深色模式与浅色模式，存储用户偏好至本地存储（localStorage）；
- 设置按钮（Settings Panel）：打开配置界面，可自定义是否显示各平台模块；
- 重试机制（Retry Mechanism）：若某模块 API 响应失败，将进入错误状态，点击“重试”按钮触发重新请求逻辑。

## 二、常见问题解答（FAQ）

### Q1：为何某些模块显示“加载失败”？
答：可能原因包括：

- 目标平台接口结构发生变动（HTML/JSON格式变更）；
- 当前网络异常导致请求超时或DNS错误；
- 目标域名被限制访问。

建议：

- 检查网络环境；
- 点击模块内“重试”按钮；
- 若仍无法加载，请查看浏览器控制台日志（F12）并反馈具体错误。

### Q2：热榜长时间未更新，如何排查？

答：

- 检查是否开启了浏览器缓存机制（推荐使用Ctrl+F5强制刷新）；
- 若服务端缓存时间未到，则数据为旧内容；
- 可在设置中启用“开发者模式”，显示每个模块的原始API响应时间戳。

### Q3：为何时间显示不准确？

答：客户端时间戳基于本地浏览器 Date.now() 计算，若设备系统时间有误，会导致“xx分钟前”提示不准确。建议同步系统时间。

### Q4：是否支持点击热词跳转原文？

答：目前支持部分平台热词跳转（如微博、知乎），需在设置中启用“链接跳转”选项，未开放跳转的平台受限于源站反爬限制或数据结构不完整。

## 三、使用建议与最佳实践（Best Practices）

建议每日定时查看热榜，特别是在早高峰（7–9点）与午间（12–13点）期间，获取最新内容趋势；

若某模块频繁异常加载失败，可在设置中临时禁用该模块，提高加载性能；

建议使用现代浏览器（Chrome 90+ / Edge / Firefox）访问本页面，避免兼容性问题；

如需嵌入其他平台，可将本网页封装为 iFrame 或构建组件化模块进行二次开发；

鼓励通过“设置-反馈”模块提交问题报告与功能建议，以帮助系统持续优化。

<!-- by 程俊豪 -->


<!-- by李如欣-->
## 主要功能

- **全网热点聚合**  
  DailyHot 能够追踪并整合来自多个热门网站的热门内容，用户无需逐个访问不同平台即可掌握全网热点。

- **多平台支持**  
  支持多种内容来源，包括但不限于 51CTO 等专业网站，用户可以通过输入类似 `http://群晖IP:6688/51cto` 的 URL 直接获取特定平台的热榜数据。

- **RSS 订阅功能**  
  用户可以通过添加 `?rss=true` 参数获取 RSS 格式的数据，方便在 RSS 阅读器中订阅关注的热点内容。

- **简洁直观的界面**  
  前端页面设计简洁，分类清晰，用户可以快速浏览不同类别的热门内容。

---

## 技术特点

- **快速响应的 API**  
  后端 API 设计注重性能，响应速度快，便于开发者集成使用。

- **灵活的部署方式**  
  支持多种部署方案，包括 Docker 容器化部署，用户可以选择在 Synology NAS 等设备上自行搭建。

- **环境变量配置**  
  通过环境变量可以灵活配置 API 地址和 ICP 备案信息等参数。

- **前后端分离架构**  
  项目采用前后端分离的设计，前端项目可以通过 Vercel 实现无服务器部署，后端则提供 Docker 镜像。

---

## 使用体验

- **跨设备适配**  
  平台在手机和电脑上都有良好的显示效果，响应式设计确保在不同设备上都能获得良好的浏览体验。

- **无广告干扰**  
  相比一些广告较多的平台，DailyHot 提供了清爽的浏览体验。

- **实时更新**  
  热点内容保持实时更新，用户可以及时获取最新的热门资讯。

---

## 部署选项

对于希望自行部署的用户，DailyHot 提供了完整的部署指南：

- **后端部署**  
  可以通过 Docker 快速部署 API 服务，使用镜像 `imsyy/dailyhot-api`。

- **前端部署**  
  官方虽未提供前端镜像，但用户可以参考项目文档通过 Vercel 或自定义 Dockerfile 进行部署。

- **Docker Compose 一键部署**  
  项目提供了 `docker-compose.yml` 示例，方便用户快速搭建完整环境。

---

## 开源与扩展

DailyHot 作为一个开源项目，其代码托管在 GitHub 上，开发者可以根据需要进行二次开发或功能扩展。对于希望掌握全网热点但又不想被算法推荐内容淹没的用户来说，DailyHot 提供了一个简洁高效的解决方案。
<!-- by李如欣-->

<!-- 廖天宇 -->
# DailyHot 安全与隐私架构方案

## 综合安全防御体系

### 1. 多层级XSS防御矩阵

#### 输入层防护
- 内容来源HMAC签名验证机制
- 基于TensorFlow.js的机器学习内容威胁评分系统

#### 处理层净化
```javascript
// 多阶段内容净化流程
const purifiedContent = DOMPurify.sanitize(
  unescapeHtml(
    decodeURIComponent(rawContent)
  ), 
  {
    SANITIZE_DOM: false,   // 禁用DOM节点净化
    RETURN_TRUSTED_TYPE: true  // 返回可信类型对象
  }
);
输出层控制

# 动态内容安全策略配置
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'wasm-unsafe-eval' 'strict-dynamic' 'nonce-{随机值}';
  style-src 'self' 'unsafe-inline';
  object-src 'none';
  base-uri 'none';
  require-trusted-types-for 'script'
2. 高级CSRF防护框架
双重令牌体系：

静态Token（页面Meta标签嵌入）
动态JWT令牌（每次请求刷新）

// 增强同源策略配置
app.use(helmet({
  crossOriginEmbedderPolicy: true,         // 跨域嵌入策略
  crossOriginOpenerPolicy: "same-origin", // 窗口打开限制
  crossOriginResourcePolicy: "same-site"  // 资源加载限制
}));
3. 依赖安全治理
生命周期阶段	安全措施	工具链
采购阶段	SBOM生成/许可证扫描	syft+FOSSA
构建阶段	容器签名/不可变构建	cosign+Bazel
运行时阶段	行为监控/内存保护	eBPF+NX技术
4. API安全网关
用户请求 → Cloudflare WAF → Kong网关(JWT验证) → 业务逻辑

↓

OPA策略引擎

基于OpenAPI规范的请求体校验

三维度速率限制（用户/IP/端点）

隐私增强实施方案
1. 数据最小化架构

# 差分隐私数据处理
from pydifferential_privacy import LaplaceMechanism

def process_data():
    raw = collect_metrics()
    return LaplaceMechanism(raw, epsilon=0.5)  # ε=0.5隐私预算
2. GDPR合规自动化

# 数据流映射示例
data_flow:
  - 数据源: 用户注册
    处理方: [分析服务, CRM]
    法律依据: 明确授权
    存储期限: 180天
    跨境传输: [AWS法兰克福]
实施路线图
阶段	时间线	里程碑	关键指标
基础加固	第1-2周	CSP部署完成	XSS攻击拦截率≥99%
增强防护	第3-4周	API网关上线	CSRF攻击防御成功率100%
隐私工程	第5-6周	DSAR门户交付	GDPR请求响应时间<24h
高级保护	第7-8周	TEE环境部署	数据泄露事件0起
最佳实践建议：

采用蓝绿部署模式逐步上线
每阶段进行红队渗透测试
建立安全冠军(Security Champion)制度
自动化安全测试覆盖率需≥80%
技术栈说明
前端安全：Trusted Types + CSP Level 3
后端安全：JWT+HMAC双因素认证
隐私计算：微软SEAL同态加密库
合规审计：OneTrust自动化评估平台
<!-- 廖天宇 -->
