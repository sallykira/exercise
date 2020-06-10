module.exports = {
  entry: __dirname + '/app/main.js',   //唯一入口文件
  output: {
      path: __dirname + '/public',    //打包后文件存放位置
      filename: 'bundle.js'          //打包后输出文件文件名
  },
  mode: 'development',               //不配置则浏览器控制台会有提示, 暂不知有何效果
  devtool: 'eval-source-map',              //在同文件中生成source map, 适用于开发环境
  devServer: {
    contentBase: './public',        //应该是指localhost:8080访问的根目录
    historyApiFallback: true,
    inline: true                      //浏览器监听, 修改文件保存后自动刷新
  }
}