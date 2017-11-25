<template>
    <div class="e8wow-tab-bar-item">
        <div v-if="$slots.icon" class="icon">
            <slot name="icon"></slot>
        </div>
        <span class="label">
            <slot></slot>
        </span>
    </div>
</template>

<script>
</script>

<style lang="scss">
    @import "../../styles/base/base";

    .e8wow-tab-bar-item {
        display: flex;
        text-align: center;
        flex-direction: column;
        .icon img {
            width: 60px;
            height: 60px;
        }
        .label {
            margin-top: -5px;
            color: $font-primary-color;
        }
    }
</style>
