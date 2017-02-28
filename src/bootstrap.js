/* ============
 * jQuery
 * ============
 *
 * Require jQuery
 *
 * http://jquery.com/
 */
import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

import lodash from 'lodash';

window._ = window.lodash = lodash;

require('./directives/placeholders');

require('animate.css')
