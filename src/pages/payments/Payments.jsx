import React, { useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { InputMask } from 'primereact/inputmask';
import { useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import AccessDenied from "../access_denied/AccessDenied";
import { SidebarComponent } from "../../components/Sidebar";
import '../../assets/css/Payments.css';

export default function Payments() {
    const toast = useRef(null);
    const navigate = useNavigate();
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentSuccessDialogVisible, setPaymentSuccessDialogVisible] = useState(false);

    const validateExpiryDate = (date) => {
        if (!/^\d{2}\/\d{2}$/.test(date)) return false;
        const [month, year] = date.split('/').map(Number);
        if (month < 1 || month > 12) return false;

        const now = new Date();
        const expiry = new Date(`20${year}`, month - 1); // Adjusted to set the correct month
        return expiry > now;
    };

    const validateCardNumber = (number) => {
        const sanitized = number.replace(/\s+/g, '');
        let sum = 0;
        let shouldDouble = false;
        for (let i = sanitized.length - 1; i >= 0; i--) {
            let digit = parseInt(sanitized[i]);
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        return sum % 10 === 0;
    };

    const handlePayment = () => {
        let valid = true;

        if (!validateExpiryDate(expiryDate)) {
            toast.current.show({ severity: 'error', summary: 'Data Inválida', detail: 'A data de validade do cartão é inválida.' });
            valid = false;
        }

        if (!validateCardNumber(cardNumber)) {
            toast.current.show({ severity: 'error', summary: 'Número de Cartão Inválido', detail: 'O número do cartão é inválido.' });
            valid = false;
        }

        if (valid) {
            setPaymentSuccessDialogVisible(true);
        }
    };

    const handleDialogButtonClick = () => {
        setPaymentSuccessDialogVisible(false);
        navigate("/home");
    };
    function tela() {
        return (
            <SidebarComponent>
                <div className="payment-page">
                    <div className="payment-container">
                        <Toast ref={toast} />
                        <Card className="payment-card">
                            <h2>Informações de Pagamento</h2>
                            <div className="payment-form">
                                <div className="field">
                                    <label htmlFor="cardName">Nome no Cartão</label>
                                    <InputText id="cardName" value={cardName} onChange={(e) => setCardName(e.target.value)} />
                                </div>
                                <div className="field">
                                    <label htmlFor="cardNumber">Número do Cartão</label>
                                    <InputMask id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} mask="9999 9999 9999 9999" placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className="field">
                                    <label htmlFor="expiryDate">Data de Validade</label>
                                    <InputMask id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} mask="99/99" placeholder="MM/AA" />
                                </div>
                                <div className="field">
                                    <label htmlFor="cvv">CVV</label>
                                    <InputMask id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} mask="999" placeholder="000" />
                                </div>
                                <Button label="Finalizar Pagamento" className="p-button-rounded p-button-primary" onClick={handlePayment} />
                            </div>
                        </Card>
                    </div>

                    <Dialog
                        visible={paymentSuccessDialogVisible}
                        onHide={() => setPaymentSuccessDialogVisible(false)}
                        header="Pagamento Realizado com Sucesso"
                        animation="slide-up"
                        style={{ width: '30vw' }}
                        className="payment-success-dialog"
                    >
                        <p>Seu pagamento foi processado com sucesso.</p>
                        <div className="dialog-footer">
                            <Button label="OK"
                                icon="pi pi-check"
                                onClick={handleDialogButtonClick}
                                className="p-button-success"
                            />
                        </div>
                    </Dialog>
                </div>
            </SidebarComponent>
        )
    };
    return (localStorage.getItem('authenticated') === 'true') ? tela() : <AccessDenied />
}