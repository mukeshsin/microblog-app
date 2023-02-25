<template>
<div class="cards">
    <div class="card-header">
        <slot name="title"></slot>
    </div>

    <div class="card-content">
        <slot name="content"></slot>

    </div>
    <div class="card-footer">
        <div class="card-likes">
            <slot name="likes"></slot>
        </div>
        <div class="card-hashtag">
            <slot name="hashTags"></slot>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: "blogCard",
}
</script>

<style scoped>
.cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 2px solid grey;
    margin: 10px;
    width: 15%;
    box-shadow: 1px 2px 3px 2px #888888;
    border-radius:7px;

}

.card-header {
    height: 50px;
    border-bottom: solid 2px grey;
    width: 100%;
    font-size: 23px;
    padding-bottom: 12px;
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif
}

.card-content {
    height: 100px;
    width: 100%;
    border-bottom: solid 2px grey;
    margin-top: 7px;
    padding-bottom: 40px;
    font-weight: bold;
}

.card-footer {

    height: 130px;
    width: 100%;
    font-weight: bold;

}
</style>
