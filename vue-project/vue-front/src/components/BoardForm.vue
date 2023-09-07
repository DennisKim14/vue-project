<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import axios from 'axios'
import { useRoute } from 'vue-router';

const route = useRoute();
let _id = route.params._id;

let title = ref('');
let contents = ref('');
let item = ref();

if (_id != 'undefined') {
    viewBoard(_id)
}
async function viewBoard(_id: string | string[]) {
    await axios.get(`http://localhost:52273/Board/${_id}`)
    .then(res => {
        title.value = res.data.board.title;
        contents.value = res.data.board.contents;
    }).catch(err => {
        console.log(err)
    });
}

async function addBoard(title: string, contents: string) {
    const params = {
        title: title, 
        contents: contents
    }
    await axios.post('http://localhost:52273/Board/add', params)
    .then(res => {
        window.history.back();
    }).catch(err => {
        console.log(err);
    })
}

async function modifyBoard(_id: string | string[], title: string, contents: string) {
    const params = {
        title: title, 
        contents: contents
    }
    await axios.put(`http://localhost:52273/Board/modify/${_id}`, params)
    .then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err)
    });
}

</script>

<template>
    <div class="boardForm-container">
        <div class="form">
            <div class="title">제목</div>
            <input type="text" class="dark ds-input" v-model="title"/>
            <div class="title">내용</div>
            <textarea class="dark ds-textarea" v-model="contents"></textarea>
        </div>
        <button class="addBtn" @click="addBoard(title, contents)">저장</button>
        <button class="addBtn" @click="modifyBoard(_id, title, contents)">수정</button>
    </div>
</template>

<style>
.boardForm-container {
    max-width: 1140px;
    margin: 0 auto;
    padding-top: 30px;
    display: block;
    .form {
        .title {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 5px;
        }
        .dark {
            background-color: #1a1a1a; 
            color: #42b883;
            transition: color .25s;
            text-decoration-style: dotted;
            width: 500px;
        }
        .ds-input {
            height: 50px;
            border-radius: 10px;
            margin-bottom: 24px;
            padding: 10px;
        }
        .ds-textarea {
            height: 300px;
            border-radius: 10px;
            padding: 10px 0 0 10px;
        }
    }
    .addBtn {
    }
}
</style>