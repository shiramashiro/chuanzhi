<template>
    <div
        class="owl-font-size-md owl-book-verbose-fiche flex align-center"
        :style="{ height: height, margin: margin }"
        :class="[mode ? mode : '']"
    >
        <img class="preview" :src="data.previews[0]" />
        <div class="info owl-margin-le-lg">
            <div class="title text-cut" @click="$router.push(url)">
                {{ data.title }}
            </div>
            <div class="author text-gray owl-margin-top-sm">
                {{ concatWith('，', data.authors) }}
            </div>
            <div class="price text-red owl-margin-top-sm">
                ¥{{ data.price }}
            </div>
            <div class="profile owl-font-size-sm owl-margin-top-sm">
                {{ data.profile }}
            </div>
            <div class="operation owl-margin-top-sm">
                <el-button size="mini" type="primary" @click="setIntoTrolley">加入购物车</el-button>
                <el-button size="mini" @click="collect">收藏</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { utils } from '@/mixin/utils/index.js'
import { service } from '@/mixin/service/index.js'

export default {
    name: 'owl-book-verbose-fiche',
    mixins: [utils, service],
    props: {
        data: {
            type: Object,
            required: true
        },
        url: {
            type: String,
            required: true
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
    },
    methods: {
        setIntoTrolley() {
            this.$confirm('是否加入购物车？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.setTrolleyRow(this.data, 1)
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消加入购物车'
                    })
                })
        },
        collect() {
            this.setCollectBookshelf(this.data)
        }
    }
}
</script>

<style lang="scss" scoped>
.owl-book-verbose-fiche {
    cursor: pointer;
    height: auto;
    margin: 0 10px;

    .preview {
        width: 190px;
        height: 200px;
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

.title:hover {
    color: red;
    text-decoration: underline;
    text-decoration-color: red;
}

.fiche {
    padding: 5px;
}
</style>
