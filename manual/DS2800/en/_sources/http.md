# 使用HTTP协议传输数据

## 创建REST API
### 简要描述
- 扫描枪数据上传接口

### 请求URL
- https://httpbin.org/post

### 请求方式
- POST

### 请求参数

```{csv-table}
:widths: 20 20 20 20
:header-rows: 1

参数名,必选,类型,说明
id,是,string,设备Id
msg,是,string,扫描内容
```
```{code-block} json
:caption: 请求示例
:lineno-start: 1

{"id": "04B9023A","msg":"1234567890"}
```

### 返回参数

详情见[数据接收格式](wireless.md#数据接收格式)


## 配置扫描枪

### 设定扫描枪请求的Content-Type


```{figure} ../../../media/application-json.png
:align: center
:width: 300px

Application/Json
```

### 设定扫描枪发送的消息格式


```{figure} ../../../media/25WFCOMMPM23S1.png
:align: center
:width: 300px

Json格式
```


### 配置WiFi和接口地址
```{raw} html
    <iframe src="../../../plugins/wifi-https.html" height="650px" width="100%"></iframe>
```