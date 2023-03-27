import styles from "../styles/curso.module.css"

export default function Curso({ curso }) {

  const { contenido, imagen, titulo } = curso.attributes

  return (
    <section className={`${styles.curso} img`}>
      <style jsx>{`
               .img {
                    background-image: linear-gradient(to right, rgb(0 0 0 /.35), rgb(0 0 0 / .9)), url(${imagen.data.attributes.url})
            }

            `}</style>

      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p>{contenido}</p>
        </div>
      </div>
    </section>
  )
}