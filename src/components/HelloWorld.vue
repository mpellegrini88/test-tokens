<template>
  <div :style="{ backgroundColor: tokens.colors.background, padding: tokens.spacing.spacingMedium, borderRadius: tokens.borderRadius.large }">
    <!-- Titolo stilizzato -->
    <h1 :style="{ color: tokens.colors.primary, fontFamily: tokens.typography.headingFont, fontSize: tokens.typography.fontSizeLarge, marginBottom: tokens.spacing.spacingLarge }">
      {{ title }}
    </h1>

    <!-- Paragrafo stilizzato -->
    <p :style="{ color: tokens.colors.onBackground, fontFamily: tokens.typography.bodyFont, fontSize: tokens.typography.fontSizeMedium, lineHeight: tokens.typography.lineHeightMedium, marginBottom: tokens.spacing.spacingMedium }">
      {{ description }}
    </p>

    <!-- Input Testo -->
    <InputText v-model="inputValue" :style="{ width: '100%', borderColor: tokens.colors.primary, padding: tokens.spacing.spacingSmall, borderRadius: tokens.borderRadius.medium }" placeholder="Type something" />

    <!-- Pulsante -->
    <Button label="Submit" :class="'p-button-raised p-button-primary'" :style="{ backgroundColor: tokens.colors.primary, color: tokens.colors.onPrimary, marginTop: tokens.spacing.spacingMedium }" @click="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import tokens from '../tokens/tokens.json';

const title = 'Welcome to the Design Token Demo';
const description = 'This component is styled dynamically using design tokens exported from Figma.';
const inputValue = ref('');

const handleSubmit = () => {
  alert(`Input value: ${inputValue.value}`);
};
</script>
