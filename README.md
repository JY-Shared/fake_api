移动端模拟接口
===============

# 快速允许

+ 软件安装, 参见 [install.md](install.md)

+ 运行命令
    
    ```
    cnpm install
    gulp
    ```
    
# 常用命令
+ 运行 `gulp`

  本地访问：http://localhost:3000/fakedocs/#/api
  
+ 上传文档和api接口到远程 `gulp fakeapi`

# 测试服务器

+ 地址 fakeapi.fdjf.net `/home/wechat/www/fakeapi`
+ 启动命令:

    ```
    cd /home/wechat/www/fakeapi
    forever -w --watchDirectory ./api start  ./bin/www
    ```
    
+ 停止命令 `forever stopall`
+ 查看命令 `forever list`


    
    