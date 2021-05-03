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
                @click="p($event.target)"
                :placeholder="hint">
            <div 
                    v-if="type == `password`" 
                    class="password-toggle flex-row flex-center"
                    :min="min"
                    @click="hidePass = (hidePass ? false : true)"
                >
                <i v-bind:class="{
                    'icon-eye-fill': !hidePass,
                    'icon-eye-slash-fill': hidePass
                }"></i>
                <!-- <svg-icon icon="eye-slash-fill" v-if="hidePass"></svg-icon>
                <svg-icon icon="eye-fill" v-if="!hidePass"></svg-icon> -->
            </div>
            <!-- <svg-icon v-if="!validationRule(
                    {
                        text: value,
                        min: min,
                        regexp: ( regexp ? regexp : undefined),
                        required: required
                    }
            ) && required" icon="x-circle" class="red"></svg-icon>
            <svg-icon v-else-if="validationRule(
                {
                    text: value,
                    min: min,
                    regexp: ( regexp ? regexp : undefined),
                    required: required
                }
            ) && required" icon="check-circle" class="green"></svg-icon> -->
            <i v-bind:class="{
                'icon-x-circle red' : !validationRule(
                    {
                        text: value,
                        min: min,
                        regexp: ( regexp ? regexp : undefined),
                        required: required
                    }
                ) && required,
                'icon-check-circle green' : validationRule(
                    {
                        text: value,
                        min: min,
                        regexp: ( regexp ? regexp : undefined),
                        required: required
                    }
                ) && required
            }"></i>
            <!-- <div v-else-if="required" class="blank"></div> -->
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
            validationRule,
            p(e){
                console.log(e.datepicker)
            }
        },
        data() {
            return {
                hidePass: true
            }
        },
    }
</script>

<style lang="scss" scoped>
.password-toggle{
    margin-right: 10px;
    cursor: pointer;
}
</style>