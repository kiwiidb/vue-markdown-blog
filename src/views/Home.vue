<template>
  <div class="home">
    <h1>Welcome</h1>
    <p>
      I'm Kwinten. I am a software developper based in Ghent, Belgium.
    </p>
    <p>
      Please take a look at some of my <a href="./projects">projects</a>,
      my <a href="/cv">CV</a>, or my <a href="/blog">Blog</a>.
    </p>
  <div class="socials-list">
    <a class="socials-item" href="https://github.com/kiwiidb"><img src="../assets/github.svg" /></a>
    <a class="socials-item" href="https://www.linkedin.com/in/kwinten-de-backer-5087b5195/"><img src="../assets/linkedin.svg" /></a>
    <a class="socials-item" href="https://twitter.com/kiwiidb"><img src="../assets/twitter.jpg"/></a>
    <a class="socials-item" href="mailto:kwinten.debacker@hotmail.com"><img src="../assets/microsoftoutlook.svg"/></a>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
<style lang="scss" scoped>
.socials-list {
  margin-top: 50px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  width: 400px;
}

.socials-item {
  margin: 30px;
  flex: 1 0 25%; /* explanation below */
  width: 100px;
}
.center {
  text-align: center;
}
.headline {
  text-transform: uppercase;
  margin: 4rem auto;
  font-size: 4rem;
}
img {
  display: block;
  margin: 0 auto;
  width: 150px;
}

h2 {
  color: #35495e;
  text-transform: capitalize;
  margin-bottom: 2rem;
}

h3 {
  color: #42b883;
  margin-bottom: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  .subtitle {
    color: grey;
    font-size: .98rem;
    float: right;
    font-weight: normal;
  }
}

p {
  margin-top: .4rem;
}

.sections {
  max-width: 40vw;
  margin: 0 auto;
  margin-top: 4rem;
}

.section {
  margin-bottom: 3rem;
}

.group {
  margin-bottom: 4rem;
}

</style>
