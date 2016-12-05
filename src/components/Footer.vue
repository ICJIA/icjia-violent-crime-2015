<template>

     <footer class="page-footer white">
          
          <div class="footer-copyright">
            <div class="container">
            <div style="text-align: center">
            <span id="lastBuild"></span>
            <a class="grey-text text-darken-4" href="https://github.com/cschweda/icjia-violent-crime-2017" id="githubSource">
            <i class="fa fa-github" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;View on Github</a>
            </div>
          </div>
        </footer>

</template>

<script>
    export default {
        name: 'myFooter',
        data() {
            return {

            }
        },
        mounted: function() {
            this.displayLastBuild()

        },
        methods: {
            displayLastBuild() {
                // $.getJSON("static/timestamp.json", function(data, error) {
                //     var lastBuild = document.querySelector("#lastBuild");
                //     console.log('Timestamp: ', data)
                //     let timestamp = data.www + ' ' + data.MMM + '-' + data.dd + '-' + data.yyyy + '   ' + data.HH + ':' + data.mm + ':' + data.ss
                //     lastBuild.innerText = "Last build: " + timestamp
                //     console.info('Timestamp fetch: ', error)
                // })


            }
        }
    }
</script>

<style>
    #lastBuild,
    #githubSource {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 10px;
        padding-bottom: 5px;
    }
    
    #lastBuild {
        color: #aaa
    }
    
    #githubSource {
        font-weight: 700;
        font-size: 10px;
    }
    
    a#githubSource {
        color: #aaa !important
    }
    
    a:hover#githubSource {
        color: #444 !important;
        text-decoration: none;
    }
</style>