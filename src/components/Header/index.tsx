import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header(){
  const corruentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return(
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Poodcastr" />

      <p>O melhor para voce ouvir, sempre</p>
      <span>{corruentDate}</span>
    </header>
  );
}