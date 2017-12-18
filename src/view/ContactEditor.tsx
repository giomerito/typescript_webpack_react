import * as React from 'react';
import { observer } from 'mobx-react';
import { Contact } from '../model/Contact';

export interface ContactEditorProps {
  contact: Contact;
}

function handleOnChange(
  property: keyof Contact,
  handler: (value: string) => void) {

  return (e: React.FormEvent<HTMLInputElement>) => {
    handler(e.currentTarget.value);
  };
}

@observer
export class ContactEditor extends React.Component<ContactEditorProps> {

  readonly setContactName =
    handleOnChange(
      'name',
      value => this.props.contact.setName(value)
    );

  readonly setContactSurname =
    handleOnChange(
      'surname',
      value => this.props.contact.setSurname(value)
    );

  render() {
    const { contact } = this.props;

    return (
      <form className="contact-editor container">
        <TextInput
          label="Nome"
          value={contact.name}
          onChange={this.setContactName}
        />

        <TextInput
          label="Sobrenome"
          value={contact.surname}
          onChange={this.setContactSurname}
        />

        <div className="form-group">
          Nome completo: {contact.fullName}
        </div>
      </form>
    );
  }

}

interface TextInputProps {
  label: string;
  value: string;
  onChange: React.EventHandler<React.FormEvent<HTMLInputElement>>;
}

function TextInput(props: TextInputProps) {
  const { label, value, onChange } = props;

  return (
    <div className="form-group">
      <label>{label}:</label>
      <input type="text" className="form-control" value={value} onChange={onChange} />
    </div>
  );
}
