先记录一下,目前碰到的坑

hot reload 出现问题应该是ambient 需要做一个webpack.hot.d.ts来做映射,其他内容感觉并没有明显修改

typings 必须生成对应的d.ts
typings install --ambient

增加react-router,ts需要
typings install react-router --save.
history有多个依赖,来源不一致,需要在github上获取到,当发生类似以下错误时
An export assignment cannot be used in a module with other exported elements.
注释掉相关的重复module
historyModule的用法和es6有相当大的不同


webpack
ExtractTextPlugin用来生成外部文件,主要是css,需要使用同一个生成,new多个则不起作用

由于目录结构不同,要注意__dirname和process.cwd()的使用,否则路径不对

CommonsChunkPlugin不需要在entry里设置,并且在html里引用,多个chunk需要new 多个CommonsChunkPlugin
此处有个坑,CommonsChunkPlugin更多的是项目内某些文件的合并,并不能找到nodemodules下的文件
PathChunkPlugin才是合并压缩nodemodules下类库的插件
