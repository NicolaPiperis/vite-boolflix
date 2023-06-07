<script>
export default {
    name : "cardMovie"
}
</script>

<template>

    <div class="card">

        <img src="../../public/superman.jpeg" alt="info image">

        <ul class="info_movie">

            <li class="name">Super Man</li>

            <li class="original_name">Superman L'uomo d'acciaio</li>

            <li class="language">ITA</li>

            <li class="overall">4</li>

        </ul>

    </div>

</template>

<style scoped lang="scss">

    .card{
        height: 500px;
        width: calc((100% / 5) - 100px);
        background-color: aqua;
        margin: 50px 100px;

        img{
            height: 300px;
            width: 300px;
        }

        .info_movie{
            padding: 20px;
            color: black;
            font-weight: 600;
            font-size: 16px;
            list-style: none;
        }
    }

</style>
