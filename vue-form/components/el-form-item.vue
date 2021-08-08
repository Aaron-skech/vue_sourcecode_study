<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <span v-if="errorMessage"> {{ errorMessage }}</span>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  name: "elFormItem",
  inject: ["elForm"], //
  data() {
    return {
      errorMessage: null,
    };
  },
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  methods: {
    validate() {
      if (this.prop) {
        let value = this.elForm.model[this.prop]; //当前数据
        let ruleValue = this.elForm.rules[this.prop];
        let schema = new Schema({
          [this.prop]: ruleValue,
        });
         return  schema.validate({ [this.prop]: value }, (err) => {
          if (err) {
            this.errorMessage = err[0].message;
          } else {
            this.errorMessage = null;
          }
        });
      }
    },
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
};
//对数据进行校验
</script>

<style>
</style>