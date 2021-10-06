
jQuery('input[type=file]').change(function(){
    let filename = jQuery(this).val().split('\\').pop();
    let idname = jQuery(this).attr('id');
    console.log(jQuery(this));
    console.log(filename);
    console.log(idname);
    jQuery('span.'+idname).next().find('span').html(filename);
});
