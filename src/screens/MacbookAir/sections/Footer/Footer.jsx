import React from "react";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Image } from "antd";
import "../../../../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-mobile-content">
        <div className="footer-mobile-row">
          <div className="footer-mobile-item">Время работы: Круглосуточно</div>
        </div>

        <div className="footer-mobile-row">
          <div className="footer-mobile-contact">
            <PhoneIcon className="footer-mobile-icon" />
            <span className="footer-mobile-phone">8 800 500 89 55</span>
          </div>

          <div className="footer-mobile-contact">
            <MapPinIcon className="footer-mobile-icon" />
            <span>г. Иваново</span>
          </div>
        </div>

        <div className="footer-mobile-row">
          <Button className="footer-mobile-button" type="primary">
            Срочный вызов
          </Button>
        </div>
      </div>
    </footer>
  );
};
