<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios'

let items = ref<any>([]);

onMounted(async () => {
    await axios.get('http://localhost:52273/Board')
    .then(res => {
        items.value = res.data.list;
    }).catch(err => {
        console.log(err)
    });
})

async function deleteBoard(_id: string) {
    await axios.delete(`http://localhost:52273/Board/delete/${_id}`)
    .then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err)
    });
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
          <tbody v-for="(board, index) in items" :key="board._id">
              <tr>
                  <td><span>{{ index + 1 }}</span></td>
                  <td><span><RouterLink :to="{path: '/board/form/' + board._id}">{{ board.title }}</RouterLink></span></td>
                  <td>
                      <button class="" @click="deleteBoard(board._id)">삭제</button>
                  </td>
              </tr>
          </tbody>
        </table>
        <button class="writeBtn"><RouterLink to="/board/form">글쓰기</RouterLink></button>
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
