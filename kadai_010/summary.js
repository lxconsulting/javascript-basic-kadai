$(function() {
// 色が変わる（色は任意）
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  });

// 文字が切り替わる（内容は任意）
  $('#change-text').on('click', function() {
    $('#target').text('Hello!');
  });

// フェードアウトで文字が消える
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

// フェードインで文字が現れる
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
})