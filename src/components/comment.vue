<template>
    <div class="book-comment">
        <div class="comment-left">
            <div class="comment-header">
                <el-rate
                    v-model="user.rate"
                    disabled
                    show-score
                    text-color="#ff9900"
                ></el-rate>
            </div>
            <div class="comment-body">
                {{ user.comment }}
            </div>
            <div class="comment-date">
                {{ user.date }}
            </div>
            <div class="thumb">
                <el-button
                    size="mini"
                    round
                    icon="el-icon-thumb"
                    @click="$emit('like')"
                    >{{ user.like }}赞</el-button
                >
            </div>
        </div>
        <div class="comment-right">
            <div class="avatar">
                <el-avatar :size="50" :src="user.avatar"></el-avatar>
            </div>
            <div class="username">{{ user.username }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'comment',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.book-comment {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #e6e6fa;

    .comment-left {
        width: 75%;

        .thumb {
            float: right;
        }
    }

    .comment-body {
        font-size: 14px;
        margin: 5px 0;
    }

    .comment-date {
        font-size: 12px;
        color: #646464;
    }

    .comment-right {
        width: 20%;

        .avatar {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .username {
            text-align: center;
            margin-top: 5px;
            color: #969696;
            font-size: 13px;
        }
    }
}
</style>
