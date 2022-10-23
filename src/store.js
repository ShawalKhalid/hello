import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage:[],
    cartItems:[],
    items: [
      {
        id:0,
        img: require('@/assets/1.jpg'),
        title: 'Title: Life of Seacrits Author: Galista Marie',
        price: 156,
        color: 'yellow',
        type: 'sofa'
      }, {
        id:1,
        img: require('@/assets/2.jpg'),
        title: 'Title: Way of Happiness Author: Ananda Kumar',
        price: 756,
        color: 'yellow',
        type: 'lamp'
      }, {
        id:2,
        img: require('@/assets/3.jpg'),
        title: 'Title: Fashion System Author: Kevin Spere',
        price: 362,
        color: 'yellow',
        type: 'chair'
      }, {
        id:3,
        img: require('@/assets/4.jpg'),
        title: 'Title: Musical Book Author: Karim Achard',
        price: 505,
        color: 'red',
        type: 'chair'
      }, {
        id:4,
        img: require('@/assets/5.jpg'),
        title: 'Title: Portrait Photo Title: Adam Silber',
        price: 243,
        color: 'white',
        type: 'sofa'
      }, {
        id:5,
        img: require('@/assets/6.jpg'),
        title: 'Title: Once Upon Author: Klien Marry',
        price: 44,
        color: 'white',
        type: 'chair'
      }, {
        id:6,
        img: require('@/assets/7.jpg'),
        title: 'Title: Sisters of War Author: S. Feldman',
        price: 505,
        color: 'blue',
        type: 'chair'
      }, {
        id:7,
        img: require('@/assets/8.jpg'),
        title: 'Title: Lady Bluebird Author: G. Graham',
        price: 432,
        color: 'red',
        type: 'table'
      },
      {
        id:8,
        img: require('@/assets/9.jpg'),
        title: 'Title: Magic House Author: Jenny Laird',
        price: 390,
        color: 'white',
        type: 'table'
      },
      {
        id:9,
        img: require('@/assets/10.jpg'),
        title: 'Title: Peaceful Enlight Author: Mermic',
        price: 756,
        color: 'yellow',
        type: 'chair'
      },
      {
        id:10,
        img: require('@/assets/11.jpg'),
        title: 'Title: The Lady beauty Author: Armor Ramsey',
        price: 44,
        color: 'white',
        type: 'chair'
      },
      {
        id:11,
        img: require('@/assets/12.jpg'),
        title: 'Title: Great Travel At Tile: Mike Jay',
        price: 156,
        color: 'red',
        type: 'lamp'
      },
      {
        id:12,
        img: require('@/assets/13.jpg'),
        title: 'Title: Peace Life Author: Armor Ramsey',
        price: 756,
        color: 'blue',
        type: 'lamp'
      },
      {
        id:13,
        img: require('@/assets/14.jpg'),
        title: 'Tile: Life of Wild Author: Sanchit Howdy',
        price: 756,
        color: 'white',
        type: 'chair'
      },
      {
        id:14,
        img: require('@/assets/15.jpeg'),
        title: 'Title: Orphans War Author: Molly Green',
        price: 756,
        color: 'white',
        type: 'table'
      }
    ]
  },
  // plugins: [createPersistedState()],
  getters: {
    itemsNumber(state){  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0){
       return state.cartItems.reduce((a, b) => {
         return (b.price == null ) ? a : a + b.price
       }, 0)
      }
    },
    infoLength(state) { // Info Component
      if(state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    }
  },
  mutations: {
    inCart(state, n) { // Cart Component
      return state.cartItems.push(n)
    },
    outCart(state, n) { // Cart Component
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    addtoInfo(state, n) { // Info Component
       return state.infoPage.push(n)
    }
  },
})
