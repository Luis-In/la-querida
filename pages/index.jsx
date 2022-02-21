import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const imgix = ({ src }) => {
  return src
}

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
              src="/img/logo_la_querida.png"
              layout='responsive'
              width={450}
              height={172}
              priority={true}
              alt='Logo-La-Querida'
              loading='eager'
              loader={imgix}
              unoptimized={true}
            />
          </div>
          <span className={styles.logo_cons}>Web en construcción</span>
          <div className={styles.logo_prox}>
            <Image 
              src="/img/proximamente.svg"
              width={980}
              height={90}
              layout="responsive"
              alt="proximamente"
              loader={imgix}
              unoptimized={true}
            />
          </div>
          <div className={styles.whatsapp}>
            <span className={styles.logo_light}>deja tus datos</span>
              <a href="https://wa.me/59172781880" target="_blank" className={styles.whats_icon} rel="noreferrer">
                <Image 
                  src="/img/whatsapp.svg"
                  width={110}
                  height={110}
                  alt='whatsapp'
                  loader={imgix}
                  unoptimized={true}
                  objectFit="contain"
                  layout='fill'
                />
              </a>
            <span className={styles.logo_bold}>te avisamos</span>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.con}>
            CONTACTO
            <Image 
              src="/img/whatsapp.svg"
              width={25}
              height={25}
              alt='whatsapp'
              loader={imgix}
              unoptimized={true}
            />
          </div>
          <div className={styles.con_info}>
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
      </main>
      <div className={styles.background}>
        <div className={styles.landscape}>
            <Image 
              src="/img/skybox.png"
              layout='fill'
              objectFit='cover'
              priority={true}
              alt=''
              loading='eager'
              loader={imgix}
              unoptimized={true}
            />
            <Image 
              src="/img/field_bg.png"
              layout='fill'
              objectFit='cover'
              priority={true}
              alt=''
              loading='eager'
              loader={imgix}
              unoptimized={true}
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
              src="/img/flota_lateral.png"
              layout='responsive'
              width={720}
              height={209}
              priority={true}
              alt=''
              loading='eager'
              loader={imgix}
              unoptimized={true}
            />
          </div>
      </div>
    </div>
  )
}
