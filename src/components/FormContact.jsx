import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useState } from 'react';

export const FormContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div style={{ padding: '2em' }}>
        <h2>Entre em contato conosco</h2>
        <form onSubmit={handleSubmit} className="p-fluid">
          <div className="p-field">
            <label htmlFor="name">Nome</label>
            <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="p-field">
            <label htmlFor="email">Email</label>
            <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="p-field">
            <label htmlFor="message">Mensagem</label>
            <InputTextarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} />
          </div>
          <Button type="submit" label="Enviar" icon="pi pi-check" />
        </form>
      </div>
    </>
  )
}