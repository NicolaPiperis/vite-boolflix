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

        <img src="" alt="info image">

        <ul class="info_movie">

            <li class="name">{{ details.title || details.name}}</li>

            <li class="original_name">{{ details.original_title || details.original_name}}</li>

            <li class="language">
                <!-- {{ details.original_language }} -->
                <img v-if=" details.original_language === 'it' " :src="`../../public/flags/${details.original_language}.png`" alt="info language">
                <img v-else-if=" details.original_language === 'es' " :src="`../../public/flags/${details.original_language}.png`" alt="info language">
                <img v-else src="../../public/flags/en.png" alt="info language">
                
            </li>

            <li class="overall">{{ details.vote_average }}</li>

        </ul>

    </div>

</template>

<style scoped lang="scss">

    .card{
        height: 500px;
        width: calc((100% / 5) - 30px);
        background-color: aqua;
        

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

            li{
                margin: 15px 0;
            }

            .language{

                img{
                    width: 40px;
                    height: 40px;
                }
            }

        }
    }

</style>
