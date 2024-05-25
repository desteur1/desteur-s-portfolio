<template>
  <!--here my component parent(homeView) tells me am gonna receive props[revele and toggleModel],
    i give a state of v-if="revele"(false in my parent component) and i gave a v-on:@click="togglemodal" to my overlay.which means i can reveal and hide with it.
    lastly,i gave a v-on:@click="togglemodal" to my botton 'x'-->

  <div class="bloc-modal" v-if="revele2">
    <div class="over-lay" v-on:click="toggleModale2"></div>
    <div class="modal">
      <div class="btn-modal" v-on:click="toggleModale2">x</div>
      <h2>formulaire dynamique</h2>
      <p>a été créé le <time datetime="2024-04-18">18 avril 2024</time></p>
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
              alt="image css"
            />
            <figcaption>css</figcaption>
          </figure>
          <figure class="figure java-logo">
            <img
              src="@/assets/image/JavaScript-logo (1).png"
              class="htl"
              alt="image javascript"
            />
            <figcaption class="java">javaScript</figcaption>
          </figure>
        </div>
        <div class="site-link">
          <a href=" https://desteur1.github.io/commentaire_dynamique/"
            >lien vers mon site commentaire dynamique</a
          >
          <a href="https://github.com/desteur1/commentaire_dynamique"
            >mon commentaire dynamique sur github</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormView",
  props: ["revele2", "toggleModale2"],
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
  padding: 50px;
  position: fixed;
  /*top: 30%;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #333;
  color: #f1f1f1;
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
.java-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.java {
  padding-top: 15px;
}

figcaption {
  display: flex;
  justify-content: center;
}
.site-link {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.site-link a {
  text-decoration: none;
  color: #f1f1f1;
}
.site-link a:hover {
  text-decoration: underline solid skyblue;
  color: greenyellow;
}

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
  .java-logo {
    height: 20px;
    width: 20px;
  }
  .java {
    padding-top: 7px;
  }
}
</style>
