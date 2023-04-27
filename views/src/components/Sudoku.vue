<template>
  <div @click="gameLoad()">
    Sudoku
  </div>
</template>

<script>
export default {
  name: 'SudokuGameView',
  data() {
    return {
      //
    }
  },
  methods: {
    gameLoad(){
      console.log('Started')
    }
  },
}
</script>

<style>

</style>