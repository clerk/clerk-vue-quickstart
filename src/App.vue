<script setup lang="ts">
import { SignInButton, Show, UserButton } from '@clerk/vue'
</script>

<template>
  <header>
    <Show when="signed-out">
      <SignInButton />
    </Show>
    <Show when="signed-in">
      <UserButton />
    </Show>
  </header>
</template>
