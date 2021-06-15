<template>
    <div class="indents">
        <div
            class="indent owl-margin-tb-md owl-font-size-sm owl-padding-tb-lg owl-border-bm"
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
                <el-table-column prop="price" label="价格"> </el-table-column>
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
                <div class="location owl-margin-top-sm">
                    快递地址：{{ item.location }}
                </div>
                <div class="status owl-margin-top-sm">
                    订单状态：{{ item.status }}
                </div>
                <div class="pay-way owl-margin-top-sm">
                    结算方式：{{ item.payWay }}
                </div>
            </div>
            <div class="indent-opertaion owl-float-right">
                <el-button size="mini" type="danger">删除</el-button>
                <el-button size="mini" type="primary">确认收货</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'indents',
    data() {
        return {
            indents: [
                {
                    id: '60c3764c2cb7a3684dd256af',
                    date: '2021-06-11 42:10',
                    total: 154.88,
                    location: '四川省绵阳市涪城区西南财经大学天府学院',
                    status: '正在运输',
                    payWay: '在线支付',
                    trolley: [
                        {
                            title: '吉尔伽美什史诗',
                            price: 77.42,
                            total: 77.42,
                            num: 1
                        },
                        {
                            title: '吉尔伽美什史诗',
                            price: 77.42,
                            total: 77.42,
                            num: 1
                        }
                    ]
                },
                {
                    id: '60c3764c2cb7a3684dd256af',
                    date: '2021-06-11 42:10',
                    total: 154.88,
                    location: '四川省绵阳市涪城区西南财经大学天府学院',
                    status: '正在运输',
                    payWay: '在线支付',
                    trolley: [
                        {
                            title: '吉尔伽美什史诗',
                            price: 77.42,
                            total: 77.42,
                            num: 1
                        },
                        {
                            title: '吉尔伽美什史诗',
                            price: 77.42,
                            total: 77.42,
                            num: 1
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.indents {
    margin: 1% 15%;
}
</style>
