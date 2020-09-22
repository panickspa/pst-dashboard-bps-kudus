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
                <div class="box-radio">
                    <div class="flex-row flex-center box-dot">
                        <svg-icon 
                            :icon="'circle-fill'" 
                            color="var(--secondary-color)" >
                        </svg-icon>
                    </div>
                </div>
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
                console.log(this.selected, this.selectedR)
                this.selectedR = evt.target.value
                this.$emit('changed', evt.target.value)
            }
        },
        created() {
            // console.log(this.selected, 'selected')
            this.selectedR = this.selected
        },
        data() {
            return {
                selectedR: ''
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
.box-radio{
    position: absolute;
    height: .4em;
    width: .4em;
    padding: .2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid var(--secondary-color);
    border-radius: 100%;
}
svg{
    font-size: 1em;
}
input[type="radio"]+label::before{
    content: "";
    position: absolute;
    width: var(--fsize);
    height: var(--fsize);
    z-index: 1;
    left: 0%;
}

input[type="radio"]+label+.box-radio > .box-dot{
    opacity: 0%;
    display: none;
    transition: opacity .2s ease-in-out;
}

input[type="radio"]:checked+label+.box-radio > .box-dot{
    opacity: 100%;
    display: inherit;
}
</style>