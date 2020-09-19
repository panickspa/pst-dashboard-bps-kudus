<template>
    <div class="content flex-row w-100">
        <div v-for="n in msg.length" 
            :key="`l-${n}`" v-text="msg[n-1]" 
            class="bouncing" 
            :style="`animation-delay: .${(n-1)*5}s;`"></div>
    </div>
</template>

<script>
    export default {
        props: ['msg']
    }
</script>

<style lang="scss" scoped>
.bouncing{
    animation: bounce ease-in-out 0.7s;
    animation-iteration-count: infinite;
    position: relative;
}
.content{
    @keyframes bounce{
        0%{
            top: 0%;
        }
        50%{
            top: 10px;
        }
        100%{
            top: 0%;
        }
    }
    font-size: 3em;
    padding-bottom: 16px;
}
</style>