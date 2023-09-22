import MathClass from './math';

export default class Daemon extends MathClass {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
