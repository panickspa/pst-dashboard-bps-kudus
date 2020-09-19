<template>
    <div v-bind:class="{
                    'form card flex-row shadow-red': warn.active,
                    'form card flex-row': !warn.active
                }">
        <div class="flex-col w-100">
            <div class="form-wrapper">
                <div class="flex-row header">
                    <div class="block">
                        <slot name="header" class="header"></slot>
                    </div>
                </div>
                <div class="list-input">
                    <div class="flex-col w-100">
                        <div class="flex-col">
                            <div class="block input-item" v-for="inp in inputList" v-bind:key="inp.name">
                                <div class="flex-row" v-if="!inp.type.includes(`checkbox`)">
                                    <div class="label" v-text="`${inp.name}`"></div>
                                    <div v-if="inp.require" class="requirement" v-text="`(${inp.require})`"></div>
                                </div>
                                <div class="flex-row flex-center input" v-if="inp.type == `select`">
                                    <select :name="inp.name" v-model="inp.data">
                                        <option 
                                            :value="opt.value" 
                                            v-for="opt in inp.option" 
                                            v-bind:key="opt.value">
                                                {{opt.name}}
                                        </option>
                                    </select>
                                </div>
                                <div class="flex-col w-100" v-else-if="inp.type == `checkbox`">
                                    <div class="label-checkbox" v-text="inp.name"></div>
                                    <div class="checkbox-grid">
                                        <div class="checkbox" v-for="box in inp.checkboxes" v-bind:key="box.name">
                                            <input :type="`checkbox`" :id="box.name" :value="box.value" v-model="box.checked" @change="inp.valid = validCheckboxes(inp.checkboxes)">
                                            <label :for="box.name" v-text="box.label"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-row flex-center input" v-else-if="!inp.type.includes(`checkbox`)">
                                    <input 
                                        :type="inp.type == `password-hide` ? `password` : inp.type == `password-show` ? `text` : inp.type" 
                                        :placeholder="inp.hint" 
                                        @change="inp.valid = validationRule(
                                            {
                                                text: inp.data,
                                                min: inp.min,
                                                regexp: inp.regexp,
                                                required: inp.required
                                            }
                                        )"
                                        v-model="inp.data"
                                    >
                                    <div class="status flex-row flex-center h-100">
                                        <div class="flex-col">
                                            <div 
                                                v-if="inp.type == `password-hide` || inp.type == `password-show`" 
                                                class="password-toggle"
                                                :min="inp.min"
                                                @click="inp.type = (inp.type == `password-hide` ? `password-show` : `password-hide`)"
                                            >
                                                <span v-bind:class="{
                                                    'icon-eye-fill': inp.type == `password-hide`,
                                                    'icon-eye-slash-fill': inp.type == `password-show`
                                                }" ></span>
                                            </div>
                                        </div>
                                        <div class="flex-col valid-icon">
                                            <span v-if="!validationRule(
                                                {
                                                    text: inp.data,
                                                    min: inp.min,
                                                    regexp: inp.regexp,
                                                    required: inp.required
                                                }
                                            ) && inp.required" class="icon-x-circle red"></span>
                                            <span v-else-if="validationRule(
                                                {
                                                    text: inp.data,
                                                    min: inp.min,
                                                    regexp: inp.regexp,
                                                    required: inp.required
                                                }
                                            ) && inp.required" class="icon-check-circle green"></span>
                                            <div v-else class="blank"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-row action">
                <div class="flex-col flex-end">
                    <div class="warn" v-bind:class="{
                        'warn-red' : warn.active
                    }">
                        <span v-for="item in warn.item.length" v-bind:key="item">{{
                                `${warn.item[item-1].name}${prefixAnd({i:item,length:warn.item.length})}`
                            }}&nbsp;</span>
                        <span v-if="warn.active" v-text="`${ warn.item.length == 1 ? `is` : `are`} not valid`"></span>
                    </div>
                    <div class="block">
                        <slot name="actionBeforeSubmit"></slot>
                        <div v-if="submitBtn" class="btn" v-on:click="submitForm">Submit</div>
                        <slot name="actionAfterSubmit"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { validCheckboxes, validationRule} from "../../module/validation.js"
    export default {
        props:{
            submitBtn:{
                type: Boolean,
                default: true
            },
            inputList:{
                type: Array
            }
        },
        methods: {
            // preview(e){
            //     console.log(e)
            // },
            prefixAnd(e){
                return e.i == e.length-1 ? ' and' : ( e.i < e.length-1 ? `,` : ``)
            },
            validCheckboxes,
            validationRule,
            submitForm(){
                let required = this.inputList.filter(e => e.required && !e.valid)
                if(
                    required.length > 0
                ) {
                    this.warn.item = required
                    this.warn.active = true
                    this.valid = false
                    // console.log(this.warn.item)
                }
                else {
                    this.warn.item = ''
                    this.warn.active = false
                    this.$emit(`submitClick`, this.inputList)
                    this.valid = true
                }
            }
        },
        data() {
            return {
                warn: {
                    active: false,
                    item: [],
                    valid: true
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.form{
    margin-bottom: 2em;
}
.form-wrapper{
    padding-top: 0.8em;
    padding-right: 0.8em;
    padding-left: 0.8em;
}
.password-toggle, .password-toggle>span{
    cursor: pointer;
}
.password-toggle{
    // margin-right: 5px;
    // border-style: solid;
    // border-width: 1px;
    border-left-style: none;
}
.valid-icon{
    margin-left: 4px;
}

.header, .list-input{
    padding: 10px;
    // max-width: 500px;
}
.requirement{
    margin-left: 2px;
    font-size: 9px;
    align-self: flex-end;
    margin-bottom: 2px;
    // justify-self: flex-end;
}
.blank{
    width: 16px;
}
.list-input{
    margin-bottom: 1em;
}
.input-item{
    margin-bottom: 0.5em;
}
.checkbox-grid{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    // grid-auto-flow: row;
    // grid-auto-columns: 300px;
}
// .checkbox>flex-row{
//     max-width: 200px;
// }
.label-checkbox{
    margin-bottom: 10px;
}
.action{
    justify-content: flex-end;
    background: var(--primary-color-light);
    padding: 10px 20px 20px 20px;
}
.warn{
    min-height: 1.2em;
    margin-bottom: 10px;
}
.warn-red *{
    color: var(--red);
}
</style>