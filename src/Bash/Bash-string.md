---
title: Bash 字符串
description: 
date: 2023-07-10 21:20:45
category:
    - Bash 教程
tag:
    - Bash
---

## 介绍

Bash 所有代码除关键字外默认为字符串

```bash
$ command="date"
$ $command                                       # 取 command 变量值 "date", "date" 作为命令执行
> Mon Jun 12 10:07:40 CST 2023                   # 执行 date, 打印日期

$ echo date                                      # date 被当作字符串, 作为 echo 的参数
> date                                            

$ echo $("date")                                 # 执行 "date", 返回值作为 echo 的参数
> Mon Jun 12 10:23:46 CST 2023
```

Bash 默认第一个字符为指令, 后续值为字符串作为指令的参数

### 长度

`${#s}` 返回字符串的长度

```bash
$ s="123 456"; s="456 123"                       # 赋值
$ echo "s:${s}  length: ${#s}"                   # 获取长度
> s:456 123  length: 7                           # 打印
```

### 子字符串

`${s:start:length}`

```bash
$ s="01234"
$ echo "${s:0:3}"                                # 从序号 0 开始, 获取 3 个长度
> 012                                            #
```

## 删除和替换

字符串通过 `#(开头开始匹配) %(结尾开始匹配)` 完成删除或替换操作  
删除: `${variable#pattern} ${variable##pattern} ${variable%pattern} ${variable%%pattern}`
替换: `${variable/pattern/string} ${variable//pattern/string}`

```bash
 $ date="2023-07-31"
 
 $ echo ${date#*-} ${date##*-}                   # # 从开头开始匹配, 只匹配最短内容 ## 贪婪匹配
 > 07-31 31
 $ echo ${date%-*} ${date%%-*}                   # % 从结尾开始匹配, 只匹配最短内容 %% 贪婪匹配
 > 2023-07 2023


 $ echo ${date/-/=}                              # 只替换一次 
 > 2024=07-31
 $ echo ${date//-/=}                             # 全替换
 > 2023=07=01
```

## 大小写

`${variable^^}` 字母全替换为大写  
`${variable,,}` 字母全替换为小写  

```bash
 $ var="ABC123xyz"
 $ echo ${var^^}
 > ABC123XYZ

 $ echo ${var,,}
 > abc123xyz
```
