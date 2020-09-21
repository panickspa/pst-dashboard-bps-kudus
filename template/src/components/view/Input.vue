<template>
    <div class="wrapper">
        <div class="flex-row">
            <div class="flex-col">
                <input-checkbox-group
                    :name="group.name"
                    :checkboxes="group.checkboxes"
                    v-model="group.checkedboxes"
                    :gridCol="2"
                    class="mb"
                >
                    <h4 slot="title">Example Group of Checkboxes</h4>
                </input-checkbox-group>
                <input-radio
                    :name="radio.name"
                    :radios="radio.radios"
                    v-model="radio.selected"
                    :gridCol="4"
                    class="mb"
                >
                <h4 slot="title">Example Radio Group Button</h4>
                </input-radio>
                <div class="flex-col input-item">
                    <h4>Example of Text or Password Input</h4>
                    <input-text 
                        label="Name" 
                        v-model="name"
                        name="name"
                        :required="true" 
                        hint="Input your full name"
                        class="mb"></input-text>
                    <input-text 
                        label="Password" 
                        v-model="password"
                        name="password"
                        :type="'password'" 
                        :min="8" requireRule="8 character" 
                        :required="true" 
                        hint="Input your password"
                        class="mb"></input-text>
                    <input-text
                        label="Birthday"
                        name="birthday"
                        type="date"
                        v-model="birthday"
                        class="mb"></input-text>
                </div>
                <input-select 
                    class="mb"
                    v-model="select.selected" 
                    :options="select.options"
                    :name="select.name"
                    :hint="select.hint">
                    <h4 slot="label"
                    class="mb">Example of Select</h4>
                </input-select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radio:{
                    name: 'Example-Radio-Group',
                    radios: [
                        {
                            name: "Alternative",
                            value: "alt",
                            label: "Alternative"
                        },
                        {
                            name: "EDM",
                            value: "edm",
                            label: "EDM"
                        },
                        {
                            name: "Indie",
                            value: "indie",
                            label: "Indieeee"
                        },
                        {
                            name: "Rock",
                            value: "rock",
                            label: 'ROCK!!'
                        }
                    ],
                    selected: "rock"
                },
                group:{
                    name: 'Example Checkboxes Group',
                    checkboxes:[
                        {
                            value: 'banana',
                            name: 'banana',
                            label: `I have banana`
                        },
                        {
                            value: 'car',
                            name: 'car',
                            label: 'I have a car',
                            required: true
                        }
                    ],
                    checkedboxes:["car"]
                },
                password : '',
                name: '',
                birthday: new Date().toISOString().substr(0, 10),
                select: {
                    selected: '',
                    name: 'example-select',
                    hint: 'Select your phone',
                    options: [
                        {
                            value: 'apple',
                            name: 'Apple'
                        },
                        {
                            value: 'samsung',
                            name: 'Samsung'
                        },
                        {
                            value: 'google',
                            name: 'Google'
                        }
                    ]
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
h4, .mb{
    margin-bottom: 1em;
}
</style>