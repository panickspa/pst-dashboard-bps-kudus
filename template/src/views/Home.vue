<template>
    <div id="home">
        <input-radio :name="radioTheme.name" :radios="radioTheme.radios" :gridCol="3" v-model="$store.state.theme">
            <h3 class="title-input" slot="title">Select Theme</h3>
        </input-radio>
        <div class="color-grade">
            <h3 class="title-input">Color</h3>
            <div class="flex flex-col flex-center" id="font-default" style="background-color: var(--font-default);">
                <span style="color: var(--font-negative)">Font Color</span>
            </div>
            <div class="flex flex-col flex-center" id="primary-background" style="background-color: var(--primary-background);">
                <span style="color: var(--seondary-color)">Primary Background</span>
            </div>
            <div class="flex flex-col flex-center" id="primary-color" style="background-color: var(--primary-color);">
                <span style="color: var(--seondary-color)">Primary Color</span>
            </div>
            <div class="flex flex-col flex-center" id="primary-color-light" style="background-color: var(--primary-color-light);">
                <span style="color: var(--seondary-color)">Primary Color Light</span>
            </div>
            <div class="flex flex-col flex-center" id="secondary-color" style="background-color: var(--secondary-color);">
                <span style="color: var(--primary-color)">Secondary Color</span>
            </div>
            <div class="flex flex-col flex-center" id="secondary-color-light" style="background-color: var(--secondary-color-light);">
                <span style="color: var(--secondary-color)">Secondary Color Light</span>
            </div>
            <div class="flex flex-col flex-center" id="secondary-color-shader" style="background-color: var(--secondary-color-shader);">
                <span style="color: var(--secondary-color)">Secondary Color Shader</span>
            </div>
        </div>
        <div class="flex-col font">
            <h3 class="title-input">Font Size : {{$store.state.fontSize}} px</h3>
            <input class="slider" type="range" min="13" max="24" v-model="$store.state.fontSize">
        </div>
        <!-- <input-textarea v-model="textA" :name="'chat'" :shortcut="['Shift', 'Enter']" @shortcutpressed="preview"></input-textarea>
        <textarea value="text"></textarea> -->
    </div>
</template>

<script>
const InputRadio = () => import(/* webpackPrefetch: true */ '../components/input/Radio.vue')
    export default {
        components:{
            InputRadio
        },
        created() {
            this.fontSize = this.$store.state.fontSize
        },
        data() {
            return {
                textA:'',
                radioTheme:{
                    name: 'theme-radio',
                    fontSize: 13,
                    radios: [
                        {
                            name: 'classic-grey',
                            value: 'classic-grey',
                            label: 'Classic Grey'
                        },
                        {
                            name: 'cream',
                            value: 'cream',
                            label: 'Cream'  
                        },
                        {
                            name: 'ocean-blue',
                            value: 'ocean-blue',
                            label: 'Ocean Blue'
                        },
                        {
                            name: 'dark',
                            value: 'dark',
                            label: 'Dark'
                        },
                        {
                            name: 'navy-blue',
                            value: 'navy-blue',
                            label: 'Navy Blue'
                        },
                        {
                            name: 'brown',
                            value: 'brown',
                            label: 'Brown'
                        },
                    ]
                },
            }
        },
    }
</script>

<style lang="scss">
#home{
    box-sizing: border-box;
    // display: block;
    // width: 100%;
}
.color-grade>div{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
}
.title-input{
    margin-top: var(--fsize);
    margin-bottom: var(--fsize);
}
.font, .color-grade{
    margin-bottom: var(--fsize);
}
.color-grade, .color-grade *{
    transition: all 100ms ease-in;
}
</style>