/**
*    @package		Boilerplate
*    @subpackage	Javascript
*    @author		Ben Sekulowicz-Barclay
*    @version		0.1
**/

className = {
    
    /**
    *
    *	These listener functions are triggered when specific events occur, such as the page loading
	*	or a specific DOM element being present.
    *
    **/
    
    listeners: {
        
        /**
        *
        *	Called when the
        *
        **/
        
        hasInitialized: function() {
			// Add first/last classes for neater CSS with IE ...
			$('*:first-child').addClass('isFirstChild');
			$('*:last-child').addClass('isLastChild');
		}
    }    
};

$(document).bind("CORE:HAS_INITIALIZED", className.listeners.hasInitialized);