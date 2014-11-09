

var tween = function() {
    this.tl.gif1 = new TimelineMax({
        repeat: -1
    }), this.tl.gif1.to(this.$gif1, 1, {
        left: "-100%",
        ease: Quart.easeInOut
    }, "+=1.6"), this.tl.gif1.to(this.$gif1, 1, {
        left: "0%",
        ease: Quart.easeInOut
    }, "+=1.6"), this.tl.gif1.to(this.$gif1, 1, {
        top: "-100%",
        ease: Quart.easeInOut
    }, "+=1.6"), this.tl.gif1.to(this.$gif1, 1, {
        left: "-100%",
        ease: Quart.easeInOut
    }, "+=1.6"), this.tl.gif1.to(this.$gif1, 1, {
        top: "0%",
        ease: Quart.easeInOut
    }, "+=1.6"), this.tl.gif1.to(this.$gif1, 1, {
        left: "-200%",
        ease: Quart.easeInOut
    }, "+=1.6"), this.tl.gif1.to(this.$gif1, 1, {
        top: "-100%",
        ease: Quart.easeInOut
    }, "+=1.6"), this.tl.gif1.to(this.$gif1, 1, {
        left: "-300%",
        ease: Quart.easeInOut
    }, "+=1.6"), this.tl.gif1.to(this.$gif1, 1, {
        top: "-200%",
        ease: Quart.easeInOut
    }, "+=1.6"), this.tl.gif1.to(this.$gif1, 1, {
        left: "-200%",
        ease: Quart.easeInOut
    }, "+=1.6")
    this.tl.gif2 = new TimelineMax({
        repeat: -1
    }), this.tl.gif2.to(this.$gif2, 1, {
        left: "-200%",
        ease: Quart.easeInOut
    }, "+=1.4"), this.tl.gif2.to(this.$gif2, 1, {
        top: "-100%",
        ease: Quart.easeInOut
    }, "+=1.4"), this.tl.gif2.to(this.$gif2, 1, {
        left: "-300%",
        ease: Quart.easeInOut
    }, "+=1.4"), this.tl.gif2.to(this.$gif2, 1, {
        top: "0%",
        ease: Quart.easeInOut
    }, "+=1.4"), this.tl.gif2.to(this.$gif2, 1, {
        left: "-200%",
        ease: Quart.easeInOut
    }, "+=1.4"), this.tl.gif2.to(this.$gif2, 1, {
        left: "-100%",
        ease: Quart.easeInOut
    }, "+=1.4"), this.tl.gif2.to(this.$gif2, 1, {
        top: "-100%",
        ease: Quart.easeInOut
    }, "+=1.4"), this.tl.gif2.to(this.$gif2, 1, {
        left: "0%",
        ease: Quart.easeInOut
    }, "+=1.4"), this.tl.gif2.to(this.$gif2, 1, {
        top: "-200%",
        ease: Quart.easeInOut
    }, "+=1.4"), this.tl.gif2.to(this.$gif2, 1, {
        left: "-100%",
        ease: Quart.easeInOut
    }, "+=1.4")
    this.tl.gif4 = new TimelineMax({
        repeat: -1
    }), this.tl.gif4.to(this.$gif4, 1, {
        left: "-200%",
        ease: Quart.easeInOut
    }, "+=1.2"), this.tl.gif4.to(this.$gif4, 1, {
        top: "-300%",
        ease: Quart.easeInOut
    }, "+=1.2"), this.tl.gif4.to(this.$gif4, 1, {
        left: "-100%",
        ease: Quart.easeInOut
    }, "+=1.2"), this.tl.gif4.to(this.$gif4, 1, {
        top: "-200%",
        ease: Quart.easeInOut
    }, "+=1.2"), this.tl.gif4.to(this.$gif4, 1, {
        left: "-0%",
        ease: Quart.easeInOut
    }, "+=1.2"), this.tl.gif4.to(this.$gif4, 1, {
        top: "-100%",
        ease: Quart.easeInOut
    }, "+=1.2"), this.tl.gif4.to(this.$gif4, 1, {
        left: "-100%",
        ease: Quart.easeInOut
    }, "+=1.2"), this.tl.gif4.to(this.$gif4, 1, {
        top: "0%",
        ease: Quart.easeInOut
    }, "+=1.2"), this.tl.gif4.to(this.$gif4, 1, {
        left: "-200%",
        ease: Quart.easeInOut
    }, "+=1.2"), this.tl.gif4.to(this.$gif4, 1, {
        top: "-100%",
        ease: Quart.easeInOut
    }, "+=1.2")

};

function Ani() {};
Ani.prototype.initElt = function() {
    this.tl = {}, 
    this.$gif1 = $(".gif-1-container"),
    this.$gif2 = $(".gif-2-container"),
    this.$gif4 = $(".gif-4-container"), 
    tween.call(this)
};
var mo = new Ani();
mo.initElt();

