<script>
export default {
    name : "cardMovie",
    props: {
        details: Object 
    }
}
</script>

<template>

    <div class="card">

        <img :src="details.poster_path" alt="info image">

        <ul class="info_movie">

            <li class="name">{{ details.title }}</li>

            <li class="original_name">{{ details.original_title }}</li>

            <li class="language">{{ details.original_language }}</li>

            <li class="overall">{{ details.vote_average }}</li>

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
