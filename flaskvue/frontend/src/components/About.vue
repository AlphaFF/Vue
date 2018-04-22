<template>
  <div class="about">
    <h1>
      this is about index page {{ count }}
      <button @click="increment">增加</button>
      <button @click="reduce">减少</button>
      <router-link to="/">首页</router-link>
    </h1>
  </div>
</template>

<script>
	import { mapState,mapMutations,mapGetters } from 'vuex'
	export default {
		name: 'about',
		methods: {
			...mapMutations ([
			'increment',
			'reduce'
		]),
			...mapMutations({
				add: 'increment'
			}),
			...mapGetters([
				'testGetters'
		])
	},
		computed: {
			...mapState(['count']),
		}
	}
</script>