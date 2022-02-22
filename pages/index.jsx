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
          <div className={styles.web_cons}>
            <Image 
              src="/img/web_construccion.svg"
              width={340}
              height={30}
              layout="responsive"
              alt="Web en construcción"
              loader={imgix}
            />
          </div>
          <div className={styles.logo_prox}>
            <Image 
              src="/img/proximamente.svg"
              width={980}
              height={90}
              layout="responsive"
              alt="proximamente"
              loader={imgix}
            />
          </div>
          <div className={styles.whatsapp}>
            <div className={styles.deja_datos}>
              <Image 
                src="/img/dejar_datos.svg"
                alt="deja tus datos"
                loader={imgix}
                layout="responsive"
                height={22}
                width={170}
              />
            </div>
              <a href="https://wa.me/59172781880?text=Por%20favor%20avísame%20cuando%20la%20página%20esté%20disponible!" target="_blank" className={styles.whats_icon} rel="noreferrer">
                <Image 
                  src="/img/whatsapp.svg"
                  width={110}
                  height={110}
                  alt='whatsapp'
                  loader={imgix}
                  objectFit="contain"
                  layout='fill'
                />
              </a>
            <div className={styles.te_avisamos}>
              <Image 
                src="/img/aviso.svg"
                alt="deja tus datos"
                loader={imgix}
                layout="responsive"
                height={22}
                width={150}
              />
            </div>
          </div>  
        </div>
        <div className={styles.contact}>
          <div className={styles.con_whats}>
            <Image
              src="/img/contacto.svg"
              width={170}
              height={32}
              alt='contacto whatsapp'
              loader={imgix}
            />
          </div>
          <div className={styles.con_info}>
            <div className={styles.con_info_num}>
              <Image
                src="/img/tel1.svg"
                width={290}
                height={20}
                layout="responsive"
                alt='contacto whatsapp'
                loader={imgix}
              />
            </div>
            <div className={styles.con_info_num}>
              <Image
                src="/img/tel2.svg"
                width={290}
                height={20}
                layout="responsive"
                alt='contacto whatsapp'
                loader={imgix}
              />
            </div>
            <div className={styles.con_info_num}>
              <Image
                src="/img/tel3.svg"
                width={290}
                height={20}
                layout="responsive"
                alt='contacto whatsapp'
                loader={imgix}
              />
            </div>
            <div className={styles.con_info_num}>
              <Image
                src="/img/tel4.svg"
                width={290}
                height={20}
                layout="responsive"
                alt='contacto whatsapp'
                loader={imgix}
              />
            </div>
            <div className={styles.con_info_num2}>
              <Image
                src="/img/tel5.svg"
                width={290}
                height={20}
                layout="responsive"
                alt='contacto whatsapp'
                loader={imgix}
              />
            </div>
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
