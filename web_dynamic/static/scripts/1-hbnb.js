$(document).ready(function(){
  let amenityIds = {};
  $('input[type="checkbox"]').change(function(){
    if($(this).is(':checked')){
      amenityIds[$(this).data('id')] = $(this).data('name');
    }else{
      delete amenityIds[$(this).data('id')];
    }
    $('div.amenities > h4').html(Object.values(amenityIds).join(', '));
  });
});

