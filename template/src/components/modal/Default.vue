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
                                        <!-- <svg-icon :icon="icon"></svg-icon> -->
                                        <i :class="`icon-${icon}`"></i>
                                    </span>
                                </div>
                                <div class="flex-col flex-center toolbar-header">
                                    <slot name="header"></slot>
                                </div>
                                <div class="flex-col flex-center toolbar-action h-100">
                                    <span class="icon i-x close" v-on:click="hide(`btn-close`)" v-if="closeBtn">
                                        <!-- <svg-icon :icon="'x'"></svg-icon> -->
                                        <i class="icon-x"></i>
                                    </span>
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
                    <div class="flex-row footer">
                        <div class="flex-column">
                            <slot name="before-btn"></slot>
                        </div>
                        <div class="flex-column">
                            <div class="btn ok mr-2" v-if="okBtn" v-on:click="hide(`btn-ok`)">OK</div>
                        </div>
                        <div class="flex-column">
                            <div class="btn close" v-if="cancelBtn" v-on:click="hide(`btn-cancel`)">Cancel</div>
                        </div>
                        <div class="flex-column">
                            <slot name="after-btn"></slot>
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
            okBtn:{
                type: Boolean,
                default: true
            },
            cancelBtn:{
                type: Boolean,
                default: true
            }
        },
        methods: {
            hide(event){
                this.$emit("hide", event)
            }
        }
    }
</script>

<style lang="scss" scoped>
@import /* webpackPrefetch: true */ "../../assets/modal.scss";
</style>