<template>
    <div class="trolley">
        <div class="bread-crumb">
            <el-image
                style="width: 100%; border-radius: 3px"
                src="https://owl-town.oss-cn-chengdu.aliyuncs.com/img/bg-trolley.jpg"
            ></el-image>
        </div>
        <div class="trolley-wrapper owl-margin-top-lg owl-card owl-padding-lg">
            <div class="trolley-table">
                <el-table :data="trolley" style="width: 100%" stripe>
                    <el-table-column
                        type="index"
                        label="序号"
                        width="55"
                    ></el-table-column>
                    <el-table-column prop="title" label="商品名称">
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        sortable
                        label="单价"
                    ></el-table-column>
                    <el-table-column prop="num" label="数量"></el-table-column>
                    <el-table-column
                        prop="total"
                        label="小计"
                    ></el-table-column>
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
            <div class="form owl-margin-top-lg">
                <div
                    class="statistics justify-between owl-font-size-sm flex owl-margin-bm-lg"
                >
                    <div class="total-num owl-margin-rg-lg">
                        数量：{{ trolleyItemNum }}
                    </div>
                    <div class="total-price">
                        总价：¥{{ trolleyTotalPrice }}
                    </div>
                </div>
                <el-form
                    size="mini"
                    hide-required-asterisk
                    label-position="left"
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="85px"
                >
                    <el-form-item label="收货人：" prop="receiveName">
                        <el-input v-model="ruleForm.receiveName"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号：" prop="receivePhone">
                        <el-input v-model="ruleForm.receivePhone"></el-input>
                    </el-form-item>
                    <el-form-item label="收货地址：" prop="receiveLocation">
                        <el-input v-model="ruleForm.receiveLocation"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="submit-btn owl-margin-top-lg owl-float-right">
                <el-button @click="settlement" type="primary" size="mini"
                    >结算</el-button
                >
            </div>
        </div>
    </div>
</template>

<script>
import { service } from '@/mixin/service/index.js'

export default {
    name: 'trolley',
    mixins: [service],
    data() {
        return {
            ruleForm: {
                receiveName: '',
                receivePhone: '',
                receiveLocation: ''
            },
            rules: {
                receiveName: [
                    {
                        required: true,
                        message: '请输入收货人姓名',
                        trigger: 'blur'
                    },
                    {
                        min: 2,
                        max: 15,
                        message: '长度在 2 到 15 个字符',
                        trigger: 'blur'
                    }
                ],
                receivePhone: [
                    {
                        required: true,
                        message: '请输入收货人手机号',
                        trigger: 'blur'
                    },
                    {
                        min: 11,
                        max: 11,
                        message: '非法的手机号',
                        trigger: 'blur'
                    }
                ],
                receiveLocation: [
                    {
                        required: true,
                        message: '请输入收货地址',
                        trigger: 'blur'
                    },
                    {
                        min: 8,
                        max: 30,
                        message: '长度在 8 到 30 个字符',
                        trigger: 'blur'
                    }
                ]
            }
        }
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
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
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
                } else {
                    this.$message({
                        type: 'error',
                        message: '请填写信息，再结算'
                    })
                    return false
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.trolley {
    margin: 1% 15%;

    .form {
        width: 415px;
    }
}
</style>
