import React from 'react';

const Feature = () => {
  return (
    <>
      <section class="feature_section sec_ptb_130 bg_gray deco_wrap clearfix">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8 col-sm-10 col-xs-12">
              <div class="section_title text-center mb_50 wow fadeInUp2" data-wow-delay=".1s">
                <h4 class="small_title">Our main services</h4>
                <h2 class="big_title mb-0">
                  The Highest Quality Custom Embroidery in Vancouver
                </h2>
                <span class="biggest_title">Services</span>
              </div>
            </div>
          </div>

          <div class="stairs_wrap row justify-content-lg-between justify-content-md-center justify-content-md-center">
            <div class="stair_col col-lg-4 col-md-5 col-sm-6 col-xs-12 wow fadeInUp2" data-wow-delay=".3s">
              <div class="feature_card">
                <a class="item_image plus_effect" target="_blank" href="#!">
                  <img src="assets/images/feature/img_02.jpg" alt="image_not_found"/>
                </a>
                <div class="item_content">
                  <span class="item_type">The most common, efficient, and cost-effective</span>
                  <h3 class="item_title">Screen Printing</h3>
                </div>
              </div>
            </div>

            <div class="stair_col col-lg-4 col-md-5 col-sm-6 col-xs-12 wow fadeInUp2" data-wow-delay=".5s">
              <div class="feature_card">
                <a class="item_image plus_effect" target="_blank" href="#!">
                  <img src="assets/images/feature/img_03.jpg" alt="image_not_found"/>
                </a>
                <div class="item_content">
                  <span class="item_type">Exudes quality and style</span>
                  <h3 class="item_title">Embroidery</h3>
                </div>
              </div>
            </div>

            <div class="stair_col col-lg-4 col-md-5 col-sm-6 col-xs-12 wow fadeInUp2" data-wow-delay=".7s">
              <div class="feature_card">
                <a class="item_image plus_effect" target="_blank" href="#!">
                  <img src="assets/images/feature/img_04.jpg" alt="image_not_found"/>
                </a>
                <div class="item_content">
                  <span class="item_type">Transform your apparel ideas into reality</span>
                  <h3 class="item_title">Digital Applications</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span class="deco_image triangle_shape wow fadeInUp2" data-wow-delay=".1s"></span>
      </section>
    </>
  );
}

export default Feature;
