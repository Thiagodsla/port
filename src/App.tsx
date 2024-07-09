import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import { CertificateCard } from './shared/CertificateCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      
      CONTATO
      thiagod11@hotmail.com
      Linkedin: thiagodslima
      GitHub: Thiagodsla

      EXPERIÊNCIA PROFISSIONAL
      FUSION Tecnologia
      Estagiário Desenv. Front-End
      Dez de 2021 - até o momento · 4 meses
      HTML | CSS | JavaScript | Vue.js
      Desenvolvimento de Aplicações Web
      FORMAÇÃO
      Estácio
      Graduação - Análise e Desenvolvimento de Sistemas
      Jun de 2021 - Dez de 2023
      Certificados

      
    
      <tr>
        <td>
          ## 🛠 &nbsp;Tech Stack
        </td>
      </tr>
      <tr>
        <td>
          <img src={'https://img.shields.io/badge/-HTML-05122A?style=for-the-badge&logo=HTML5'} className="stack-img" />
          <img src={'https://img.shields.io/badge/-CSS-05122A?style=for-the-badge&logo=CSS3&logoColor=1572B6'} className="stack-img" />
          <img src={'https://img.shields.io/badge/-JavaScript-05122A?style=for-the-badge&logo=javascript'} className="stack-img" />
          <img src={'https://img.shields.io/badge/-Vue.js-05122A?style=for-the-badge&logo=vue.js'} className="stack-img" />
          <img src={'https://img.shields.io/badge/-Ruby_on_Rails-05122A?style=for-the-badge&logo=ruby-on-rails'} className="stack-img" />
          <img src={'https://img.shields.io/badge/-react-05122A?style=for-the-badge&logo=react'} className="stack-img" />
        </td>
      </tr>
      <tr>
        <td>
          Cursos e certificados
        </td>
      </tr>
      <tr style={{display: "flex", justifyContent: 'space-between'}}>
        <td>
          
          <CertificateCard 
            certificate_link="https://edools-3-production.s3.amazonaws.com/org-6988/school-7227/certificates/enrollment-6627814/course-84414-pnvwq.pdf"
            certificate_text="CS 50 - Introdução a Ciência da Computação - O curso de Harvard. | Fev de 2022 - Mar de 2022 ( 70 Horas )"
          ></CertificateCard>

        </td>
        <td>

          <CertificateCard 
            certificate_link="https://www.cursoemvideo.com/validacao-de-certificado/?codigo=2787D-6297-2"
            certificate_text="Curso em Vídeo - Algorítmo | Jun de 2021 - Set de 2021 ( 40 Horas )"
          ></CertificateCard>

        </td>
        <td>
          <CertificateCard 
            certificate_link="https://cursos.alura.com.br/user/thiagod11/fullCertificate/3b936cab77896622c007e3522cc40d4c"
            certificate_text="Alura - Formação Front-End | Ago de 2021 - Dez de 2021 ( 207 Horas )"
          ></CertificateCard>
        </td>

      </tr>


      


    </>
  )
}

export default App
