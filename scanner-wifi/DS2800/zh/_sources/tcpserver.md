# 使用TCP Server传输数据

## 快速配置
```{raw} html
    <iframe src="../../plugins/wifi-tcpclient.html" height="700px" width="100%"></iframe>

```
```{note}
使用第三方软件自建TCP Server时，可以使用此项进行配置。
```


## 演示软件
- 点击下方链接下载演示软件:  
[Netum Wi-Fi TCP Client](https://pan.gzxlscan.cn/s/uli95v)

## 建立连接
1. 下载演示软件并解压到文件夹。
2. 打开演示软件，输入扫描器需要连接WiFi信息和扫描枪的IP地址、TCP Server端口，并使用扫描枪扫描下方的二维码。
```{figure} ../../media/wifi-tcpclient1.png
:align: center
```
3. 点击启动按钮，或者通过编程开发启动TCP Client去连接扫描枪。
```{figure} ../../media/wifi-tcpclient2.png
:align: center
```
4. 软件建立与扫描器的连接，扫描枪的指示灯常亮。

```{note}
- 设备地址为扫描枪在局域网内的IP地址。
- 设置端口为扫描枪开启的TCP Server的端口号。
```
