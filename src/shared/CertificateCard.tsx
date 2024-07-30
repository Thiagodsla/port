import CardMembershipIcon from '@mui/icons-material/CardMembership';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import './shared_css/Card.css'

interface CertificateCardProps {
  certificate_link: string,
  certificate_text: string,
}

export function CertificateCard({certificate_link, certificate_text}: CertificateCardProps){
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <CardMembershipIcon/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <a href={certificate_link} target="_blank">
              {certificate_text}
            </a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  )
} 