function toggleMenu() {
      var menuItems = document.querySelector('.menu-items');
      menuItems.style.display = menuItems.style.display === 'none' ? 'block' : 'none';
    }

    function toggleSubMenu(submenuId) {
      var submenu = document.getElementById(submenuId + '-submenu');
      submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
    }

    function toggleInfoBlock(infoBlockId) {
      var infoBlock = document.getElementById(infoBlockId + '-info');
      infoBlock.style.display = 'block';
    }

    function closeInfoBlock() {
      var infoBlocks = document.querySelectorAll('.info-block');
      for (var i = 0; i < infoBlocks.length; i++) {
        infoBlocks[i].style.display = 'none';
      }
    }