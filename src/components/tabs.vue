<template>
    <div class="helper tudo-flex">
        <span class="left">{{unFinishedToduLength}}条事项</span>
        <span class="states">
            <span 
            :class="[state, filter === state.state ? 'actived' : '']"
            @click="toggleFillter(state.state)"
            v-for="(state,item) in states" :key="item"
            >
            {{state.name}}</span>
        </span>
        <span class="clear" @click="clearAllCompleted">清除已完成</span>
    </div>
</template>

<script>
    export default {
        props:{
            filter:{
                type:String,
                required:true
            },
            tudos:{
                type:Array,
                required:true
            }
        },
        name: "tabs",
        data(){
            return{
                states:[
                    {
                        state:"all",
                        name:"所有"
                    },
                    {
                        state:"active",
                        name:"进行中"
                    },
                    {
                        state:"completed",
                        name:"已完成"
                    }
                ],
                // states:['all' , "active" , "completed"]
            }
        },
        computed:{
            unFinishedToduLength(){
                return this.tudos.filter(tudos => !tudos.computed).length
            }
        },
        methods:{
            toggleFillter(state) {
                this.$emit("toggle",state)
                console.log(this.states[0].state)
            },
            clearAllCompleted() {
                this.$emit("clearAllCompleted")
            }
        }
    }
</script>

<style scoped>
   .helper{
       padding: 0 10px;
       margin: 10px 0;
       color:#555;
       justify-content: space-between;
   }
   .left, .clear{
       cursor: pointer;
   }
   .states span{
       margin-right: 10px;
       padding:2px 6px;
       cursor: pointer;
   }
   .actived{
       color:rgba(243, 23, 23, 1);
   }
</style>
