<template>
	<div class="container">
		这是该节的内容~
		<div>
			{{ content }}
		</div>
		<!-- <ul>
			<li v-for="item in chapters">{{item.title}}</li>
		</ul> -->
	</div>
</template>

<script>
	import { getChapter } from '../api/api'

	export default {
		data(){
			return {
				productId:'',
				num:'',
				content:''
			}
		},
		methods:{
			getChapters(productId,num){
				getChapter(productId,num).then((res)=>{
					console.log(res.data)
					this.content=res.data
				} 
				).catch()
			}
		},
		created(){
			this.productId = this.$route.params.book_id
			this.num = this.$route.params.chapter_id
			this.getChapters(this.productId,this.num)
		}

	}
</script>