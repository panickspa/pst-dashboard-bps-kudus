<template>
    <div class="wrapper">
        <div class="flex-row" v-if="label.length > 0 || requireRule.length > 0">
            <div v-if="label" class="label" v-text="label"></div>
            <div v-if="requireRule.length > 0" class="requirement" v-text="`(${requireRule})`"></div>
        </div>
        <div class="flex-row input flex-center">
            <input 
                :type="type.includes(`password`) ? (hidePass ? `password` : `text`) : type" 
                :name="name" 
                :id="name" 
                v-bind:value="value" 
                v-bind="$attrs" 
                v-on:input="$emit('input', $event.target.value)"
                :placeholder="hint">
            <div class="flex-col" v-if="type.includes(`password`)">
                <div 
                    v-if="type == `password`" 
                    class="password-toggle"
                    :min="min"
                    @click="hidePass = (hidePass ? false : true)"
                >
                    <span v-bind:class="{
                        'icon-eye-fill': !hidePass,
                        'icon-eye-slash-fill': hidePass
                    }" ></span>
                </div>
            </div>
            <div class="flex-col valid-icon" v-if="required">
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
    </div>
</template>

<script>
    import { validationRule } from "../../module/validation"
    export default {
        inheritAttrs: false,
        props: {
            value:{
                type: String,
                default: '',
                required: true
            },
            hint: {
                type: String,
                default: ""
            },
            label:{
                type: String,
                default: ""
            },
            min: {
                type: Number,
                default: 1
            },
            name:{
                type: String,
                default: ''
            },
            regexp:{
                type: RegExp,
                default: undefined
            },
            requireRule:{
                type: String,
                default: ""
            },
            required: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'text'
            },
        },
        methods: {
            validationRule
        },
        data() {
            return {
                hidePass: true
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>