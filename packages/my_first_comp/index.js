import my_first_comp from './index'
my_first_comp.install = Vue => Vue.component(my_first_comp.name, my_first_comp)
export default my_first_comp
