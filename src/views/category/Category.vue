<template>
  <div class="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="category-content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <scroll class="wrapper">
        <div class="wrapper-content" slot="content">
          <category-sort :categorySorts="showEachSorts"></category-sort>
          <tab-control :titles="['综合','新品','销量']"
                       @typeClick="sortTypeChange"></tab-control>
          <goods-list :goodsType="showGoods"></goods-list>
        </div>
      </scroll>
    </div>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import Scroll from 'components/common/scroll/Scroll.vue';
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';

// 请求数据
import { getCategory, getSubcategory, getCategoryDetail } from 'network/category'
import TabMenu from './childComps/TabMenu.vue';
import CategorySort from './childComps/CategorySort.vue';

export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    Scroll,
    CategorySort,
    TabControl,
    GoodsList
  },
  data() {
    return {
      categories: [],
      categoryData: [],
      currentIndex: -1,
      currentType: 'pop'
    }
  },
  created() {
    // 1.请求分类数据
    this._getCategory()
  },
  computed: {
    showEachSorts() {
      if(this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].subcategories.list;
    },
    showGoods() {
      if (this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    _getCategory () {
      getCategory().then(res => {
        // 获取各分类的信息
        this.categories = res.data.category.list;

        // 初始化categoryData数组
        for(let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: [],
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }

        // 获取第一个分类的所有分类
        this._getSubcategory(0)
      })
      
    },

    _getSubcategory(index) {
      this.currentIndex = index;
      // 根据数组下标，获取对应的分类maitKey
      let maitKey = this.categories[index].maitKey;

      // 获取分类的各分类
      getSubcategory(maitKey).then(res => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        // this.categoryData = JSON.parse(JSON.stringify(this.categoryData))
    
        this._getCategoryDetail('pop');
        this._getCategoryDetail('new');
        this._getCategoryDetail('sell');
        
      })
    },

    // 获取推荐数据
    _getCategoryDetail(type) {
      // 获取请求的miniWallkey
      let miniWallkey = this.categories[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey, type).then(res => {
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },

    // ***** 监听事件 *****
    // 获取当前选中分类，请求数据
    selectItem(index){
      this._getSubcategory(index);
    },

    // 获取当前选择的推荐显示类别
    sortTypeChange(index) {
      switch(index){
        case 0: 
          this.currentType = 'pop';
          break;
        case 1: 
          this.currentType = 'new';
          break;
        case 2: 
          this.currentType = 'sell';
          break;
      }
      // console.log(this.categoryData[this.currentIndex].categoryDetail[this.currentType]);
    }
  },

  
}
</script>

<style scoped>
.category {
  height: 100vh;
}

.category-nav {
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  font-size: 20px;
  background: var(--color-tint);
  color: #fff;
}

.category-content {
  display: flex;
  height: 100%;
}

.wrapper {
  height: 115%;
  overflow: hidden;
}

.wrapper-content {
  padding-bottom: 50px;
}
</style>