<template>
  <div id="app" v-bind:class="{
    'classic-grey': $store.state.theme == 'classic-grey',
    'dark': $store.state.theme == 'dark',
    'navy-blue': $store.state.theme == 'navy-blue',
    'brown': $store.state.theme == 'brown',
    'cream': $store.state.theme == 'cream',
    'ocean-blue': $store.state.theme == 'ocean-blue',
  }" @mousemove="mousemoveEvt" :style="`--fsize: ${$store.state.fontSize}px;`">
    <!-- <svg-sprite></svg-sprite> -->
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
    <menu-float :menu="floatMenu" class="chat-hide">
      <div :slot="f.name" class="h-100 chat-hide" v-for="f in floatMenu" :key="`floatmenu-${f.name}`">
        <div class="flex-row">
          <div class="flex-col w-100 chat-wrapper">
            <div :key="`${f.name}-${c.id}`" v-for="c in f.chatHistory" v-bind:class="{
                'flex-end flex-row chat rep' : c.out,
                'flex-row chat' : !c.out
              }">
              <core-card class="chat-content flex-col" :footer="true" :border="false">
                <div slot="content" class="chat-text" v-text="c.message">
                </div>
                <div slot="footer" class="flex-row flex-end chat-footer">
                  <span class="text-small" v-text="chatDateFormat(c.date)+(c.out ? ` - me`: ` - ${c.sender}`)"></span>
                </div>
              </core-card>
            </div>
          </div>
        </div>
        <div class="flex-row">
          <input-textarea v-model="f.data" class="chat-input w-100" :name="`input-chat-${f.name}`" :rows="1" placeholder="Enter your message"></input-textarea>
          <div class="send-button flex-center">
            <i class="icon-reply-fill"></i>
            <!-- <svg-icon icon="reply-fill" color="var(--secondary-color)"></svg-icon> -->
          </div>
        </div>
      </div>
      <h1 slot="notification">notif</h1>
    </menu-float>
  </div>
</template>

<script>
const MenuFloat = () => import('./components/menu/Float.vue')
// const SvgSprite = () => import(/* webpackPrefetch: true */ './components/svg/Sprite')
const InputTextarea = () => import('./components/input/Textarea')
const CoreCard = () => import('./components/core/Card')
export default {
  name: 'App',
  components:{
    MenuFloat,
    // SvgSprite,
    InputTextarea,
    CoreCard
  },
  methods: {
    showMenu(evt){
      // console.log('menuClicked',evt)
      this.showMenuBar = evt
    },
    mousemoveEvt(evt){
      this.mCoor = [evt.clientX, evt.clientY]
    },
    chatDateFormat(date){
      let now = new Date(), hour = date.getHours(), minutes = date.getMinutes();
      let diff =  Math.round((now - date) / (1000 * 60 * 60 * 24))
      return `${diff > 2 ? `${diff} days ago - ` : diff == 1 ? 'Yesterday - ' : 'Today - '}${hour > 9 ? hour : `0${hour}`}:${minutes > 9 ? minutes : `0${minutes}`}` 
    }
  },
  data() {
    return {
      menuList : [
        {
          name: "Home",
          to: "/",
          icon: "house-door-fill"
        },
        {
          name: "Modal",
          to: "/modal",
          icon: 'window'
        },
        {
          name: "Form",
          icon: "list",
          to: "/form"
        },
        {
          name: "Input",
          icon: "input-cursor",
          to: "/input"
        },
        {
          name: "About",
          to: "/about",
          icon: "info-circle"
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
@import /* webpackPrefetch: true */ "./assets/color.scss";
@import /* webpackPrefetch: true */ "./assets/core.scss";
@import /* webpackPrefetch: true */  "./assets/form.scss";
@import /* webpackPrefetch: true */ "./assets/input.scss";
@import /* webpackPrefetch: true */ "./assets/main.scss";
@import /* webpackPrefetch: true */ "./assets/animation.scss";
@import /* webpackPrefetch: true */ "./assets/icons/style.css";

#app{
  font-size: var(--fsize);
  background-color: var(--primary-background);
  height: 100%;
  width: 100%;
}

.text-small{
   font-size: calc(var(--fsize) / 2);
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

.chat::before{
  content: " ";
  width: 10px;
  background-color:  var(--primary-background);
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
  background-color: var(--primary-background);
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
.chat-footer{
  margin-top: 4px;
}
.chat-input{
  max-height: 80px;
  overflow-y: auto;
}
.send-button{
  width: 1.5em;
  align-self: center;
  text-align: center;
  height: 100%;
  padding: 10px 5px 10px 5px;
  background-color: var(--primary-color-light);
  cursor: pointer;
}
.send-button:hover{
  background-color: var(--secondary-color);
}
.send-button:hover svg{
  fill: var(--primary-color);
}

@media screen and (max-width: 800px){
  .chat-hide{
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .chat-content{
     max-width: 84px;
  }
  .chat-hide{
    display: none;
  }
}
</style>
