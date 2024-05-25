<template>
  <body>
    <main>
      <article class="slider">
        <img src="@/assets/my-profile.jpg" class="slider-background" />

        <div class="slider-content">
          <h1>desteur piepenche fall</h1>
          <p>developpeur web et web mobile</p>
        </div>
      </article>
      <section class="about-me d-10" id="section2">
        <div class="w20">
          <h2>a propos de moi</h2>
        </div>
        <div class="w10">
          <p>
            <strong>Bonjour, je suis Desteur ! </strong><br />J'ai trouvé ma
            voix en tant que Developpeur web. A ce jour je maîtrise le frontend
            et je vise full stack pour très bientôt. En tant que personne
            impliquée, passionnée et rigoureuse, je saurais mettre en forme vos
            projets francophones comme anglophones. <br />A très vite pour nos
            futures collaborations.
          </p>
        </div>
      </section>
      <section id="section1" class="exper">
        <div class="w20 mz-11">
          <h2>mes creations</h2>
        </div>
        <div class="w10 mt-10">
          <figure>
            <img
              v-on:click="toggleModale"
              src="@/assets/image/mc.jpg"
              alt="image 1"
              class="me-2"
            />
            <figcaption class="fig-9">creation d'un cv en ligne</figcaption>
          </figure>
          <figure>
            <img
              v-on:click="toggleModale1"
              src="@/assets/image/space.jpg"
              alt="image 2"
              class="me-2"
            />
            <figcaption class="fig-9">mon projet "home space"</figcaption>
          </figure>
          <figure>
            <img
              v-on:click="toggleModale2"
              src="@/assets/image/form.jpg"
              alt="image 3"
              class="me-2"
            />
            <figcaption class="fig-9">commentaire dynamique</figcaption>
          </figure>
          <myCV
            v-bind:revele="revele"
            v-bind:toggleModale="toggleModale"
          ></myCV>

          <HomeSpace
            v-bind:revele1="revele1"
            v-bind:toggleModale1="toggleModale1"
          ></HomeSpace>

          <FormView
            v-bind:revele2="revele2"
            v-bind:toggleModale2="toggleModale2"
          >
          </FormView>
        </div>
      </section>
    </main>
    <div id="contact">
      <ContactForm></ContactForm>
    </div>
  </body>
  <!--i tell my children components that they're gon receive props(data and methods).i set my data to false to start with and then bind it to my my component that i had to declare in this template. by doing so, my children components are hidden-->
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  name: "home",
  components: {
    ContactForm,
  },

  data() {
    return {
      revele: false,
      revele1: false,
      revele2: false,
    };
  },
  methods: {
    toggleModale: function () {
      this.revele = !this.revele;
    },
    toggleModale1: function () {
      this.revele1 = !this.revele1;
    },
    toggleModale2: function () {
      this.revele2 = !this.revele2;
    },
    scrollToSelection(ref) {
      const targetElement = this.$refs[ref];
      if (targetElement) {
        ref.scrollInToView({ behavior: "smooth" });
      }
    },
  },
  /*to reveal my components hidden by my releve data, i create a methode toggleModal which this.revele(the initial state of revele which is false =!this.revele meaning the reverse of the initial state which is now true,hence the components shows itself.all is rest to do is bind it to my components and declare it where i want to use it in this case i used v-on:@click="toggleModal"on images in this template*/
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Roboto", sans-serif;
}

/*****************MAIN*************/
.slider {
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
}
.slider-background {
  width: 300px;
  height: 300px;
  object-fit: cover;
  padding: 20px 50px 30px 50px;
  filter: brightness(50%);

  border-radius: 50%;
}

.slider-content {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: greenyellow;
  font-size: 3rem;
  text-transform: uppercase;
}
h2 {
  font-size: 3rem;
  text-transform: uppercase;
  color: greenyellow;
}
.w20 {
  padding-bottom: 10px;
}
.mz-11 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.me-2 {
  height: 210px;
  width: 210px;
  object-fit: cover;
  border: 5px solid;
}
.me-2:hover {
  box-shadow: 10px 10px 10px rgba(6, 240, 41, 0.514);
}
.slider-content p {
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  padding-top: 30px;
}
.about-me {
  padding: 200px 100px 100px 100px;
  display: flex;
}
.d-10 {
  background: #000;
}

.w20 {
  width: 40%;
  display: flex;
  align-items: center;
}
.w10 {
  width: 60%;
  color: #fff;
  font-size: 1.5rem;
  text-align: justify;
  gap: 5px;
  line-height: 50px;
}

.w10 strong {
  color: greenyellow;
  font-size: 2.5rem;
}
.mt-10 {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
}
figure {
  position: relative;
}

.fig-9 {
  color: #fff;
  text-transform: uppercase;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
}
.exper {
  display: flex;
  background: #000;
  padding: 200px 100px 200px 100px;
}
.me {
  color: #fff;
}

@media (max-width: 810px) {
  .slider {
    padding: 20px 0 20px 0;
  }
  .slider-background {
    width: 100px;
    height: 100px;
    padding: 20px;
  }
  h1 {
    font-size: 1rem;
  }
  .slider-content p {
    font-size: 0.7rem;
  }
  .about-me {
    padding: 20px 15px 20px 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 1rem;
    padding-bottom: 10px;
  }

  .w10 {
    font-size: 0.7rem;
    line-height: 25px;
  }
  .w10 strong {
    font-size: 0.8rem;
    filter: brightness(60%);
  }
  .mt-10 {
    gap: 10px;
  }
  .exper {
    flex-direction: column;
    padding: 20px 10px 20px 10px;
    align-items: center;
  }

  .fig-9 {
    padding: 10px 0 5px 0;
  }
}
</style>
