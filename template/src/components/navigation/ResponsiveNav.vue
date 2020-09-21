<template>
    <div class="content">
        <div class="flex-row">
            <div class="wrapper">
                <div class="sidebar">
                    <div class="menu flex-row">
                        <div class="header">
                            <div class="flex-row">
                                <div class="flex-col">
                                    <div class="flex-row flex-center">
                                        <span :class="`icon header-text`">
                                            <svg-icon :icon="icon"></svg-icon>
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
                                <div class="vertical-line">    
                                    <span :class="`menu-icon icon`"><svg-icon :icon="menu.icon"></svg-icon></span><span class="m-none">{{menu.name}}</span>
                                </div>
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
                default: "app-box"
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
.content{
    height: 100vh;
    width: 250px;
    /* padding-left: 10px; */
    position: absolute;
    transition: all 200ms ease-in-out;
    z-index: 5;
    /* background-color: white; */
}
.content>div, content>div>div{
    height: 100%;
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
    justify-content: flex-end;
}
.footer-item{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
    margin-left: 5px;
    margin-right: 30px;
    height: 1.8em;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.menu{
    flex-grow: 4;
    display: block;
    overflow-y: auto;
    overflow-x: hidden;
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

@media screen and (max-width: 1080px) {
    .m-none{
        display: none;
    }
    .content{
        width: 100%;
        height: 100vh;
    }
    .content ,.content>div, content>div>div, .sidebar{
        width: 50px;
    }
}

@media screen and (max-width: 500px) {
    .m-none{
        display: none;
    }
    .content{
        width: 100vw;
        transform: translateY(-38px);
    }
    .content ,.content>div, content>div>div{
        height: 38px;
    }
    .sidebar{
        bottom: 100%;
        width: 100vw;
        height: 38px;
        overflow-y: hidden;
        overflow-x: auto;
    }
    .menu{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .header{
        display: none;
    }
    .header-text{
        margin: 0%;
        margin-right: 10px;
        margin-top: 2px;
    }
    .menu-item{
        width: 3em;
    }
    .list{
        flex-direction: row;
    }
}

</style>