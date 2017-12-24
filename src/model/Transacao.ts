import { observable, action, computed } from 'mobx';
import { Account } from './Account';



export class Transacao{

    @observable
    id: string = '';
    
    @observable
    conta: string = '';

    @observable
    operacao: string;

    @observable
    valor: number = 0;

    @observable
    data: Date = new Date();

    @action
    setId(value: string){
        this.id = value;
    }

    @action
    setData(value: Date){
        this.data = new Date(value);
    }

    @action
    setConta(value: string){
        this.conta = value;
    }

    @action
    setOperacao(value: string){
        this.operacao = value;
    }
    
    @action
    setValor(value: number){
        this.valor = value;
    }

    @computed
    get Extrato(): string {
        return (
             "  Conta   : " + this.conta +
             "\nOperação: " + this.operacao + 
             "\nValor   : " + this.valor
        );
    }
    
}