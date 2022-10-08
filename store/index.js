import items from '../static/items.json'
import materials from '../static/materials.json'

export const state = () => ({
  items,
  materials: [...materials, { id: '0', name: 'Все' }],
  filterForm: {
    material: '0',
    order: 1,
  },
  favList: [],
  cartList: [],
})

export const actions = {
  handleSortArray: ({ commit }) => commit('sortArray'),

  handleUpdateFilterForm: ({ commit }, form) =>
    commit('updateFilterForm', form),

  handleParseLocalStorage: ({ commit }) => {
    const fav = JSON.parse(localStorage.getItem('favourite'))
    const cartList = JSON.parse(localStorage.getItem('cart'))
    commit('parseLocalStorage', { fav: fav || [], cartList: cartList || [] })
  },

  handlePushFavList: ({ commit }, favItem) => commit('pushFavList', favItem),

  handleRemoveFavList: ({ commit }, favItem) =>
    commit('removeFavList', favItem),

  handleUpdateLocalStorage: (_, favList) =>
    localStorage.setItem('favourite', favList),

  handleRemoveCartItem: ({ commit }, id) => commit('removeCartItem', id),

  handleAddCartItem: ({ commit }, id) => commit('addCartItem', id),
}

export const mutations = {
  sortArray: ({ filterForm, items }) => {
    const { order } = filterForm
    items.sort((curr, next) =>
      order === 1
        ? curr.price.current_price - next.price.current_price
        : next.price.current_price - curr.price.current_price
    )
  },

  updateFilterForm: ({ filterForm }, form) => Object.assign(filterForm, form),

  parseLocalStorage: (state, { cartList, fav }) => {
    state.favList = fav
    state.cartList = cartList
  },

  pushFavList: (state, favItem) => state.favList.push(favItem),

  removeFavList: (state, favItem) => {
    state.favList = state.favList.filter(
      (favIterable) => favIterable !== favItem
    )
    actions.handleUpdateLocalStorage('', JSON.stringify(state.favList))
  },

  addCartItem: (state, id) => {
    state.cartList.push(id)
    localStorage.setItem('cart', JSON.stringify(state.cartList))
  },

  removeCartItem: (state, id) => {
    state.cartList = state.cartList.filter((item) => item !== id)
    localStorage.setItem('cart', JSON.stringify(state.cartList))
  },
}

export const getters = {
  filteredItems: ({ items, filterForm }) =>
    items.filter(({ material }) =>
      filterForm.material !== '0' ? material === +filterForm.material : true
    ),
}
