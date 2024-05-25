<template>
  <div class="b-nav">
    <nav>
      <a href="https://github.com/desteur1" target="_blank"
        ><img src="@/assets/image/github.png" alt="github image" class="itm-10"
      /></a>
      <a
        href="https://www.linkedin.com/in/piepenche-fall-desteur-3715032ab/"
        target="_blank"
        ><img
          src="@/assets/image/linkedinlogo1.jpg"
          alt="linedin  image"
          class="itm-10"
      /></a>
      <a href="https://x.com/falldesteur" target="_blank"
        ><img
          src="@/assets/image/twitter2.png"
          alt="twitter image"
          class="itm-10"
      /></a>
    </nav>
    <p>
      <small>mis à jour le<time datetime="2024-05-21"></time> 21-05-2024</small>
    </p>
  </div>
</template>
<script>
export default {
  name: "FooterEdge",
};
</script>
<style scoped>
.itm-10 {
  width: 20px;
  height: 20px;
  gap: 50px;
  margin-top: 10px;
}
.b-nav {
  width: 97.6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: black;
  color: #fff;
  position: fixed;
  bottom: 0;
  margin-right: 10px;
}
nav a {
  padding: 0 30px;
}
p {
  font-size: 20px;
}

@media (max-width: 810px) {
  .itm-10 {
    width: 18px;
    height: 18px;
  }
  .b-nav {
    width: 95%;
    position: unset;
  }
  nav a {
    padding: 0 5px;
  }
}
</style>
