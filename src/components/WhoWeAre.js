import React from 'react';

const WhoWeAre = () => {
  return (
    <>
      <section class="whoweare_section bg_default_yellow clearfix">
        <div class="container-fluid p-0">
          <div class="row g-0 align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div class="whoweare_image wow fadeIn">
                <img src="assets/images/about/img_04.jpg" alt="icon_not_found"/>
                <a class="play_btn popup_video bg_white" href="#!">
                  <i class="fas fa-play"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div class="whoweare_content">
                <div class="section_title mb_50 wow fadeInUp2" data-wow-delay=".2s">
                  <h4 class="small_title">Who We Are ?</h4>
                  <h2 class="big_title mb-0">
                    A Family Owned Vancouver Embroidery Company
                  </h2>
                  <span class="biggest_title">We Do</span>
                </div>

                <div class="whoweare_about_content wow fadeInUp2" data-wow-delay=".3s">
                  <p>
                    At ThreadCo Print Shop, we believe in the power of human connection and the impact of personalized service.
Our own experiences as customers, coupled with our desire to improve the industry, have fueled our dedication to delivering premium craftsmanship, timely deliveries, and exceptional customer service.

We believe in the ability of custom apparel to tell stories, to make a statement, build connections, and elevate brands. We believe in the importance of precision, attention to detail and professionalism in every project we undertake.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoWeAre;
