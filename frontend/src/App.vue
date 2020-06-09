<template>
  <div id="app">
  <div id="nav">
  <header>
    <div class="contejner">

            <!-- Brand/logo -->
            <div class="work">
              <router-link to="/"><h1><strong>Work from<span class="home"> home</span></strong></h1></router-link>
            </div>

            <nav>
        
              <!-- Links -->
            
              <ul>
                <li><router-link v-if="auth.authenticated" to="/" style="padding: 0 15px;"><img id="home" src="home.png">Home</router-link></li>
                <li><router-link v-if="!auth.authenticated"  to="/Naslovna" style="padding: 0 15px;">Naslovna</router-link></li>
                <li><router-link v-if="!auth.authenticated" to="/Prijava" style="padding: 0 15px;"><img id="login" src="login.png">Sign in</router-link></li>
                <li><router-link v-if="!auth.authenticated" to="/Registracija_zaposlenik" style="padding: 0 15px;"><img id="registration" src="register.png">Sign up</router-link></li>
                <li><router-link v-if="auth.authenticated" to="/mojprofil" style="padding: 0 15px;"><img id="profil" src="profile.png">My profile</router-link></li>
                <li><router-link to="/About" style="padding: 0 15px;"><img id="about" src="about.png">About us</router-link></li>
                <li><router-link v-if="auth.authenticated" to="/PostJob" style="padding: 0 15px;"><img id="postjob" src="postjob.png">Post Job</router-link></li>
                <li v-if="auth.authenticated"><a @click.prevent="logout" href="#" style="padding: 0 15px;"><img id="logout" src="logout.png">Logout</a></li>
              </ul>

            </nav>
    </div>
  </header>
  <div class="crta"></div> 
  </div>
  <router-view/>
    <section id="footer" style="margin-bottom:0;">
		<div class="container">
			<div class="row text-center">
				<div class="col-xs-12 col-sm-12">
					<h3 style="margin-top: 5%;"><strong>Guide map</strong></h3>
					<ul class="list-unstyled quick-links" style="color: white; font-size: 22px">
						<li><router-link v-if="auth.authenticated"  to="/">Home</router-link></li>
            <li><router-link v-if="!auth.authenticated" to="/Prijava">Home</router-link></li>
            <li><router-link v-if="!auth.authenticated"  to="/Prijava">My profile</router-link></li>
            <li><router-link v-if="auth.authenticated" to="/mojprofil">My profile</router-link></li>
            <li><router-link  v-if="auth.authenticated"  to="/PostJob">Post Job</router-link></li>
            <li><router-link  v-if="!auth.authenticated" to="/Registracija_poslovoda">Post Job</router-link></li>
            <li><router-link   to="/About">About us</router-link></li>
            <li><a v-if="auth.authenticated" href="#">Logout</a></li>
					</ul>
				</div>
			</div>	
		</div>
    <p><strong>Work from home application 2020</strong></p>	
	</section>
  </div>    
</template>

<script>
import {Auth} from "@/services";
export default {
  data(){
    return{
      auth: Auth.state,   //dovlaci iz jednog objekta u drugi objekt neke kljuceve, varijable...
    };
  },
  methods:{
    logout(){
      Auth.logout();
      this.$router.go(); //za osvjezavanje
    },
  },
}
</script>

<style lang="scss">

  #home{
  margin-right: 10px;
  height: 35px;
  width: 40px;
}
  #login{
  margin-right: 10px;
  height: 35px;
  width: 40px;
}
 #registration{
  margin-right: 10px;
  height: 35px;
  width: 40px;
}
 #profil{
  margin-right: 10px;
  height: 35px;
  width: 40px;
}
#search{
  margin-right: 10px;
  height: 35px;
  width: 40px;
}

 #about{
  margin-right: 10px;
  height: 35px;
  width: 40px;
}
#logout{
  margin-right: 10px;
  height: 35px;
  width: 40px;
}
#postjob{
  margin-right: 10px;
  height: 35px;
  width: 40px;
}
.contejner{
	width: 95%;
	margin: auto;
	overflow: hidden;
	position: relative;
}
header{
  background:rgb(148, 197, 185);
	margin: 0;
	min-height: 70px;
  width: 100%;

}

.home{
  color: white;
}

.crta{
	background:rgb(55, 86, 116);
	height: 4px;
	width: 100%;
}

.work{
  float: left;
	margin: 15px 0;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

nav{
  margin-top: 30px;
}

nav ul{
	float: right;
	padding: 0;
  margin: 0;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


nav ul li {
  display: inline;
	font-size: 25px;
}

#footer {
  left: 0;
  bottom: 0;
  width: 100%;
  position: relative;


	padding: 0.2%;
	color: white;
	background-color: rgb(148, 197, 185); 
	text-align: left;
	font-size: 20px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.bottom{
  color: white;
}
section {
    padding: 40px 0;
}

#footer a {
    color: #ffffff;
    text-decoration: none !important;
    -webkit-text-decoration-skip: objects;
}

#footer ul.social li a i {
    margin-right: 5px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	margin-top:-10px;
}

#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
section p {
	text-align: center; 
	font-size: 25px;
	color: white;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  

}
 
#nav {
  

  a{
    font-weight: bold;
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: grey;
    }
  }
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 100px; /* Should be removed. Only for demonstration */
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
* {
  box-sizing: border-box;
}
</style>