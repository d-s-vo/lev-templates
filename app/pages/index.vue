<template>
    <container class="mt-[40px]">
        <h1
            class="text-[24px] font-bold"
        >{{ data.hero.title }}</h1>

        <div
            class="mt-[20px]"
            v-html="data.hero.subtitle"
        />

        <div class="grid grid-cols-2 gap-[20px] mt-[40px]">
            <template v-for="offer in data.offers" :key="offer.id">
                <OfferItem :offer="offer" />
            </template>    
        </div>

        <div
            class="mt-[80px] flex flex-col gap-[40px]"
        >
            <template v-for="item in data.features">
                <div>
                    <h2 class="text-[24px] font-bold">{{ item.title }}</h2>
                    <div v-html="item.description"></div>
                </div>
            </template>
        </div>
    </container>
</template>
<script lang="ts" setup>
import { mockHomeData } from '../../data/homeMock';

const data = mockHomeData;
</script>