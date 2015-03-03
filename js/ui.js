(function (window, document) {

    var navMenu   = document.getElementById('navMenu'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function (el) {
        var active = 'active';

        el.preventDefault();
        toggleClass(navMenu, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };

}(this, this.document));
