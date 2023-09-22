import MathClass from './math';

export default class Magician extends MathClass {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
