export function Home(){
  return (
    <>
      <h1>Olá, este é meu portfolio 🖖  </h1>
      <tr>
        <td>
          <a href="https://avatars.githubusercontent.com/u/88861546?v=4" target="_blank">
            <img src={'https://avatars.githubusercontent.com/u/88861546?v=4'} className="avatar" alt="avatar" />
          </a>
        </td>
        <td>
          <h2 style={{paddingLeft: '20px', textAlign: 'left'}}>
            Meu nome é Thiago Azevedo :)
          </h2>
          <h3 style={{paddingLeft: '20px', textAlign: 'left'}}>
            Sou desenvolvedor full stack formado em Analise e Desenvolvimento de Sistemas e apaixonado por tecnologia.
          </h3>
          <h4 style={{paddingLeft: '20px', textAlign: 'left'}}>
            O que mais me motiva é a paixão pelo que faço e a incrível sensação de dar vida a um projeto através das soluções que a programação oferece. 
            Cada linha de código é como transforma ideias em soluções, e é exatamente essa magia que me mantém entusiasmado e dedicado ao mundo da programação.  
          </h4>
        </td>
      </tr>
    </>
  )
} 