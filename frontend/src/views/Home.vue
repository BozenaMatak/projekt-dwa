<template>
    <div class="Home">
        
            <router-view />
        
        
    </div>
</template>

<script>

export default {
    props: ['term'],
    name: 'Home'
};
</script>
