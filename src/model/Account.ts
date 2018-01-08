import { observable, action, computed } from 'mobx';

export class Account {   
    @observable
    account: string = '';

    @observable
    id: string = '';

    @observable
    saldo: number = 0;

    @computed
    get fullSaldo(): number {
        return this.saldo;
    }

    @computed
    get allContas(): string {
        return this.account;
    }

    @computed
    get idConta(): string{
        return this.id;
    }
    
    @action
    setId(value: string){
        this.id = value;
    }

    @action
    setAccount(value: string){
        this.account = value;
    }
}