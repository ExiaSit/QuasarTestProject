export function setUserInfo (state, data) {
  state.userInfo = data
}

export function loginSuccess(state) {
  state.isLogin = true
}

export function logOut(state) {
  state.userInfo = null
  state.isLogin = false
}
