<template>
  <div class="container">
    <nav>
      <header>
        <a href="/" class="brand">this is bookstore.</a>
        <a href="/" class="avatar"></a>
      </header>
      <div class="swipe">
        <mt-swipe :auto="5000">
          <mt-swipe-item><img src="../assets/images/1.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/2.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/3.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/4.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/5.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
    </nav>
    <nav class="home-nav">
      <router-link class="guide-nav-div" v-for="(item,index) in type" :to="{path:'category',query:{type:item.num}}" :key="item.num" @click="openBookCategory(item.num)">
        <i class="icon icon-sort"></i>
        <h4 class="guide-nav-h">{{ item.word }}</h4>
      </router-link>
    </nav>
    <div v-if="!loading">
    	<recommend :booklist="booklist | hot" title="热门小说"></recommend>	
    	<recommend :booklist="booklist | top" title="排行榜"></recommend>	
    	<recommend :booklist="booklist | free" title="限时免费"></recommend>	
    	<book-list :datalist="booklist | newbook" title="新书抢鲜"></book-list>	
    	<book-list :datalist="booklist | endbook" title="畅销全本"></book-list>	
    	<book-list :datalist="booklist | like" title="猜你喜欢"></book-list>	
    </div>	
    <loading v-show="loading"></loading>	
    <!-- <ul>
      <li v-for="item in booklist">
        <p>{{ item.author }}</p>
        <p>{{ item.category }}</p>
        <p><a :href="'#/books/'+item.id"><span>{{ item.name }}</span></a></p>
        <p><router-link :to="{name:'bookdetail', params: { id: {{ item.id }} }}">link</router-link></p>
        <p><a :href="`/books/`+ item.id ">{{item.name}}</a></p>
        <p>
          <router-link :to="`/books/`+ item.id">{{item.name}}</router-link>
        </p>
      </li>
    </ul> -->
    <!-- {{ booklist }} -->
    <!-- <list></list> -->
    <!--<div>-->
    <!--<recommend :booklist="booklist" title="热门小说"></recommend>-->
    <!--<recommend :booklist="booklist" title="排行榜"></recommend>-->
    <!--<recommend :booklist="booklist" title="限时免费"></recommend>-->
    <!--<book-list :booklist="booklist" title="新本抢先"></book-list>-->
    <!--<book-list :booklist="booklist" title="畅销完本"></book-list>-->
    <!--<book-list :booklist="booklist" title="猜你喜欢"></book-list>-->
    <!--</div>-->
    <!--<p>{{ booklist }}</p>-->
    <!--<loading v-show="loading"></loading>-->
    <!-- <ul>
			<li v-for="book in booklist">
				<span>{{ book.name }}</span>
				<span>{{ book.height }}</span>
				<span>{{ book.mass }}</span>
				<span>{{ book.eye_color }}</span>
			</li>
		</ul> -->
  </div>
</template>

<script>
import axios from 'axios'
import Loading from './Loading.vue'
import Recommend from './Recommend.vue'
import BookList from './BookList.vue'
import List from './List.vue'
import { books } from '../api/api'

export default {
  data() {
    return {
      booklist: [],
      type: [{
          num: 1,
          word: '玄幻'
        },
        {
          num: 2,
          word: '修真'
        },
        {
          num: 3,
          word: '都市'
        },
        {
          num: 4,
          word: '历史'
        },
        {
          num: 5,
          word: '游戏'
        },
      ],
      loading: false,
    }
  },
  methods: {
    //			getData(){
    //				this.loading = true
    //				axios.get('/api/get').then(res=>{
    //					this.loading = false
    //					this.booklist = res.data.books
    //		})
    //		},
    getData() {
      books().then(
        (res) => {
          console.log(res)
          this.booklist = res.data.results
        }
      ).catch(function(error) {
        console.log(error)
      })
    }
  },
  // components: {
  //   'loading': Loading,
  //   'recommend': Recommend,
  //   'book-list': BookList,
  //   'list': List
  // },
  components: {
    Loading,
    Recommend,
    BookList,
    // List
  },
  filters:{
  	hot(value){
  		if (!value) return ''
  		var arr = []
  	value.forEach((item,index) => {
  	  // Todo...
  	  if (index<20){
  	  	if (index%2==0){
  	  		arr.push(item)
  	  	}
  	  }
  	})
  	return arr
  	}
  },
  created() {
    this.getData()
  },

}

</script>

<style>
  
  .container {
    background-color: #f6f7f9;
  }

  .nav-header {
    header {
      display: flex;
      height: 45px;
      padding: 0 15px;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      text-indent: -8888px;
      .brand {
        width: 100px;
        background: url(http://qidian.gtimg.com/qdm/img/logo-qdm.0.50.svg) no-repeat left;
        background-size: 100%;
      }
      .avatar {
        width: 24px;
        height: 24px;
        background: url(../assets/images/avatar.png) no-repeat center;
        background-size: 100%;
      }
    }
  }

  .home-nav {
    display: flex;
    padding: 10px 0;
    margin: 10px 0;
    background-color: #fff;
    .guide-nav-div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > i {
        width: 24px;
        height: 24px;
        background-image: url(../assets/images/sprite.0.50.png);
      }
      &:nth-of-type(1) {
        i {
          background-position: -63px -28px;
        }
      }
      &:nth-of-type(2) {
        i {
          background-position: 0 0;
        }
      }
      &:nth-of-type(3) {
        i {
          background-position: 0 -30px;
        }
      }
      &:nth-of-type(4) {
        i {
          background-position: 0 -60px;
        }
      }
      &:nth-of-type(5) {
        i {
          background-position: -30px -30px;
        }
      }
    }
  }

  .swipe {
    height: 170px;
    img {
      width: 100%;
    }
  }
</style>
