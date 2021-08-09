<template>
  <div class="edit">
    <div class="edit-list">
      <button @click="$emit('run')">运行</button>
      <button>清空</button>
      {{code}}
    </div>
    <div class="edit-box">
      <textarea :value = "code" @input="handleInput" @keydown.9.prevent="handleKeyDown"></textarea>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {code:''}
    },
    methods:{
        handleInput(e){
            this.code = e.target.value;
            this.$emit('input',this.code)

        },
        handleKeyDown(){

        }
    }
};
</script>

<style lang="stylus">
.edit {
  .edit-list {
    padding: 10px;

    button {
      height: 40px;
      width: 80px;
      margin: 5px;
    }

    background: #ccc;
  }

  .edit-box {
    position: absolute;
    top: 80px;
    bottom: 0;
    left: 0;
    right:0

    textarea {
      border: none;
      outline: none;
      width: 50%;
      height: 100%;
      font-size 24px;
    }
  }
}
</style>
