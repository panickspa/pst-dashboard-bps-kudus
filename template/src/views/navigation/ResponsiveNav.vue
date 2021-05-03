<template>
    <div class="resp-content">
        <div class="flex-row">
            <div class="wrapper">
                <div class="sidebar">
                    <div class="menu flex-row">
                        <div class="header">
                            <div class="flex-row">
                                <div class="flex-col">
                                    <div class="flex-row flex-center">
                                        <span :class="`icon header-text`">
                                            <!-- <svg-icon :icon="icon"></svg-icon> -->
                                            <i :class="`icon-${icon}`"></i>
                                        </span>
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
                                <!-- <div class="vertical-line"></div> -->
                                <span :class="`menu-icon icon`">
                                    <!-- <svg-icon :icon="menu.icon"></svg-icon> -->
                                    <i :class="`icon-${menu.icon}`"></i>
                                </span>
                                <span class="m-none">{{menu.name}}</span>
                            </router-link>
                        </div>
                    </div>
                    <div class="footer m-none">
                        <div class="wrapper flex-row h-100">
                            <div class="footer-item">
                                {{footer}}
                            </div>
                        </div>
                    </div>
                </div>
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
                default: "app"
            },
            'footer': {
                type: String,
                default: "Footer"
            },
            showMenu: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
@import "../../assets/navigation.scss";
</style>