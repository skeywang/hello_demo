<template>
<div>
    <a-calendar @select="onSelect">
        <ul class="events" slot="dateCellRender" slot-scope="value">
        <li v-for="item in getListData(value)" :key="item.content">
            <a-badge  :status="item.type" :text="item.content" />
        </li>
        </ul>
        <template slot="monthCellRender" slot-scope="value">
        <div v-if="getMonthData(value)" class="notes-month">
            <section>{{getMonthData(value)}}</section>
            <span>Backlog number</span>
        </div>
        </template>
    </a-calendar>
    <a-modal title="添加事务" v-model="visible" @cancel="hideModal" @ok="addTask" okText="确认" cancelText="取消">
        <h4>{{changeDay}}添加事务</h4>
        <a-input placeholder="请输入内容" />
    </a-modal>
</div>
  
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      changeDay:''
    };
  },
  methods: {
    getListData(value) {
      let listData;
      //console.log(value.date()); //具体日期 9
      switch (value.date()) {
        case 8:
          listData = [
            { type: "warning", content: "This is warning event." },
            { type: "success", content: "This is usual event." }
          ];
          break;
        case 10:
          listData = [
            { type: "warning", content: "This is warning event." },
            { type: "success", content: "This is usual event." },
            { type: "error", content: "This is error event." }
          ];
          break;
        case 15:
          listData = [
            { type: "warning", content: "This is warning event" },
            {
              type: "success",
              content: "This is very long usual event。。...."
            },
            { type: "error", content: "This is error event 1." },
            { type: "error", content: "This is error event 2." },
            { type: "error", content: "This is error event 3." },
            { type: "error", content: "This is error event 4." }
          ];
          break;
        default:
      }
      return listData || [];
    },
    getMonthData(value) {
      if (value.month() === 8) {
        return 1394;
      }
    },
    onSelect(value) {
      this.visible = true;//console.log(value.date());
      this.changeDay = value.year()+'年'+(value.month()+1)+'月'+value.date()+'日';
      //console.log(this.changeDay);
    },
    addTask(){
        // this.getListData()
    },
    hideModal(){
        this.visible = false;
    },
  }
};
</script>
<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
.ant-input{
    width: 300px;
}
</style>