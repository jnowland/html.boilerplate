/**
 *  @package	Boilerplate
 *  @subpackage	Javascript
 *  @author		Ben Sekulowicz-Barclay
 *  @version	0.1
 */

projectName = {
    
    /**
     *
     *	These listener functions are triggered when specific events occur, such as the page loading
	 *	or a specific DOM element being present.
     *
     */
    
    listeners: {
        
        /**
         *  @author Ben Sekulowicz-Barclay
         *  @access public
         *  @return void
         */
        
        hasInitialized: function() {
			// Add first/last classes for neater CSS with IE ...
			$('.ie6 *:first-child').addClass('isFirstChild');
			$('.ie6 *:last-child').addClass('isLastChild');
		}
    }    
};

$(document).bind("CORE:HAS_INITIALIZED", projectName.listeners.hasInitialized);