<template>
    <div v-if="job" class="JobDetail">
        
        <proba :proba="job"   />
    </div>
</template>

<script>

import proba from '@/components/proba.vue';
import {Posts} from '@/services';

export default {
    props: ['id'],
    data() {
        return {
            job: null,
        };
    },
    async mounted() {
        console.log(this.id);
        //upit na backend
        this.job = await Posts.getOne(this.id);
        console.log(this.job)
    },

    name: 'Job-Detail',
    components: {
        
        proba
    }
};
</script>

<style scoped>
button {
    margin-bottom: 20px;
}
.JobDetail{
    width: 100%;
}
</style>
