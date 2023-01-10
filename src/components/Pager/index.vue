<template>
  <div class="pager-container">
    <a :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a :class="{ disabled: current === 1 }">&lt;&lt;</a>
    <a
      v-for="(item, i) in numbers"
      :key="i"
      :class="{ active: current === item }"
      @click="handleClick(item)"
    >
      {{ item }}
    </a>
    <a :class="{ disabled: current === tatalpage }">&gt;&gt;</a>
    <a :class="{ disabled: current === tatalpage }">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 5,
    },
    total: {
      type: Number,
      default: 200,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default:10,
    },
  },
  computed: {
    tatalpage() {
      return Math.ceil(this.total / this.limit);
    },

    visibleNumberMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleNumberMax() {
      let max = this.visibleNumberMin + this.visibleNumber - 1;
      if (max < 1) {
        max = 1;
      }
      return max;
    },
    numbers() {
      const numbers = [];
      for (let i = this.visibleNumberMin; i <= this.visibleNumberMax; i++) {
        numbers.push(i);
      }
      return numbers;
    },
  },
  methods: {
    handleClick(newPage) {
      this.$emit('handleChangeNumber',newPage)
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.pager-container {
  display: flex;
  justify-content: center;
  margin: 10px 0;
  a {
    color: @primary;
    margin: 0 5px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @dark;
      font-weight: bolder;
    }
  }
}
</style>