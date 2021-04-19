<demo>
基本用法
</demo>
<template>
  <Table
      :columns="columns"
      :data="dataSource"
  ></Table>
</template>

<script lang="ts">
import Table from '../../../lib/Table.vue';
export default {
  components: {Table},
  setup() {
    const dataSource = [{
      date: '2017-01-02',
      name: '小明',
      address: '辽宁省辽阳市'
    }, {
      date: '2013-02-04',
      name: '小红',
      address: '辽宁省沈阳市'
    }, {
      date: '2018-04-01',
      name: '小芳',
      address: '辽宁省鞍山市'
    }, {
      date: '2013-05-03',
      name: '淘淘',
      address: '辽宁省大连市'
    }]
    const columns = [
      {
        title: '日期',
        key: 'date'
      },
      {
        title: '姓名',
        key: 'name'
      },
      {
        title: '地址',
        key: 'address'
      }
    ]
    return {
      dataSource,
      columns
    }
  }
}
</script>