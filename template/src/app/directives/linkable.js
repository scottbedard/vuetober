import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.directive('linkable', {
  bind{{#if_eq lintConfig "standard"}} {{/if_eq}}(el, binding, vnode) {
    const component = vnode.context{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#if_eq lintConfig "airbnb"}}    /* eslint-disable no-param-reassign */
{{/if_eq}}
    el.linkableClick = (e) => {
      for (const clickedElement of e.path) {
        if (clickedElement === el || clickedElement.tagName === 'A') {
          if (clickedElement.hostname === window.location.hostname) {
            e.preventDefault(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
            component.$router.push(clickedElement.pathname){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          }
          break{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }
      }
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    el.addEventListener('click', el.linkableClick){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  unbind{{#if_eq lintConfig "standard"}} {{/if_eq}}(el) {
    el.removeEventListener('click', el.linkableClick){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
