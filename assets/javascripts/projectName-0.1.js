/*
 *  @package	  Project Name
 *  @subpackage	CSS
 *  @author		  Ben Sekulowicz-Barclay
 *  @version	  0.1
 */
 
var projectName = (function($) {

  var _ = this;

  /*
  * @author Ben Sekulowicz-Barclay
  * @access public
  * @param  object event
  * @return void
  */

  this.on_hash = function(e) { 

  };

  /*
  * @author Ben Sekulowicz-Barclay
  * @access public
  * @param  object event
  * @return void
  */

  this.on_load = function(e) {

  };

  return _;
})(jQuery);

jQuery(window).on('hashchange', projectName.on_hash);
jQuery(document).on('ready', projectName.on_load);
jQuery(document).on('ready', projectName.on_hash);