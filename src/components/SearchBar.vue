<template>
    <input type="text" placeholder="Type a word" class="header__search">
</template>

<script>
export default {
    name: "SearchBar"
}
</script>

<style lang="scss" scoped>
.header {
    &__search {
        font-size: 20px;
        font-family: $font-main;
        background-color: $color-light-grey;
        border-radius: 12px;
        padding: 15px 24px;
        flex: 1 0 auto;
    }
}

@include media(1025) {
    .header {
        &__search {
            padding: 10px 15px;
            border-radius: 6px;
        }
    }
}

@include media(551) {
    .header {
        &__search {
            width: 100%;
        }
    }
}
</style>