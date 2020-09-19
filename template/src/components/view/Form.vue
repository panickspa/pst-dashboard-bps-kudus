<template>
    <div class="content">
        <form-default :inputList="list" v-on:submitClick="submit">
            <div slot="header">
                <h3>Validation Form Example</h3>
            </div>
        </form-default>
        <modal-default :hidden="hidden" v-on:hide="close">
            <div slot="header">Form Result</div>
            <div slot="msg">
                <h2>Data Submitted</h2>
                <div class="flex-col" v-for="l in list" v-bind:key="l.name">
                    <div class="flex-row">
                        <p v-text="`${l.name} : `"></p>
                        <p v-text="`${l.type.includes('checkbox') ? (l.checkboxes.filter(e => e.checked).map(e => e.value)) : l.data}`"></p>
                    </div>
                </div>
            </div>
        </modal-default>
    </div>
</template>

<script>
    export default {
        methods: {
            submit(evt){
                console.log(evt)
                this.hidden = false
            },
            close(){
                this.hidden = true
            }
        },
        data() {
            return {
                hidden: true,
                list: [
                    {
                        name: 'First Name',
                        type: 'text',
                        hint: 'Your first name',
                        data: '',
                        require: 'required',
                        required: true
                    },
                    {
                        name: 'Last Name',
                        type: 'text',
                        hint: 'Your last name',
                        data: '',
                        require: 'required',
                        required: true
                    },
                    {
                        name: 'Password',
                        type: 'password-hide',
                        min: 8,
                        require: 'at least 8 char, one lowercase, one uppercase, one numeric, and one special char',
                        hint: 'Input your password',
                        data: '',
                        required: true,
                        regexp: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/
                    },
                    {
                        name: `Email`,
                        type: 'text',
                        require: `valid email`,
                        hint: `Your email`,
                        data: '',
                        required: true,
                        regexp: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    },
                    {
                        name: 'Hobby',
                        type: 'text',
                        hint: 'Your hobby',
                        data: '',
                        required: false
                    },
                    {
                        name: 'Birthday',
                        type: 'date',
                        hint: 'Your birthday',
                        data: new Date().toISOString().substr(0, 10),
                        require: 'required',
                        required: true,
                        valid: true
                    },
                    {
                        name: `Gender`,
                        type: `select`,
                        hint: `your gender`,
                        option: [
                            {
                                value: 0,
                                name: 'Male',
                                selected: true
                            },
                            {
                                value: 1,
                                name: 'Female'
                            }
                        ],
                        data: 0
                        // required: true
                    },
                    {
                        name: 'Agreement',
                        type: 'checkbox',
                        hint: 'agreement condition',
                        checkboxes:[
                            {
                                value: 'subscription',
                                name: 'subscription',
                                label: `I'd like to receive news to my email`,
                                checked: false
                            },
                            {
                                value: 'agreement',
                                name: 'agreement',
                                label: 'I agree with the term and condition',
                                checked: false,
                                required: true
                            }
                        ],
                        required: true,
                        checkedboxes:[]
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>