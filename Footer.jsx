import React from 'react'
import footer from './footer.css'
// import "http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
// import "http://fonts.googleapis.com/css?family=Cookie"
const Footer = () => {
  return (
    <footer class="footer-distributed">

        <div class="footer-left">
            <h3> <span>M</span>arketing  <span>E</span>ra</h3>

            <p class="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">Service</a>
                |
                <a href="#">About</a>
                |
                <a href="#">Contact</a>
            </p>

            <p class="footer-company-name">Copyright © 2023 <strong>Marketing Era </strong> All rights reserved</p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p><span><strong>Anand , Gujarat</strong></span> </p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>+91 1234567890</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="">xyz@gmail.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the company</span>
                <strong>Marketing Era</strong> is a Digital Marketing website where you can grow your buisness using our service. 
            </p>
            <div class="footer-icons">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-youtube"></i></a>
            </div>
        </div>
    </footer>

  )
}

export default Footer