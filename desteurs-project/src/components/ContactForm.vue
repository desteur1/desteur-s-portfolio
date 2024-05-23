<template>
  <!--my data in my script return an empty string for each of my inputs and texarea that i use v-model to bind with my input and texarea in my template(meaning what is written in my form is being render in my script data and vice versa). I then give a :class(v-bind) to my label(active, that i style in css), my active is assign to my inputs and textarea, telling them that when ever they receive the active class the placeholder should move -35px on the y axis -->
  <section>
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="big-2">
          <div class="form-group">
            <label for="name" :class="{ active: FormData.name }"
              ><font-awesome-icon icon="user" /> Nom</label
            >
            <input type="text" id="name" v-model="FormData.name" required />
          </div>
          <div class="form-group">
            <label for="surName" :class="{ active: FormData.surname }"
              ><font-awesome-icon icon="user" /> Prenom</label
            >
            <input
              type="text"
              id="surName"
              v-model="FormData.surname"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label for="object" :class="{ active: FormData.object }"
            ><font-awesome-icon :icon="['fas', 'user-pen']" /> Objet</label
          >
          <input type="text" id="object" v-model="FormData.object" required />
        </div>
        <div class="form-group">
          <label for="message" :class="{ active: FormData.message }"
            ><font-awesome-icon :icon="['fas', 'comment']" /> message
          </label>
          <textarea
            name="message"
            id="message"
            rows="8"
            v-model="FormData.message"
            required
          ></textarea>
        </div>
        <div class="butt">
          <button type="submit" class="btn-1">
            submit <font-awesome-icon :icon="[, 'paper-plane']" />
          </button>
        </div>
      </form>
    </div>
  </section>
  <!--for my icon in my contact form, i install three of my font-awesome-icon libraries in my main.js. I then research for the name of the icon i need in their website font awesome.com. for the implementation, i call it in my template like this font-awesome-icon v-bind:icon="name of the icon reseached" -->
</template>

<script>
import axios from "axios";
export default {
  name: "ContactForm",
  data() {
    return {
      FormData: {
        name: "",
        surname: "",
        object: "",
        message: "",
      },
    };
  },
  methods: {
    //i set my resetform function that is equal(=) to an empty string(""). i then call it when my form is submitted
    resetForm() {
      this.FormData.name = "";
      this.FormData.surname = "";
      this.FormData.object = "";
      this.FormData.message = "";
    },

    async submitForm() {
      try {
        const response = await axios.post(
          "http://localhost:5000/submit-form",
          this.FormData
        );
        //here we make an alert of response message from the backend if the form is submitted successfully (the alert display will be the message returned by the backend, it being success = true or false)
        alert(response.data.message);

        if (response.data.success) {
          this.resetForm();
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("There was an error submitting the form", error);
        alert("Error submitting form");
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), #777779),
    url(@/assets/image/pic.jpg);
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  width: 90%;
  max-width: 600px;
  padding-top: 100px;
}
.form-group {
  margin-bottom: 30px;
  position: relative;
}
input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  outline: 0;
  color: #fff;
  border: 1px solid #fff;
  background: transparent;
  font-size: 15px;
  border-radius: 10px;
}

.btn-1 {
  padding: 10px 0;
  color: #fff;
  background: greenyellow;
  cursor: pointer;
  border: 1px solid #fff;
  width: 50%;
  font-size: 1.5rem;
  border-radius: 10px;
}
.form-group label {
  position: absolute;
  transition: all 0.3s ease;
}
.form-group label.active {
  transform: translatey(-35px);
}
label {
  height: 100%;
  cursor: text;
  padding: 10px;
  color: greenyellow;
}
.big-2 {
  display: flex;
  justify-content: space-between;
}
.big-2 .form-group {
  width: 48%;
}
.butt {
  display: flex;
  justify-content: center;
}

@media (max-width: 810px) {
  .container {
    height: 100%;
  }
  form {
    padding-top: 40px;
    width: 300px;
  }
  label {
    font-size: 13px;
  }

  input,
  textarea {
    padding-bottom: 7px;
  }
  .butt {
    margin-bottom: 50px;
  }
  .btn-1 {
    font-size: 1rem;
  }
}
</style>
