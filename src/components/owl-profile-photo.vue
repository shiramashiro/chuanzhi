<template>
    <div class="profile-photo flex align-center">
        <img class="photo" :style="{ '--size': size + 'px' }" :src="src" />
    </div>
</template>

<script>
export default {
    name: 'owl-profile-photo',
    props: {
        src: {
            type: String,
            required: true
        },
        size: {
            type: [String, Number],
            required: false,
            default: 100
        }
    }
}
</script>

<style lang="scss" scoped>
.profile-photo {
    .photo {
        width: var(--size);
        height: var(--size);
        border-radius: 100%;
    }
}
</style>
