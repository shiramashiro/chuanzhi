<template>
    <div class="settlement-success">
        <div class="tip-img flex justify-center">
            <el-image
                style="width: 320px; height: 320px"
                :src="
                    'https://owl-town.oss-cn-chengdu.aliyuncs.com/img/settlement-success.png'
                "
                :fit="'fill'"
            ></el-image>
        </div>
        <div
            class="tip owl-margin-top-lg owl-font-size-lg flex justify-center align-center"
        >
            <el-image
                class="owl-margin-rg-sm"
                style="width: 36px; height: 36px"
                :src="
                    'https://owl-town.oss-cn-chengdu.aliyuncs.com/icon/success.png'
                "
            >
            </el-image>
            结算成功！
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.settlement-success {
    margin: 1% 15%;
}
</style>
