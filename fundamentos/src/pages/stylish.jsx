import styles from '../styles/Stylish.module.css'
import Layout from '../components/Layout'

export default function Stylish() {
    return (
        <Layout titulo="Exemplo de CSS Modularized">
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}
