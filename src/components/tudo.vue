<template>
  <div class='hello'>
      <section class="real-app">
          <input 
            class="add-input"
            autofocus="autofocus"
            type="text"
            placeholder="你要做什么..."
            @keyup.enter = "addTudo"
          >
          <item 
            :tudo = "tudo"
            v-for = "tudo in filteredTudos"
            :key = "tudo.id"
            @del = "deleteTudo"
          ></item>
          <tabs 
            :filter = "filter"
            :tudos = "tudos"
            @toggle = "toggleFilter"
            @clearAllCompleted = "clearAllCompleted"
          />
      </section>
  </div>
</template>

<script>
import Item from "./item"
import Tabs from "./tabs"
let id = 0;
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Item,  
    Tabs 
},
data() {
    return {
      tudos:[],
      filter:"all"
    };
},
computed:{
    filteredTudos(){
        if(this.filter === 'all'){
            return this.tudos
        }
        const completed = this.filter === "completed"
        return this.tudos.filter(tudo => completed === tudo.completed)
    }
},
methods:{
    addTudo(e){
        if(e.target.value != ''){
            this.tudos.unshift({
                id: id++,
                content: e.target.value.trim(),
                completed: false
            })
        }else{
            alert("不能为空")
        }
        
        e.target.value = ''
    },
    deleteTudo(id){
        this.tudos.splice(this.tudos.findIndex(tudo => tudo.id === id),1)
    },
    toggleFilter(state){
        this.filter = state
    },
    clearAllCompleted(){
        this.tudos = this.tudos.filter(tudo => !tudo.completed)
    }
},


}
</script>
<style scoped>
    .real-app{
        width: 600px;
        background: #fff;
        border: 1px solid #eee;
        margin: 60px auto;
    }
    .add-input{
        width: 400px;
        height: 45px;
        outline: none;
        border: none;
        font-size: 18px;
        padding: 0 35px;
    }
    .add-input::-webkit-input-placeholder{
        font-size: 16px;

    }
</style>