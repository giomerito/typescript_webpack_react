import * as React from "react";
import { Transacao } from '../model/Transacao';


interface ExtratoViewProps{
    transacao: Transacao;
}

export class ExtratoView extends React.Component<ExtratoViewProps>{


    readonly onSearch = () => {
        
    }

    render(){

        const { transacao } = this.props;

        return (
            <div className="form-group">
                <form onSubmit={this.onSearch}>
                    <label htmlFor="">Adicionar Conta: </label>
                    <input type="text" value={transacao.conta} />
                    <input type="submit" value='Pesquisar' />
                </form>
            </div>
        );
    }

}