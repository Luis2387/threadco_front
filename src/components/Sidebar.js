import React from 'react';

const Sidebar = () => {
  return (

      <div class="sidebar-menu-wrapper">
        <div class="sidebar_mobile_menu">

          <span class="close_btn"><i class="fal fa-times"></i></span>

          <div class="mobile_menu_list clearfix">
            <ul class="ul_li_block clearfix">
              <li><a href="#!">Home</a></li> 
              <li><a href="#!">About us</a></li>
              <li class="dropdown">
                <a href="#!" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                <ul class="dropdown-menu">
                  <li><a href="#!">Screen Printing</a></li>
                  <li><a href="#!">Embroidery</a></li>
                  <li><a href="#!">Digital Applications</a></li>
                  <li><a href="#!">Embroidery patches</a></li>
                </ul>
              </li>
              <li><a href="#!">Blog</a></li>
              <li><a href="#!">Contact</a></li>              
             
            </ul>
          </div>

        </div>
        <div class="overlay"></div>
      </div>
    

  );
}

export default Sidebar;