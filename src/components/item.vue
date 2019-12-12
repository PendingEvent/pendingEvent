<template>
  <div :class='["tudo-item","tudo-flex",tudo.completed ? "completed":""]'>
      <input
        type="checkbox"
        class="toggle"
        v-model = "tudo.completed"
      >
      <label>{{tudo.content}}</label>
      <button class="destory" @click="deleteTudo()">x</button>
  </div>
</template>

<script>
export default {
//import引入的组件需要注入到对象中才能使用
    components: {
        
    },
    props:{
        tudo:{
            type:Object,
            requires:true,
        }
    },
    data() {
        return {
            
        };
    },
    methods:{
        deleteTudo(){
            this.$emit('del',this.tudo.id)
        }
    }

}
</script>
<style scoped>
    .tudo-item{
        align-items: center;
        justify-content: space-between;
        padding: 0 35px;
        font-size: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, .06);
    }
    .destory{
        font-size: 20px;
        color: #999;
        border-radius: 50%;
        outline: none;
        border: none;
        background: transparent;
        opacity: 0;
    }
    .tudo-item:hover .destory{
        opacity: 1;
    }
    .tudo-item label{
        white-space: pre-line;
        word-break: break-all;
        padding: 15px 60px 15px 15px;
        margin-left: 45px;
        display: block;
        width: 400px;
        line-height: 1.2;
        transition: color .2s;
    }
    .completed label{
        color: #d9d9d9;
        text-decoration: line-through;
    }
    .toggle{
        text-align: center;
        width: 20px;
        height:20px;
        border-radius: 50%;
        border: none;
        outline: none;
        appearance: none;
        background:url(../assets/images/gou.png) no-repeat;
        background-size: contain;
    }
    .toggle:checked{
        background:url(../assets/images/gou-red.png) no-repeat;
        background-size: contain;
    }
</style>