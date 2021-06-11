<template>
    <div class="trolley">
        <div class="bread-crumb">
            <el-image
                style="width: 100%; border-radius: 3px"
                src="https://owl-town.oss-cn-chengdu.aliyuncs.com/img/bg-trolley.jpg"
            ></el-image>
        </div>
        <div class="trolley-wrapper owl-margin-top-lg">
            <el-table
                :data="trolley"
                style="width: 100%"
                stripe
                :header-cell-style="{ textAlign: 'center' }"
                :cell-style="{ textAlign: 'center' }"
            >
                <el-table-column
                    type="index"
                    label="序号"
                    width="55"
                ></el-table-column>
                <el-table-column prop="title" label="商品名称">
                </el-table-column>
                <el-table-column prop="price" label="价格"></el-table-column>
                <el-table-column prop="num" label="数量"></el-table-column>
                <el-table-column prop="total" label="小计"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                            @click="deleteTableRow(scope.$index, scope.row)"
                            type="text"
                            size="small"
                            >删除</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="submit-btn owl-margin-top-lg owl-float-right">
            <el-button @click="settlement" type="primary" size="mini"
                >结算</el-button
            >
        </div>
    </div>
</template>

<script>
import { service } from '@/mixin/service/index.js'

export default {
    name: 'trolley',
    mixins: [service],
    data() {
        return {}
    },
    mounted() {
        this.getTrolleyRows('60c1ab65a7297656dd5a9f31')
    },
    methods: {
        deleteTableRow(index, row) {
            this.$confirm('是否删除该商品？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.deleteTrolleyRow(index, row.id)
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
        },
        settlement() {
            this.$confirm('是否结算所有商品？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.setIndent()
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消结算'
                    })
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.trolley {
    margin: 1% 15%;
}
</style>
