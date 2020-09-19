<template>
    <div class="flex-col flex-center w-100" :style="`--color:${color}; --before:${before}`">
        <div class="border flex-col flex-center">
            <span id="animate">{{code}}</span>
            <span id="title">{{title}}</span>
            <span id="msg">{{msg}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['msg', 'code', 'color', 'title', 'before']
    }
</script>

<style lang="scss" scoped>
.border{
    border: 1px solid rgb(230, 230, 230);
    box-shadow: 0 0 3px gray;
    padding: 50px;
}
div *{
    color: var(--before);
}
span#title{
    font-size: 50px;
    margin-bottom: 8px;
}
#animate{
    @keyframes color {
        0%{
            color: var(--before);
        }
        50%{
            color: var(--color);
        }
        100%{
            color: var(--before);
        }
    }
    animation: color ease-in-out 1s;
    animation-iteration-count: infinite;
    font-size: 200px;
}
</style>