import * as React from 'react';
import { Transacao } from '../model/Transacao';
import { observer } from 'mobx-react';
import { Account } from '../model/Account';
import { addEventListener } from 'history/DOMUtils';

export interface TrasacaoViewProps {
    transaction: Transacao;
    //account: Account;       
}

/* funções */

function handleOnChange(
    property: keyof Transacao,
    handler: (value: string) => void) {

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

        var acc = localStorage.getItem('accounts');
        
        if (acc == '') {
            alert('A conta informada não existe!');
        } else if (operacao == '' && valor == 0) {
            alert('É preciso preencher os \nvalores necessários para procequir com a operação!');
        } else {
            localStorage.setItem('operacoes', JSON.stringify({conta, data, operacao, valor }));
            alert(`${operacao}` + ' realizado com sucesso!');
        }
        

    }


    render() {
        const { transaction } = this.props;


        return (
            <div>
                <form onSubmit={this.onSubmit} id="add-form">
                    <h2>Operações</h2>
                    <TextInput
                        label='Conta'
                        value={transaction.conta}
                        onChange={this.setConta}
                    />

                    <DateInput
                        label="Data"
                        value={transaction.data}
                        onChange={this.setData}
                    />
                    
                    <label>Operação:</label>
                    <select className="form-control" value={transaction.operacao}>
                        <option>Credito</option>
                        <option>Debito</option>
                    </select><br />


                    <NumberInput
                        label='Valor'
                        value={transaction.valor}
                        onChange={this.setValor}
                    />

                    <button type="submit">Cadastrar</button>

                </form>
                <br />
                <div>
                    <table id="list-table">
                        <thead>
                            <th>Conta</th>
                            <th>Data</th>                            
                            <th>Operação</th>
                            <th>Saldo</th>
                            <th>Opções</th>
                        </thead>
                    </table>
                </div>

            </div>
        );
    }

}//Fim da classe de Trasações

interface TextInputProps {
    label: string;
    value: string;
    onChange: React.EventHandler<React.FormEvent<HTMLInputElement>>;
}

interface NumberInputProps {
    label: string;
    value: number;
    onChange: React.EventHandler<React.FormEvent<HTMLInputElement>>;
}

interface DateInputProps {
    label: string;
    value: Date;
    onChange: React.EventHandler<React.FormEvent<HTMLDataElement>>;
}


function TextInput(props: TextInputProps) {
    const {
        label,
        value,
        onChange
    } = props;

    return (
        <div className='form-group'>
            <label>{label}:</label>
            <input type='text' className='form-control' value={value} onChange={onChange} />
        </div>
    );
}

function DateInput(props: DateInputProps) {
    const {
        label,
        value,
        onChange
    } = props;

    return (
        <div className='form-group'>
            <label>{label}:</label>
            <input type='date' className='form-control' value={Date.apply(value)} onChange={onChange} />
        </div>
    );
}

function NumberInput(props: NumberInputProps) {
    const {
        label,
        value,
        onChange
    } = props;

    return (
        <div className='form-group'>
            <label>{label}:</label>
            <input type='number' className='form-control' value={value} onChange={onChange} />
        </div>
    );
}