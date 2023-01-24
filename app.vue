<template>
  <div>
    <div class="cont">
      <NuxtLink to="/">HOME</NuxtLink>
      <NuxtLink to="/profile">PROFILE</NuxtLink>
    </div>
    <NuxtPage />
  </div>
</template>

<style>
.cont {
  display: flex;
  gap: 4rem;
  background-color: wheat;
  padding: 2rem 4rem;
}

.cont a {
  background-color: rgb(52, 51, 53);
  padding: 1rem 2rem;
  color: azure;
}
</style>
