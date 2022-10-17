<template>
    <section class="dictionary">
        <div class="container dictionary__container">
            <div class="dictionary__inner">
                <div class="dictionary__response" v-if="wordResponse.length != 0 && !errorResponse">
                    <div class="dictionary__header">
                        <h2 class="dictionary__word">{{ wordResponse.word }}</h2>

                        <div class="dictionary__field" v-if="wordResponse.phonetics">
                            <h4 class="dictionary__field-subtitle">Phonetics:</h4>
                            <div class="dictionary__field-row">
                                <p class="dictionary__field-value" v-for="(phonetic, i) in wordResponse.phonetics" :key="i">{{ phonetic.text }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="dictionary__columns">
                        <div class="dictionary__field" v-for="(meaning, i) in wordResponse.meanings" :key="i">
                            <h3 class="dictionary__field-title">Part of speech: <span>{{ meaning.partOfSpeech }}</span></h3>

                            <div class="dictionary__field-subfield" v-if="meaning.synonyms.length > 0">
                                <h4 class="dictionary__field-subtitle">Synonyms:</h4>

                                <div class="dictionary__field-result">
                                    <div class="dictionary__field-row">
                                        <p class="dictionary__field-value" v-for="(synonym, j) in meaning.synonyms" :key="j">{{ synonym }}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="dictionary__field-subfield" v-if="meaning.antonyms.length > 0">
                                <h4 class="dictionary__field-subtitle">Antonyms:</h4>

                                <div class="dictionary__field-result">
                                    <div class="dictionary__field-row">
                                        <p class="dictionary__field-value" v-for="(antonym, j) in meaning.antonyms" :key="j">{{ antonym }}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="dictionary__field-subfield" v-if="meaning.definitions.length > 0">
                                <h4 class="dictionary__field-subtitle">Definitions:</h4>

                                <div class="dictionary__field-result">
                                    <div class="dictionary__field-defs" v-for="(definition, j) in meaning.definitions" :key="j">
                                        <p class="dictionary__def">{{ definition.definition }}</p>
                                        <p class="dictionary__def-exp" v-if="definition.example">Example: {{ definition.example }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dictionary__error" v-else-if="errorResponse">
                    <h1>{{ errorResponse }}</h1>
                </div>

                <div class="dictionary__error" v-else>
                    <h1>Type a word to search bar!</h1>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "TheDictionary",
    props: ['wordResponse', 'errorResponse'],
}
</script>

<style lang="scss" scoped>
.dictionary {
    padding-bottom: 50px;

    &__error {
        color: $color-white;
        font-size: 40px;
        margin-top: 30px;
        text-align: center;
    }

    &__response {
        margin-top: 50px;
        border: 2px solid $color-light-grey;
        border-radius: 8px;
        box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%), 0 2px 3px 0 rgb(0 0 0 / 10%);
        padding: 10px;
        background-color: $color-white;
    }

    &__header {
        margin-bottom: 30px;
    }

    &__word {
        font-size: 40px;
        margin-bottom: 10px;
        color: $color-light-purple;
    }

    &__columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
    }

    &__field-subfield {
        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    &__field-result {
        margin-left: 30px;
    }

    &__field-row {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;

        .dictionary {
            &__field-value {
                &:not(:last-child) {
                    &::after {
                        content: ',';
                    }
                }
            }
        }
    }

    &__field-value {
        &:empty {
            display: none;
        }
    }

    &__field-title {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 5px;
        background-color: $color-light-purple;
        color: $color-white;
        width: max-content;
        max-width: 100%;
        padding: 4px 6px;
        border-radius: 3px;

        span {
            font-weight: 700;
            color: $color-vanilla;
        }
    }

    &__field-subtitle {
        font-size: 20px;
        margin-bottom: 5px;
        font-weight: 500;
    }

    &__field-defs {
        border-bottom: 1px solid $color-light-purple;
        padding-bottom: 3px;

        &:not(:last-child) {
            margin-bottom: 5px;
        }
    }

    &__def-exp {
        background-color: $color-light-purple;
        color: $color-white;
        margin-top: 3px;
        padding: 3px;
        border-radius: 4px;
    }
}

@include media(1025) {
    .dictionary {
        &__columns {
            grid-template-columns: 1fr;
            grid-gap: 0;
        }

        &__field {
            &:not(:last-child) {
                margin-bottom: 30px;
            }
        }
    }
}

@include media(769) {
    .dictionary {
        &__response {
            margin-top: 30px;
        }

        &__header {
            margin-bottom: 20px;
        }

        &__word {
            font-size: 32px;
            margin-bottom: 5px;
        }

        &__field {
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }

        &__field-result {
            margin-left: 20px;
        }

        &__field-title {
            font-size: 20px;
        }

        &__field-subtitle {
            font-size: 18px;
        }
    }
}
</style>