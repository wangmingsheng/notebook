
事件： 是由事件起源点（target dom）触发，触发后会产生一个event事件对象。
事件流依次从起源点的祖先节点（一般是window）到 起源点（target）触发捕获事件，再从起源点返回到祖先节点，触发冒泡事件，最后event自动销毁；
在该过程event是同一个event，event：{
   type: '',//事件名称
   target: node,//事件起源dom,
   currentTarget: node,
   bubbles: boolean,指明这个事件是否是一个冒泡事件,
   preventDefault: function,
   cancelable: boolean,//该事件的默认事件是否可以阻止,
   stopPropagation: function,//取消事件的进一步捕获或者冒泡，bubbles为true使用该方法
   eventPhase: 返回一个数字，表示事件目前所处的阶段，0为事件开始从Dom表层向目标元素传播，1为捕获阶段，2为事件到达目标元素，3为冒泡阶段
}

现代浏览器：支持事件捕获 事件冒泡
addEventListener(event, function, useCapture);
removeEventListener(event, function);

早期版本：ie9 以下 具体详见w3c  早期浏览器支持事件冒泡，事件最开始由target元素接受，然后逐级向上传播
attachEvent(event, function);
detachEvent(event, function);


click事件：
pageX,pageY: 点击位置相对于html元素的坐标，px；
clientX,clientY: 点击位置相对于视口（viewport）的坐标，单位为px；
screenX,screenY: 点击位置相对于设备显示屏幕的坐标，单位为设备硬件的像素。

焦点事件：
blur，focus：不支持冒泡
focusin，focusout：支持冒泡

鼠标事件：
click：点击鼠标左键或者按enter
dbclick： 双击鼠标
mousedown，mouseup，mousemove不能通过键盘触发
mouseover支持冒泡，mouseenter不支持冒泡
mouseout支持冒泡，mouseleave，不支持冒泡
传递给鼠标事件处理程序的事件对象有clientX和clientY属性，它们指定了鼠标指针相对于包含窗口的坐标。
加入窗口的滚动偏移量，就可以把鼠标位置转换成文档坐标。

页面上的所有元素都支持鼠标事件。除了mouseenter和mouseleave外，所有的事件都冒泡，并且他们的默认行
为是可以被取消掉的。但取消鼠标事件的默认行为可能会影响到其他事件，因为有些鼠标事件是相互依赖的。

拖拉事件：
（1）drag事件
drag事件在源对象被拖拉过程中触发。

（2）dragstart，dragend事件
dragstart事件在用户开始用鼠标拖拉某个对象时触发，dragend事件在结束拖拉时触发。

（3）dragenter，dragleave事件
dragenter事件在源对象拖拉进目标对象后，在目标对象上触发。dragleave事件在源对象离开目标对象后，在目标对象上触发。

（4）dragover事件
dragover事件在源对象拖拉过另一个对象上方时，在后者上触发。

（5）drop事件
当源对象被拖拉到目标对象上方，用户松开鼠标时，在目标对象上触发drop事件。


关于事件的一些问题
1、事件冒泡的好处：可以事件委托，提高性能