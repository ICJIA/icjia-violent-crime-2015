<template>
<div class="app" style="margin-top: 50px">
	<!-- .container is main centered wrapper -->
	<div class="container">
		<div class="row">
			<div class="col s12">
				<div class="center">
					<h3 class="light">{{pageTitle}}</h3>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col s12">
			 	<hc001></hc001>
        		<hc002></hc002>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import Hc001 from '../../charts/HC001.vue'
import Hc002 from '../../charts/HC002.vue'
export default {
	name: 'S01P01',
	update: function() {},
	mounted: function() {},
	methods: {},
	components: {
		Hc001,
		Hc002
	},
	data() {
		return {
			pageTitle: 'Section 01 - Page 01',
			series: [],
			table1: '<b>Test</b>'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>