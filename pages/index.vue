<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about">About page</NuxtLink>

    <button @click="sayHello()">Hello</button>
    <button @click="send()">Enviar</button>
    <div v-if="errors">
      <ul>
        <li v-for="(error,index) in errors.errors" :key="index">
          {{ error[0] }}
        </li>
      </ul>
    </div>
    <div v-else>
      Response: {{ data }}
    </div>
  </div>
</template>

<script setup>
const errors = ref(null)
const data = ref(null)

const sayHello = async () => {
  errors.value = null
  data.value = await $fetch('/api/hello')
}

const send = async () => {
  data.value = await $fetch('/api/send', {
    method: "POST",
    body: { name: "John black", email: "a@a" }
  }).catch(err => {
    errors.value = err.data
  })
}

</script>
