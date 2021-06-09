<template>
    <div
        class="owl-book-fiche"
        :style="{ height: height, width: width, margin: margin }"
        :class="[mode ? mode : '']"
        @click="$router.push(url)"
    >
        <img class="preview" :src="data.previews[0]" />
        <div class="info">
            <div class="title text-cut">
                {{ data.title }}
            </div>
            <div class="author text-gray">
                {{ concatWith('，', data.authors) }}
            </div>
            <div class="price text-red">¥{{ data.price }}</div>
        </div>
    </div>
</template>

<script>
import { utils } from '@/mixin/utils/index.js'

export default {
    name: 'owl-book-fiche',
    mixins: [utils],
    props: {
        data: {
            type: Object,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: '150px'
        },
        height: {
            type: String,
            default: 'auto'
        },
        margin: {
            type: String,
            default: '0 10px'
        },
        mode: {
            type: String,
            default: 'fiche'
        }
    }
}
</script>

<style lang="scss" scoped>
.owl-book-fiche {
    cursor: pointer;
    width: 150px;
    height: auto;
    margin: 0 10px;

    .preview {
        width: 100%;
        height: 170px;
    }

    .title,
    .author,
    .price {
        margin: 5px 10px;
        font-size: 13px;
    }

    .author {
        display: -webkit-box;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .price {
        font-weight: bold;
    }
}

.owl-book-fiche:hover {
    .title {
        color: red;
        text-decoration: underline;
        text-decoration-color: red;
    }
}

.fiche {
    padding: 5px;
}
</style>
