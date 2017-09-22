function Carousel(containerId,listBtnId,imgList,prevId,nextId) {
    _this=this;
    this.container=document.getElementById(containerId);
    this.listBtn=document.getElementById(listBtnId).getElementsByTagName("li");
    this.Oprev=document.getElementById(prevId);
    this.Onext=document.getElementById(nextId);
    this.imgcontent=document.getElementById(imgList);
    this.imgList=this.imgcontent.getElementsByTagName("div");
    this.index=0;
    this.timer;
    this.imgWidth=this.imgcontent.getElementsByTagName("div")[0].clientWidth;
    this.imgcontent.style.left = 0 + "px";
}
Carousel.prototype.init=function () {
    this.container.style.width=this.imgWidth;
    var width = this.imgList[0].clientWidth *this.imgList.length;
    this.imgcontent.style.width = width + "px";
    console.log(this.imgcontent.style.width);
};
Carousel.prototype.showBtn=function (){
    for (var i in this.listBtn) {
        this.listBtn[i].className = "list-btn";
    }
};
Carousel.prototype.BtnClick=function(){
    for(var i in this.listBtn){
        this.listBtn[i].onclick=function () {
            _this.showBtn();
            this.className="list-btn active";
            _this.index=parseInt(this.getAttribute("data-index"))-1;
            _this.imgcontent.style.left=parseInt(_this.index)*(-_this.imgWidth)+"px";
        }
    }
};
Carousel.prototype.prevClick=function () {
    this.Oprev.onclick=function () {
        if (_this.index >= 0 && _this.index < _this.imgList.length-1) {
            _this.imgcontent.style.left = parseInt(_this.imgcontent.style.left) -(_this.imgWidth)+ "px";
            _this.index++;
            _this.showBtn();
            _this.listBtn[_this.index].className = "list-btn active";
        } else if (_this.index ==  _this.imgList.length-1) {
            _this.imgcontent.style.left = 0 + "px";
            _this.index = 0;
            _this.showBtn();
            _this.listBtn[_this.index].className = "list-btn active";

        }
    }
};
Carousel.prototype.nextClick=function () {
    this.Onext.onclick = function () {
        if (_this.index > 0 && _this.index <=  _this.imgList.length-1) {
            _this.imgcontent.style.left = parseInt(_this.imgcontent.style.left) + (_this.imgWidth) + "px";
            _this.index--;
            _this.showBtn();
            _this.listBtn[_this.index].className = "list-btn active";
        } else if (_this.index == 0) {
            _this.imgcontent.style.left = -_this.imgcontent.clientWidth+_this.imgWidth+ "px";
            _this.index =  _this.imgList.length-1;
            _this.showBtn();
            _this.listBtn[_this.index].className = "list-btn active";
        }
    };
};
Carousel.prototype.autoPlay=function () {
    this.container.onmouseover =function stop() {
        clearInterval(_this.timer);
    };
    this.container.onmouseout = function play() {
       _this.timer = setInterval(function () {
            prev.onclick();
        }, 2000)
    };
}
