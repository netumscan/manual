# 使用MQTT协议传输数据


## 搭建代理（Broker）服务器
- 使用一台服务器搭建MQTT Broker ,扫描枪上传条码都是通过这台服务器中转。

### 演示软件
EMQX 开源版,下载地址：[EMQX](https://github.com/emqx/emqx/releases)

### 测试服务

```{figure} ../../media/wifi-emqx.png
:align: center
```

```{note}
**服务器连接信息** 
- Host：mqtt.handy.pub
- Port：1883
- Username：netum
- Password：netum@2022
  
  仅供测试使用，严禁用于生产环境。
```

## 配置扫描枪

### 配置WiFi和服务信息
```{raw} html
    <iframe src="../../plugins/wifi-mqtt.html" height="900px" width="100%"></iframe>
```

```{note}
- 扫描枪连接MQTT Broker 默认使用的是1883端口。
- 扫描枪订阅的主题内容为设备ID。
```

### 修改MQTT连接端口号
```{raw} html
    <iframe src="../../plugins/wifi-mqtt-ConnectPort.html" height="500px" width="100%"></iframe>
```

### 修改扫描枪发布主题
```{raw} html
    <iframe src="../../plugins/wifi-mqtt-PublishTopic.html" height="500px" width="100%"></iframe>
```

### 修改扫描枪订阅主题
```{raw} html
    <iframe src="../../plugins/wifi-mqtt-SubscribeTopic.html" height="500px" width="100%"></iframe>
```

## 接收数据

- 使用MQTT客户端软件[[MQTTX](https://mqttx.app/)]连接Broker服务器，并订阅扫描枪发布消息的主题。


```{figure} ../../media/wifi-mqttx.png
:align: center
```


## 开发参考
- [MQTT 客户端库](https://www.emqx.com/zh/mqtt-client-sdk)
- [MQTT 教程](https://www.emqx.com/zh/mqtt-guide)
