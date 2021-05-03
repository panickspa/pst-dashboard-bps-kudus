<template>
    <div class="sidebar-content" v-bind:class="{
        'show-menu': showMenu,
        'hide-menu': !showMenu
    }">
        <div class="flex-row h-100">
            <div class="wrapper h-100">
                <div class="sidebar h-100">
                    <div class="menu flex-col h-100">
                        <div class="header">
                            <div class="flex-row">
                                <div class="flex-col flex-center col-1">
                                    <!-- <div class="flex-row" id="toggle-menu-close">
                                        <div class="icon-toggle" v-on:click="$emit(`hideMenu`,false)">
                                            <span class="icon-three-dots-vertical"></span>
                                        </div>
                                    </div> -->
                                </div>
                                <div class="flex-col col-2">
                                    <div class="flex-row flex-center">
                                        <span :class="`${icon} icon header-text`"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list">
                            <router-link :to="menu.to"  
                                v-for="menu in menuList" 
                                :key="menu.name" 
                                class="menu-item" 
                                v-on:click="$emit(`menuClicked`, false)">
                                <div class="vertical-line">    
                                    <span :class="`${menu.icon} menu-icon icon`"></span>{{menu.name}}
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="wrapper flex-row h-100">
                            <div class="footer-item">
                                {{footer}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="empty-shade" v-on:click="$emit(`hideMenu`,false)">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        props: {
            menuList: Array,
            'icon': {
                type: String, 
                default:"icon-app"
            },
            'footer': {
                type: String,
                default: "Footer"
            },
            showMenu: {
                type: Boolean,
                default: false
            },
        }
    }
</script>

<style lang="scss">
@import "../../assets/navigation.scss";
</style>