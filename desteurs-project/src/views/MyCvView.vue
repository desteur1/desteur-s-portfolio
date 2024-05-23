<template>
  <!--here my component parent(homeView) tells me am gonna receive props[revele and toggleModel],
    i give a state of v-if="revele"(false in my parent component) and i gave a v-on:@click="togglemodal" to my overlay.which means i can reveal and hide with it.
    lastly,i gave a v-on:@click="togglemodal" to my botton 'x'-->

  <div class="bloc-modal" v-if="revele">
    <div class="over-lay" v-on:click="toggleModale"></div>
    <div class="modal">
      <div class="btn-modal" v-on:click="toggleModale">x</div>
      <h1>mon cv en ligne</h1>
      <p>a été créé le <time datetime="2024-01-21">01 janvier 2024</time></p>
      <div>
        <h2>les langages utilisés</h2>
        <div class="fig">
          <figure>
            <img
              src="@/assets/image/html-logo.png"
              class="htl"
              alt="image html"
            />
            <figcaption>html</figcaption>
          </figure>
          <figure class="figure">
            <img
              src="@/assets/image/logo-css-3.png"
              class="htl"
              alt="image html"
            />
            <figcaption>css</figcaption>
          </figure>
        </div>
        <div class="site-link">
          <a href="https://desteur1.github.io/correction-CV/"
            >lien ver mon site CV en ligne</a
          >
          <a href="https://github.com/desteur1/correction-CV"
            >mon CV dans mon repository github</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myCV",
  props: ["revele", "toggleModale"],
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.bloc-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.over-lay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modal {
  background: #333;
  color: #f1f1f1;
  padding: 50px;
  position: fixed;
  /*top: 30%;*/
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  cursor: pointer;
  color: #f1f1f1;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal h1 {
  padding-bottom: 10px;
}
.modal p {
  padding-bottom: 10px;
}
h2 {
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}

.htl {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.fig {
  display: flex;
  justify-content: space-evenly;
  padding-top: 10px;
}
figcaption {
  display: flex;
  justify-content: center;
}
.site-link {
  display: flex;
  flex-direction: column;
  align-items: center;

  /* gap: 20px;*/
}
.site-link a {
  text-decoration: none;
  color: #f1f1f1;
}

.site-link a:hover {
  text-decoration: underline solid skyblue;
  color: greenyellow;
}
/*.site-link a:visited {
  color: red;
}*/

@media (max-width: 810px) {
  .modal {
    padding: 20px;
  }
  .btn-modal {
    width: 15px;
    height: 15px;
  }
  .htl {
    height: 20px;
    width: 20px;
  }
}
</style>
