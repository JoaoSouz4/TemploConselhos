import './styles.css'

export const BoxMensage = (props) => {
    return (
        <section>
            <label>
                {props.currentMsg}
            </label>
        </section>
    )
}