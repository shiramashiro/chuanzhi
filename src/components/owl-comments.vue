<template>
    <div class="owl-comments">
        <div
            v-for="(item, index) in data"
            :key="index"
            class="owl-comment owl-border-bm flex owl-padding-tb-md"
        >
            <div class="col-1">
                <div class="row-1 owl-margin-tb-xs flex justify-center">
                    <owl-profile-photo
                        class="col-1-1"
                        :src="item.user.profilePhoto"
                        :size="50"
                    ></owl-profile-photo>
                </div>
                <div
                    class="
                        row-2
                        owl-margin-tb-xs owl-font-size-xs
                        text-cut
                        flex
                        justify-center
                    "
                >
                    {{ item.user.username }}
                </div>
                <div class="row-3 owl-margin-tb-xs flex justify-center">
                    <owl-tag :type="'gray'" :width="'34'" :height="'17'">
                        VIP{{ item.user.level }}
                    </owl-tag>
                </div>
            </div>
            <div class="col-2 owl-margin-le-lg">
                <div class="substance owl-font-size-sm">
                    {{ item.content }}
                </div>
                <div class="date owl-font-size-xs text-gray owl-margin-tb-sm">
                    {{ item.postDate }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'owl-comments',
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    methods: {
        handleClick(id, index, type) {}
    }
}
</script>

<style scoped>
.col-1 {
    width: 17%;
}

.col-2 {
    width: 83%;
}
</style>
