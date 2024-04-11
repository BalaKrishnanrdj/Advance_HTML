
  function changeText() {
    var heading = document.getElementById("myHeading");
    heading.textContent += " Balakrishnan";
    alert('Congratulations, you ' + heading.textContent);
    // console.log(heading.textContent);
  }

  // Array
  var arrayValues = ['Bala', 'Krishnan', 'Zoho'];
  const list = document.getElementById("list");
  for (let i = 0; i < arrayValues.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = arrayValues[i];
    list.appendChild(listItem);
  }
  $(document).ready(function() {

  $('.myDiv').click(function() {
    $(this).css('color', 'red');
  });
  // Traversing & Chaining Methods

  $('h4').not('.type, .collection').css({
                                          'color': 'cornflowerblue',
                                          'padding': '0px',
                                          'margin': '5px'
                                        }).parent().css({'border': '2px solid red','margin':'5px'});

 
});
