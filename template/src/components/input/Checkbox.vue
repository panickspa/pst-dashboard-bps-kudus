<template>
    <div class="checkbox">
        <input 
            type="checkbox"
            v-bind="$attrs"
            v-bind:checked="checked"
            v-on:input="$emit('change', $event.target.checked)"
            v-if="typeof checked == 'boolean'">
        <label v-if="(label ? label.length > 0 : false)" for="shader" v-text="label">Turn on background shader</label>
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
            }
        },
        methods: {
            test(e){
                console.log(e.target.checked)
                return e.target.checked
            }
        },
        // props: [ 'checked', 'label'],
    }
</script>

<style lang="scss" scoped>

</style>