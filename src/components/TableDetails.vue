<template>
  <div class="table-details">
    <ul class="table-ul">
      <li class="table-li" v-for="(item, index) in tableTitle" :key="index">
        {{ item }}
      </li>
    </ul>
    <div class="table-body">
      <template v-for="(item, index) in tableData">
        <ul class="table-body-ul" :key="index">
          <template v-for="(it, i) in item">
            <li class="table-body-li" :key="i">{{ it }}</li>
          </template>
        </ul>
      </template>
    </div>
    <div class="config">
      <ul class="config-ul">
        <li class="config-li">
          <el-checkbox v-model="checked">开具发票</el-checkbox>
        </li>
        <li class="config-li">
          运送方式：普通配送 快递 免邮<br />17:00前付款，今日发货
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableTitle: {
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      checked: false
    }
  }
}
</script>

<style lang="scss" scoped>
.table-details {
  ul {
    list-style: none;
    padding-left: 0;
  }

  .table-ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .table-li {
      padding-bottom: 10px;
      text-align: center;
      width: 100%;
      margin-right: 3px;
      border-bottom: 5px solid rgb(11, 162, 154);
    }

    .table-li:last-child {
      margin-right: 0;
    }
  }

  .table-body {
    .table-body-ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .table-body-li {
        width: 100%;
        text-align: center;
      }

      .table-body-li:last-child {
        font-weight: 600;
        color: red;
        font-size: 20px;
      }
    }
  }

  .config {
    background: rgb(242, 246, 255);
    padding: 1px 16px;
    border-radius: 3px;
    font-size: 13px;

    .config-ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
