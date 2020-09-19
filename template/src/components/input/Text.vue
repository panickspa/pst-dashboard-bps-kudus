<template>
    <div class="flex-row">
        <input 
            :type="type" 
            :name="name" 
            :id="name" 
            v-bind:value="value" 
            v-bind="$attrs" 
            v-on:input="$emit('input', $event.target.value)">
        <div class="flex-col valid-icon">
            <span v-if="!validationRule(
                {
                    text: value,
                    min: min,
                    regexp: ( regexp ? regexp : undefined),
                    required: required
                }
            ) && required" class="icon-x-circle red"></span>
            <span v-else-if="validationRule(
                {
                    text: value,
                    min: min,
                    regexp: ( regexp ? regexp : undefined),
                    required: required
                }
            ) && required" class="icon-check-circle green"></span>
            <div v-else class="blank"></div>
        </div>
    </div>
</template>

<script>
    import { validationRule } from "../../module/validation"
    export default {
        inheritAttrs: false,
        props: {
            value:{
                type: String,
                default: ''
            },
            hint: {
                type: String,
                default: ""
            },
            min: {
                type: Number,
                default: 1
            },
            name: {
                type: String,
                default: ""
            },
            regexp:{
                type: RegExp,
                default: undefined
            },
            require:{
                type: String,
                default: ""
            },
            required: {
                type: Boolean,
                default: false
            },
            type: {
                type: String
            },
        },
        methods: {
            validationRule
        },
    }
</script>

<style lang="scss" scoped>

</style>