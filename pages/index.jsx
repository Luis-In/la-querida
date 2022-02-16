import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//imgs
import field from "../assets/field_bg.png"
import skybox from "../assets/skybox.png"
import logo from "../assets/logo_la_querida.png"
import flota from "../assets/flota_lateral.png"
import whats from "../assets/whatsapp.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Querida</title>
        <meta name="description" content="La Querida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logo}>
          <div className={styles.laquerida}>
            <Image 
              src={logo}
              layout='responsive'
              priority
            />
          </div>
          <span className={styles.logo_cons}>Web en construcción</span>
          <span className={styles.logo_prox}>PROXIMAMENTE</span>
          <div className={styles.logo_form}>
            <span className={styles.logo_light}>deja tu correo</span>
            <div className={styles.logo_input}>
              <input type="text" placeholder="correo o whatsapp" className={styles.logo_inputText}/>
              <button className={styles.logo_button}>✔</button>
            </div>
            <span className={styles.logo_bold}>te avisamos</span>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.info}>
            <div>
              <div className={styles.con}>
                CONTACTO
                <Image 
                  src={whats}
                  width="25px"
                  height="25px"
                />
              </div>
              <span>
                Boleteria Yacuiba <b>710 300 11 - </b>  
              </span>
              <span>
                Encomiendas Yacuiba <b>710 300 12 - </b>
              </span>
              <span>
                Boleteria Scz <b>710 300 13 - </b> 
              </span>
              <span>
                Encomiendas Scz <b>710 300 14 - </b> 
              </span>
              <span>
                Sucursal encomiendas Bimodal Santa Cruz <b>710 300 14</b> 
              </span>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.background}>
        <div className={styles.landscape}>
            <Image 
              src={skybox}
              layout='fill'
              objectFit='cover'
              priority
            />
            <Image 
              src={field}
              layout='fill'
              objectFit='cover'
              priority
            />
          </div>
          <div className={styles.bg}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
            <div className={styles.four}></div>
            <div className={styles.five}></div>
          </div>
          <div className={styles.flota}>
            <Image 
              src={flota}
              layout='responsive'
              priority
            />
          </div>
      </div>
    </div>
  )
}
