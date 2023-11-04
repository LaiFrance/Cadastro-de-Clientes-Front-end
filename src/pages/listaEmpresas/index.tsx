import React from 'react';
import './listaEmpresas.module.scss'
import logo from '../../../public/logo.jpeg';
import Image from 'next/image';



import styles from './listaEmpresas.module.scss';


export default function ListaEmpresas() {
  return (
    
  <><div className={styles.containerCenter}>
      <Image src={logo} alt="Logo" width={300} height={300} />
    </div><div className={styles.container}>
        <div className={styles['lista-empresas']}>
          <div className={styles['empresa-box']}>
            <h2>Detalhes da Empresa</h2>
            <p>Nome da Empresa: energizou</p>
            <p>CNPJ: xxxx</p>
            <p>CEP: xxxx</p>
            <p>Endereço: xxxx</p>
            <p>Número: xx</p>
            <p>Telefone: xxx</p>
            <p>Email: xxx</p>
          </div>

          {/* Repita este bloco para cada empresa listada */}
        </div>
      </div></>
  );
}
