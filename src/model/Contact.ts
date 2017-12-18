import { observable, action, computed } from 'mobx';

export class Contact {
  @observable
  name: string = '';

  @observable
  surname: string = '';

  @computed
  get fullName(): string {
    return `${this.name} ${this.surname}`;
  }

  @action
  setName(value: string) {
    this.name = value;
  }

  @action
  setSurname(value: string) {
    this.surname = value;
  }
}
