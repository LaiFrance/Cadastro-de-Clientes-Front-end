import { useContext, FormEvent, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

import logo from '../../public/logo.jpeg';

import { Input } from '../components/input/index';
import { Button } from '../components/button/index';

import { AuthContext } from '../contexts/AuthContext'

import Link from 'next/link';

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [senha, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent){
    event.preventDefault();

    let data = {
      email,
      senha
    }

    await signIn(data)
  }

  return (
    <>
    <Head>
      <title>Faça seu login</title> 
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logo} alt="Logo" width={300} height={300} />

      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          <Input
            placeholder="Digite seu email"
            type="text"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />

          <Input
            placeholder="Sua senha"
            type="password"
            value={senha}
            onChange={ (e) => setPassword(e.target.value) }
          />
          
          <Button
            type="submit"
            loading={false}
          >
            Acessar
          </Button>
        </form>

        <Link href="/cadastroUser">
          Nao possui uma conta? Cadastre-se
        </Link>

      </div>
    </div>
    </>
  )
}
