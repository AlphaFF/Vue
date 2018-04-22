<template>
	<div class="container">
  <h2>{{ title }}</h2>
  <ul>
    <li v-for="item in booklist">
      <router-link :to="{path:'/books/'+item.id}">
        <p>{{ item.name }}</p>
        <p>{{ item.author }}</p>
      </router-link>
    </li>
  </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() { return {} },
  props: ['booklist', 'title'],
  methods: {
    bookDetailId(id) {

    },
    loadImage(e) {

    }
  }
}

</script>
