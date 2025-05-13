# 前端开发相关术语

- Vue.js / 渐进式 JavaScript 框架
- Vite / 新一代前端构建工具
- Hot Module Replacement (HMR) / 热模块替换
- HTML5 / 超文本标记语言最新版本
- Lazy Loading / 懒加载 / 延迟加载图片或资源以提升首屏性能
- CDN（Content Delivery Network）/ 内容分发网络
- Cache-Control / HTTP 缓存控制头
- ETag / HTTP 协议中的缓存验证机制
- Edge Network Caching / 边缘网络缓存

# 后端与部署相关术语

- Serverless Functions / 无服务器函数
- API Gateway / API 网关
- WebSocket / 支持客户端与服务器之间全双工通信的协议
- Upstash Redis / 云托管的 Redis 数据库服务
- Reverse Proxy / 反向代理
- HTTPS / 安全的超文本传输协议
- SSL Certificate / SSL 证书
- Force HTTPS Redirect / 强制将 HTTP 请求重定向到 HTTPS
- vercel.json / Vercel 的配置文件

# 安全与认证相关术语

- Input Validation / 输入验证
- Token Verification / 验证用户身份令牌
- DDoS Protection / 分布式拒绝服务攻击防护机制
- Automatic HTTPS / 自动启用 HTTPS

# 性能与监控相关术语

- Performance Metrics / 性能指标
- Error Tracking / 错误追踪
- Deployment Logs / 部署日志
- Seamless Scaling / 自动扩展

# 云平台与基础设施

- Vercel / 基于 Git 的前端部署平台
- AWS Lambda / Amazon Web Services 提供的无服务器计算服务
- Global CDN / 全球内容分发网络
- Edge Network / 边缘网络

# 开发流程相关术语

- Development Environment / 开发环境
- Build Output / 构建输出
- Local Iteration / 本地迭代
- Command-line Tool / 命令行工具
- System Environment Variables / 系统环境变量
- Globally Installed / 全局安装
- Dependencies / 依赖
- Development Mode / 开发模式
- Build Project / 构建项目
- Version Number / 版本号
- Upgrade / 升级
- Server / 服务器
- Environment Variables / 环境变量
- API Address / API 地址
- Node.js Official Website / Node.js 官方网站
- Corepack / Corepack

# 术语表
# 功能与架构相关术语（Features & Architecture）

- 多源内容聚合 / Multi-source Content Aggregation / 从多个平台统一抓取并展示内容
- 后端调度系统 / Backend Scheduler / Crawler Job / 用于定时发起数据抓取任务的系统组件
- 缓存机制 / Caching Mechanism / 临时存储数据以提高加载效率
- 数据源 / Data Source / 热榜内容的原始来源平台
- RESTful接口 / RESTful API / 一种基于HTTP的标准化接口风格
- 模块化组件 / Modular Components / 前端系统中可复用的功能块

# 前端功能相关术语（Frontend/UI）

- 前端界面 / Frontend Interface / 用户可视的操作界面
- 手动刷新 / Manual Refresh / 用户主动点击按钮触发更新请求
- 自动刷新 / Auto Refresh / 系统定时自动更新页面内容
- 主题切换 / Theme Toggle / 切换深色/浅色模式的功能
- 本地存储 / Local Storage / 浏览器端用于保存用户偏好的机制
- 重试按钮 / Retry Button / 接口失败时重新发起请求的按钮
- 时间戳 / Timestamp / 表示数据更新时间的字段
- 控制台日志 / Console Log / 浏览器开发者工具中的调试信息

# 后端与网络相关术语（Backend & Network）

- 定时任务 / Cron Job / 设定周期性运行的服务器任务
- HTTP请求 / HTTP Request / 前后端通信的基础协议动作
- 响应失败 / API Failure / 接口请求返回错误或超时
- 超时 / Timeout / 请求时间超出上限未返回数据
- DNS错误 / DNS Error / 域名无法解析，网络连接失败
- 反爬机制 / Anti-scraping Protection / 平台限制非正常访问的策略

# 常见开发工具术语（Dev Tools）

- 强制刷新 / Hard Refresh (Ctrl+F5) / 忽略缓存，重新请求资源
- 浏览器控制台 / Browser Console / 开发者用以查看日志、调试的面板
- 开发者模式 / Developer Mode / 展示更多调试信息的高级模式
- iframe嵌入 / iframe Embedding / 网页嵌套另一个网页的技术
- 组件化 / Componentization / 前端结构模块化，便于维护

## 专业术语词汇介绍与解释

### 一、Vue 基础概念

- `<template>` / 模板 / Vue 单文件组件（SFC）中定义 HTML 结构的部分。
- `<script setup>` / 组合式API语法 / Vue 3 的语法糖，用于更简洁地编写组合式逻辑（Composition API）。
- `ref` / 响应式引用 / 用于定义响应式数据的 Vue 3 API（如 `const headerShow = ref(false)`）。
- `onMounted` / 挂载生命周期钩子 / 组件挂载到 DOM 后执行的逻辑（如初始化数据）。
- `nextTick` / 下一帧回调 / 等待 DOM 更新后执行代码，确保操作基于最新 DOM 状态。
- `v-slot` / 插槽指令 / 定义作用域插槽内容（如 `<router-view v-slot="{ Component }">`）。
- `:is` / 动态组件绑定 / 动态渲染组件（如 `<component :is="Component" />`）。
- `<keep-alive>` / 组件缓存 / 缓存非活跃组件实例，避免重复渲染。
- `<transition>` / 过渡动画组件 / 为元素或组件添加进入/离开动画（如 `name="scale"`）。

### 二、状态管理

- `mainStore` / 状态仓库 / Pinia 或 Vuex 中定义的状态管理单元（如 `import { mainStore }`）。
- `store.newsArr` / 状态数据 / 通过状态管理库存储的响应式数据（如 `store.newsArr.length`）。

### 三、路由与导航

- `<router-view>` / 路由视图容器 / Vue Router 中渲染当前路由匹配的组件。
- `router-view` 插槽 / 路由插槽 / 通过插槽访问路由组件（如 `v-slot="{ Component }"`）。

### 四、UI 框架相关（Naive UI）

- `<n-layout>` / 布局容器 / Naive UI 的布局组件，支持嵌入式滚动条（embedded）。
- `<n-back-top>` / 返回顶部按钮 / Naive UI 的返回顶部组件（`visibility-height` 控制显示阈值）。
- `:native-scrollbar` / 原生滚动条 / 控制是否使用浏览器原生滚动条（如 `:native-scrollbar="false"`）。

### 五、样式与预处理器

- `<style scoped>` / 作用域样式 / 限定 CSS 样式仅作用于当前组件（避免全局污染）。
- `lang="scss"` / SCSS 预处理器 / 使用 SCSS 语法编写样式（支持嵌套、变量等高级功能）。
- `var(--n-border-color)` / CSS 变量 / 通过 CSS 自定义属性定义主题颜色（如 `--n-border-color`）。
- `:deep()` / 深度选择器 / 穿透作用域样式，修改子组件样式（如 `:deep(section)`）。

### 六、动画与过渡

- transition 类名 / 过渡动画类 / 定义进入/离开动画的 CSS 类（如 `.scale-enter-active`）。
- `mode="out-in"` / 过渡模式 / 控制过渡顺序（当前元素先离开，新元素再进入）。

# 新增术语

- 热门话题 / Trending Topics / 当前最受关注的话题或事件。
- API 网关 / API Gateway / 提供统一入口管理和处理所有 API 请求的服务。
- 懒加载 / Lazy Loading / 延迟加载图片或资源以提升首屏性能。
- 依赖管理 / Dependency Management / 管理项目所需的各种外部库和框架。
- Fork 仓库 / Fork Repository / 在 GitHub 等平台上复制一个仓库以便进行独立开发和贡献。