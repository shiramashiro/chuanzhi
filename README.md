# 项目说明

2020-2021 年 2 学期《Java Web 程序设计任务教程》演示的前台项目。

## 主要页面

1. 项目主页；
2. 登陆和注册页；

# 特性分支说明

特性分支是从开发分支迁出的副本分支，专门用于开发新特性，当特性开发完成后，特性分支中的内容会被合回开发分支。在任何情况下，特性分支存活时间都应该尽可能短，比如，一个人或者一个团队能够在一天时间内结束在特性分支上的开发。一旦特性开发完成并合回开发分支后，特性分支被删掉，防止有人继续向特性分支合入代码。

有关特性分支的说明： [使用特性分支开发](https://wenxinhe.gitbooks.io/knowledge-base/content/shi-yong-te-xing-fen-zhi-kai-fa.html#what-is-feature-branch)

## 创建特性分支

当在特性分支上开发新特性时，首先需要从开发分支迁出特性分支：

```shell
git checkout -b [特性分支名] develop
```

## 合并特性分支

特性开发完成后，特性分支需要合入开发分支：

```shell
git checkout develop

git merge --no-ff [特性分支名]

git branch -d [特性分支名]

git push origin develop
```
