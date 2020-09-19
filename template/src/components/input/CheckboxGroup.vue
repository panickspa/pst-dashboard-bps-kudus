<template>
    <div class="flex-col" :style="`--grid-number : ${gridCol};`">
        <slot name="title"></slot>
        <div class="grid">
            <div class="checkbox" v-for="c in checkboxes.length" :key="`${name}-${checkboxes[c-1].name}`">
                <input 
                    type="checkbox" 
                    :name="`${name}-${checkboxes[c-1].name}`" 
                    :id="`${name}-${checkboxes[c-1].name}`" 
                    v-model="checkedBoxes"
                    :value="checkboxes[c-1].value"
                    @change="valid({e: checkboxes, f: checkboxes[c-1]})">
                <label :for="`${name}-${checkboxes[c-1].name}`" v-text="checkboxes[c-1].label"></label>
            </div>
        </div>
    </div>
</template>

<script>
    import { validCheckboxes } from "../../module/validation.js"
    // import { checkboxArr } from "../../module/arrayMod"
    export default {
        inheritAttrs: false,
        model:{
            prop: 'checked',
            event: 'changed'
        },
        props:{
            checkboxes:{
                type: Array
            },
            required:{
                type: Boolean,
                default: false
            },
            name:{
                type: String,
                default: ''
            },
            checked: {
                type: Array
            },
            gridCol:{
                type: Number,
                default: 1
            }
        },
        methods: {
            valid(e){
                // console.log(e)
                this.validity = validCheckboxes(e.e) 
                // console.log(this.validity)
                // this.checkedBoxes = checkboxArr({
                //   arr: this.checkedBoxes,
                //   elm: e.f.name  
                // })
                this.$emit('changed', this.checkedBoxes)
                this.$emit('valid', this.validity)
            }
        },
        created() {
            this.checkedBoxes = this.checked
        },
        data() {
            return {
                validity: false,
                checkedBoxes: []
            }
        },
        // watch: {
        //     checkedBoxes: () => {
        //         console.log(this.checkedBoxes)
        //         this.$emit('changed', this.checkedBoxes)
        //     }
        // },
    }
</script>

<style lang="scss" scoped>
.grid{
    display: grid;
    grid-template-columns: repeat(var(--grid-number), 1fr);
}
</style>