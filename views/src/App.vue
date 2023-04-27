<template>
  <div>
    <div class="flex justify-center border-b hover:shadow py-4">
      <header class="underline font-bold text-3xl uppercase">
        <h1>Sudoku</h1>
      </header>
    </div>
    <div class="bg-gray-300 p-4 m-10 flex justify-center items-center">
      <Sudoku />
    </div>
    <footer></footer>
  </div>
</template>

<script>
import Sudoku from './components/Sudoku.vue';

export default {
  name: 'App',
  components: {
    Sudoku
  }
}
</script>

<style>
</style>
