angular.module("myApp").run(["$templateCache", function($templateCache) {

  $templateCache.put("/src/modules/services/nav/header-centered/header-centered.html",
    "<div class=\"pure-menu pure-menu-open pure-menu-horizontal {{nav.classes.cont}}\">\r" +
    "\n" +
    "    <a href=\"{{appPath}}/home/home.html\" class=\"pure-menu-heading\"><img src=\"{{appPathImg}}/d4d_smLogo.png\" alt=\"\"></p>\r" +
    "\n" +
    "\t\t</a>\r" +
    "\n" +
    "    <ul ng-repeat='button in nav.buttons.left' class=\"{{button.classes.cont}}\">\r" +
    "\n" +
    "        <li>\r" +
    "\n" +
    "\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t<div ng-if='!button.html' ng-hide='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<a ng-if='button.html' ng-show='button.href' class='{{button.classes.button}}' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\r" +
    "\n" +
    "\t\t\t\t\r" +
    "\n" +
    "\t\t\t\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t\t<!-- navbar Right -->\r" +
    "\n" +
    "\t\t<!-- Login Button -->\r" +
    "\n" +
    "\t\t<!-- Logout Button -->\r" +
    "\n" +
    "\t\t<!-- Signup -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <ul ng-repeat='button in nav.buttons.right' class=\"{{button.classes.cont}}\">\r" +
    "\n" +
    "    \t<li>\r" +
    "\n" +
    "    \t\t<div ng-if='!button.html' ng-hide='button.href' class=\"nav-header-button nav-header-icon-button {{button.classes.button}}\" ng-click='button.click()'>\r" +
    "\n" +
    "    \t\t<a ng-if='button.html' ng-show='button.href' class=\"{{button.classes.button}}\" ng-href='{{button.href}}' ng-bind-html='button.html'></a>\r" +
    "\n" +
    "    \t</li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "<!-- \r" +
    "\n" +
    "<div class=\"row clearfix\">\r" +
    "\n" +
    "\t\t<div class=\"col-md-12 column\">\r" +
    "\n" +
    "\t\t\t<ul class=\"nav nav-pills\">\r" +
    "\n" +
    "\t\t\t\t<li class=\"active\">\r" +
    "\n" +
    "\t\t\t\t\t<a href=\"#\">Home</a>\r" +
    "\n" +
    "\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t<li>\r" +
    "\n" +
    "\t\t\t\t\t<a href=\"#\">Profile</a>\r" +
    "\n" +
    "\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t<li class=\"disabled\">\r" +
    "\n" +
    "\t\t\t\t\t<a href=\"#\">Messages</a>\r" +
    "\n" +
    "\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t<li class=\"dropdown pull-right\">\r" +
    "\n" +
    "\t\t\t\t\t <a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">Dropdown<strong class=\"caret\"></strong></a>\r" +
    "\n" +
    "\t\t\t\t\t<ul class=\"dropdown-menu\">\r" +
    "\n" +
    "\t\t\t\t\t\t<li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<a href=\"#\">Action</a>\r" +
    "\n" +
    "\t\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t\t<li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<a href=\"#\">Another action</a>\r" +
    "\n" +
    "\t\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t\t<li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<a href=\"#\">Something else here</a>\r" +
    "\n" +
    "\t\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t\t<li class=\"divider\">\r" +
    "\n" +
    "\t\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t\t<li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<a href=\"#\">Separated link</a>\r" +
    "\n" +
    "\t\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t</ul>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- <div class='flex1 right nav-header-right-cont'>\r" +
    "\n" +
    "\t\t<div class='flexbox row'>\r" +
    "\n" +
    "\t\t\t<div ng-repeat='button in nav.buttons.right' class='nav-header-right flex1 {{button.classes.cont}}'>\r" +
    "\n" +
    "\t\t\t\t<a ng-if='!button.html' ng-show='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-href = '{{button.href}}'>\r" +
    "\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t\t\t</a>\r" +
    "\n" +
    "\t\t\t\t<div ng-if='!button.html' ng-hide='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\r" +
    "\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<a ng-if='button.html' ng-show='button.href' class='nav-header-button {{button.classes.button}}' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\r" +
    "\n" +
    "\t\t\t\t<div ng-if='button.html' ng-hide='button.href' class='nav-header-button {{button.classes.button}}' ng-click = 'button.click()' ng-bind-html='button.html'></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- <div class='nav-header flexbox row {{nav.classes.cont}}'>\r" +
    "\n" +
    "\t<div class='flex1 left nav-header-left-cont'>\r" +
    "\n" +
    "\t\t<div class='flexbox row'>\r" +
    "\n" +
    "\t\t\t<div ng-repeat='button in nav.buttons.left' class='nav-header-left flex1 {{button.classes.cont}}'>\r" +
    "\n" +
    "\t\t\t\t<a ng-if='!button.html' ng-show='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-href = '{{button.href}}'>\r" +
    "\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t\t\t</a>\r" +
    "\n" +
    "\t\t\t\t<div ng-if='!button.html' ng-hide='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\r" +
    "\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<a ng-if='button.html' ng-show='button.href' class='nav-header-button {{button.classes.button}}' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\r" +
    "\n" +
    "\t\t\t\t<div ng-if='button.html' ng-hide='button.href' class='nav-header-button {{button.classes.button}}' ng-click = 'button.click()' ng-bind-html='button.html'></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<h3 class='flex3 center nav-header-title-cont {{nav.title.classes.cont}}'>\r" +
    "\n" +
    "\t\t<a ng-show='nav.title.href' class='nav-header-title' ng-href = '{{nav.title.href}}' ng-bind-html='nav.title.html'></a>\r" +
    "\n" +
    "\t\t<div ng-hide='nav.title.href' class='nav-header-title' ng-click = 'nav.title.click()' ng-bind-html='nav.title.html'></div>\r" +
    "\n" +
    "\t</h3>\r" +
    "\n" +
    "\t<div class='flex1 right nav-header-right-cont'>\r" +
    "\n" +
    "\t\t<div class='flexbox row'>\r" +
    "\n" +
    "\t\t\t<div ng-repeat='button in nav.buttons.right' class='nav-header-right flex1 {{button.classes.cont}}'>\r" +
    "\n" +
    "\t\t\t\t<a ng-if='!button.html' ng-show='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-href = '{{button.href}}'>\r" +
    "\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t\t\t</a>\r" +
    "\n" +
    "\t\t\t\t<div ng-if='!button.html' ng-hide='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\r" +
    "\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<a ng-if='button.html' ng-show='button.href' class='nav-header-button {{button.classes.button}}' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\r" +
    "\n" +
    "\t\t\t\t<div ng-if='button.html' ng-hide='button.href' class='nav-header-button {{button.classes.button}}' ng-click = 'button.click()' ng-bind-html='button.html'></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div> -->"
  );

  $templateCache.put("/src/modules/services/nav/footer-flex/footer-flex.html",
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- <div class='nav-footer flexbox row {{nav.classes.cont}}'>\r" +
    "\n" +
    "\t<div ng-repeat='button in nav.buttons' class='flex1 nav-footer-button-cont {{button.classes.cont}}'>\r" +
    "\n" +
    "\t\t<a ng-if='!button.html' ng-show='button.href' class='nav-footer-button nav-footer-icon-button {{button.classes.button}}' ng-href = '{{button.href}}'>\r" +
    "\n" +
    "\t\t\t<i class='nav-footer-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t<div class='nav-footer-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t</a>\r" +
    "\n" +
    "\t\t<div ng-if='!button.html' ng-hide='button.href' class='nav-footer-button nav-footer-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\r" +
    "\n" +
    "\t\t\t<i class='nav-footer-icon-button-icon {{button.icon}}'></i>\r" +
    "\n" +
    "\t\t\t<div class='nav-footer-icon-button-text' ng-bind-html='button.iconHtml'></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<a ng-if='button.html' ng-show='button.href' class='nav-footer-button' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\r" +
    "\n" +
    "\t\t<div ng-if='button.html' ng-hide='button.href' class='nav-footer-button' ng-click = 'button.click()' ng-bind-html='button.html'></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div> -->"
  );

  $templateCache.put("/src/modules/pages/header/header.html",
    "<div class='header {{classes.cont}}' ng-controller='HeaderCtrl'>\r" +
    "\n" +
    "\t<div class='header-fixed' ng-include='nav.template'></div>\r" +
    "\n" +
    "\t<div class='header-spacer'>&nbsp;</div>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("/src/modules/pages/footer/footer.html",
    "<div class='footer-fixed {{classes.cont}}' ng-controller='FooterCtrl'>\r" +
    "\n" +
    "\t<div class='footer' ng-include='nav.template'></div>\r" +
    "\n" +
    "\t<div class='footer-spacer'>&nbsp;</div>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("/src/modules/pages/home/home.html",
    "<div class=\"splash-container\">\n" +
    "    <div class=\"splash\">\n" +
    "        <!-- <img src=\"http://placehold.it/350x350\" alt=\"\"> -->\n" +
    "        \n" +
    "        <h1 class=\"splash-head\">Dial4dough</h1>\n" +
    "        <p class=\"splash-subhead\">\n" +
    "            Control of Your Destiny\n" +
    "        </p>\n" +
    "        <p>\n" +
    "            <a href=\"{{staticPath}}\" class=\"pure-button pure-button-primary\">Get Started</a>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"content-wrapper\">\n" +
    "    <div class=\"content\">\n" +
    "        <h2 class=\"content-head is-center\">The Cost of labor Technology.</h2>\n" +
    "\n" +
    "        <div class=\"pure-g\">\n" +
    "            <div class=\"l-box pure-u-1 pure-u-med-1-2 pure-u-lrg-1-4\">\n" +
    "\n" +
    "                <h3 class=\"content-subhead\">\n" +
    "                    <i class=\"fa fa-rocket\"></i>\n" +
    "                    Since you watch advertisments daily, how much of the advertisement money goes back to you.\n" +
    "                </h3>\n" +
    "                <p>\n" +
    "                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"l-box pure-u-1 pure-u-med-1-2 pure-u-lrg-1-4\">\n" +
    "                <h3 class=\"content-subhead\">\n" +
    "                    <i class=\"fa fa-mobile\"></i>\n" +
    "                    Responsive Layouts\n" +
    "                </h3>\n" +
    "                <p>\n" +
    "                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"l-box pure-u-1 pure-u-med-1-2 pure-u-lrg-1-4\">\n" +
    "                <h3 class=\"content-subhead\">\n" +
    "                    <i class=\"fa fa-th-large\"></i>\n" +
    "                    Modular\n" +
    "                </h3>\n" +
    "                <p>\n" +
    "                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"l-box pure-u-1 pure-u-med-1-2 pure-u-lrg-1-4\">\n" +
    "                <h3 class=\"content-subhead\">\n" +
    "                    <i class=\"fa fa-check-square-o\"></i>\n" +
    "                    Plays Nice\n" +
    "                </h3>\n" +
    "                <p>\n" +
    "                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"ribbon l-box-lrg pure-g\">\n" +
    "        <div class=\"l-box-lrg is-center pure-u-1 pure-u-med-1-2 pure-u-lrg-2-5\">\n" +
    "            <img class=\"pure-img-responsive\" alt=\"File Icons\" width=\"300\" src=\"img/common/file-icons.png\">\n" +
    "        </div>\n" +
    "        <div class=\"pure-u-1 pure-u-med-1-2 pure-u-lrg-3-5\">\n" +
    "\n" +
    "            <h2 class=\"content-head content-head-ribbon\">Laboris nisi ut aliquip.</h2>\n" +
    "\n" +
    "            <p>\n" +
    "                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "                consequat. Duis aute irure dolor.\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"content\">\n" +
    "        <h2 class=\"content-head is-center\">Dolore magna aliqua. Uis aute irure.</h2>\n" +
    "\n" +
    "        <div class=\"pure-g\">\n" +
    "            <div class=\"l-box-lrg pure-u-1 pure-u-med-2-5\">\n" +
    "                <form class=\"pure-form pure-form-stacked\">\n" +
    "                    <fieldset>\n" +
    "\n" +
    "                        <label for=\"email\">Your Name</label>\n" +
    "                        <input id=\"email\" type=\"text\" placeholder=\"Your Name\">\n" +
    "\n" +
    "\n" +
    "                        <label for=\"email\">Your Email</label>\n" +
    "                        <input id=\"email\" type=\"email\" placeholder=\"Your Email\">\n" +
    "\n" +
    "                        <label for=\"password\">Your Password</label>\n" +
    "                        <input id=\"password\" type=\"password\" placeholder=\"Your Password\">\n" +
    "\n" +
    "                        <button type=\"submit\" class=\"pure-button\">Sign Up</button>\n" +
    "                    </fieldset>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"l-box-lrg pure-u-1 pure-u-med-3-5\">\n" +
    "                <h4>Contact Us</h4>\n" +
    "                <p>\n" +
    "                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "                    consequat.\n" +
    "                </p>\n" +
    "\n" +
    "                <h4>More Information</h4>\n" +
    "                <p>\n" +
    "                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "                    tempor incididunt ut labore et dolore magna aliqua.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- <div class=\"footer l-box is-center\">\n" +
    "        View the source of this layout to learn more. Made with love by the YUI Team.\n" +
    "    </div> -->\n" +
    "\n" +
    "</div>\n" +
    "\n"
  );

  $templateCache.put("/src/modules/pages/login/login.html",
    "<div ng-controller='LoginCtrl' class='login'>\r" +
    "\n" +
    "\t<div app-login forgot-pass='forgotPass' login='login'></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div data-ng-controller=\"RegisterCtrl\">\r" +
    "\n" +
    "    <div ng-repeat=\"error in registerError\">\r" +
    "\n" +
    "        <div class=\"alert alert-danger animated fadeIn\">{{error.msg}}</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"alert alert-danger animated fadeIn\" ng-show=\"usernameError\">{{usernameError}}</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h1>Register</h1>\r" +
    "\n" +
    "    <form ng-submit=\"register()\" class=\"signup form-horizontal\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"name\" class=\"col-md-4 control-label\">Full Name</label>\r" +
    "\n" +
    "            <div class=\"col-md-8\">\r" +
    "\n" +
    "                <input id=\"name\" type=\"text\" name=\"name\" placeholder=\"Full name\" class=\"form-control\" ng-model=\"user.name\"/>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"email\" class=\"col-md-4 control-label\">Email</label>\r" +
    "\n" +
    "            <div class=\"col-md-8\">\r" +
    "\n" +
    "                <input id=\"email\" type=\"email\" name=\"email\" placeholder=\"Email\" class=\"form-control\" ng-model=\"user.email\"/>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"username\" class=\"col-md-4 control-label\">Username</label>\r" +
    "\n" +
    "            <div class=\"col-md-8\">\r" +
    "\n" +
    "                <input id=\"username\" type=\"text\" name=\"username\" placeholder=\"Username\" class=\"form-control\" ng-model=\"user.username\"/>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"password\" class=\"col-md-4 control-label\">Password</label>\r" +
    "\n" +
    "            <div class=\"col-md-8\">\r" +
    "\n" +
    "                <input id=\"password\" type=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" ng-model=\"user.password\"/>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"confirmPassword\" class=\"col-md-4 control-label\">Repeat Password</label>\r" +
    "\n" +
    "            <div class=\"col-md-8\">\r" +
    "\n" +
    "                <input id=\"confirmPassword\" type=\"password\" name=\"confirmPassword\" placeholder=\"Password\" class=\"form-control\" ng-model=\"user.confirmPassword\"/>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <div class=\"col-md-offset-4 col-md-8\">\r" +
    "\n" +
    "                <button type=\"submit\" class=\"btn btn-primary\">Sign up</button>&nbsp;\r" +
    "\n" +
    "                or&nbsp;<a ui-sref='auth.login' class=\"show-login\">login</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("/src/modules/pages/signup/signup.html",
    "<div ng-controller='SignupCtrl' class='signup'>\r" +
    "\n" +
    "\t<div app-signup signup='signup'></div>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("/src/modules/pages/passwordReset/password-reset.html",
    "<div class='password-reset center center-margin padding' ng-controller='PasswordResetCtrl'>\r" +
    "\n" +
    "<div class='text-center'>\r" +
    "\n" +
    "\tCheck your email for your reset code and enter it below!<br />\r" +
    "\n" +
    "\tIt may take a few minutes to arrive and make sure to check your SPAM folder :(\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<form class='jrg-forminput-form' name='passResetForm' ng-submit='submitForm()'>\r" +
    "\n" +
    "\t<div class='input-group no-label'>\r" +
    "\n" +
    "\t\t<div jrg-forminput no-label='1' placeholder='Email' ng-model='formVals.email' opts='' required></div>\r" +
    "\n" +
    "\t\t<div jrg-forminput no-label='1' placeholder='Reset Key' ng-model='formVals.password_reset_key' opts='' required></div>\r" +
    "\n" +
    "\t\t<div jrg-forminput no-label='1' type='password' placeholder='New Password (6+ characters)' ng-model='formVals.password' opts='' required ng-minlength='6'></div>\r" +
    "\n" +
    "\t\t<div jrg-forminput no-label='1' type='password' placeholder='Confirm Password' ng-model='formVals.password_confirm' opts='' required></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<button class='btn btn-primary btn-block jrg-forminput-submit' type='submit' >Update Password</button>\r" +
    "\n" +
    "\t<div class='text-info'>{{msgNotify}}</div>\r" +
    "\n" +
    "</form>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("/src/modules/pages/logout/logout.html",
    "<div class='logout' ng-controller='LogoutCtrl'>\r" +
    "\n" +
    "Logging out..\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("/src/modules/pages/userDelete/user-delete.html",
    "<div ng-controller='UserDeleteCtrl'>\r" +
    "\n" +
    "Deleting user.. This cannot be undone and all data will be removed!\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("/src/modules/pages/callback/callback-twitter-auth/callback-twitter-auth.html",
    "<div ng-controller='CallbackTwitterAuthCtrl'>\r" +
    "\n" +
    "\tLoading..\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("/src/modules/pages/callback/callback-facebook-auth/callback-facebook-auth.html",
    "<div ng-controller='CallbackFacebookAuthCtrl'>\r" +
    "\n" +
    "\tLoading..\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("/src/modules/pages/dev-test/test/test.html",
    "<div class='test' ng-controller='TestCtrl'>\r" +
    "\n" +
    "\tTest\r" +
    "\n" +
    "\t<br /><br />\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<!--<div hm-tap='tapIt($event, {})' hm-swipeleft='swipeIt($event, \"left\", {})' hm-swiperight='swipeIt($event, \"right\", {})' hm-options='{swipe_velocity: 0.1}' style='min-height:100px;'>-->\r" +
    "\n" +
    "\t<div ng-click='tapIt($event, {})' ng-swipe-left='swipeIt($event, \"left\", {})' ng-swipe-right='swipeIt($event, \"right\", {})' style='min-height:100px;'>\r" +
    "\n" +
    "\t\t{{user}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("/src/modules/pages/dev-test/socketio/socketio.html",
    "<div ng-controller='SocketioCtrl'>\r" +
    "\n" +
    "\tsocketio (chat) demo\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\tTry opening up a second browser (tab/window) and talking to yourself!\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\tAdd new message:\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t<input type='text' ng-model='formVals.socketMsg' placeholder='new message here' />\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t<button class='btn' ng-click='addMessage({})'>Add It!</button>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t<div ng-repeat='data in socketData'>{{data.msg}}</div>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("/src/modules/pages/pricing/pricing.html",
    "<div class='pricing  ' ng-controller='HomeCtrl'>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"banner\">\r" +
    "\n" +
    "    <h1 class=\"banner-head\">\r" +
    "\n" +
    "        Dial4dough<br>\r" +
    "\n" +
    "        Take Control of Your Destiny.\r" +
    "\n" +
    "    </h1>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"l-content\">\r" +
    "\n" +
    "    <div class=\"pricing-tables pure-g\">\r" +
    "\n" +
    "        <div class=\"pure-u-1 pure-u-med-1-3\">\r" +
    "\n" +
    "            <div class=\"pricing-table pricing-table-free\">\r" +
    "\n" +
    "                <div class=\"pricing-table-header\">\r" +
    "\n" +
    "                    <h2>Platinum Member</h2>\r" +
    "\n" +
    "                        <br>\r" +
    "\n" +
    "                    <span class=\"pricing-table-price\">\r" +
    "\n" +
    "                        $50 <span>Year Membership</span>\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <ul class=\"pricing-table-list\">\r" +
    "\n" +
    "                    <li>Free setup</li>\r" +
    "\n" +
    "                    <li>Custom sub-domain</li>\r" +
    "\n" +
    "                    <li>Standard customer support</li>\r" +
    "\n" +
    "                    <li>1GB file storage</li>\r" +
    "\n" +
    "                    <li>1 database</li>\r" +
    "\n" +
    "                    <li>Unlimited bandwidth</li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <button  ng-click='platimum()' class=\"button-choose pure-button\">Choose</button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"pure-u-1 pure-u-med-1-3\">\r" +
    "\n" +
    "            <div class=\"pricing-table pricing-table-biz pricing-table-selected\">\r" +
    "\n" +
    "                <div class=\"pricing-table-header\">\r" +
    "\n" +
    "                    <h2>Gold Member</h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <span class=\"pricing-table-price\">\r" +
    "\n" +
    "                        $10 <span>Monthly Membership</span>\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <ul class=\"pricing-table-list\">\r" +
    "\n" +
    "                    <li>Free setup</li>\r" +
    "\n" +
    "                    <li>Use your own domain</li>\r" +
    "\n" +
    "                    <li>Standard customer support</li>\r" +
    "\n" +
    "                    <li>10GB file storage</li>\r" +
    "\n" +
    "                    <li>5 databases</li>\r" +
    "\n" +
    "                    <li>Unlimited bandwidth</li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <button class=\"button-choose pure-button\">Choose</button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"pure-u-1 pure-u-med-1-3\">\r" +
    "\n" +
    "            <div class=\"pricing-table pricing-table-enterprise\">\r" +
    "\n" +
    "                <div class=\"pricing-table-header\">\r" +
    "\n" +
    "                    <h2>Bronze</h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <span class=\"pricing-table-price\">\r" +
    "\n" +
    "                        Free <span>Life Time</span>\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <ul class=\"pricing-table-list\">\r" +
    "\n" +
    "                    <li>Free setup</li>\r" +
    "\n" +
    "                    <li>Use your own domain</li>\r" +
    "\n" +
    "                    <li>Premium customer support</li>\r" +
    "\n" +
    "                    <li>Unlimited file storage</li>\r" +
    "\n" +
    "                    <li>25 databases</li>\r" +
    "\n" +
    "                    <li>Unlimited bandwidth</li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <button class=\"button-choose pure-button\">Choose</button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div> <!-- end pricing-tables -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"information pure-g\">\r" +
    "\n" +
    "        <div class=\"pure-u-1 pure-u-med-1-2\">\r" +
    "\n" +
    "            <div class=\"l-box\">\r" +
    "\n" +
    "                <h3 class=\"information-head\">Get started today</h3>\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"pure-u-1 pure-u-med-1-2\">\r" +
    "\n" +
    "            <div class=\"l-box\">\r" +
    "\n" +
    "                <h3 class=\"information-head\">Pay monthly or annually</h3>\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo\r" +
    "\n" +
    "                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"pure-u-1 pure-u-med-1-2\">\r" +
    "\n" +
    "            <div class=\"l-box\">\r" +
    "\n" +
    "                <h3 class=\"information-head\">24/7 customer support</h3>\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"pure-u-1 pure-u-med-1-2\">\r" +
    "\n" +
    "            <div class=\"l-box\">\r" +
    "\n" +
    "                <h3 class=\"information-head\">Cancel your plan anytime</h3>\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    Duis aute irure dolor in reprehenderit in voluptate velit esse\r" +
    "\n" +
    "                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div> <!-- end information -->\r" +
    "\n" +
    "</div> <!-- end l-content -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"footer l-box\">\r" +
    "\n" +
    "    <p>\r" +
    "\n" +
    "        <a href=\"#\">Try now</a> for 14 days. No credit card required. Header image courtesy of <a href='http://unsplash.com/'>Unsplash</a>.\r" +
    "\n" +
    "    </p>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("/src/modules/pages/dialpad/dialpad.html",
    "<div ng-controller='DialpadCtrl'>\r" +
    "\n" +
    "\tdialpad\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div class=\"container\">\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<div class=\"row clearfix\">\r" +
    "\n" +
    "\t\t<div class=\"col-md-2 column\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"col-md-6 column\">\r" +
    "\n" +
    "\t\t\t<div class=\"carousel slide\" id=\"carousel-651403\">\r" +
    "\n" +
    "\t\t\t\t<ol class=\"carousel-indicators\">\r" +
    "\n" +
    "\t\t\t\t\t<li class=\"active\" data-slide-to=\"0\" data-target=\"#carousel-651403\">\r" +
    "\n" +
    "\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t<li data-slide-to=\"1\" data-target=\"#carousel-651403\">\r" +
    "\n" +
    "\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t<li data-slide-to=\"2\" data-target=\"#carousel-651403\">\r" +
    "\n" +
    "\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t</ol>\r" +
    "\n" +
    "\t\t\t\t<div class=\"carousel-inner\">\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"item active\">\r" +
    "\n" +
    "\t\t\t\t\t\t<img alt=\"\" src=\"http://lorempixel.com/1600/500/sports/1\" />\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"carousel-caption\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<h4>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\tFirst Thumbnail label\r" +
    "\n" +
    "\t\t\t\t\t\t\t</h4>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<p>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\tCras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\r" +
    "\n" +
    "\t\t\t\t\t\t\t</p>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"item\">\r" +
    "\n" +
    "\t\t\t\t\t\t<img alt=\"\" src=\"http://lorempixel.com/1600/500/sports/2\" />\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"carousel-caption\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<h4>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\tSecond Thumbnail label\r" +
    "\n" +
    "\t\t\t\t\t\t\t</h4>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<p>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\tCras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\r" +
    "\n" +
    "\t\t\t\t\t\t\t</p>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"item\">\r" +
    "\n" +
    "\t\t\t\t\t\t<img alt=\"\" src=\"http://lorempixel.com/1600/500/sports/3\" />\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"carousel-caption\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<h4>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\tThird Thumbnail label\r" +
    "\n" +
    "\t\t\t\t\t\t\t</h4>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<p>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\tCras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\r" +
    "\n" +
    "\t\t\t\t\t\t\t</p>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t</div> <a class=\"left carousel-control\" href=\"#carousel-651403\" data-slide=\"prev\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a> <a class=\"right carousel-control\" href=\"#carousel-651403\" data-slide=\"next\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<table class=\"table table-condensed table-hover\">\r" +
    "\n" +
    "\t\t\t\t<thead>\r" +
    "\n" +
    "\t\t\t\t\t<tr>\r" +
    "\n" +
    "\t\t\t\t\t\t<th>\r" +
    "\n" +
    "\t\t\t\t\t\t\t#\r" +
    "\n" +
    "\t\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t\t<th>\r" +
    "\n" +
    "\t\t\t\t\t\t\tAdvertiser\r" +
    "\n" +
    "\t\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t\t<th>\r" +
    "\n" +
    "\t\t\t\t\t\t\tPayment Taken\r" +
    "\n" +
    "\t\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t\t<th>\r" +
    "\n" +
    "\t\t\t\t\t\t\tType\r" +
    "\n" +
    "\t\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t</tr>\r" +
    "\n" +
    "\t\t\t\t</thead>\r" +
    "\n" +
    "\t\t\t\t<tbody>\r" +
    "\n" +
    "\t\t\t\t\t<tr>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\t1\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<a id=\"modal-895491\" href=\"http://www.layoutit.com/build#modal-container-895491\" role=\"button\" class=\"btn\" data-toggle=\"modal\">Launch demo modal</a>\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\tlisten - Link\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\tPhone: audio\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t</tr>\r" +
    "\n" +
    "\t\t\t\t\t<tr class=\"active\">\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\t1\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\tSales Company2\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\t01/04/2012\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\tPhone: Live\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t</tr>\r" +
    "\n" +
    "\t\t\t\t\t<tr class=\"success\">\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\t2\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\tMarketing Company\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\t02/04/2012\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\tPresentation\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t</tr>\r" +
    "\n" +
    "\t\t\t\t\t<tr class=\"warning\">\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\t3\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\tHealth Food\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\t03/04/2012\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\tVideo\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t</tr>\r" +
    "\n" +
    "\t\t\t\t\t<tr class=\"danger\">\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\t4\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\tGreen Products\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\t04/04/2012\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t\t<td>\r" +
    "\n" +
    "\t\t\t\t\t\t\tVideo: Live(Room)\r" +
    "\n" +
    "\t\t\t\t\t\t</td>\r" +
    "\n" +
    "\t\t\t\t\t</tr>\r" +
    "\n" +
    "\t\t\t\t</tbody>\r" +
    "\n" +
    "\t\t\t</table>\r" +
    "\n" +
    "\t\t\t <a id=\"modal-895491\" href=\"#modal-container-895491\" role=\"button\" class=\"btn\" data-toggle=\"modal\">Launch demo modal</a>\r" +
    "\n" +
    "\t\t\t\r" +
    "\n" +
    "\t\t\t<div class=\"modal fade\" id=\"modal-container-895491\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"modal-dialog\">\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"modal-content\">\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"modal-header\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<h4 class=\"modal-title\" id=\"myModalLabel\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\tAd.title\r" +
    "\n" +
    "\t\t\t\t\t\t\t</h4>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"modal-body\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t- Ad.location<br />ad.rating (Stars)<br />ad.reviews<br />ad.type(video/adDial)<br />ad.image<br />\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"modal-footer\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button> <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"col-md-4 column\">\r" +
    "\n" +
    "\t\t\t<img alt=\"140x140\" src=\"http://lorempixel.com/140/140/\" />\r" +
    "\n" +
    "\t\t\t<div class=\"panel panel-success\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"panel-heading\">\r" +
    "\n" +
    "\t\t\t\t\t<h3 class=\"panel-title\">\r" +
    "\n" +
    "\t\t\t\t\t\tUser.picture\r" +
    "\n" +
    "\t\t\t\t\t</h3>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<div class=\"panel-body\">\r" +
    "\n" +
    "\t\t\t\t\tUser.Stats<br />stats.payoutDue<br />stats.awardpoints<br />stats.timeIn<br /><br />\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<div class=\"panel-footer\">\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>"
  );

}]);
