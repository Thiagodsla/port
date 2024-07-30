import { CertificateCard } from '../shared/CertificateCard.tsx'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import dayjs from 'dayjs';


const steps = [
  { title: 'First', description: 'Personal infos' },
  { title: 'Second', description: 'My certifications' },
  { title: 'Third', description: 'Projects I did' },
]

// const dayjs = require('dayjs')

export function Home(){

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <>
    <Box minW="98%" maxW="98%" mx="auto">
      <Stepper index={activeStep} height='100px' gap='0'>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Grid  
        gridTemplateColumns={'150px 1fr'}
        templateRows='repeat(1, 4fr)'
        templateColumns='repeat(2, 1fr)'
        gap={0}
      >
        <GridItem colSpan={1} rowSpan={1} bg='' >
          <img src={'https://avatars.githubusercontent.com/u/88861546?v=4'} className="avatar" alt="avatar" style={{width: '180px', height: 'auto'}} />
        </GridItem>
        <GridItem colSpan={1} bg='' >
          <h2 style={{paddingLeft: '20px', textAlign: 'left', color: '#000'}}>
            My name is Thiago Azevedo,
            I born in brazil and had past { dayjs().diff(' 1992-06-18 12:00:00', 'day', true).toFixed(2) } days since i arrive:) 
          </h2>
          <h3 style={{paddingLeft: '20px', textAlign: 'left', color: '#000'}}>
            I'm a full stack developer, formed in analysys and system development, and a lover of technology.
          </h3>
          <h4 style={{paddingLeft: '20px', textAlign: 'left', color: '#000'}}>
            The whole things in development , the first motivation I've had is the indescribable sensations to do a bring life to good ideas, 
            the challanges is part of the way and I love to solve one by on, and this thinking I believe I my myself in the future will thanks.
          </h4>
        </GridItem >
      </Grid >
    </Box>

      {/* <h1>Olá, este é meu portfolio 🖖  </h1>
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

      </tr> */}
      
      {/* CONTATO
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
      Certificados */}

      




    </>
  )
} 