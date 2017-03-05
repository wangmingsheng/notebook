/**
 * Created by Administrator on 2016-05-09.
 */
function A(){
    this.a=1;
    var c=3;
}
A.b=2;
A.prototype.d=5;
var my=new A();
function o(){this.y=7;};
o.prototype=new A();
o.prototype.constructor=o;
var oo = new o;
alert(oo.a);
alert(my.a+'  '+my.c+'  '+my.b+'   '+A.d)

if(window instanceof Window){
    alert("myWin");
    alert("ÖÐ¹ú")
}

