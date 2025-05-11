<--李如欣-->
##以下是对index.JS代码中出现的专业术语词汇的介绍与解

英文术语	中文翻译	说明
<template>	模板	Vue 单文件组件（SFC）中定义 HTML 结构的部分。
<script setup>	组合式API语法	Vue 3 的语法糖，用于更简洁地编写组合式逻辑（Composition API）。
ref	响应式引用	用于定义响应式数据的 Vue 3 API（如 const headerShow = ref(false)）。
onMounted	挂载生命周期钩子	组件挂载到 DOM 后执行的逻辑（如初始化数据）。
nextTick	下一帧回调	等待 DOM 更新后执行代码，确保操作基于最新 DOM 状态。
v-slot	插槽指令	定义作用域插槽内容（如 <router-view v-slot="{ Component }">）。
:is	动态组件绑定	动态渲染组件（如 <component :is="Component" />）。
<keep-alive>	组件缓存	缓存非活跃组件实例，避免重复渲染。
<transition>	过渡动画组件	为元素或组件添加进入/离开动画（如 name="scale"）。

二、状态管理
英文术语	中文翻译	说明
mainStore	状态仓库	Pinia 或 Vuex 中定义的状态管理单元（如 import { mainStore }）。
store.newsArr	状态数据	通过状态管理库存储的响应式数据（如 store.newsArr.length）。

三、路由与导航
英文术语	中文翻译	说明
<router-view>	路由视图容器	Vue Router 中渲染当前路由匹配的组件。
router-view 插槽	路由插槽	通过插槽访问路由组件（如 v-slot="{ Component }"）。

四、UI 框架相关（Naive UI）
英文术语	中文翻译	说明
<n-layout>	布局容器	Naive UI 的布局组件，支持嵌入式滚动条（embedded）。
<n-back-top>	返回顶部按钮	Naive UI 的返回顶部组件（visibility-height 控制显示阈值）。
:native-scrollbar	原生滚动条	控制是否使用浏览器原生滚动条（如 :native-scrollbar="false"）。

五、样式与预处理器
英文术语	中文翻译	说明
<style scoped>	作用域样式	限定 CSS 样式仅作用于当前组件（避免全局污染）。
lang="scss"	SCSS 预处理器	使用 SCSS 语法编写样式（支持嵌套、变量等高级功能）。
var(--n-border-color)	CSS 变量	通过 CSS 自定义属性定义主题颜色（如 --n-border-color）。
:deep()	深度选择器	穿透作用域样式，修改子组件样式（如 :deep(section)）。

六、动画与过渡
英文术语	中文翻译	说明
transition 类名	过渡动画类	定义进入/离开动画的 CSS 类（如 .scale-enter-active）。
mode="out-in"	过渡模式	控制过渡顺序（当前元素先离开，新元素再进入
<--李如欣-->

