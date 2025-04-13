# 扫描模式

## 按键保持(电平)
按下按键触发识读，松开按键则结束识读。识读成功或者识读时间超过单次识读时间则结束识读。


```{figure} ../../media/2050200.png
:align: center
:width: 300px

按键保持(电平) `默认`
```

## 连续模式
识读引擎进行连续的工作。识读成功或者读时间超过单次识读时间结束本次识读，超过规定的时间自动触发下次识读。

```{figure} ../../media/2050204.png
:align: center
:width: 300px

连续模式
```


## 自动感应模式
在自动感应模式下，识读引擎会检测周围环境的亮度，当亮度发生变化时，触发识读，识读成功或者识读时间超过单次识读时间结束识读。不论上次识读成功或失败，重新进入检测周围环境的亮度。

```{figure} ../../media/2050209.png
:align: center
:width: 300px

自动感应模式
```

## 同码延时设置
为避免在[连续模式](#连续模式)和[自动感应模式](#自动感应模式)中同一条码被连续识读多次，可以要求识读引擎在延时设定时长后才允许 识读相同条码。

### 无延时

```{figure} ../../media/3030C90.png
:align: center
:width: 300px

无延时
```

### 延时1s

```{figure} ../../media/3030C91.png
:align: center
:width: 300px

延时1s
```

### 延时3s

```{figure} ../../media/3030C93.png
:align: center
:width: 300px

延时3s
```

### 延时5s

```{figure} ../../media/3030C95.png
:align: center
:width: 300px

延时5s
```

### 延时7s

```{figure} ../../media/3030C97.png
:align: center
:width: 300px

延时7s
```

### 无限延时（禁止同码识读）

```{figure} ../../media/3030C99.png
:align: center
:width: 300px

无限延时（禁止同码识读）
```