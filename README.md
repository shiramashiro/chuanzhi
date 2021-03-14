# Git 基本指令

## 创建分支

```shell
git branch [分支名]
```

## 切换分支

```shell
git checkout [分支名]
```

## 删除分支

```shell
git branch -d [分支名]
```

## 合并分支

```shell
git merge
```

# 特性分支说明

特性分支是从开发分支迁出的副本分支，专门用于开发新特性，当特性开发完成后，特性分支中的内容会被合回开发分支。有关特性分支的说明： [使用特性分支开发](https://wenxinhe.gitbooks.io/knowledge-base/content/shi-yong-te-xing-fen-zhi-kai-fa.html#what-is-feature-branch)

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
