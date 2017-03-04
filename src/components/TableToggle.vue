<template>
  <label class="switch-light" onclick="">
<input type="checkbox" name="tableToggle" checked>
<strong>
<span style="text-transform: uppercase">Display Tables</span>
</strong>
<div style="height: 15px"></div>

<span class="well">
<span>Hide</span>
<span>Show</span>
<a class="btn btn-primary"></a>
</span>
</label>

</template>


<script>

export default {

  mounted: function () {
    $('input[name=tableToggle').change(function(){

        if($(this).is(':checked'))
          {
              $('.hc-table').removeClass('hide')
              //console.log('on')
          }
          else
          {
              $('.hc-table').addClass('hide')
              //console.log('off')
          }

});
  }
}



</script>
