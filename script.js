$(function() {
  $('#location').text(location.href);

  let generateLink = (() => {
    let id = Math.round(Math.random() * (Math.random() * 100));
    return function() {
      id += 1;
      if (id === 86 || id === 97) { id += 1; }
      return `<img src="https://picsum.photos/id/${id}/120/150" />`;
    }
  })();

  Array.prototype.slice.call($('ul.list-items').children()).forEach(li => $(li).html(generateLink()));
});