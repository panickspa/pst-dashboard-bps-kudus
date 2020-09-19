<template>
    <div class="content" v-bind:class="{
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
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../color.scss";
#toggle-menu-close{
    cursor: pointer;
    display: none;
}
.empty-shade{
    display: none;
    background: var(--secondary-color-shader);
    width: 100%;
}
.content{
    height: 100vh;
    width: 250px;
    /* padding-left: 10px; */
    position: absolute;
    transition: all 200ms ease-in-out;
    z-index: 2;
    /* background-color: white; */
}
.sidebar{
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100%;
    flex: none;
    background-color: var(--primary-color);
    /* padding-left: 10px; */
}
.footer{
    flex-grow: 1;
}
.footer-item{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
}
.header{
    margin-top: 10px;
    /* border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: rgb(221, 221, 221); */
}
.header-text{
    font-weight: 700;
    margin-left: 15px;
    margin-right: 30px;
    height: 1.8em;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.menu{
    flex-grow: 2;
    display: block;
    overflow: auto;
    /* border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: rgb(221, 221, 221); */
}
.menu-item{
    padding: 0px;
    text-decoration: none;
    background-color: var(--primary-color);
    color: var(--font-default);
    transition: background 200ms ease-in-out, color 200ms ease-in-out;
}
.menu-item:hover{
    color: var(--font-default);
    background: var(--primary-color-light);
    transition: background 200ms ease-in-out, color 200ms ease-in-out;
}
.menu-icon{
    margin-right: 30px;
    margin-left: 15px;
}
.list{
    /* font-size: 1.2em; */
    display: flex;
    flex-direction: column;
}
.icon{
    font-size: 1.2em;
    color: var(--font-default);
}

a>.vertical-line{
    display: flex;
    align-items: center;
    height: 2.4em;
    width: 4px;
    background-color: none;
    transition: background-color 200ms ease-in-out;
}

a.router-link-exact-active>.vertical-line{
    display: flex;
    align-items: center;
    background-color: var(--secondary-color);
    transition: background-color 200ms ease-in-out;
}

@media screen and (max-width: 800px) {
    #toggle-menu-close{
        display: flex;
    }
    .empty-shade{
        display: inherit;
    }
    .content{
        width: 100%;
    }
    .hide-menu{
        clip-path: inset(0px 100% 0px 0px);
        transition: all 200ms ease-in-out;
    }
    .show-menu{
        clip-path: inset(0px 0% 0px 0px);
        transition: all 200ms ease-in-out;
    }
}

</style>