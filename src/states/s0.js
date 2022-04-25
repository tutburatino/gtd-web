export default class s0 {
  constructor(manager) {
    this.manager = manager;
  }

  async init() {
    await this.manager.z3();
    await this.manager.z6();
  }

  e1() {
  }

  async e2() {
    if (this.manager.x1()) {
      this.manager.state = new this.manager.states.S0(this.manager);
      await this.manager.state.init();
    } else if (!this.manager.x1()) {
      await this.manager.z8();
      await this.manager.z4();
      this.manager.state = await new this.manager.states.S1(this.manager);
      await this.manager.state.init();
    }
  }
}
