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
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
<style lang="scss" scoped>
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
