<template>
    <div class="wrapper">
        <div class="flex-col">
            <div class="flex-row">
                <slot name="label"></slot>
            </div>
            <div class="flex-row input">
                <select :name="name" :id="name" v-bind="$attrs">
                    <option value="" disabled v-if="hint.length > 0" v-text="hint">
                    </option>
                    <option 
                        :value="o.value" 
                        :key="`${name}-${o.value}`" 
                        v-for="o in options">
                        {{o.name}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        props:{
            name: {
                type: String,
                default: ""
            },
            options: {
                type: Array
            },
            hint: {
                type: String,
                default: ""
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>