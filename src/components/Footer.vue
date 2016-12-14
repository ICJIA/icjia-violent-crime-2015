<template>

     <footer class="page-footer white">
          
          <div class="footer-copyright">
            <div class="container">
            
            <span id="lastBuild"></span>
            <a class="grey-text text-darken-4 right" href="https://github.com/cschweda/icjia-violent-crime-2017" id="githubSource">
            <i class="fa fa-github" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;View on Github</a>
            
          </div>
        </footer>

</template>

<script>
    import moment from 'moment'
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
                // Display last build from timestamp.json -- then use moment.js to format
                let url = '/static/timestamp.json'
                fetch(url).then(r => r.json())
                        .then(data => {
                            // console.log(data.date)
                            // console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
                            $('#lastBuild').html('Last updated: <span class="mDate">' + moment(data.date).format("ddd, MMM Do YYYY, h:mm:ss a") + '</span>')
                        })
                        .catch(e => console.log('Error fetching timestamp: ',e))

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
        color: #333;
        font-size: 12px;
    }

    .mDate {color: #888}
    
    #githubSource {
        font-weight: 700;
        font-size: 12px;
        
    }
    
    a#githubSource {
        color: #333 !important
    }
    
    a:hover#githubSource {
        color: #aaa !important;
        text-decoration: none;
    }
</style>