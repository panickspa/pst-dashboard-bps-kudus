<template>
    <div class="checkbox">
        <input 
            type="checkbox"
            v-bind="$attrs"
            v-bind:checked="checked"
            v-on:input="$emit('change', $event.target.checked)"
            :name="name"
            :id="name"
            >
        <label v-if="(label ? label.length > 0 : false)" :for="name" v-text="label">Turn on background shader</label>
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        model:{
            prop: 'checked',
            event: 'change'
        },
        props: {
            checked: {
                type: [Array, Boolean]
            },
            label:{
                type: String,
                default: ""
            },
            name:{
                type:String
            }
        },
        methods: {
            test(e){
                // console.log(e.target.checked)
                return e.target.checked
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>