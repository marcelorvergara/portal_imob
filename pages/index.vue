<template>
  <div>
    <NavBar />
    <Main />
    <Jumbotron />
    <span>{{ renderedOn }} side</span>
  </div>
</template>

<script>

export default {
  asyncData () {
    return { renderedOn: process.client ? 'client' : 'server' }
  },
  data () {
    return {
      renderedOn: ''
    }
  }
}
</script>
