class Panel {
  constructor() {
    this.scale = 0;
    this.angle = 0;
  }

  draw() {
    context.fillStyle = "rgba(255, 0, 0, 0.7)";

    context.resetTransform();
    // context.setTransform(1, 0, 0, 1, 0, 0);
    context.translate(oX, oY);
    context.scale(this.scale, this.scale);
    context.rotate(canvasUtil.toRadian(this.angle));
    context.translate(-oX, -oY);
    context.fillRect(oX - 150, oY - 150, 300, 300);
    context.resetTransform();
  }

  showContent() {
    context.fillStyle = "#fff";
    context.fillText(selectedBox.index, oX, oY);
  }
}
