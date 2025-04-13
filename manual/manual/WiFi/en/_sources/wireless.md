# WiFi模式

## 修改设备编号

```{raw} html

    <iframe src="../../plugins/wifi-clientId.html" height="400px" width="100%"></iframe>

```
## 数据上传格式
### 原始条码内容[^1]
[^1]: 原始条码内容： {"ID":"680870"}

```{figure} ../../media/25WFCOMMPM23S0.png
:align: center
:width: 300px

原始条码内容
```
### Josn格式内容[^2]
[^2]: Josn格式内容： {"id":"C143F123","msg":"{"ID":"680870"}"}


```{figure} ../../media/25WFCOMMPM23S1.png
:align: center
:width: 300px

Josn格式内容
```
### Josn格式+内容中双引号加转义符[^3]
[^3]: Josn格式+内容中双引号加转义符： {"id":"C143F123","msg":"{\"ID\":\"680870\"}"}


```{figure} ../../media/25WFCOMMPM23S2.png
:align: center
:width: 300px

Josn格式+内容中双引号加转义符
```

## 数据接收格式

```{csv-table}
:widths: 30 30 40
:header-rows: 1

参数名,类型,描述
ply,Int,语音代码
msg,String,消息内容
```

```{code-block} json
:caption: 返回示例
:lineno-start: 1

{"ply":2,"msg":"ABEF"}
```

### 语音代码

```{csv-table}
:widths: 50 50
:header-rows: 1

语音代码,语音内容
1,蜂鸣器响一声
2,蜂鸣器响二声
3,蜂鸣器响三声
```



## 数据传输协议
```{toctree}
:maxdepth: 2

tcpclient.md
tcpserver.md
mqtt.md
http.md
```
## 网络配置方式
```{toctree}
:maxdepth: 2

network.md
```
