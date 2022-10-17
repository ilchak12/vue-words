<template>
    <header class="header">
        <div class="container header__container">
            <div class="header__row">
                <slot></slot>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "TheHeader"
}
</script>

<style lang="scss" scoped>
.header {
    padding: 25px 0;
    box-shadow: 0 0 15px rgba($color-black, 0.6);

    &__row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }
}

@include media(551) {
    .header {
        &__row {
            flex-direction: column;
        }
    }
}
</style>