import axios from 'axios';
import $router from '@/router';


let Service = axios.create({     
    baseURL: 'http://localhost:3000/',  
    timeout: 1000,

});

Service.interceptors.request.use((request) =>{
    let token = Auth.getToken()
    if(!token){
        //$router.go();
        return;
    }
    else{
        request.headers["Authorization"] = "Bearer " + token;
    }
    return request
});
Service.interceptors.response.use((response) => response, (error) =>{
    console.log(error)
    if(error && error.response){
        if(error.response.status == 401 || error.response.status == 403){
            Auth.logout();
            $router.go()
        }
    }
    
}) 


let Posts = {    

    async getAllComment(jobId) {
        let response = await Service.get(`/jobs/${jobId}/comments`);
        return response.data.map(doc => {
            
                return {
                    id: doc._id,
                    jobId: doc.Idjoba,
                    posted_at: Number(doc.postedAt),
                    komentar: doc.komentar,
                };
            
        });
    },
    add_job(job) {
        return Service.post('/jobs', job);
    },
    delete_job(jobId){
        return Service.delete(`/jobs/${jobId}`)
    },

    add_comment(comment) {
        return Service.post('/jobs/:jobId/comments', comment);
    },
    
    async getAll() {        
        let response = await Service.get(`/jobs`)
        let data = response.data
        data = data.map(doc =>{
            return {
                id:doc._id,
                ime: doc.ime,
                prezime: doc.prezime,
                naziv_posla: doc.naziv_posla,
                kategorija_posla: doc.kategorija_posla,
                opis_posla: doc.opis_posla,
                potrebne_vjestine: doc.potrebne_vjestine,
                zarada: doc.zarada,
                posted_at: Number (doc.posted_at)
            
            };
        });
        return data
    },
    async getOne(id){
        let response = await Service.get(`/jobs/${id}`);
        let doc = response.data;
        return {
            id:doc._id,
            ime: doc.ime,
            prezime: doc.prezime,
            naziv_posla: doc.naziv_posla,
            kategorija_posla: doc.kategorija_posla,
            opis_posla: doc.opis_posla,
            potrebne_vjestine: doc.potrebne_vjestine,
            zarada: doc.zarada,
            posted_at: Number(doc.posted_at),
            comments: (doc.comments || []).map((c) => {                
                c.id = c._id;                
                delete c._id;                
                return c;            
            }),
        };
    }, 
}


let Auth = {
    
    async login(email, password){
        let response = await Service.post("/auth",{
           email: email,
           password: password,
        });
        let user = response.data
        localStorage.setItem("user", JSON.stringify(user)); 

       return true;
    },
    logout(){
      localStorage.removeItem("user");
    },
    getUser(){
      return JSON.parse(localStorage.getItem("user"))  
    },
    profil(){
        let user = Auth.getUser()
        if(user){
            return user
        }
    },
    getToken(){
        let user = Auth.getUser();
        if(user && user.token){
            return user.token
        }
        else{
            return false;
        }
    },
    authenticated(){
        let user = Auth.getUser()
        if(user && user.token){
           return true 
        }
        else{
            return false
        }
    },
    state: {
        get authenticated (){ //pomocu get ovaj atribut authenticated pretvaramo u funkciju
           return Auth.authenticated(); //pozivamo ju kao funckiju ali kad ju citamo ne moramo ju pozvat kao funkciju nego kao atribut 
        },
    }
};

export { Service, Posts, Auth } // exportamo Service za ručne pozive ili Posts za metode.
