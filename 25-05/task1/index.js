class Sportsman {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

class Swimmer extends Sportsman {
  constructor(name, style) {
    super(name);
    this.style = style;
  }
  swim() {
    console.log(`${this.name} is swimming ${this.style}`);
  }
}
}
