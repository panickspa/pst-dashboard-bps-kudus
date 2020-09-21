<template>
<transition name="zoom">
    <div v-if="!hidden" class="modal">
        <div class="modal-content flex-column h-100 flex-center">
            <div class="flex-row h-100 flex-center">
                <div class="wrapper card" v-if="!hidden">
                    <div class="flex-row">
                        <div class="toolbar w-100">
                            <div class="flex-row flex-center">
                                <div class="flex-col flex-center toolbar-icon">
                                    <span class="icon-modal icon" v-if="icon ? icon.length > 0 : false">
                                        <svg-icon :icon="icon"></svg-icon>
                                    </span>
                                </div>
                                <div class="flex-col flex-center toolbar-header">
                                    <slot name="header"></slot>
                                </div>
                                <div class="flex-col flex-center toolbar-action h-100">
                                    <span class="icon icon-x close" v-on:click="hide(`btn-close`)" v-if="closeBtn"></span>
                                    <!-- <div class="btn minimize"></div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper p-5">
                        <div class="flex-row">
                            <div class="modal-message">
                                <slot name="msg"></slot>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shader" v-on:click="closedWhenShaderClicked || (!okBtn && !cancelBtn) ? hide(`shader`) : ''" v-bind:class="{
                    'shader-bg' : shader
                }"></div>
            </div>
        </div>
    </div>
</transition>    
</template>

<script>
    export default {
         name: 'modal-default',
         props:{
            icon:{
                type: String
            },
            hidden:{
                type: Boolean,
                default: true
            },
            closeBtn: {
                type: Boolean,
                default: true
            },
            minimizeBtn:{
                type: Boolean,
                default: false
            },
            shader: {
                type: Boolean,
                default: false
            },
            closedWhenShaderClicked:{
                type: Boolean,
                default: true
            },
            preventClose: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            hide(event){
                this.$emit("hide", event)
            }
        }
    }
</script>

<style lang="scss" scoped>
.modal{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    display: block;
    background-color: none;
    z-index: 2;
}
.modal-content{
    position: relative;
    background-color: none;
    z-index: 2;
}
.toolbar-header{
    flex-grow: 2;
}
.toolbar-action{
    // flex-grow: 1;
    align-items: flex-end;
}
.toolbar-action *{
    cursor: pointer;
    min-height: 21px;
}
.toolbar-icon{
    // flex-grow: 1;
    min-height: 2em;
    align-items: flex-start;
}
.icon{
    color: var(--font-default);
 font-size: 1.2em;
 padding: 5px;
}
.icon-x{
    height: 100%;
    transition: color 250ms ease-in-out, background-color 250ms ease-in-out;
}
.icon-x:hover{
    background-color: var(--red);
    color: white;
    transition: color 250ms ease-in-out, background-color 250ms ease-in-out;
}
.modal-message{
    min-height: 20vh;
    min-width: 26vw;
    max-height: 75vh;
    padding-top: 10px;
    padding-left: 32px;
    padding-right: 32px;
    overflow-y: auto;
    margin-bottom: 25px;
}
.footer{
    padding: 10px 4px 10px 4px;
    // border-top-style: solid;
    // border-top-width: 1px;
    background-color: var(--primary-color-light);
    justify-content: flex-end;
    overflow-x: auto;
}
.modal-content>.flex-row>.wrapper{
    z-index: 2;
}

.shader{
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
}
.shader-bg{
 background-color: var(--secondary-color-shader);
}
</style>