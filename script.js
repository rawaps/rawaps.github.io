function setup() {
	createCanvas(screen.width, screen.height/1.1);
	w = new Walker();
}

function draw() {
	background(250, 110, 136);
	w.display();
	w.update();
}

function Walker() {
	this.pos = createVector(width / 2, height / 2);
	this.vel = createVector(0, 0);
	this.display = function() {
		fill(255);
		stroke(250, 110, 136);
		ellipse(this.pos.x, this.pos.y, 40, 40);
	}
	this.update = function() {
		// Whenever the ball hits to the walls
		// the ball has a new velocity with the opposite direction
		if (this.pos.x <= 20 || this.pos.x >= width - 20) {
			this.vel.x = this.vel.x * -1;
		} else if (this.pos.y <= 20 || this.pos.y >= height - 20) {
			this.vel.y = this.vel.y * -1;
		}
		// Without this, speed of the ball could go very high as soon as 
		// it hits the walls
		this.vel.setMag(0.76);
		// This is where the random acceleration value is set
		this.acc = p5.Vector.fromAngle(random(TWO_PI));
		this.acc.setMag(0.05);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}
}