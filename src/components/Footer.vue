<template>
   <div id="footer">
        <span>Writer By {{autor}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            autor:'Liu'
        }
    }
}
</script>

<style scoped>
    #footer{
        text-align: center;
        color: #fff;
    }
</style>