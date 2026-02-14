<template>
    <div
        class="
            px-[20px] py-[10px] max-w-[720px] mx-auto border-b border-[#E5E5E5]
            flex items-center gap-[50px]
        "
    >
        <NuxtLink to="/">
            <icons-logo class="text-[34px]"/>
        </NuxtLink>

        <div class="flex items-center gap-[20px]">
            <template v-for="item in data.navigation" :key="item.label">
                <NuxtLink 
                    :to="item.to"
                    class="hover:text-green-500 transition-colors duration-300"
                >
                    {{ item.label }}
                </NuxtLink>
            </template>
        </div>

        <div class="flex items-center gap-[20px] ml-auto">
            <NuxtLink 
                :to="`tel:${data.contacts.phone}`"
                target="_blank"
                rel="noopener noreferrer"
                external
                class="hover:text-green-500 transition-colors duration-300"
            >
                {{ data.contacts.phone }}
            </NuxtLink>

            <NuxtLink   
                :to="`mailto:${data.contacts.email}`"
                target="_blank"
                rel="noopener noreferrer"
                external
                class="hover:text-green-500 transition-colors duration-300"
            >
                {{ data.contacts.email }}
            </NuxtLink>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { HeaderData } from '../../types'

defineProps<{
  data: HeaderData
}>()
</script>