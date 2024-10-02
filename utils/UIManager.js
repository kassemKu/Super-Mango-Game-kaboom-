class UIManager {
  displayLivesCount() {
    this.livesCountUI = add([
      text("", {
        font: "Round",
        size: 50,
      }),
      fixed(),
      pos(70, 10),
    ]);
    this.livesCountUI.add([
      sprite("star-icon"),
      pos(-60, -5),
      scale(3),
      fixed(),
    ]);
  }
  displayCoinCount(player) {
    this.coinCountUI = add([
      text("", {
        font: "Round",
        size: 50,
      }),
      {
        fullCoinCount: get("coin", { recursive: true }).length,
      },
      fixed(),
      pos(70, 70),
    ]);

    this.coinCountUI.add([sprite("coin-icon"), pos(-60, 0), scale(3), fixed()]);
  }
  displayBlinkUIMessage(content, position) {
    const message = add([
      text(content, {
        size: 24,
        font: "Round",
      }),
      area(),
      anchor("center"),
      pos(position),
      opacity(),
      state("flash-up", ["flash-up", "flash-down"]),
    ]);

    message.onStateEnter("flash-up", async () => {
      await tween(
        message.opacity,
        0,
        0.5,
        (nextOpacityValue) => (message.opacity = nextOpacityValue),
        easings.linear
      );
      message.enterState("flash-down");
    });

    message.onStateEnter("flash-down", async () => {
      await tween(
        message.opacity,
        1,
        0.5,
        (nextOpacityValue) => (message.opacity = nextOpacityValue),
        easings.linear
      );
      message.enterState("flash-up");
    });
  }
  displayMainMenu() {
    add([sprite("forest-background"), scale(4)]);
    add([
      sprite("logo"),
      area(),
      anchor("center"),
      pos(center().x, center().y - 170),
      scale(8),
    ]);

    this.displayBlinkUIMessage(
      "Press [Enter] to start",
      vec2(center().x, center().y + 100)
    );
    onKeyPress("enter", () => {
      play("confirm-ui", { speed: 1.5 });
      go("controls");
    });
  }

  displayControlsMenu() {
    add([sprite("forest-background"), scale(4)]);
    add([
      text("Controls", {
        size: 50,
        font: "Round",
      }),
      area(),
      anchor("center"),
      pos(center().x, center().y - 200),
    ]);
    const controlPrompts = add([pos(center().x + 30, center().y)]);

    controlPrompts.add([sprite("up"), pos(0, -90)]);
    controlPrompts.add([sprite("down")]);
    controlPrompts.add([sprite("left"), pos(-80, 0)]);
    controlPrompts.add([sprite("right"), pos(80, 0)]);
    controlPrompts.add([sprite("space"), pos(-200, 0)]);

    controlPrompts.add([
      text("Jump", { font: "Round", size: 32 }),
      pos(-190, 100),
    ]);

    controlPrompts.add([
      text("Move", { font: "Round", size: 32 }),
      pos(10, 100),
    ]);

    this.displayBlinkUIMessage(
      "Press [Enter] to start Game",
      vec2(center().x, center().y + 200)
    );
    onKeyPress("enter", () => {
      play("confirm-ui", { speed: 1.5 });
      go(1);
    });
  }

  display1Message() {
    add([
      text("Ana Ma3lmak inta weah wlaaaaak!", {
        size: 50,
        font: "Round",
      }),
      area(),
      anchor("center"),
      pos(center().x + 3000, center().y - 350),
    ]);
  }

  display2Message() {
    add([
      text(
        "Ka2noo ma 3agbak habibi... rooh d2 rask bl walll 3m tfhm wlaaaak!!!",
        {
          size: 50,
          font: "Round",
        }
      ),
      area(),
      anchor("center"),
      pos(center().x + 3000, center().y - 350),
    ]);
  }

  display3Message() {
    add([
      text(
        "Ma2laf mn 3andak... 2lt ll3alm ano ant saweet al game fashart wlaak gahl",
        {
          size: 50,
          font: "Round",
        }
      ),
      area(),
      anchor("center"),
      pos(center().x + 1500, center().y - 350),
    ]);
  }

  displayGameOverScreen() {
    add([rect(1280, 720), color(0, 0, 0)]);
    add([
      text("noooooooob hahahahahaha", { size: 50, font: "Round" }),
      area(),
      anchor("center"),
      pos(center()),
    ]);
    this.displayBlinkUIMessage(
      "Press [Enter] to restart Game. booot",
      vec2(center().x, center().y + 100)
    );

    onKeyPress("enter", () => {
      play("confirm-ui");
      go(1);
    });
  }

  displayEndGameScreen() {
    add([rect(1280, 720), color(0, 0, 0)]);
    add([
      text("You Won! Thanks for Playing. Ya nob.", { size: 50, font: "Round" }),
      area(),
      anchor("center"),
      pos(center()),
    ]);

    this.displayBlinkUIMessage(
      "Press [ Enter ] to Play Again, Eza rgaaal",
      vec2(center().x, center().y + 100)
    );

    onKeyPress("enter", () => {
      play("confirm-ui");
      go("menu");
    });
  }

  addDarkBg() {
    add([rect(270, 130), color(0, 0, 0), fixed()]);
  }
}

export const uiManager = new UIManager();
