# CesiumContextMenu
cesium's context menu plug-in, while already built-in some common operations, the author is relatively busy, later there will be time to continue to integrate common small functions to the menu. If you like it, please star it!

cesium的右键菜单插件，同时已经内置了一些常用操作，作者比较忙，后期有时间会继续集成常用小功能到菜单中。喜欢的话就点个赞吧，后续更新不迷路

个人其他项目: https://github.com/ElevenIjusee?tab=repositories

![图片](about.gif)

## Get Started

	npm i cesium-context-menu

or

	yarn add cesium-context-menu

## Use
```javascript
import cesiumContextMenu from 'cesium-context-menu';
/*
	viewer: cesium's viewer Object
*/
new cesiumContextMenu(viewer);
```

## Tips
if you want to use screen shot tool:
You need to install [html2canvas](https://github.com/niklasvh/html2canvas) and import it before you use cseiumContextMenu, and set following code when you create cesium's viewer Object:
```javascript
contextOptions: {
  webgl: {
     preserveDrawingBuffer: true,
  },
}, 
```