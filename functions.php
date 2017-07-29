//----------------------------------------------------------------------------
// Added by: McDaniel, July 2017
//----------------------------------------------------------------------------
function scrollify_js() {
	echo "\n";
    echo '<!-- Added by: McDaniel, July 2017. source code in functions.php -->';
	echo "\n";
    echo '<!-- ----------------------------------------------- -->';
	echo "\n";
    echo '<script type="text/javascript" src="wp-includes/js/jquery.scrollify.js"></script>';
	echo "\n";
    echo '<!-- ----------------------------------------------- -->';
	echo "\n";
}
// Add hook for admin <head></head>
//add_action('admin_head', 'my_custom_js');

// Add hook for front-end <head></head>
add_action('wp_head', 'scrollify_js');


function scrollify_scripts() {
//    wp_enqueue_script( 'scrollify-init', get_template_directory_uri() . '/js/scrollify-init.js', array( 'jquery', 'scrollify' ), '1.0.0', true );
    wp_enqueue_script( 'scrollify-init', get_template_directory_uri() . '/js/scrollify-init.js', array( 'jquery', 'scrollify' ), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'scrollify_scripts' );

//----------------------------------------------------------------------------
