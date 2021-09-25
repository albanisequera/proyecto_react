import React from "react";
import "./style.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, IconButton } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footerTotal">
      <div className="footer__content">
        <div className="footer__content__texto">
         <p><strong>Soluciones:</strong></p> 
        </div>
        <div className="footer__content__texto">
        <p>Particulares</p> 
        </div>
        <div className="footer__content__texto">
        <p>Empresas</p>
        </div>
        <div className="footer__content__texto">
        <p>Centros Educativos</p>
        </div>
      </div>
      <div className="footer__content">
        <div className="footer__content__texto">
          <Button variant="text" color='inherit'>
            Facebook
            <FacebookIcon />
          </Button>
        </div>
        <div className="footer__content__texto">
          <Button variant="text" color='inherit'>
            <p>Instagram</p>
            <InstagramIcon />
          </Button>
        </div>
        <div className="footer__content__texto">
          <Button variant="text" color='inherit'>
            <p>Twitter </p>
            <TwitterIcon />
          </Button>
        </div>
      </div>
      <div className="footer__content">
        <div className="footer__content__texto">
          <p className="footer__content__texto">
            Contacto
          </p>
        </div>
        <div className="footer__content__texto">
          <p className="footer__content__texto">
            Terminos y Condiciones
          </p>
        </div>
        <div className="footer__content__texto">
          <p className="footer__content__texto">
            Privacidad
          </p>
        </div>
        <div className="footer__content__texto">
          <p className="footer__content__texto">
            Suscribirse al Blog:
          </p>
        </div>
        <div className="footer__content__texto">
          <p className="footer__content__texto">
            Recibe promociones
          </p>
        </div>
        <div className="footer__content__texto">
          <p className="footer__content__texto">
            en tu correo electronico
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
