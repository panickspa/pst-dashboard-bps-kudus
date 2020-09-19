<template>
    <div>
        <input-checkbox-group
            :name="name"
            :checkboxes="group.checkboxes"
            v-model="group.checkedboxes"
            :gridCol="2"
        >
            <h4 slot="title" style="margin-bottom: 1em;">Example Group of Checkboxes</h4>
        </input-checkbox-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                group:{
                    name: 'Agreement',
                    type: 'checkbox',
                    hint: 'agreement condition',
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
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>