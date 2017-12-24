import * as React from 'react';
import { Transacao } from '../model/Transacao';
import { observer } from 'mobx-react';
import { Account } from '../model/Account';

export interface TrasacaoViewProps{
    transaction: Transacao;
    //account: Account;       
}

/* funções */

function handleOnChange(
    property: keyof Transacao, 
    handler: (value: string) => void){

        return (e: React.FormEvent<HTMLInputElement>) => {
            handler(e.currentTarget.value);
        }
}

/* fim de funções */

@observer
export class TransacaoView extends React.Component<TrasacaoViewProps>{

    readonly setId = handleOnChange(
        'id',
        value => this.props.transaction.setId(value)
    );

    readonly setConta = handleOnChange(
        'conta',
        value => this.props.transaction.setConta(value)
    );

    readonly setOperacao = handleOnChange(
        'operacao',
        value => this.props.transaction.setOperacao(value)
    );

    readonly setValor = handleOnChange(
        'valor',
        value => this.props.transaction.setValor(parseFloat(value))
    );

    readonly setData = handleOnChange(
        'data',
        value => this.props.transaction.setData(new Date(value))
    );
   
    readonly onSubmit = () => {

        var { id, data, conta, operacao, valor } = this.props.transaction;
       
        var acc = localStorage.getItem(conta);     
        

        if(acc == ''){
            alert('A conta informada não existe!');
        }else if(operacao == '' && valor == 0){
            alert('É preciso preencher os \nvalores necessários para procequir com a operação!');
        }else{            
            localStorage.setItem(id, JSON.stringify({id, data, conta, operacao, valor}));
            alert( `${ operacao }` + ' realizado com sucesso!');
        }

    }

    render() {
        const { transaction } = this.props;
        
        
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <h2>Operações</h2>
                    <TextInput 
                        label='Id'
                        value={transaction.id}
                        onChange={this.setId}
                    />  

                    
                    <TextInput 
                        label='Conta'
                        value={transaction.conta}
                        onChange={this.setConta}
                    /> 

                    <TextInput 
                        label='Operação'
                        value={transaction.operacao}
                        onChange={this.setOperacao}
                    />

                    <NumberInput 
                        label='Valor'
                        value={transaction.valor}
                        onChange={this.setValor}
                    />   

                    <input type="submit" value="Cadastrar"/>

                </form>
            </div>
        );
    }

}//Fim da classe de Trasações

interface TextInputProps{
    label: string;
    value: string;
    onChange: React.EventHandler<React.FormEvent<HTMLInputElement>>;
}

interface NumberInputProps{
    label: string;
    value: number;
    onChange: React.EventHandler<React.FormEvent<HTMLInputElement>>;
}

interface DateInputProps{
    label: string;
    value: Date;
    onChange: React.EventHandler<React.FormEvent<HTMLDataElement>>;
}

function TextInput(props: TextInputProps){
    const{
        label,
        value,
        onChange
    } = props;

    return(
        <div className='form-group'>
            <label>{label}:</label>
            <input type='text' className='form-control' value={value} onChange={onChange} />
        </div>
    );
}

function DateInput(props: DateInputProps){
    const{
        label,
        value,
        onChange
    } = props;

    return(
        <div className='form-group'>
            <label>{label}:</label>
            <input type='date' className='form-control' value={Date.apply(value)} onChange={onChange} />
        </div>
    );
}

function NumberInput(props: NumberInputProps){
    const{
        label,
        value,
        onChange
    } = props;

    return(
        <div className='form-group'>
            <label>{label}:</label>
            <input type='number' className='form-control' value={value} onChange={onChange} />
        </div>
    );
}