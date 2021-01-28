<template>
  <body class="is-preload">

		<Header />

		<!-- Banner -->
		<section id="banner">
    <div class="inner">
      <h1>Industrious</h1>
      <p>
        A responsive business oriented template with a video background<br />
        designed by <a href="https://templated.co/">TEMPLATED</a> and released
        under the Creative Commons License.
      </p>
    </div>
    <video
      autoplay
      loop
      muted
      playsinline
      src="@/assets/images/banner.mp4"
    ></video>
  </section>

		<!-- Highlights -->
			
		<Highlights />

		<!-- CTA -->
			<section id="cta" class="wrapper">
				<div class="inner">
					<h2>Curabitur ullamcorper ultricies</h2>
					<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>
				</div>
			</section>

		<!-- Testimonials -->
			<Testimonials />

		<!-- Footer -->
			<Footer />
  </body>
</template>

<script>
import Header from '@/components/Header';
import Highlights from '@/components/Highlights';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default {
  name: "App",
  components: { 
		Header,
		Highlights,
		Testimonials,
		Footer
	}
};
</script>

<style>
</style>
