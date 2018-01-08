import { Account } from "../model/Account";
import * as React from "react";
import { observer } from 'mobx-react';
export interface AccountViewProps {
    conta: Account;
}
function handleOnChange(
    property: keyof Account,
    handler: (value: string) => void) {
    return (e: React.FormEvent<HTMLInputElement>) => {
        handler(e.currentTarget.value);
    };
}
//Inicio da Class AccountView
@observer
export class AccountView extends React.Component<AccountViewProps>{
    readonly setContaAccount = handleOnChange(
        'account',
        value => this.props.conta.setAccount(value)
    );
    readonly setContaId = handleOnChange(
        'id',
        value => this.props.conta.setId(value)
    );
    readonly onSubmit = () => {
        var contas = [];
        var { account } = this.props.conta;
        contas.push(account);
        if (account == '') {
            alert('Não foi possivel adicionar!\nÉ preciso preencher o campo com o valor desejado.');
        } else {
            var str = JSON.stringify(contas);
            localStorage.setItem("contas", str);
            alert('Dados salvo!');
        }
    }
    render() {
        const { conta } = this.props;
        return (
            <div className="container">
                <form id="add-form">
                    <h2>Adicionar conta</h2>
                    <TextInput label='Conta' id='account' value={conta.account} onChange={this.setContaAccount} />
                    <br />
                    <button type='submit'>Incluir</button>
                </form>
                <br />
                <div>
                    <table id="list-table">
                        <thead>
                            <th>Conta</th>
                            <th>Opções</th>
                        </thead>
                        <tr>
                            <td>Caixa 2</td>
                            <td>
                                <a href="#" data-action="edit">edit</a> | <a href="#" data-action="delete">delete</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }

}//Fim da Class AccountView


interface TextInputProps {
    label: string;
    value: string;
    id: string;
    onChange: React.EventHandler<React.FormEvent<HTMLInputElement>>;
}
function TextInput(props: TextInputProps) {
    const {
        label,
        value,
        id,
        onChange
    } = props;
    return (
        <div className='form-group'>
            <label>{label}:</label>
            <input
                type='text'
                className='form-control'
                id={id}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}