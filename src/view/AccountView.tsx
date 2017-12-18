import { Account } from "../model/Account";
import * as React from "react";

export interface AccountViewProps{
    account: Account;
}

function handleOnChange(
    property: keyof Account,
    handler: (value: string) => void){
    
        return (e: React.FormEvent<HTMLInputElement>) => {
            handler(e.currentTarget.value);
        };
}

export class AccountView extends React.Component<AccountViewProps>{

}