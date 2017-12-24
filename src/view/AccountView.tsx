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

        var { id, account } = this.props.conta;       

        if (id == '' || account == '') {
            alert('Não foi possivel adicionar!\nÉ preciso preencher o campo com o valor desejado.');
        } else {
            localStorage.setItem(id, JSON.stringify({account}));
            alert('Dados salvo!');
        }
        
    }
   

    render() {
        const { conta } = this.props;
        return (
            <div className="container">
                <form className="account-view container" onSubmit={this.onSubmit}>
                    <h2>Adicionar conta</h2>
                    <TextInput 
                        label='Id'
                        value={conta.id}                        
                        onChange={this.setContaId}
                    />
                    <TextInput
                        label='Conta'
                        value={conta.account}                        
                        onChange={this.setContaAccount}
                    />

                    <br />

                    <input
                        type='submit'
                        value='Incluir'
                    />   
                </form>               
                
            </div>


        );
    }

}//Fim da Class AccountView


interface TextInputProps {
    label: string;
    value: string;   
    onChange: React.EventHandler<React.FormEvent<HTMLInputElement>>;
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

            <input
                type='text'
                className='form-control'
                value={value}                
                onChange={onChange}
            />

        </div>
    );
}