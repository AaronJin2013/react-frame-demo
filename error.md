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
已填坑,CommonsChunkPlugin可以正则以及按加载次数进行合并,标准流程使用该模式,无副作用


备用方案:
PathChunkPlugin才是合并压缩nodemodules下类库的插件
windows下会出现css解析错误,多次调用mac下也出现了类似错误


TS的检测机制使得require.ensure不能正常执行,因此我们需要添加d.ts作为获取的方式
interface NodeRequire {
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, name:string) => void;
}

domain-task/fetch可以替代whatwg-fetch,并且不需要自己编写d.ts


redux的debug模式需要devToolsExtension和module.hot,具体写法参照configureStore

fetchbody只支持字符串,所以要提交json或文件,需要做相应转换
var data = new FormData();
data.append( "json", JSON.stringify( {
    startDateIndex:startDateIndex
} ) );
data.append('type', 'file');
data.append('image', blob);



export 因为牵涉到interface,对象必须有类型,否则会报错
无法直接给import的对象类型,因此如果想在import对象外包个对象需要使用以下方式
import * as User from "./User";
export { User };
使用这个方式是为了统一models中的Interface和Schema,使之可以循环


redux-typed的一个大坑,几乎崩溃到放弃的坑
ApplicationState和reducers里的变量名最好一致,在provide中的state类型是ApplicationState,获取到的变量名是reducers的,因此获取不到对象而报错
browser.js:40Uncaught Invariant Violation: `mapStateToProps` must return an object. Instead received undefined.
这个错误就是state没有获取正确,极难排查

redux-router
路由为逐级匹配,因此固定项要写在前面,否则会先匹配到变量而出错
{path: 'user/add', component: UserAdd},
{path: 'user/:id', component: User},





前端和后端通讯json或string需要通过headers设置
 headers: {
                'Content-Type': 'application/json'
            }
application/json可以传递json
x-www-form-urlencoded可以传递字符串
不可串用,否则后端获取不到数据
后端需要添加
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 [react-router] `props.history` and `context.history` are deprecated. Please use `context.router`.
 是chrome的dev tools错误,可以忽略.