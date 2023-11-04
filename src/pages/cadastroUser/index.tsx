import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';

import logo from '../../../public/logo.jpeg';

import { Input } from '../../components/input/index';
import { Button } from '../../components/button/index';

import Link from 'next/link';

export default function cadastroUser() {
  return (
    <>
    <Head>
      <title>Faça seu cadastro agora!</title> 
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logo} alt="Logo" width={300} height={300} />

      <div className={styles.login}>
        <h1>Criando sua conta</h1>

        <form>
          <Input
            placeholder="Digite seu nome"
            type="text"
          />

          <Input
            placeholder="Digite seu email"
            type="text"
          />

          <Input
            placeholder="Sua senha"
            type="password"
          />
          
          <Button
            type="submit"
            loading={false}
          >
            Cadastrar
          </Button>
        </form>

        <Link href="/">
           Já possui uma conta? Faça login!
        </Link>

      </div>
    </div>
    </>
  )
}
