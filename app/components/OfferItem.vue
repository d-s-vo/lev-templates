<template>
    <div 
        class="
            flex flex-col px-[10px] py-[20px]
            rounded-[15px] shadow-[inset_0_0_0_2px_rgba(255,215,0,1)]
        "
    >
        <img 
            class="w-[120px] h-[20px] object-cover"
            :src="offer.image" alt=""
        >

        <div class="flex items-center gap-[10px] mt-[10px] overflow-auto">
            <template v-for="tag in offer.tags" :key="tag">
                <div 
                    class="
                        rounded-[5px] text-[12px] text-white whitespace-nowrap
                        bg-gradient-to-r from-[#fcba03] to-[#037bfc] 
                        px-[10px] py-[5px] rounded-[5px]
                    "
                >
                    {{ tag }}
                </div>
            </template>
        </div>

        <div class="flex flex-col gap-[10px] my-[30px]">
            <template v-for="info in offer.info" :key="info.title">
                <div class="flex items-center justify-between gap-[10px]">
                    <span class="text-[rgba(0,0,0,.5)] text-[14px]">{{ info.title }}</span>
                    <span class="text-[14px]">{{ info.text }}</span>
                </div>
            </template>
        </div>

        <NuxtLink 
            :to="offer.link"
            class="
                text-[14px] text-[#037bfc] h-[47px] flex items-center justify-center
                bg-[#037bfc] text-white
                hover:bg-[#037bfc]/80 transition-colors duration-300
                rounded-[5px] border border-[#037bfc]
            "
        >Подробнее</NuxtLink>
    </div>
</template>
<script lang="ts" setup>
defineProps<{ offer: OfferCard }>()
</script>