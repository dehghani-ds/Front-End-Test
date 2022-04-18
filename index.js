function buildSidebarMenuRow(menuId,menuTitle,menuBody,menuParent){
        
    var sideBarButton =
     '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'+menuId+'" aria-expanded="false" aria-controls="collapse'+menuId+'">'+
      menuTitle+
     '</button>';

    var h2Buttom =
    '<h2 class="accordion-header" id="heading'+menuId+'">'+sideBarButton+'</h2>';

    var accordingBody = 
    '<div class="accordion-body">'+
      menuBody+
    '</div>';
    var accordingCollapse = '<div id="collapse'+menuId+'" class="accordion-collapse collapse" aria-labelledby="heading'+menuId+'" data-bs-parent="#'+menuParent+'">'+
      accordingBody+
      '</div>';
    
    var accordingItem = '<div class="accordion-item">'+
      h2Buttom+accordingCollapse+
    '</div>';

    return accordingItem;

}
function buildSidebarMenuSectionName(name){
  return '<p class="side-bar-section-name">'+name+'</p>';
}

function buildSidebarSubMenuRow(name){
  var listSubMenu = '<ul class="side-bar-sub-menu">';
    for (let index = 0; index < name.length; index++) {
      listSubMenu+='<li class="side-bar-sub-menu-item">'+name[index]+'</li>';
    }
  listSubMenu+='</ul>';
  return listSubMenu;
}

function buildBodyCard(cardWidth,logoAddress,logoAlt,cardTitle,CardText,buttonText,hrefBottun){
    var buttonCard = '<a href="'+hrefBottun+'" class="btn btn-primary">'+buttonText+'</a>';
    var cardP = '<p class="card-text">'+CardText+'</p>';
    var cardTitleTag = ' <h5 class="card-title">'+cardTitle+'</h5>';
    var cardBody = '<div class="card-body">'+
    cardTitleTag+
    cardP+
    buttonCard+
    '</div>';
    var imageCard = '<img src="'+logoAddress+'" class="card-img-top" alt="'+logoAlt+'">';
    var card = '<div class="card" style="width: '+cardWidth+';">'+
    imageCard+
    cardBody+
    '</div>';
    return card;

}

function makeBody(){
  document.getElementById("accordionExample").innerHTML+= buildSidebarMenuSectionName("section01");
  for (let index = 0; index < 5; index++) {
    document.getElementById("accordionExample").innerHTML+=
              buildSidebarMenuRow(index,
                                  "menu"+index,
                                  buildSidebarSubMenuRow(["sub1","sub2","sub3"]),
                                  "accordionExample");
  }
  document.getElementById("accordionExample").innerHTML+= buildSidebarMenuSectionName("section02");
  for (let index = 0; index < 5; index++) {
    document.getElementById("accordionExample").innerHTML+=
              buildSidebarMenuRow(5+index,
                                  "menu"+(5+index),
                                  buildSidebarSubMenuRow(["reza","refa","farad"]),
                                  "accordionExample");
  }
  for (let i = 0; i < 10; i++) {
    document.getElementById("content").innerHTML+=buildBodyCard("18rem",
                                                                "logo.png",
                                                                "...",
                                                                "title",
                                                                "Some quick example text to build on the card title and make up the bulk of the card's content.",
                                                                "go to google",
                                                                "https://www.google.com");
      
  }
 
  

}

function showSideBar(){
  $("#sideBar")
    .css("display", "block")
    .hide()
    .fadeIn();
}

function closeSidebar(){
  $(".side-bar-vertical")
    .fadeOut("slow");
}



$(window).resize(function() {
  if($(window).width()>1200){
    $("#sideBar")
    .css("display", "block")
    .hide()
    .fadeIn();
  }else{
    $(".side-bar-vertical")
    .css("display", "none");
  };
});