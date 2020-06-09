<template>
  <div id="pocetna">  
    <div class="container1">
      <img class="slika" src="pozadina.png" alt="pozadina">
      <div class="bottom-left">
        <p style="font-size:40px; font-family: 'Avenir', Helvetica, Arial, sans-serif; margin-top: 10%;"><strong>Find a freelancer for any kind of job or find a job that best suits you.</strong></p>
        <p style="font-size:25px; font-family: 'Avenir', Helvetica, Arial, sans-serif;"><strong>Become a freelancer so you can work any kind of job, online.</strong></p>
        <button class="prvib"><router-link  to="/Registracija_poslovoda">Find a freelancer</router-link></button>
        <button class="drugib"><router-link  to="/Registracija_zaposlenik">Find a job</router-link></button>
      </div>
    </div>
    <section>
      <h2 class="poslovi-naslov"><strong>Find a perfect job for you and become an expert</strong></h2>
      <div class="row">  
        <div class="posao">
          <i class="fa fa-laptop" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          Website designe
        </div>
        <div class="posao">
          <i class="fa fa-image" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          Photoshop
        </div>
        <div class="posao">
          <i class="fa fa-wordpress" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          Logo designe
        </div>
        <div class="posao">
          <i class="fa fa-table" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          SEO
        </div>
        <div class="posao">
          <i class="fa fa-cubes" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          3D modelling
        </div>
        <div class="posao">
          <i class="fa fa-mobile" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          Mobile apps
        </div>
        <div class="posao">
          <i class="fa fa-pencil" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          Writing
        </div>
      </div>
      <div class="row">
        <div class="posao">
          <i class="fa fa-globe" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          Internet marketing
        </div>
        <div class="posao">
          <i class="fa fa-terminal" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          Software development
        </div>
        <div class="posao">
          <i class="fa fa-paint-brush" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          Graphic designe
        </div>
        <div class="posao">
          <i class="fa fa-calculator" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          Banner designe
        </div>
        <div class="posao">
          <i class="fa fa-android" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          Android apps
        </div>
        <div class="posao">
          <i class="fa fa-apple" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          iPhone apps
        </div>
        <div class="posao">
          <i class="fa fa-flag" style="font-size:40px;color:rgb(100, 130, 140);"></i>
          <br>
          Languages
        </div>
      </div>  
    </section>
    
    
  </div>


</template>

<style lang="scss">

.slika{
  max-width: 100%;;
}
.container1 {
  position: relative;
  text-align: center;
  color: black;
}
.bottom-left {
  position: absolute;
  bottom: 25%;
  left: 5%;
  width:40%;
  text-align: left;
  
}

button{
  margin: 2%;
  border: none;
  padding: 1.5% 4%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 25px;
  
}

.prvib{
  width: 50%;
  background-color: rgb(110, 160, 95);
  a{
    font-weight: bold;
    color: white;
    text-decoration: none; 
  }
}
.drugib{
  width: 50%;
  background-color: transparent;
  border: black solid 2px;
  a{
    font-weight: bold;
    color: black;
    text-decoration: none;
  }
  
  
}
.tekst{
  font-size: 30px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

h2{
  text-align: center;
  line-height: 2;
  font-size: 40px;
  color: #0e1724;
  font-family:'Avenir', Helvetica, Arial, sans-serif;
}

.posao{
  color: #0e1724;
  font-family:'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
  flex-basis: 14%;
  height: 100px;
  margin-bottom: 24px;
  font-size: 20px;
  line-height: 2;
}
section{
  width: 97%;
  margin: 3% auto;
}



</style>
