
import './Card.css'

export function CertificateCard(props){
  return (
    
    <div className='card' style={{backgroundImage: `url("https://cdn.icon-icons.com/icons2/2601/PNG/512/certificate_icon_155896.png")` }}>
      <a href={props.certificate_link} target="_blank">
        {/* <img src={'https://cdn.icon-icons.com/icons2/2601/PNG/512/certificate_icon_155896.png'} className="certificate" alt="avatar" /> */}
        {props.certificate_text}
      </a>
    </div>
    
  )
} 