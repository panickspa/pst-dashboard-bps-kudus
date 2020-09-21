<template>
  <div id="app" class="classic-grey" @mousemove="mousemoveEvt">
    <navigation-responsive-nav
      :menuList="menuList" 
      :showMenu="showMenuBar" 
      v-on:menuClicked="showMenu" 
      v-on:hideMenu="showMenu" 
      :footer="footer" 
      :header="appName"></navigation-responsive-nav>
    <main-window v-on:showMenu="showMenu" :menuShown="showMenuBar">
      <transition name="zoom" mode="out-in">
        <router-view></router-view>
      </transition>
    </main-window>
    <menu-float :menu="floatMenu">
      <div :slot="f.name" class="h-100" v-for="f in floatMenu" :key="`floatmenu-${f.name}`">
        <div class="flex-row">
          <div class="flex-col w-100 chat-wrapper">
            <div :key="`${f.name}-${c.id}`" v-for="c in f.chatHistory" v-bind:class="{
                'flex-end flex-row chat rep' : c.out,
                'flex-row chat' : !c.out
              }">
              <core-card class="chat-content flex-col" :footer="true" :border="false">
                <div slot="content" class="chat-text" v-text="c.message">
                </div>
                <div slot="footer" class="flex-row flex-end">
                  <span class="text-small" v-text="chatDateFormat(c.date)+(c.out ? ` - me`: ` - ${c.sender}`)"></span>
                </div>
              </core-card>
            </div>
          </div>
        </div>
        <input-text v-model="f.data" name="input-chat"></input-text>
        <!-- test -->
      </div>
      <h1 slot="notification">notif</h1>
    </menu-float>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showMenu(evt){
      console.log('menuClicked',evt)
      this.showMenuBar = evt
    },
    mousemoveEvt(evt){
      this.mCoor = [evt.clientX, evt.clientY]
      // console.log(this.mCoor)
    },
    chatDateFormat(date){
      // console.log(date)
      let now = new Date(), hour = date.getHours(), minutes = date.getMinutes();
      let diff =  Math.round((now - date) / (1000 * 60 * 60 * 24))
      console.log(`${diff > 2 ? `${diff} days ago - ` : diff == 1 ? 'Yesterday - ' : ''}${hour > 9 ? hour : `0${hour}`}:${minutes}` )
      return `${diff > 2 ? `${diff} days ago - ` : diff == 1 ? 'Yesterday - ' : 'Today - '}${hour > 9 ? hour : `0${hour}`}:${minutes > 9 ? minutes : `0${minutes}`}` 
    }
  },
  data() {
    return {
      menuList : [
        {
          name: "Home",
          to: "/",
          icon: "icon-house-door-fill"
        },
        {
          name: "Modal",
          to: "/modal",
          icon: 'icon-window'
        },
        {
          name: "Form",
          icon: "icon-list",
          to: "/form"
        },
        {
          name: "Input",
          icon: "icon-input-cursor",
          to: "/input"
        },
        {
          name: "About",
          to: "/about",
          icon: "icon-info-circle"
        },
      ],
      showMenuBar: false,
      footer: "Created By Panicks",
      appName: "App Name",
      floatMenu:[
          {
              name: "Andy",
              show: false,
              data: '',
              chatHistory:[
                {
                  id: 1,
                  date: new Date(2020, 8, 1),
                  message: 'hello',
                  out: false,
                  sender: 'Andy'
                },
                {
                  id: 2,
                  date: new Date(2020, 8, 1, 10, 11),
                  message: 'hi andy',
                  out: true
                }
              ],
          },
          {
              name: "Marshel",
              show: false,
              data: '',
              chatHistory:[
                {
                  id: 1,
                  date: new Date(2020, 8, 20, 11, 10),
                  message: 'hi dude',
                  out: false,
                  sender: 'Marshel'
                },
                {
                  id: 2,
                  date: new Date(),
                  message: `hi yo supppppp!!!!!!`,
                  out: true
                }
              ],
          }
      ],
      chatInput: '',
      mCoor:[0, 0]
    }
  },
  watch: {
    $route(){
        this.showMenuBar = false
    }
  },
}
</script>

<style lang="scss">
@import "./components/color.scss";
html{
  background-color: var(--primary-background-color);
}
div, input, label, p{
  font-size: 1em;
}
.app{
  background-color: var(--primary-background);
}
.box{
    width: 25px;
    height: 25px;
    background-color: blue;
}
body, body *,#app {
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
}
#app{
  height: 100%;
  width: 100%;
}
.flex{
  display: flex;
}
.flex-row{
  flex-direction: row;
  display: flex;
}
.flex-col{
  flex-direction: column;
  display: flex;
}
.flex-end{
  align-items: flex-end;
  justify-content: flex-end;
}
.flex-center{
  align-items: center;
  justify-content: center;
}
.block{
    display: inline-block;
}
col-1{
  flex-grow: 1;
}
col-2{
  flex-grow: 2;
}
.h-100{
  height: 100%;
}
.w-100{
  width: 100%;
}
.d-none{
  display: none;
}
.icon-toggle{
  margin-right: 6px;
  color: var(--primary-color);
  background-color: var(--secondary-color);
  border-radius: 100%;
  padding: 2px;
  transition: all 200ms ease-in-out;
}
.icon-toggle:hover{
  background-color: var(--secondary-color-light);
  border-radius: 100%;
  transition: all 200ms ease-in-out;
}
.btn{
  cursor: pointer;
  display: inline-block;
  border-style: solid;
  border-color: var(--secondary-color-light);
  border-width: 1px;
  min-width: 75px;
  text-align: center;
  background: var(--primary-color);
  padding: 2px 4px 2px 4px;
  transition: all 100ms linear;
}

.btn:hover{
  background-color: var(--primary-color-light);
  transition: all 100ms linear;
}
.p-5{
  padding: 5px;
}
.mr-2{
  margin-right: 2px;
}
.ml-5{
  margin-left: 5px;
}
.none{
  display: none !important;
}
.btn-black{
  padding: 5px;
  background-color: black;
  color: white;
}
select, select:focus, 
input[type="text"], input[type="password"], input[type="date"], 
input[type="text"]:focus, input[type="password"]:focus, input[type="date"]:focus{
    width: 100%;
    border: none;
    border-radius: 0%;
    // border-style: none;
    font-size: 1em;
    outline: none;
    // margin-right: 8px;
    background-color: none;
    background: none;
}

.checkbox, .radio{
 margin-bottom: 5px;
 display: flex;
 flex-direction: row;
 position: relative;
 transition: all 1s;
}

.checkbox,
.checkbox input,
.checkbox label,
.radio,
.radio input,
.radio label{
  cursor: pointer;
  transition: all 1s;
}

.checkbox input[type="checkbox"]:checked + label::after{
  font-family: 'icomoon';
  content: "\ea57";
  background: var(--secondary-color-light);
  border: 1px solid var(--secondary-color);
  color:#fff;
  transition: all 1s;
}

.checkbox label{
  display: block;
  margin-left: 20px;
  padding-left: 7px;
  line-height: 20px;
  text-align: left;
}

.checkbox label::before {
  content: "";
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: var(--primary-color-light);
  border: 1px solid var(--primary-color);
  transition: all 1s;
}

.checkbox label::after{
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
}

input[type="checkbox"],
input[type="checkbox" i]{
  opacity: 0;
  z-index: -1;
  position: absolute;
  cursor: pointer;
  transition: all 1s;
}

.radio input[type="radio"]:checked + label:after{
  font-family: 'icomoon';
  content: "\ea75";
  font-size: 50%;
  background: var(--secondary-color-light);
  border: 1px solid var(--secondary-color);
  border-radius: 100%;
  color:#fff;
  transition: all 1s;
}

.radio label{
  display: block;
  margin-left: 20px;
  padding-left: 7px;
  line-height: 20px;
  text-align: left;
  transition: all 1s;
}

.radio label:before {
  content: "";
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: var(--primary-color-light);
  border: 1px solid var(--primary-color);
  border-radius: 100%;
  transition: all 1s;
}

.radio label:after{
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  transition: all 1s;
}

input[type="radio"],
input[type="radio" i]{
  opacity: 0;
  z-index: -1;
  position: absolute;
  cursor: pointer;
  transition: all 1s;
}

.input{
  padding: 4px;
  border: 1px solid var(--primary-color);
}

.input:focus-within{
    box-shadow: 0px 0px 3px var(--secondary-color-light);
}

.red{
  color: var(--red);
}

.green{
  color: var(--green);
}

.card{
  border-style: solid;
  border-width: 1px;
  border-color: var(--primary-color);
  box-shadow: 0px 0px 8px var(--secondary-color-light);
  background-color: var(--primary-background);
  transition: box-shadow 0.2ms linear;
}
.shadow-red{
  box-shadow: 0px 0px 8px var(--red-light) !important;
  transition: box-shadow 0.2ms linear;
}

.zoom-enter-active{
  animation: zoom ease-in-out .1s;
}
.zoom-leave-active{
  animation: zoom ease-in-out .1s reverse;
}

.zoom-abs-enter-active{
  position: absolute;
  width: 100%;
  animation: zoom ease-in-out 0.3s;
}
.zoom-abs-leave-active{
  width: 100%;
  position: absolute;
  animation: zoomabs ease-in-out 0.3s reverse;
}

@keyframes zoom{
  0%{
    transform: scale(0);
    // color: rgba(255, 255, 255, 0);
    opacity: 0%;
  }
  100%{
    opacity: 100%;
    transform: scale(1);
  }
}

@keyframes zoomabs{
  0%{
    position: absolute;
    transform: scale(0);
    opacity: 0%;
    // color: rgba(255, 255, 255, 0);
  }
  100%{
    position: absolute;
    opacity: 100%;
    transform: scale(1);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 3s;
  position: absolute;
  top: auto;
  bottom: auto;
  left: auto;
  right: auto;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  position: absolute;
  top: auto;
  bottom: auto;
  left: auto;
  right: auto;
}
.relative{
  position: relative;
}
a.link{
    text-decoration: none;
    color: initial;
    transition: all 200ms;
    min-width: 2em;
    color: var(--link-color);
    position: relative;
}
a.link:visited{
  color: var(--link-visited-color);
}
a.link:hover::before{
    width: 2em;
    transition: all 200ms;
    border-bottom: 2px solid var(--primary-color);
}
a.link::before{
    content: "";
    border-bottom: 2px solid var(--secondary-color);
    position: absolute;
    transform: translateX(-100%);
    // z-index: -1;
    width: 1em;
    height: 1em;
    transform: translateX(1%);
    transition: all 200ms;
}
a.link:visited::before{
    border-bottom: 2px solid var(--secondary-color);
}
a.link:hover:visited::before{
    border-bottom: 2px solid var(--primary-color);
}

// form rule
.password-toggle, .password-toggle>span{
    cursor: pointer;
}
.password-toggle{
    border-left-style: none;
}
.valid-icon{
    margin-left: 4px;
}

.header, .list-input{
    padding: 10px;
}
.requirement{
    margin-left: 2px;
    font-size: 9px;
    align-self: flex-end;
    margin-bottom: 2px;
}
.blank{
    width: 16px;
}
.list-input{
    margin-bottom: 1em;
}
.input-item{
    margin-bottom: 0.5em;
}

.checkbox-grid{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
}

.label-checkbox{
    margin-bottom: 10px;
}

.action{
    justify-content: flex-end;
    background: var(--primary-color-light);
    padding: 10px 20px 20px 20px;
}

.warn{
    min-height: 1.2em;
    margin-bottom: 10px;
}

.warn-red *{
    color: var(--red);
}

.chat{
  margin-bottom: 4px;
  margin-top: 4px;
}
.chat-wrapper{
  max-height: 50vh;
  overflow: auto;
}
.chat-content{
  padding: 4px;
  max-width: 168px;
  font-size: 15px;
}
.chat-rep{
  align-items: flex-end;
}
.text-small{
  font-size: 8px;
}
.chat::before{
  content: " ";
  width: 10px;
  background-color: white;
  clip-path: polygon(100% 75%, 0% 100%, 100% 100%);
  z-index: 1;
}
.chat.rep::before{
  display: none;
}
.chat.rep::after{
  content: " ";
  width: 10px;
  height: .6em;
  background-color: white;
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
  z-index: 1;
}
.chat-text{
  white-space: pre-wrap;      /* CSS3 */   
   white-space: -moz-pre-wrap; /* Firefox */    
   white-space: -pre-wrap;     /* Opera <7 */   
   white-space: -o-pre-wrap;   /* Opera 7 */    
   word-wrap: break-word;      /* IE */
}
@media screen and (max-width: 500px) {
  .chat-content{
     max-width: 84px;
  }
}
</style>
