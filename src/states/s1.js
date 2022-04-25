export default class s1 {
  constructor(manager) {
    this.manager = manager;
  }

  async init() {
    await this.manager.z9();
    await this.manager.z2();
    await this.manager.z1();
  }

  async e1() {
    await this.manager.z7();
    await this.manager.z5();
    this.manager.state = new this.manager.states.S1(this.manager);
    await this.manager.state.init();
  }

  e2() {
  }
}
