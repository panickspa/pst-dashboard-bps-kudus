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
                                <!-- <div class="vertical-line"></div> -->
                                <span :class="`menu-icon icon`"><svg-icon :icon="menu.icon"></svg-icon></span><span class="m-none">{{menu.name}}</span>
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
    transition: all 0.2s ease-in-out;
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
    padding-top: 8px;
    padding-bottom: 8px;
    text-decoration: none;
    background-color: var(--primary-color);
    color: var(--font-default);
    transition: border .1s ease-in-out;
}
.menu-item:hover{
    color: var(--font-default);
    background: var(--primary-color-light);
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

// .menu-item::before{
//     content: "";
//     height: calc(var(--fsize) * 2);
//     width: 4px;
//     transform: translateY(-8px);
//     position: absolute;
//     background-color: none;
//     transition: background-color 200ms ease-in-out;
// }

.menu-item.router-link-exact-active{
    border-left: 4px solid var(--secondary-color);
}
.menu-item.router-link-exact-active .menu-icon{
    margin-right: 30px;
    margin-left: 11px;
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
        width: calc(var(--fsize) + 35px);
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
        height: calc(var(--fsize) + 20px);
        width: 100vw;
    }
    .sidebar{
        bottom: 100%;
        width: 100vw;
        height: calc(var(--fsize) * 3);
        overflow-y: hidden;
    }
    .list{
        overflow-x: auto;
    }
    .menu{
        display: grid;
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
        // width: calc(var(--fsize) * 3);
        min-width: calc(var(--fsize) * 3);
        text-align: center;
        // align-self: center;
    }
    .menu-icon{
        margin: 0%;
        width: calc(var(--fsize) * 3);
        // text-align: center;
    }
    .menu-item.router-link-exact-active .menu-icon{
        margin: 0%;
        // text-align: center;
    }
    .list{
        flex-direction: row;
    }
    a::before{
        display: none;
    }
}

</style>