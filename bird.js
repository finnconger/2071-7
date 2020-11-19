const dragonSprite = new Image();
dragonSprite.src = 'chickin.png';

class Bird {
	constructor(){
		this.x = 150;
		this.y = 200;
		this.vy = 0
		this.originalWidth = 1102;
		this.originalHeight = 870;
		this.width = this.originalWidth/27.55;
		this.height = this.originalHeight/29;
		this.weight = 1;
		this.frameX = 0;
	}
	update(){
		let curve = Math.sin(angle) * 20;
		if (this.y > canvas.height - (this.height * 3) + curve){
			this.y = canvas.height - (this.height * 3) +curve;
			this.vy = 0;
		} else {
		this.vy += this.weight;
		this.vy *= 0.9;
		this.y += this.vy;
	}
	if (this.y < 0 + this.height){
		this.y = 0 + this.height;
		this.vy = 0; 
	}
	if (spacePressed && this.y > this.height * 3) this.flap();
	}
	draw(){
		ctx.fillStyle = 'red';
		//ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.drawImage(dragonSprite, this.frameX * this.originalWidth, 0, this.originalWidth, this.originalHeight, this.x - 20, this.y - 12, this.width * 1.7,this.height * 1.7);

	}

	flap(){
		this.vy -= 2;
		if (this.frameX >= 3) this.frameX = 0;
		else if (frame%3 === 0) this.frameX++;
	}
}
const bird = new Bird()