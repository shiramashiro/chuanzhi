<template>
    <div class="book-fiche" @click="$router.push('/book/' + data.id)">
        <img class="preview" :src="data.preview" />
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
import { stringUtils } from '@/mixin/string-utils.js'

export default {
    name: 'book-fiche',
    mixins: [stringUtils],
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.book-fiche {
    width: 150px;
    height: 190px;
    margin: 0 10px;

    .preview {
        width: 130px;
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
</style>
