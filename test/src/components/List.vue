<template>
	<ol>
		<li v-for="news in list">
			<p>{{news.title}}</p>
			<p>{{news.create_at}}</p>
			<p>{{news.author.loginname}}</p>
		</li>
	</ol>
</template>

<script>
//	import news from '../api/news'
  import axios from 'axios'
	export default {
		data() {
			return {
				list:[],
				limit:10
			}
		},
		props: {
			page:{
				type:Number,
				default:1
			}
		},
		created(){
			this.getList()
		},
		watch:{
			page (val){
				this.getList()
			}
		},
		methods:{
//			get(){
//				news.getList({page:this.page,limit:this.limit},(err,list) => {
//					if (err) {
//						console.log(err)
//					} else {
//						list.data.forEach((data)=>{
//							const d = new Date(data.create_at)
//							data.create_at = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
//						})
//						this.list = this.list.concat(list.data)
//					}
//				})
//			},
        getList() {
          axios.get('https://cnodejs.org/api/v1/topics').then(res => {
            this.list = this.list.concat(res.data)
          })
        },
		}
	}
</script>
