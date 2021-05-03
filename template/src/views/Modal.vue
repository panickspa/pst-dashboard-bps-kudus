<template>
    <div class="wrapper">
        <div class="flex-row flex-center">
            <div class="flex-col card" style="margin-bottom: 1.5em;">
                <div class="form-wrap">
                    <h2>Options Modal</h2>
                    <div class="form">
                        <input-text type="text" name="title" v-model="titleModal"></input-text>
                    </div>
                    <div class="form">
                        <input-text type="text" name="header" v-model="headerModal"></input-text>
                    </div>
                    <div class="form">
                        <input-text type="text" name="message" v-model="msgModal"></input-text>
                    </div>
                    <div class="form">
                        <input-text type="text" name="custom-btn" v-model="customButton"></input-text>
                    </div>
                    <div class="form">
                        <input-text type="text" name="icon" v-model="icon"></input-text>
                    </div>
                    <input-checkbox-group 
                        v-model="features.checkedboxes"
                        :checkboxes="features.checkboxes"
                        :name="features.name"
                        :gridCol="2">
                    </input-checkbox-group>
                    <!-- <div class="grid-2 form">
                        <div class="checkbox">
                            <input type="checkbox" name="shader" id="shader" v-model="features" v-bind:value="1">
                            <label for="shader">Turn on background shader</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" name="closed-shader" id="closed-shader" v-model="features" v-bind:value="2">
                            <label for="closed-shader">Closed when outside clicked</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" name="ok-btn" id="ok-btn" v-model="features" v-bind:value="3">
                            <label for="ok-btn">OK Button</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" name="cancel-btn" id="cancel-btn" v-model="features" v-bind:value="4">
                            <label for="cancel-btn">Cancel Button</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" name="close-btn" id="close-btn" v-model="features" v-bind:value="6" v-on:input="preview($event.target)">
                            <label for="close-btn">Close Button</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" name="custom-btn" id="custom-btn" v-model="features" v-bind:value="5">
                            <label for="custom-btn">
                                Custom Button
                            </label>
                        </div>
                    </div>     -->
                </div>
                <div class="flex-row flex-end action">
                    <div class="flex-col" style="margin-right: 1em;">
                        <div class="btn" v-on:click="show(true)">Show Modal</div>
                    </div>
                    <div class="flex-col">
                        <div class="btn" v-on:click="show(false)">Show Blank Modal</div>
                    </div>
                </div>
            </div>
        </div>
        <modal-default 
            :closeBtn="features.checkedboxes.find(e => Number(e) == 6)?true:false" 
            :okBtn="features.checkedboxes.find(e => Number(e) == 3)?true:false"
            :cancelBtn="features.checkedboxes.find(e => Number(e) == 4)?true:false"
            :shader="features.checkedboxes.find(e => Number(e) == 1) ? true:false" 
            :closedWhenShaderClicked="features.checkedboxes.find(e => Number(e) == 2) ? true : false"
            :hidden="hidden" 
            :icon="icon"
            v-on:hide="close(true)">
            <div slot="header" v-text="titleModal"></div>
            <div slot="msg">
                <h2>{{headerModal}}</h2>
                <p>{{msgModal}}</p>
            </div>
            <div class="btn mr-2" slot="before-btn" v-if="features.checkedboxes.find(e => Number(e) == 5) ? true : false">
                {{customButton}}
            </div>
        </modal-default>
        <modal-blank 
            :closeBtn="features.checkedboxes.find(e => Number(e) == 6)?true:false"
            :shader="features.checkedboxes.find(e => Number(e) == 1) ? true:false" 
            :closedWhenShaderClicked="features.checkedboxes.find(e => Number(e) == 2) ? true : false"
            :hidden="hidden2" 
            :icon="icon"
            v-on:hide="close(false)">
            <div slot="header" v-text="titleModal"></div>
            <div slot="msg">
                <h2>{{headerModal}}</h2>
                <p>{{msgModal}}</p>
            </div>
            <div class="btn mr-2" slot="before-btn" v-if="features.checkedboxes.find(e => Number(e) == 5) ? true : false">
                {{customButton}}
            </div>
        </modal-blank>
        <!-- <span v-text="features"></span> -->
    </div>
</template>

<script>
const ModalDefault = () => import(/* webpackPrefetch: true */ '../components/modal/Default')
const ModalBlank = () => import(/* webpackPrefetch: true */ '../components/modal/Blank')
const InputText = () => import('../components/input/Text')
const InputCheckboxGroup = () => import('../components/input/CheckboxGroup')

    export default {
        components: {
            ModalDefault,
            ModalBlank,
            InputText, 
            InputCheckboxGroup
        },
       data() {
           return {
               titleModal: "Default Title",
               headerModal: `Default modal header`,
               msgModal: `Default modal message`,
               customButton: `Custom Button`,
               icon: `window`,
               features:{
                    name: 'Example-Checkboxes-Group',
                    checkboxes:[
                        {
                            value: 1,
                            name: 'shader',
                            label: `Turn on background shader`
                        },
                        {
                            value: 2,
                            name: 'closed-shader',
                            label: 'Closed when outside clicked'
                        },
                        {
                            value: 3,
                            name: 'ok-btn',
                            label: 'Oke Button'
                        },
                        {
                            value: 4,
                            name: 'c-btn',
                            label: 'Cancel Button'
                        },
                        {
                            value: 5,
                            name: 'cust-btn',
                            label: 'Custom Button'
                        },
                        {
                            value: 6,
                            name: 'cls-btn',
                            label: 'Close Button'
                        }
                    ],
                    checkedboxes:[3,2,6]
                },
               hidden: true,
               hidden2: true
           }
       },
       methods: {
           close(e){
            //    console.log("on close")
               if (e)
               this.hidden = true
               else this.hidden2 = true
           },
           preview(evt){
               console.log(evt)
           },
           show(e){
               if(e) this.hidden = false
               else this.hidden2 = false
           }
       },
    }
</script>

<style lang="scss">
.wrapper{
    position: unset;
}
.grid-2{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.form{
    margin-bottom: 16px;
}
.form-wrap{
    padding: 1em;
    margin-bottom: 2em;
}
.form-wrap>h2{
    margin-bottom: 1em;
}
.action{
    padding: 1em;
    background-color: var(--primary-color-light);
}
</style>