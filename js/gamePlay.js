const gamePlay = {
    key: "gamePlay",
    preload: function() {
        this.load.image("sky", "./images/sky.png");
        this.load.image("city", "./images/city.png");
        this.load.image("cloud", "./images/cloud.png");
        this.load.image("road", "./images/road.png");
        this.load.image("liar", "./images/liar_1.svg");
    },
    create: function() {
        // 背景
        this.sky = this.add.tileSprite(w / 2, h / 2, w, h, "sky");
        this.city = this.add.tileSprite(w / 2, h - 520, w, 500, "city");
        this.cloud = this.add.tileSprite(w / 4, h - 520, w / 2, 400, "cloud");
        this.road = this.add.tileSprite(w / 2, h - 460 / 2, w, 460, "road");

        // 主角
        this.liar = this.physics.add.sprite(500, h / 2 + 200, "liar");
    },
    update: function() {
        this.sky.tilePositionX += 2;
        this.city.tilePositionX += 4;
        this.road.tilePositionX += 3;

        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.up.isDown) {
            if (this.isMoving) {
                return;
            }

            this.isMoving = true;

            if (this.liar.y >= 740) {
                this.liar.y -= 150;
            }
        } else if (cursors.down.isDown) {
            if (this.isMoving) {
                return;
            }

            this.isMoving = true;

            if (this.liar.y <= 740) {
                this.liar.y += 150;
            }
        } else {
            this.isMoving = false;
        }
    },
};
