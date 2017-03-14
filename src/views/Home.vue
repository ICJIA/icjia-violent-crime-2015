<template>

<section>
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

<div class="container" style="margin-top: 100px; margin-bottom: 50px">
<div class="row">
<div class="col-md-6">
<div class="text-center">
         <img src="/static/chart1.png" class="img-responsive"  />
</div>
</div>
<div class="col-md-6">
<div class="text-center">
         <img src="/static/chart2.png"  class="img-responsive" />
</div>
</div>
</div>
</div>

<div class="block-section">
<div class="container">
  <div class="row">
    <div class="col-md-6">

    <div class="well section first">
      <router-link to="/murder">
    <h4 class="card-title">MURDER</h4>
    <p class="card-text">
      In Illinois, criminal homicide is charged as
       first degree murder, second degree murder, involuntary
       manslaughter or reckless homicide. First degree murder is
        defined as killing another person through an act which is intended
         to kill them, is likely to kill them, or while committing a forcible felony, such as a robbery or rape.
    </p>
    <div class="btn btn-primary hover-button">Read More&nbsp;&nbsp;&raquo;</div>
  </router-link>
  </div>
</div>



<div class="col-md-6">
  <div class="well section first">
    <router-link to="/rape">
    <h4 class="card-title">RAPE</h4>
    <p class="card-text">
    In Illinois, criminal sexual assault [720 ILCS 5/11-0.1], or rape, is defined as the forcible commission of any sex act against another person or the commission of any sex act against a person who is unable to consent.
    Physical resistance is not required on the part of the victim to demonstrate lack of consent.
    </p>
    <div class="btn btn-primary hover-button">Read More&nbsp;&nbsp;&raquo;</div>
  </router-link>
  </div>
</div>
</div>


<div class="row" >
  <div class="col-md-6">


<div class="well section">
  <router-link to="/robbery">
  <h4 class="card-title">ROBBERY</h4>
  <p class="card-text">
    In Illinois, robbery is defined as the taking or attempting
       to take anything of value from the care,

       custody, or control of a person or persons by force,
        threat of force, violence, and/or putting the victim in fear
         [720 ILCS 5/18].
  </p>
  <div class="btn btn-primary hover-button">Read More&nbsp;&nbsp;&raquo;</div>
</router-link>


</div>
</div>



<div class="col-md-6">
  <div class="well section">
    <router-link to="/assault/definition">
    <h4 class="card-title">AGGRAVATED ASSAULT/BATTERY</h4>
    <p class="card-text">
    Illinois law defines aggravated assault [720 ILCS 5.0/12-2] as when a
    person puts another person in reasonable apprehension of receiving a battery,
    with the intention of causing serious injury, or while using a weapon or
    an object used as a weapon.
  </p>
    <div class="btn btn-primary hover-button">Read More&nbsp;&nbsp;&raquo;</div>
  </router-link>
</div>
</div>
</div>
</div>

</div>
<my-footer />
</section>









</template>

<script>
    import MyFooter from '@/components/Footer'
    export default {
        name: 'Home',
        mounted () {
            this.$ga.trackPage('/','ICJIA | Home')
            //console.log(this.$route.path)
        },
        metaInfo() {
        return {
          title: this.title

        }
      },
        components: {


            MyFooter
        },
        data() {
            return {
              title: 'Home'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart {margin-top: 50px; margin-bottom: 50px}
.underConstruction {font-weight: 900; color: #aaa; text-transform: uppercase}

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

a {font-size: 16px; font-weight: 400; color: #111}
a:hover {text-decoration: none}
.block-section {
  margin-top: 120px;
  background: #aaa;
  padding-top: 50px;
  padding-bottom: 50px;
  border-top: 1px solid #888;
  border-bottom: 1px solid #888}
.section {margin-top: 50px; padding-bottom: 40px}
.section.first {margin-top: 20px;}
.section:hover {background-color: #ddd; cursor: pointer}
.hover-button {font-weight: 700; text-transform: uppercase}



</style>
