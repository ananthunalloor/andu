<template>
    <section class="dots-sec">
                <div class="dots-container">
            <div class="dots"  v-for="index in 84" :key="index"></div>
        </div>
    </section>
</template>
<style lang="postcss" scoped>
.dots-container{
@apply flex flex-wrap;
width: 192px;
}
.dots{
    @apply w-2 h-2 m-3 bg-green-300 rounded-full shadow-inner;
}
</style>