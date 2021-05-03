<template>
    <div class="main">
        <div class="menu-name">
            <div class="flex-row">
                <div class="flex-col w-100">
                    <h1 v-text="$route.name"></h1>
                </div>
                <!-- <div class="flex-col flex-center" id="menu-toggle">
                    <div class="icon-toggle" v-on:click="$emit(`showMenu`, true)">
                        <span class="icon-three-dots-vertical"></span>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "main-window",
        props:{
            menuShown:{
                type: Boolean,
                default: false
            }
        },
        methods: {
         toggle(){
             this.$emit('showMenu', true);
         }   
        }
    }
</script>
<style lang="scss" scoped>
.main{
    height: 100vh;
    margin-left: 250px;
    overflow: auto;
    transition: all 200ms ease-in-out;
    background-color: var(--primary-background);
}
.menu-name{
    margin-top: 10px;
    margin-left: 15px;
    margin-bottom: 2em;
}
#menu-toggle{
    display: none;
    cursor: pointer;
    font-size: 2em;
}
#menu-toggle>.icon-toggle{
    align-self: flex-end;
}
.content{
    margin-left: 15px;
    margin-right: 15px;
    // position: initial;
    // display: initial;
    // width: 100%;
}
.content>*{
    width: 100%;
}
@media screen and (max-width: 1080px) {
    .main{
        margin-left: 50px;
        transition: all 200ms ease-in-out;
    }
    #menu-toggle{
        display: flex;
    }
}
@media screen and (max-width: 500px) {
    .main{
        margin-left: 0px;
        margin-top: calc(var(--fsize) + 22px);
        transition: all 200ms ease-in-out;
    }
    #menu-toggle{
        display: flex;
    }
}
</style>