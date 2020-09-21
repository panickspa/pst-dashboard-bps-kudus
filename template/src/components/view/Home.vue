<template>
    <div>
        <input-radio :name="radioTheme.name" :radios="radioTheme.radios" :gridCol="3" v-model="selectedTheme" @change="changeTheme">
            <h3 class="title-input" slot="title">Select Theme</h3>
        </input-radio>
        <!-- <input-textarea v-model="textA" :name="'chat'" :shortcut="['Shift', 'Enter']" @shortcutpressed="preview"></input-textarea>
        <textarea value="text"></textarea> -->
    </div>
</template>

<script>
    export default {
        methods: {
            changeTheme(e){
                console.log('theme change', e)
                this.$store.state.theme = e
            },
            preview(e){
                console.log("shorcut", e)
                this.textA=''
            }
        },
        data() {
            return {
                textA:'',
                radioTheme:{
                    name: 'theme-radio',
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
                selectedTheme: 'classic-grey'
            }
        },
        watch: {
            selectedTheme: function(val) {
                console.log('theme', val, this.$store.state.theme)
                this.$store.state.theme = val
            }
        },
    }
</script>

<style scoped>
    .title-input{
        margin-bottom: 1em;
    }
</style>