$(function(){

		var bw = $('body').width();
		var bh = $('body').height();

		$( ".overflow" ).mousemove(function( event ) {
			var currX = event.pageX
		});

		this.currX += (this.targetX - this.currX) * this.sensibility,
		this.currY += (this.targetY - this.currY) * this.sensibility,
		this.currXClean = +this.currX.toFixed(2),
		this.currYClean = +this.currY.toFixed(2),
		this.rX = -(this.currYClean - this.demi.h) / this.demi.h * this.axisYMax,
		this.rY = (this.currXClean - this.demi.w) / this.demi.w * this.axisXMax;
		for (var t = 0; t < this.elL; t++)
				this.el[t].style.transform = "rotateX(" + this.rX + "deg) rotateY(" + this.rY + "deg)";
		this.targetX !== this.currXClean && this.targetY !== this.currYClean ? this.id = requestAnimationFrame(this.loop) : this.isMoving = !1

});
