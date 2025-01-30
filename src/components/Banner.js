import React from 'react';

const Banner = () => {
  return (
      <section class="banner_section home_two_banner clearfix">
        <div class="container">
          <div class="row align-items-center justify-content-lg-between">

            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 order-lg-last">
              <div class="banner_image scene">
                <div class="image_1 wow fadeInUp2" data-wow-delay=".1s">
                  <img class="layer" data-depth="0.2" src="assets/images/banner/img_01.jpg" alt="image_not_found"/>
                </div>
                <div class="image_2 wow fadeInUp2" data-wow-delay=".2s">
                  <img class="layer" data-depth="0.3" src="assets/images/banner/img_02.jpg" alt="image_not_found"/>
                </div>
                <div class="image_3 wow fadeInUp2" data-wow-delay=".3s">
                  <img class="layer" data-depth="0.4" src="assets/images/banner/img_03.jpg" alt="image_not_found"/>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div class="banner_contant">
                <h4 class="sub_title wow fadeInUp2" data-wow-delay=".2s">Embroidery and more</h4>
                <h3 class="item_title text-black wow fadeInUp2" data-wow-delay=".3s">
                  ThreadCo Print Shop
                </h3>
                <a class="custom_btn bg_default_orange wow fadeInUp2" data-wow-delay=".4s" target="_blank" href="#!">
                  discover more 
                  <span><i class="fal fa-arrow-right"></i></span>
                </a>
                <span class="decoration_text wow fadeIn" data-wow-delay=".1s">Printing</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>  

  );
}

export default Banner;