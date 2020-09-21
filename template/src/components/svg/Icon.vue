<template>
    <svg class="icon" :class="{ 'icon-spin': spin }" :style="`--fill-icon: ${color};`">
        <use :xlink:href="`#${icon}`" />
    </svg>
</template>

<script>
    export default {
        name: 'SvgIcon',
        props: {
            icon: {
                type: String,
                required: true,
            },
            spin: {
                type: Boolean,
                default: false,
            },
            color: {
                type: String,
                default: 'black'
            }
        },
    }
</script>

<style lang="scss">
svg.icon {
  fill: var(--fill-icon);
  height: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;
  width: 1em;
}
svg.icon-spin {
  animation: icon-spin 2s infinite linear;
}
@keyframes icon-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>