<template>
    <div class="flex-col wrapper" :style="`--grid-number : ${gridCol};`">
        <slot name="title"></slot>
        <div class="grid">
            <div class="radio" v-for="r in radios" :key="`${name}-${r.name}`">
                <input 
                    type="radio" 
                    :name="`${name}-${r.name}`" 
                    :id="`${name}-${r.name}`" 
                    v-model="selectedR"
                    :value="r.value"
                    @change="rChange">
                <label :for="`${name}-${r.name}`" v-text="r.label"></label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        model:{
            prop:'selected',
            event:'changed'
        },
        props:{
            selected:{
                type: String
            },
            radios: {
                type: Array
            },
            name:{
                type: String,
                default: ""
            },
            gridCol:{
                type: Number,
                default: 1
            }
        },
        methods: {
            rChange(evt){
                // console.log(evt)
                this.$emit('changed', evt.target.value)
            }
        },
        created() {
            // console.log(this.selected, 'selected')
            this.selectedR = this.selected
        },
        data() {
            return {
                selectedR: []
            }
        },
    }
</script>

<style lang="scss" scoped>

.grid{
    display: grid;
    grid-template-columns: repeat(var(--grid-number), 1fr);
}
.radio{
    margin-left: 10px;
}
.content{
    margin-bottom: 8px;
}
</style>