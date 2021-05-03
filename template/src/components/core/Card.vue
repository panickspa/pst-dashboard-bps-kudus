<template>
    <div class="card" v-bind:class="{
        'card-nb card-ns': !border&&!shadow,
        'card-ns': !shadow,
        'card-nb': !border
    }">
        <div class="header" v-if="header">
            <slot name="header"></slot>
        </div>
        <slot name="content"></slot>
        <div class="footer" v-if="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            footer: {
                type: Boolean,
                default: false
            },
            header: {
                type: Boolean,
                default: false
            },
            shadow: {
                type: Boolean,
                default: false
            },
            border:{
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
.card-ns{
  box-shadow: none !important;
}
.card-nb{
    border: none;
}
</style>