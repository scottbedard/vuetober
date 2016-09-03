import Vue from 'vue'

Vue.directive('linkable', {
  bind (el, binding, vnode) {
    let component = vnode.context

    el.linkableClick = (e) => {
      for (let clickedElement of e.path) {
        if (clickedElement === el || clickedElement.tagName === 'A') {
          if (clickedElement.hostname === window.location.hostname) {
            e.preventDefault()
            component.$router.push(clickedElement.pathname)
          }
          break
        }
      }
    }

    el.addEventListener('click', el.linkableClick)
  },
  unbind (el) {
    el.removeEventListener('click', el.linkableClick)
  }
})
