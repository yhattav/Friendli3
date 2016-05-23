/*$(document).ready(function () {

  if (document.location.href.indexOf('email') < 0 && document.location.pathname != '/') {
    document.location.href = '/';
  }*/

  $('#createFriend').submit(function (e) {
    e.preventDefault();
    $.ajax({
      url: '/friends/create',
      type: 'post',
      data: $(this).serialize(),
      success: function () {
        document.location.reload();
      }
    });
  });

  $('.deleteFriend').click(function (e) {
    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      type: 'delete',
      data: $(this).serialize(),
      success: function () {
        document.location.reload();
      }
    });
  });

  $('#updateFriend').submit(function (e) {
    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      type: 'put',
      data: $(this).serialize(),
      success: function () {
        document.location.reload();
      }
    });
  }); 
// });

function md5(text) {

}