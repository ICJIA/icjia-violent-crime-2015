<template>

<section style="margin-bottom: 100px">
  <div class="hero" style="margin-top: -50px; z-index: 5000">
   <div class="intro">
   </div>
 </div>

 <div class="container">

   <h1 class="bigHead">Violent Crime in Illinois 2015</h1>

  <p>Protecting communities from violent crime and holding people accountable for
    their violent actions are at the heart of strategic federal Byrne/Justice Assistance Grant
     (JAG) planning. Knowing more about how Illinois is affected by violent crime
     can inform decision-making to best allocate scarce resources for maximum impact.</p>

<p>Violent crimes are defined nationally by the Federal Bureau
  of Identification (FBI) Uniform Crime Reporting (UCR) program,
   and at the state level by the Illinois Uniform Crime Reporting
    (I-UCR) program administered by the Illinois State Police.
    In order to inform the state’s JAG strategic planning process,
    information on the prevalence of and subsequent criminal response
     of each of the four violent crime categories - murder, rape, robbery,
      and aggravated assault/battery - are presented here. These data can
       serve as context and foundation for the consideration of evidence-based
        and evidence-informed practices and programs aimed at the prevention
        of violent crime and the successful reintegration of previously violent
         offenders back into the community.</p>


</div>

<div class="container" style="margin-top: 50px; margin-bottom: 50px">
<div class="row">
<div class="col-md-6">
<div class="text-center">
         <img src="/static/chart1.png" class="img-fluid"  />
</div>
</div>
<div class="col-md-6">
<div class="text-center">
         <img src="/static/chart2.png"  class="img-fluid" />
</div>
</div>
</div>
</div>


<div class="container">
  <div class="row">
    <div class="col-md-6">
<div class="card">
  <div class="card-block">
    <h4 class="card-title">MURDER</h4>
    <p class="card-text">
      In Illinois, criminal homicide is charged as
       first degree murder, second degree murder, involuntary
       manslaughter or reckless homicide. First degree murder is
        defined as killing another person through an act which is intended
         to kill them, is likely to kill them, or while committing a forcible felony, such as a robbery or rape.
    </p>
    <router-link to="/murder" class="btn btn-primary uppercase heavy">Read More&nbsp;&nbsp;&raquo;</router-link>
  </div>
</div>
</div>



<div class="col-md-6">
  <div class="card">
  <div class="card-block">
    <h4 class="card-title">RAPE</h4>
    <p class="card-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Fusce tincidunt aliquam ligula, nec tincidunt turpis efficitur
    semper. Sed orci arcu, ultricies nec congue et, ultrices vel erat. Nam eleifend.Fusce tincidunt aliquam ligula, nec tincidunt turpis efficitur
    semper.
    </p>
    <span class="underConstruction">UNDER CONSTRUCTION</span>
  </div>
  </div>
</div>
</div>


<div class="row">
  <div class="col-md-6">


<div class="card">
<div class="card-block">
  <h4 class="card-title">ROBBERY</h4>
  <p class="card-text">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Fusce tincidunt aliquam ligula, nec tincidunt turpis efficitur
  semper. Sed orci arcu, ultricies nec congue et, ultrices vel erat. Nam eleifend. Fusce tincidunt aliquam ligula, nec tincidunt turpis efficitur
  semper.
  </p>
  <span class="underConstruction">UNDER CONSTRUCTION</span>
</div>
</div>


</div>



<div class="col-md-6">
  <div class="card">
  <div class="card-block">
    <h4 class="card-title">AGGRAVATED ASSAULT/BATTERY</h4>
    <p class="card-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Fusce tincidunt aliquam ligula, nec tincidunt turpis efficitur
    semper. Sed orci arcu, ultricies nec congue et, ultrices vel erat. Nam eleifend. Fusce tincidunt aliquam ligula, nec tincidunt turpis efficitur
    semper.
    </p>
    <span class="underConstruction">UNDER CONSTRUCTION</span>
  </div>
  </div>
</div>
</div>
</div>
</section>









</template>

<script>
    export default {
        name: 's01p00',
        data() {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart {margin-top: 50px; margin-bottom: 50px}
.underConstruction {font-weight: 900; color: #aaa; text-transform: uppercase}
.card {margin-top: 30px}
.heavy {font-weight: 700}
.uppercase {text-transform: uppercase}
.bigHead {color: #666; text-transform: uppercase; font-size: 60px}
    .hero {
    height: 650px;
    background: url(../assets/hero3.jpg) no-repeat center center;
    background-size: cover;
    margin-top: -31px;
    margin-bottom: 2px;
}


</style>
