<template>
    <div
        :style="{
            width: width + 'px',
            height: height + 'px'
        }"
        :class="[type ? 'tag-' + type : '']"
        class="tag text-xs flex align-center justify-center"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tag',
    props: {
        // primary | gray | red
        type: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            required: false
        },
        height: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang="css" scoped>
.tag {
    font-size: 12px;
    border: 1px;
    border-radius: 5px;
    padding: 0 5px;
}

.tag-primary {
    color: white;
    background-color: #87cefa;
}

.tag-gray {
    color: #81868a;
    background-color: #f0f1f5;
}

.tag-red {
    color: white;
    background-color: red;
}
</style>
