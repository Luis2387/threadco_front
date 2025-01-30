import React from 'react';

const Blogs = () => {
  return (
    <>
      <section class="blog_section sec_ptb_130 clearfix">
        <div class="container">

          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-7 col-sm-9 col-xs-12">
              <div class="section_title text-center mb_50 wow fadeInUp2" data-wow-delay=".1s">
                <h4 class="small_title">Latest News & Blog</h4>
                <h2 class="big_title mb-0">
                  Get More Update For News & Articles
                </h2>
                <span class="biggest_title">Blogs</span>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-5 col-sm-6 col-xs-12 wow fadeInUp2" data-wow-delay=".3s">
              <div class="blog_fullimage_2 text-white">
                <img src="assets/images/blog/fullimage/img_02.jpg" alt="image_not_found"/>
                <div class="item_content">
                  <ul class="post_meta ul_li clearfix">
                    <li><a href="#!"><i class="fal fa-user-circle"></i> Admin</a></li>
                    <li><a href="#!"><i class="far fa-comments"></i> Comments (05)</a></li>
                  </ul>
                  <h3 class="item_title">
                    <a target="_blank" href="#!">
                      The Art of Screen Printing at ThreadCo
                    </a>
                  </h3>
                </div>
                <a class="text_btn absolute_btn" target="_blank" href="#!"><span>Read More</span> <i class="far fa-arrow-right"></i></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-5 col-sm-6 col-xs-12 wow fadeInUp2" data-wow-delay=".5s">
              <div class="blog_fullimage_2 text-white">
                <img src="assets/images/blog/fullimage/img_03.jpg" alt="image_not_found"/>
                <div class="item_content">
                  <ul class="post_meta ul_li clearfix">
                    <li><a href="#!"><i class="fal fa-user-circle"></i> Admin</a></li>
                    <li><a href="#!"><i class="far fa-comments"></i> Comments (06)</a></li>
                  </ul>
                  <h3 class="item_title">
                    <a target="_blank" href="#!">
                      ThreadCo Custom Apparel Services
                    </a>
                  </h3>
                </div>
                <a class="text_btn absolute_btn" target="_blank" href="#!"><span>Read More</span> <i class="far fa-arrow-right"></i></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-5 col-sm-6 col-xs-12 wow fadeInUp2" data-wow-delay=".7s">
              <div class="blog_fullimage_2 text-white">
                <img src="assets/images/blog/fullimage/img_04.jpg" alt="image_not_found"/>
                <div class="item_content">
                  <ul class="post_meta ul_li clearfix">
                    <li><a href="#!"><i class="fal fa-user-circle"></i> Admin</a></li>
                    <li><a href="#!"><i class="far fa-comments"></i> Comments (04)</a></li>
                  </ul>
                  <h3 class="item_title">
                    <a target="_blank" href="#!">
                      The Embroidery market in Vancouver, BC
                    </a>
                  </h3>
                </div>
                <a class="text_btn absolute_btn" target="_blank" href="#!"><span>Read More</span> <i class="far fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Blogs;
