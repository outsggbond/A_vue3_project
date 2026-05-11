// src/vite-env.d.ts
/// <reference types="vite/client" />

declare module 'virtual:svg-icons-register' {
  // 该模块仅用于副作用导入，无需导出任何内容
  const content: void
  export default content
}
