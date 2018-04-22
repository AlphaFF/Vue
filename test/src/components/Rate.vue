<template>
<div id="rate">
	<h2>这是rate页面</h2>
</div>
</template>

<script >
	export default {
		data(){return{typeArr:[]}},
		props:['datalist','title'],
		methods:{

		},
		filters:{
			type(value){
				switch(value){
					case 1:
						return '玄幻'
						break
					case 2:
						return '修真'
						break
					case 3:
						return '都市'
						break
					case 4:
						return '历史'
						break
					case 5:
						return '网游'
						break
					default:
						return '类型'
				}
			}
		}
	}
</script>