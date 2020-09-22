<template>
    <div class="flex-col wrapper" :style="`--grid-number : ${gridCol};`">
        <slot name="title"></slot>
        <div class="grid">
            <div class="checkbox" v-for="c in checkboxes.length" :key="`${name}-${checkboxes[c-1].name}`">
                <input
                    :ref="`${name}-${c.name}`"
                    type="checkbox" 
                    :name="`${name}-${checkboxes[c-1].name}`" 
                    :id="`${name}-${checkboxes[c-1].name}`" 
                    v-model="checkedBoxes"
                    :value="checkboxes[c-1].value"
                    @change="valid(checkboxes)">
                <div class="box-checkbox">
                    <svg-icon 
                        class="check"
                        icon="check"
                        color="var(--secondary-color)"
                    ></svg-icon>
                </div>
                <label :for="`${name}-${checkboxes[c-1].name}`" v-text="checkboxes[c-1].label"></label>
            </div>
        </div>
    </div>
</template>

<script>
    import { validCheckboxes } from "../../module/validation.js"
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
            isChecked(e){
                let ref = this.$refs[e]
                if(ref) return ref.selected 
                else return false
            },
            valid(e){
                this.validity = validCheckboxes(e)
                console.log(this.validity)
                this.$emit('changed', this.checkedBoxes)
            }
        },
        created() {
            this.checkedBoxes = this.checked
        },
        data() {
            return {
                validity: false,
                checkedBoxes: [],
            }
        },
    }
</script>

<style lang="scss" scoped>

.grid{
    display: grid;
    grid-template-columns: repeat(var(--grid-number), 1fr);
}
.checkbox{
    margin-left: 10px;
}
.content{
    margin-bottom: 8px;
}
input+.box-checkbox .check{
    opacity: 0%;
    display: none;
    transition: opacity 0.2s ease-in-out;
}
input:checked+.box-checkbox .check{
    opacity: 100%;
    display: inline;
}
</style>