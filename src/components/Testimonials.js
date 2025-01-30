import React from 'react';

const Testimonials = () => {
  return (
    <>
      <section class="testimonial_section sec_ptb_130 clearfix">
        <div class="container position-relative">

          <div class="row justify-content-lg-start">
            <div class="col-lg-6 col-md-7 col-sm-9 col-xs-12">
              <div class="section_title mb_80 wow fadeInUp2" data-wow-delay=".1s">
                <h4 class="small_title">Clients Reviews</h4>
                <h2 class="big_title mb-0">
                  What Our Clients Say About Our Works
                </h2>
                <span class="biggest_title">Says</span>
              </div>
            </div>
          </div>

          <div class="row justify-content-lg-between">
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 order-lg-last">
              <div class="testimonial_person_image wow fadeInUp2" data-wow-delay=".3s">
                <img src="assets/images/testimonial/img_04.jpg" alt="image_not_found"/>
              </div>
            </div>

            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div class="creative_testimonial_carousel owl-carousel owl-theme wow fadeInUp2" data-wow-delay=".5s">
                <div class="item">
                  <div class="testimonial_primary">
                    <div class="content_wrap">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totam rems aperiam eaqupsa quae abillo invent ore veritatis et quasi arch
                      </p>
                      <span class="quote_icon">
                        <img src="assets/images/testimonial/quote_01.png" alt="icon_not_found"/>
                      </span>
                    </div>
                    <div class="hero_info_wrap">
                      <div class="hero_thumbnail">
                        <img src="assets/images/testimonial/img_01.png" alt="icon_not_found"/>
                      </div>
                      <div class="hero_info">
                        <h3 class="hero_name">Casey M. Vargas</h3>
                        <span class="hero_title">Web designer</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="testimonial_primary">
                    <div class="content_wrap">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totam rems aperiam eaqupsa quae abillo invent ore veritatis et quasi arch
                      </p>
                      <span class="quote_icon">
                        <img src="assets/images/testimonial/quote_01.png" alt="icon_not_found"/>
                      </span>
                    </div>
                    <div class="hero_info_wrap">
                      <div class="hero_thumbnail">
                        <img src="assets/images/testimonial/img_02.png" alt="icon_not_found"/>
                      </div>
                      <div class="hero_info">
                        <h3 class="hero_name">Casey M. Vargas</h3>
                        <span class="hero_title">Web designer</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="testimonial_primary">
                    <div class="content_wrap">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totam rems aperiam eaqupsa quae abillo invent ore veritatis et quasi arch
                      </p>
                      <span class="quote_icon">
                        <img src="assets/images/testimonial/quote_01.png" alt="icon_not_found"/>
                      </span>
                    </div>
                    <div class="hero_info_wrap">
                      <div class="hero_thumbnail">
                        <img src="assets/images/testimonial/img_03.png" alt="icon_not_found"/>
                      </div>
                      <div class="hero_info">
                        <h3 class="hero_name">Casey M. Vargas</h3>
                        <span class="hero_title">Web designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="orange_shape wow fadeInUp2" data-wow-delay=".1s"></div>

        </div>
      </section>
    </>
  );
}

export default Testimonials;
