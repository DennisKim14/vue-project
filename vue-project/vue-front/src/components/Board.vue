<script setup lang="ts">
import { onMounted, ref, inject } from 'vue';
import axios from 'axios'

let items = ref([]);

onMounted(async () => {
    const res = await axios.get('http://localhost:52273/Board');
    items = res.data.list;
    console.log(items)
}

)

function viewBoard() {
    
}

function modifyBoard() {
    
}

function deleteBoard() {
    
}
</script>

<template>
    <div>
        <table>
          <thead>
              <tr>
                  <td>게시글번호</td>
                  <td>제목</td>
                  <td></td>
              </tr>
          </thead>
          <tbody v-for="(a, index) in items" :key="a._id">
              <tr>
                  <td><span @click="viewBoard()">{{ index + 1 }}</span></td>
                  <td><span>{{ a.name }}</span></td>
                  <td>
                      <button class="" @click="modifyBoard()">수정</button>
                      <button class="" @click="deleteBoard()">삭제</button>
                  </td>
              </tr>
          </tbody>
        </table>
        <button class="writeBtn">글쓰기</button>
    </div>
</template>

<style scoped>
table {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    border: 1px solid black;
}
td:first-child {
    width: 20%;
}
td:last-child {
    width: 20%;
}
td {
    border: 1px solid black;
}

.writeBtn {
    width: 10%;

}
</style>
