import './index.css'
import Mensagem from './Mensagem.jsx'

const mensagens = [
    {
        descricao: 'Oi...',
        enviado: false,
        visualizado: true
    },
    {
        descricao: 'Tu não me ama mais?',
        enviado: false,
        visualizado: true
    },
    {
        descricao: 'Oi, boa tarde.',
        enviado: true,
        visualizado: false
    },
    {
        descricao: 'Quem é você mesmo?',
        enviado: true,
        visualizado: false
    }
]

function Mensagens() {
    return (
        <div className='content'>
            <ul>
                {mensagens.map((mensagem) => {
                    const isEnviado = mensagem.enviado ? 'message enviado' : 'message recebido'
                    const isVisualizado = mensagem.visualizado ? 'visualized yes' : 'visualized'

                    return (
                        <Mensagem
                            isEnviado={isEnviado}
                            isVisualizado={isVisualizado}
                            mensagem={mensagem}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default Mensagens;