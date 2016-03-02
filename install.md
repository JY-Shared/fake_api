安装OpenSSL
===================

+ **很多安装包在共享目录里面有 `\\192.168.5.95\内部共享` 用户名：`share` 密码：`1233456`**

+ 安装Git， 参照 [帮助文档](http://code.fdjf.net/git/wenqiang/help/wiki/%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AEWindows%E6%9C%AC%E5%9C%B0git%E7%9A%84ssh%E7%8E%AF%E5%A2%83) 进行设置

+ 安装openssl, 注意把openssl.exe加入到PATH路径，然后执行以下命令

    ```
    $ openssl genrsa -out privatekey.pem 1024
    Generating RSA private key, 1024 bit long modulus
    ........++++++
    ....................................++++++
    e is 65537 (0x10001)
    $ openssl req -new -key privatekey.pem -out certrequest.csr
    You are about to be asked to enter information that will be incorporated
    into your certificate request.
    What you are about to enter is what is called a Distinguished Name or a DN.
    There are quite a few fields but you can leave some blank
    For some fields there will be a default value,
    If you enter '.', the field will be left blank.
    Country Name (2 letter code) [AU]:CN
    State or Province Name (full name) [Some-State]:Shanghai
    Locality Name (eg, city) []:Shanghai
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:localhost
    Organizational Unit Name (eg, section) []:localhost
    Common Name (e.g. server FQDN or YOUR name) []:localhost
    Email Address []:choudouhu@163.com
    Please enter the following 'extra' attributes
    to be sent with your certificate request
    A challenge password []:
    An optional company name []:
    $ openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
    Signature ok
    subject=/C=CN/ST=Shanghai/L=Shanghai/O=localhost/OU=localhost/CN=localhost/emailAddress=choudouhu@163.com
    Getting Private key
    ```

+ 安装nodejs

+ 运行命令

    ```
    $ npm install -g cnpm --registry=https://registry.npm.taobao.org
    $ cnpm install bower grunt grunt-cli gulp -g
    ```