<template>
    <div class="text-area input" :ref="'input'">
        <div class="flex-row" v-if="label.length > 0 || requireRule.length > 0">
            <div v-if="label" class="label" v-text="label"></div>
            <div v-if="requireRule.length > 0" class="requirement" v-text="`(${requireRule})`"></div>
        </div>
        <textarea
        :ref="'input-text'" 
        v-bind="$attrs" 
        :name="name" 
        :id="name" 
        :rows="rows"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        wrap 
        @input="resize"></textarea>
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
</template>

<script>
    import {validationRule} from "../../module/validation"
    export default {
        inheritAttrs: false,
        props:{
            name:{
                type: String
            },
            label:{
                type: String,
                default: ''
            },
            min:{
                type:Number,
                default: 1
            },
            required:{
                type:Boolean,
                default:false
            },
            regexp:{
                type:Object
            },
            requireRule:{
                type: String,
                default: ''
            },
            rows:{
                type:Number,
                default: 3
            },
            shortcut:{
                type:Array,
                default: () => []
            },
            value:{
                type:String
            }
        },
        methods: {
            validationRule,
            resize(){
                this.$refs.input.style.height = 'auto';
                this.$refs['input-text'].style.height = 'auto';
                this.$refs.input.style.height =  this.$refs['input-text'].scrollHeight+'px';
                this.$refs['input-text'].style.height =  this.$refs['input-text'].scrollHeight+'px';
                // console.log(this.$refs.input)
            }
        },
        mounted() {
            console.log(this.shortcut)
            if(this.shortcut.length > 0){
                let _vm = this
                this._keyListener = function(e) {
                    if(this.shortcut.toString().toLowerCase().slice(0,this.keyPressed.toString().length) == this.keyPressed.toString().toLowerCase()) e.preventDefault();
                    _vm.keyPressed.push(e.key)
                };
                document.addEventListener('keydown', this._keyListener.bind(this));
            }
        },
        beforeDestroy() {
            if(this.shortcut.length > 0)
            document.removeEventListener('keydown', this._keyListener);
        },
        data() {
            return {
                text:'',
                keyPressed: []
            }
        },
        watch: {
            keyPressed: function(val){
                console.log(this.keyPressed)
                if(this.shortcut.length > 0){
                    if(
                        this.shortcut.toString().toLowerCase().slice(0,this.keyPressed.toString().length) == this.keyPressed.toString().toLowerCase()
                    ){
                        if(val.length >= this.shortcut.length){
                            this.keyPressed = []
                            this.$emit('shortcutpressed', this.value)
                        }
                    }else{
                        this.keyPressed = []
                    }
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .text-area{
        display: flex;
        flex-direction: column;
        // min-height: 1em;
        // height: auto;
    }
    textarea, textarea:focus{
        border: none;
        outline: none;
        resize: none;
        background-color: none;
        padding: 6px;
        overflow: hidden;
    }
</style>