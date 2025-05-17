import './index.css'
import Botao from './Botao.jsx'
import Mensagens from './Mensagens.jsx'

function Chat() {
    return (
        <div class="chat">
            <div class="header">
                <Botao />
                <h3>Meu Chat</h3>
            </div>
            <Mensagens />
        </div>
    )
}

export default Chat;