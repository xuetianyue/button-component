import my_first_comp from './my_first_comp/index.vue'

const components = [my_first_comp]

const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  my_first_comp,
}
