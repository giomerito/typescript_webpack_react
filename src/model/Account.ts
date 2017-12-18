import { observable, action, computed } from 'mobx';

export class Account{

    @observable
    name: string = '';

    @observable
    saldo: number = 0;

    @action
    setName(value: string){
        this.name = value;
    }

    @computed
    get fullSaldo(): number {
        return this.saldo;
    }

}