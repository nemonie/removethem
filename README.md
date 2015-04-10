[RemoveThem](http://www.codermo.com/removethem/) — 一款有趣的Web游戏
==================================================


游戏简介
--------------------------------------

7*7 消除游戏Web版本，原生Javascript产品，兼容所有高级浏览器，支持移动端。（[在线试玩](http://www.codermo.com/removethem/)）


游戏目的
--------------------------------------

【获得更高的分数！】

正如游戏名所言，游戏的全部内容就是拼命的消除“它们”来得分，每四个或四个以上横竖斜相同颜色方块连在一起就会被消除掉。


游戏操作
--------------------------------------

点击屏幕棋盘，每次可以移动一个色块到它可到达的位置，支持鼠标和触屏操作。每次移动若没有消除任何方块，则会随机在棋盘上增加若干新方块，当没有足够位置放入下一次该出现的方块时，就Game over了。


游戏策略
--------------------------------------

游戏加入了等级难度策略，当消除到一定数目的方块即会自动升级，难度会提高（出现的方块数增加），当然消除分数也会随等级升高而加成更多。除此之外，还加入了连击判断，连续消除方块会带来很大的分数加成收益。计分算法如下公式：

```js
this.score += ((removeCount + this.combo * 2 + this.level) * (removeTiles.length));
```


TODO
--------------------------------------

- 补充界面设计，实现游戏绚丽的用户体验。

- 完善移动端样式，更大范围的适应不同分辨率终端。

- 加入道具功能，提供提高游戏趣味性的特殊道具。

- 优化性能，寻找未知BUG，修补已知BUG。


其他
--------------------------------------

使用源码请注明出处和原作者，谢谢。商业目的请联系原作者（i@codermo.com）。