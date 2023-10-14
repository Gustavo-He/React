import styles from "./Card.module.css"

function Card(props) {
    return(
        <div className={styles.card}>
            <img src={props.img}/>
            <h1>{props.nome}</h1>
            <p>{props.desc}</p>
            <p></p>
        </div>
    )
}

export default Card