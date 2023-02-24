<template>
<div class="cards">
    <div class="card-header">
        <slot name="title"></slot>
    </div>

    <div class="card-content">
        <slot name="description"></slot>

    </div>

    <div class="card-footer">
        <slot name="likes"></slot>
        <slot name="hashTags"></slot>

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
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    margin: 10px;
    width: 400px;
    float: right;
}

.card-header {
    background-color: #eee;
    border-bottom: 2px solid #ccc;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}

.card-content {
    display: flex;
    justify-content: center;
    padding: 10px;
}

.card-footer {
    border-top: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    height: 40px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;

}
</style>
