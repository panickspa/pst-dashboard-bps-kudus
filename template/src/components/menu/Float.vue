<template>
    <div class="wrapper" 
        :style="`--width-menu: ${width}px; top: ${this.top}; right: ${this.right};`"
        draggable="true">
        <div class="flex-row flex-center">
            <transition name="slide-ltr">
                <div class="flex-row menu-container" v-if="!hide">
                    <div class="menu-wrapper" v-for="m in menu" :key="m.name">
                        <div class="menu-shadow"></div>
                        <transition name="menu-animation">
                            <div class="menu-content" v-if="m.show">
                                <slot :name="m.name"></slot>
                            </div>
                        </transition>
                        <div class="menu" v-html="m.name" @click="m.show = showMenu(m.show)"></div>
                    </div>
                </div>
            </transition>
            <div class="line-drag" @click="hide = showMenu(hide)"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            draggable: {
                type: Boolean,
                default: false
            },
            menu:{
                type: Array
            },
            width:{
                type: Number,
                default:200
            }
        },
        methods: {
            showMenu(e){
                return !e
            },
            initialMCoor(){
                console.log(this.$parent.mCoor)
                return this.$parent.mCoor
            },
        },
        data() {
            return {
                top: `calc(100% - 2em - 10px)`,
                right: `8px`,
                mInitCoor: [0,0],
                hide: true
            }
        },
    }
</script>

<style lang="scss" scoped>
.wrapper{
    position: fixed;
    z-index: 4;
    // top: calc(100% - 2em - 10px);
    // right: 0%;
}
.line-drag{
    height: 1em;
    padding-top: 9px;
    padding-bottom: 9px;
    width: 6px;
    background-color: var(--secondary-color);
    cursor: pointer;
}
.line-drag:hover{
    background-color: var(--secondary-color-light);
}
.menu{
    padding: 8px;
    background-color: var(--primary-color);
    cursor: pointer;
    width: var(--width-menu);
    text-align: center;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select:none;
    user-select:none;
    -o-user-select:none;
}
// .menu-container{
//     max-width: calc(var(--width-menu) / 2);
//     overflow-x: auto;
// }
.menu-wrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.menu-content{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 50vh;
    overflow-y: auto;
    width: calc(var(--width-menu) + 14px);
    bottom: 100%;
    position: absolute;
    border: 2px solid var(--primary-color);
    border-bottom: none;
    border-right: none;
    background-color: var(--primary-color-light);
}
.menu:hover{
    background-color: var(--primary-color-light);
}
.wrapper-content{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.menu-animation-enter-active{
    animation: menuClip ease-in-out .1s;
}
.menu-animation-leave-active{
    animation: menuClip ease-in-out .1s reverse;
}
@keyframes menuClip {
    0%{
        clip-path: inset(100% 0px 0px 0px);
    }
    100%{
        clip-path: inset(0% 0px 0px 0px);
    }
}
.slide-ltr-enter-active{
    animation: ltr ease-in-out .1s;
}
.slide-ltr-leave-active{
    animation: ltr ease-in-out .1s reverse;
}
@keyframes ltr {
    0%{
        clip-path: inset(0px 0px 0px 100%);
    }
    100%{
        clip-path: inset(0px 0px 0px 0%);
    }
}
.menu-shadow{
    width: 100%;
    min-height: calc(1em + 16px);
    position: absolute;
    right: 0%;
    top: calc(90%-16px);
    box-shadow: 4px 4px 4px var(--secondary-color-light);
    z-index: -1;
}
@media screen and (max-width: 500px) {
    .menu{
        width: calc(var(--width-menu) / 2);
    }
    .menu-content{
        width: calc(var(--width-menu) / 2 + 14px);
    }
}
</style>