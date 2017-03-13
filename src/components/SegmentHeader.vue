<template>
  <div>
    <div class="row" style="margin-bottom: 20px; padding-bottom: 10px;">
        <div class="col-lg-12">
        <div >

          <span style="padding-top: 10px; font-size: 18px" class="segment-header">{{segment}}</span>

          <span style="float: right">
            <a :href="reportDownload" class="btn btn-primary" style="text-transform: uppercase; font-weight: 700">Download Full Report&nbsp;&nbsp;<i class="fa fa-file-pdf-o" aria-hidden="true"></i></a>
            </span>

        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      segment: {
          type: String,
          required: true
      }

  },
  created: function() {

      this.reportDownload = '/static/pdf/' + this.segment + '.pdf';

    },
  components: {

  },
  data () {
    return {
      reportDownload: ''
    }
  }
}


</script>
