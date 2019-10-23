<template>
  <div id="app">
    <div>
      <vue-navigation-bar :options="navbarOptions" />
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        menuOptionsLeft: [
          {
            type: 'link',
            text: 'Home',
            path: '/'
          },
          {
            type: 'link',
            text: 'Projects',
            path: '/projects'
          },
          {
            type: 'link',
            text: 'CV',
            path: '/cv'
          },
          {
            type: 'link',
            text: 'Blog',
            path: '/blog'
          }
        ],
        menuOptionsRight: [
          {
            type: 'link',
            text: 'Github',
            path: 'https://github.com/kiwiidb'
          },
          {
            type: 'link',
            text: 'Linkedin',
            path: 'https://www.linkedin.com/in/kwinten-de-backer-5087b5195/'
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 90vw;
  margin: 0 auto;
}

//
// vue-navigation-bar customization below
//
.main-navbar-section {
  background: #fff;
}
.vnb {
  font-family: "Montserrat", sans-serif;
  .button-red {
    background: #ff3b30;
    &:hover {
      background: darken(#ff3b30, 10%);
    }
  }
}
</style>
