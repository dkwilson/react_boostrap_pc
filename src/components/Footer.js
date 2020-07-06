import React from "react";
import styled from 'styled-components';

const FooterContainer = styled.footer`
    .main-footer {
        position: fixed;
        left: 0;
        bottom: 0;
        background: #222;
        width: 100%;
        color: white;
       
    }

    .footer-bottom{
        width: 100%;
        padding: 25px 0;
        text-align: center;
        color: #ccc;
    }
`;

function Footer() {
  return (
      <FooterContainer>
          <div className='main-footer'>
          <div className='container'>
              <div className="row">
                  <div className='footer-bottom'>
                      <p className="text-xs-center">
                          &copy;{new Date().getFullYear()} Practice Project Inc. - All Rights Reserved
                      </p>
                  </div>
              </div>
          </div>
      </div>

      </FooterContainer>
      
  )
}

export default Footer;
