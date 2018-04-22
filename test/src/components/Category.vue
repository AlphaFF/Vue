<template>
	<div class="category">
		<div class="category-header">
			<router-link :to="'/'">
				<i></i>
				<h2>这是分类的页面...</h2>
				<!-- <h2>{{ title}}</h2> -->
			</router-link>	
		</div>
		<div class="category-list" v-if="!loading">
		</div>
	</div>
</template>