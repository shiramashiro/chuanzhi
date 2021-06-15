<template>
    <div class="indents">
        <div
            class="indent owl-card owl-border owl-border-radius-sm owl-margin-tb-lg owl-font-size-sm owl-padding-lg"
            v-for="(item, index) in indents"
            :key="index"
        >
            <el-table
                :header-cell-style="{ textAlign: 'center' }"
                :cell-style="{ textAlign: 'center' }"
                :data="item.trolley"
                stripe
                style="width: 100%"
            >
                <el-table-column prop="title" label="名称"> </el-table-column>
                <el-table-column prop="price" label="单价"> </el-table-column>
                <el-table-column prop="num" label="数量"> </el-table-column>
                <el-table-column prop="total" label="小计"> </el-table-column>
            </el-table>
            <div
                class="indent-addition-profile owl-margin-top-md owl-font-size-sm"
            >
                <div
                    class="indent-profile flex justify-between owl-margin-top-sm"
                >
                    <div class="indent-id">订单号：{{ item.id }}</div>
                    <div class="indent-date">订单日期：{{ item.date }}</div>
                    <div class="indent-date">总价：¥{{ item.total }}</div>
                </div>
                <div class="receive-name owl-margin-top-sm">
                    收货人：{{ item.receiveName }}
                </div>
                <div class="receive-name owl-margin-top-sm">
                    手机号：{{ item.receivePhone }}
                </div>
                <div class="location owl-margin-top-sm">
                    快递地址：{{ item.receiveLocation }}
                </div>
                <div class="status owl-margin-top-sm">
                    订单状态：{{ item.status }}
                </div>
                <div class="pay-way owl-margin-top-sm">
                    结算方式：{{ item.payWay }}
                </div>
                <div class="indent-opertaion owl-float-right">
                    <el-button
                        size="mini"
                        type="danger"
                        @click="delIndent(item.id, index)"
                        >删除</el-button
                    >
                    <el-button size="mini" type="primary">确认收货</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { service } from '@/mixin/service/index.js'

export default {
    name: 'indents',
    mixins: [service],
    mounted() {
        this.getIndents()
    },
    methods: {
        delIndent(id, index) {
            this.$confirm('是否删除该订单？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.deleteIndent(id, index)
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.indents {
    margin: 1% 15%;
}
</style>
