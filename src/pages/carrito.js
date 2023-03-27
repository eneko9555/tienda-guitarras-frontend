import Layout from "@/components/layout"
import styles from "../styles/carrito.module.css"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function carrito({carrito, actualizarCantidad, eliminarProducto}) {
    
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => producto.cantidad * producto.precio + total , 0)
        setTotal(calculoTotal)
    }, [carrito])


  return (
    <Layout
        title="Carrito"
        description={"Carrito de compras"}
    >
        <main className="contenedor">
            <h1 className="heading">Carrito</h1>
            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Artículos</h2>
                    {carrito?.length === 0 ? "Carrito Vacio" : 
                        carrito?.map(producto => 
                            <div key={producto.id} className={styles.producto}>
                                <div>
                                  <Image width={250} height={480} src={producto.imagen} alt={`Imagen ${producto.nombre}`}></Image>
                                </div>
                                <div>
                                       <p className={styles.nombre}>{producto.nombre}</p>
                                       <div className={styles.cantidad}> 
                                       <p>Cantidad : </p>
                                        <select defaultValue={producto.cantidad} className={styles.select} onChange={e => actualizarCantidad({id : producto.id, cantidad: e.target.value})}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                       </div>
                                       
                                       <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                       <p className={styles.cantidad}>Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>

                                       <button className={styles.eliminar} type="button" onClick={() => eliminarProducto(producto.id)}>
                                            X 
                                       </button>
                                </div>
                            </div>    
                        )
                    }
                </div>
                <aside className={styles.resumen}>
                    <h3>Resúmen del Pedido</h3>
                    <p>Total a pagar: ${total}</p>
                </aside>
            </div>
        </main>

    </Layout>
    
  )
}
