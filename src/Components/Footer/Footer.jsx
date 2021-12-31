import React from "react";
import FooterSVG from '../../assets/img/footer.svg'

function Footer() {
  return (
    <div className="footer-component">
      <img alt="footer" className="footer-image" draggable="false" src={FooterSVG} />
    </div>
  );
}

export default Footer;
