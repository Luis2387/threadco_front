import React from 'react';

const Preloader = () => {
  return (
      <div class="preloader">
      <div class="animation_preloader">
        <div class="spinner"></div>
        <p class="text-center">Loading</p>
      </div>
      <div class="loader">
        <div class="row vh-100">
          <div class="col-3 loader_section section-left">
            <div class="bg"></div>
          </div>
          <div class="col-3 loader_section section-left">
            <div class="bg"></div>
          </div>
          <div class="col-3 loader_section section-right">
            <div class="bg"></div>
          </div>
          <div class="col-3 loader_section section-right">
            <div class="bg"></div>
          </div>
        </div>
      </div>
    </div>    

  );
}

export default Preloader;