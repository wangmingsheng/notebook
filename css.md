1. word-break and white-space
   * white-space 处理空白的行为  空白包括空白符序列 和 换行符  
2. table td width不一定有效，通常用max-width 和 min-width

3. box-shadow?
   * box-shadow 0 0 0 10px #ff0000 outset,0 0 0 20px #00ff00 outset,0 0 0 30px #000000 outset;
4. background?
   *background-clip 规定背景的绘制区域，background-origin 	规定背景图片的定位区域
   *background-image在background-color上层
   *跟背景图有关：
	background-position 规定背景图像的位置。	
	background-size	规定背景图片的尺寸。	
	background-repeat 如何重复背景图像。
	background-attachment 规定背景图像是否固定或者随着页面的其余部分滚动。

   css3 
   background-image: url("img_tree.gif"), url("img_flwr.gif");
   background-image: radial-gradient(tan 20%, transparent 0),
                  radial-gradient(tan 20%, transparent 0);