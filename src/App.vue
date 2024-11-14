<script setup lang="ts">
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/vue';
</script>

<template>
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
</template>
