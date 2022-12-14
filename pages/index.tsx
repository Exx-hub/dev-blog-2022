import Head from "next/head";
import Image from "next/legacy/image";
import styles from "../styles/Home.module.css";
import Typed from "react-typed";
import Tabs from "../components/Tabs";
import Featured from "../components/Featured";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <div className="container home">
      <Head>
        <title>HOY LOP!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <article className={styles.left}>
          <h1>
            <Typed
              strings={["hoy Lop!"]}
              loop
              typeSpeed={100}
              backSpeed={180}
            />
          </h1>
          <section>
            <div className={styles.imageContainer}>
              <Image
                src={"/lop.jpg"}
                alt=""
                width={562}
                height={750}
                layout="intrinsic"
                placeholder="blur"
                blurDataURL="/lop.jpg"
              />
              <h2>all about me</h2>
            </div>
          </section>
        </article>
        <article className={styles.right}>
          <Socials isFooter={false} />

          <Tabs />

          <Featured />
        </article>
      </main>
    </div>
  );
}
