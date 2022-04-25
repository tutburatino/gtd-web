import fsp from 'fs/promises';
import S0 from './states/s0';
import S1 from './states/s1';
import S2 from './states/s2';

export default class A0 {
  constructor(filepaths) {
    this.states = {
      S0,
      S1,
      S2,
    };

    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });

    this.o1 = { filepaths, unexplored: filepaths, wayToExplore: null };

    this.o2 = { error: null, fileStat: null, promise: Promise.resolve(this.o3) };

    this.o3 = [];

    console.log('Экземпляр А0 создан');
    this.state = new this.states.S0(this);
  }

  init() {
    console.log('init() Инициализация');
    this.state.init();
  }

  x1() {
    console.log('x1() Передан пустой список путей?');
    const result = this.o1.filepaths.lengths === 0;
    console.log(`${result ? 'ДА' : 'НЕТ'}`);
    return result;
  }

  x2() {
    console.log('x2() Это последний путь из списка исследуемых?');
    const result = this.o1.unexplored.length === 0;
    console.log(`${result ? 'ДА' : 'НЕТ'}`);
    return result;
  }

  x3() {
    console.log('x3() По исследованному пути обнаружена директория?');
    const result = this.o2.fileStat.isDirectory();
    console.log(`${result ? 'ДА' : 'НЕТ'}`);
    return result;
  }

  e1() {
    console.log('e1() Пришёл результат исследования пути');
    this.state.e1();
  }

  e2() {
    console.log('e2() Произошла ошибка исследования пути');
    this.state.e2();
  }

  z0() {
    console.log('z0() Изъять из списка и разместить путь для исследования');
    const [first, ...tail] = this.o1.unexplored;
    this.o1.unexplored = tail;
    this.o1.wayToExplore = first;
  }

  z1() {
    console.log('z1() Запустить исследование очередного неисследованного адреса');
    // console.log(`this.o1.wayToExplore : ${JSON.stringify(this.o1.wayToExplore)}`);
    fsp.stat(this.o1.wayToExplore, 'utf-8')
      .then((stats) => {
        // console.log('from then');
        this.o2.fileStat = stats;
        this.e1();
      })
      .catch((err) => {
        console.log('from catch');
        console.log(`err : ${err}`);
        this.o2.error = err;
        this.e2();
      });
  }

  z2() {
    console.log('z2() В общий результат внести запись null');
    this.o3.push(null);
  }

  z3() {
    console.log('z3() В общий результат добавить тип "file"');
    this.o3.push('file');
  }

  z4() {
    console.log('z4() В общий результат добавить тип "directory"');
    this.o3.push('directory');
  }

  z5() {
    console.log('z5() Вызвать итоговый resolve с передачей результата');
    this.resolve(this.o3);
  }
}
