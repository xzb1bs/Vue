<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->




<script setup>
import { ref, computed } from 'vue'

const tasks = ref([]) 

const newTaskText = ref('')
const newTaskCategory = ref('Work')
const newTaskPriority = ref('Medium')
const filterCategory = ref('All')
const showOnlyIncomplete = ref(false)

const incompleteCount = computed(() =>
  tasks.value.filter(t => !t.completed).length
)

const filteredTasks = computed(() => {
  let result = tasks.value

  if (filterCategory.value !== 'All') {
    result = result.filter(t => t.category === filterCategory.value)
  }

  if (showOnlyIncomplete.value) {
    result = result.filter(t => !t.completed)
  }

  return result
})

function addTask() {
  if (newTaskText.value.trim() === '') return
  tasks.value.push({
    id: Date.now(),
    text: newTaskText.value,
    category: newTaskCategory.value,
    priority: newTaskPriority.value,
    completed: false,
  })
  newTaskText.value = ''
}

function deleteTask(id) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}

function toggleComplete(task) {
  task.completed = !task.completed
}
</script>

<template>
  <div class="app">
    <h1>Диспетчер задач</h1>

    <input
      v-model="newTaskText"
      placeholder="Enter a task..."
    />
    <select v-model="newTaskCategory">
      <option>Работа</option>
      <option>Учёба</option>
      <option>Персонально</option>
    </select>
    <select v-model="newTaskPriority">
      <option>Низкий</option>
      <option>Средний</option>
      <option>Сложный</option>
    </select>
    <button @click="addTask">Добавить задачу</button>

    <div class="filters">
      <label>
        Category:
        <select v-model="filterCategory">
          <option>Все</option>
          <option>Работа</option>
          <option>Учеба</option>
          <option>Персонально</option>
        </select>
      </label>
      <label>
        <input type="checkbox" v-model="showOnlyIncomplete" />
        Показать только незавершённые
      </label>
    </div>

    <p v-if="filteredTasks.length === 0">No tasks</p>

    <ul>
      <li
        v-for="task in filteredTasks"
        :key="task.id"
        :class="{ completed: task.completed }"
      >
        {{ task.text }} ({{ task.category }}, {{ task.priority }})

        <button @click="toggleComplete(task)">
          {{ task.completed ? 'Undo' : 'Complete' }}
        </button>
        <button @click="deleteTask(task.id)">Удалить</button>
      </li>
    </ul>

    <p>Незавершённые задачи: {{ incompleteCount }}</p>
  </div>
</template>

<style scoped>
.app {
  font-family: sans-serif;
  padding: 20px;
}
.completed {
  text-decoration: line-through; 
  color: gray;
}
.filters {
  margin-top: 10px;
}
</style>

<style lang="css">


</style>

<style lang="css">
.app {
  font-family: "Segoe UI", Roboto, Arial, sans-serif;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

input, select {
  padding: 8px 12px;
  margin: 6px 4px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
}

input:focus, select:focus {
  border-color: #4f46e5; 
}

button {
  padding: 8px 14px;
  margin-left: 6px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  opacity: 0.9;
}

button:nth-of-type(1) {
  background: #4f46e5;
  color: white;
}

button:nth-of-type(2) {
  background: #10b981; 
  color: white;
}

button:nth-of-type(3) {
  background: #ef4444; 
  color: white;
}

.filters {
  margin: 15px 0;
  padding: 10px;
  background: #eef2ff;
  border-radius: 8px;
}

.filters label {
  margin-right: 10px;
  font-size: 14px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  margin-bottom: 8px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  transition: 0.2s;
}

li:hover {
  background: #f3f4f6;
}

li span {
  flex-grow: 1;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

p {
  text-align: center;
  margin-top: 20px;
  color: #6b7280;
  font-style: italic;
}

label {
  margin-right: 6px;
  color: #6b7280;
}

li {
  font-size: 16px;
  color: #000000;
}
 </style>