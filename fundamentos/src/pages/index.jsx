import Navegador from '../components/Navegador'

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Stylish" destino="/stylish" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="#904f32" />
            <Navegador texto="Jsx" destino="/jsx" cor="#9400d3" />
            <Navegador texto="Navegação #01" destino="/navegacao" cor="crimson" />
            <Navegador texto="Navegação #02" destino="/cliente/rj-1/72" cor="green" />
            <Navegador texto="Componente com Estado" destino="/estado" cor="pink" />
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#704f32" />
            <Navegador texto="Conteudo Estático" destino="/estatico" cor="#542332" />
        </div>
    )
}
