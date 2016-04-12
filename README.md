先记录一下,目前碰到的坑

hot reload 出现问题应该是ambient 需要做一个webpack.hot.d.ts来做映射,其他内容感觉并没有明显修改

typings 必须生成对应的d.ts
typings install --ambient