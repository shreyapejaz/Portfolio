import React from 'react'

const Footer =() =>(
    <div className="site-footer">
        <h4 className="text-center">
            Portfolio
        </h4>
        <p className="text-center">Know more about me</p>
        <div className="footer-social-links">
          <ul className="social-links-list">
              <li><a href="https://www.facebook.com/shreya.pejathaya" target="_blank" 
                    rel="noopener noreferrer" className="facebook">
                  <i className="fab fa-facebook-f fa-2x"></i>
              </a></li>
              <li><a href="https://www.linkedin.com/in/shreya-pejathaya-1930121a1/" target="_blank" 
              rel="noopener noreferrer" className="linkedin">
                  <i className="fab fa-linkedin fa-2x"></i>
                  </a></li>
                  <li><a href="https://www.instagram.com/shreya_pejaz/" target="_blank" 
              rel="noopener noreferrer" className="instagram">
                  <i className="fab fa-instagram fa-2x"></i>
                  </a></li>
          </ul>
        </div>
    </div>
)
export default Footer
