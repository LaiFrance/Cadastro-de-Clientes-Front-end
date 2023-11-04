import Head from 'next/head';
import Image from 'next/image';
import styles from './cadastroEmpresa.module.scss';
import { Input } from '../../components/input/index';
import { Button } from '../../components/button/index';


export default function cadastroEmpresas() {

  return (
    <>
      <Head>
        <title>Cadastre sua empresa</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src="/logo.jpeg" alt="Logo" width={300} height={300} />

        <div className={styles.login}>
          <h1>Cadastro de Empresa</h1>

          <form>
            <Input
              name="nome_empresa"
              placeholder="Nome da empresa"
              type="text"
              
            />

            <Input
              name="cnpj"
              placeholder="CNPJ"
              type="text"
              
            />

            <Input
              name="cep"
              placeholder="CEP"
              type="text"
              
            />

            <Input
              name="endereco"
              placeholder="Endereço"
              type="text"
              
            />

            <Input
              name="numero"
              placeholder="Número"
              type="text"
             
            />

            <Input
              name="telefone"
              placeholder="Telefone"
              type="text"
             
            />

            <Input
              name="email"
              placeholder="Email"
              type="email"
              
            />

            <Button type="submit">Cadastrar</Button>
          </form>

         
        </div>
      </div>
    </>
  );
}
