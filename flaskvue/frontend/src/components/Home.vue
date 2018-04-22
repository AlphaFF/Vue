<template>
  <div class="home">
    <h1>
      this is home {{ $store.state.count }}
    </h1>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <router-link to="/about">about</router-link>	
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters } from 'vuex'

	export default {
		name: 'home',
		computed: {
			count () {
				return this.$store.state.count
			}
		},
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
	}
</script>