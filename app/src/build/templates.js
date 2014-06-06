angular.module("myApp").run(["$templateCache", function($templateCache) {

  $templateCache.put("/src/modules/services/nav/header-centered/header-centered.html",
    "<div class=\"pure-menu pure-menu-open pure-menu-horizontal  {{nav.classes.cont}}\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <a href=\"{{staticPath}}\" class=\"pure-menu-heading\"><img src=\"{{appPathImg}}/d4d_smLogo.png\" alt=\"\"></p>\n" +
    "\t\t</a>\n" +
    "    <ul  ng-repeat='button in nav.buttons.left' class=\"{{button.classes.cont}}\">\n" +
    "        <li>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t<div ng-if='!button.html' ng-hide='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t<a ng-if='button.html' ng-show='button.href' class='{{button.classes.button}}' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\n" +
    "\t\t</li></ul>\n" +
    "\t\t<!-- navbar Right -->\n" +
    "\t\t<!-- Login Button -->\n" +
    "\t\t<!-- Logout Button -->\n" +
    "\t\t<!-- Signup -->\n" +
    "\t\n" +
    "\t\t\t<ul ng-repeat='button in nav.buttons.right' class='nav-header-right right pure-menu-horizontal  {{button.classes.cont}}'>\n" +
    "\t\t\t\t<a ng-if='!button.html' ng-show='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-href = '{{button.href}}'>\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\n" +
    "\t\t\t\t</a>\n" +
    "\t\t\t\t<li ng-if='!button.html' ng-hide='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\n" +
    "\t\t\t\t</li>\n" +
    "\t\t\t\t<a ng-if='button.html' ng-show='button.href' class='nav-header-right {{button.classes.button}}' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\n" +
    "\t\t\t\t<!-- <div ng-if='button.html' ng-hide='button.href' class='nav-header-button {{button.classes.button}}' ng-click = 'button.click()' ng-bind-html='button.html'></div> -->\n" +
    "\t\t\t</ul>\n" +
    "\n" +
    "\t\t\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<!-- \n" +
    "<div class=\"row clearfix\">\n" +
    "\t\t<div class=\"col-md-12 column\">\n" +
    "\t\t\t<ul class=\"nav nav-pills\">\n" +
    "\t\t\t\t<li class=\"active\">\n" +
    "\t\t\t\t\t<a href=\"#\">Home</a>\n" +
    "\t\t\t\t</li>\n" +
    "\t\t\t\t<li>\n" +
    "\t\t\t\t\t<a href=\"#\">Profile</a>\n" +
    "\t\t\t\t</li>\n" +
    "\t\t\t\t<li class=\"disabled\">\n" +
    "\t\t\t\t\t<a href=\"#\">Messages</a>\n" +
    "\t\t\t\t</li>\n" +
    "\t\t\t\t<li class=\"dropdown pull-right\">\n" +
    "\t\t\t\t\t <a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">Dropdown<strong class=\"caret\"></strong></a>\n" +
    "\t\t\t\t\t<ul class=\"dropdown-menu\">\n" +
    "\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t<a href=\"#\">Action</a>\n" +
    "\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t<a href=\"#\">Another action</a>\n" +
    "\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t<a href=\"#\">Something else here</a>\n" +
    "\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t<li class=\"divider\">\n" +
    "\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t<a href=\"#\">Separated link</a>\n" +
    "\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t</ul>\n" +
    "\t\t\t\t</li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</div>\n" +
    "\t</div> -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- <div class='flex1 right nav-header-right-cont'>\n" +
    "\t\t<div class='flexbox row'>\n" +
    "\t\t\t<div ng-repeat='button in nav.buttons.right' class='nav-header-right flex1 {{button.classes.cont}}'>\n" +
    "\t\t\t\t<a ng-if='!button.html' ng-show='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-href = '{{button.href}}'>\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\n" +
    "\t\t\t\t</a>\n" +
    "\t\t\t\t<div ng-if='!button.html' ng-hide='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<a ng-if='button.html' ng-show='button.href' class='nav-header-button {{button.classes.button}}' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\n" +
    "\t\t\t\t<div ng-if='button.html' ng-hide='button.href' class='nav-header-button {{button.classes.button}}' ng-click = 'button.click()' ng-bind-html='button.html'></div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "</div> -->\n" +
    "\n" +
    "<!-- <div class='nav-header flexbox row {{nav.classes.cont}}'>\n" +
    "\t<div class='flex1 left nav-header-left-cont'>\n" +
    "\t\t<div class='flexbox row'>\n" +
    "\t\t\t<div ng-repeat='button in nav.buttons.left' class='nav-header-left flex1 {{button.classes.cont}}'>\n" +
    "\t\t\t\t<a ng-if='!button.html' ng-show='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-href = '{{button.href}}'>\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\n" +
    "\t\t\t\t</a>\n" +
    "\t\t\t\t<div ng-if='!button.html' ng-hide='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<a ng-if='button.html' ng-show='button.href' class='nav-header-button {{button.classes.button}}' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\n" +
    "\t\t\t\t<div ng-if='button.html' ng-hide='button.href' class='nav-header-button {{button.classes.button}}' ng-click = 'button.click()' ng-bind-html='button.html'></div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<h3 class='flex3 center nav-header-title-cont {{nav.title.classes.cont}}'>\n" +
    "\t\t<a ng-show='nav.title.href' class='nav-header-title' ng-href = '{{nav.title.href}}' ng-bind-html='nav.title.html'></a>\n" +
    "\t\t<div ng-hide='nav.title.href' class='nav-header-title' ng-click = 'nav.title.click()' ng-bind-html='nav.title.html'></div>\n" +
    "\t</h3>\n" +
    "\t<div class='flex1 right nav-header-right-cont'>\n" +
    "\t\t<div class='flexbox row'>\n" +
    "\t\t\t<div ng-repeat='button in nav.buttons.right' class='nav-header-right flex1 {{button.classes.cont}}'>\n" +
    "\t\t\t\t<a ng-if='!button.html' ng-show='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-href = '{{button.href}}'>\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\n" +
    "\t\t\t\t</a>\n" +
    "\t\t\t\t<div ng-if='!button.html' ng-hide='button.href' class='nav-header-button nav-header-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\n" +
    "\t\t\t\t\t<i class='nav-header-icon-button-icon {{button.icon}}'></i>\n" +
    "\t\t\t\t\t<div class='nav-header-icon-button-text' ng-bind-html='button.iconHtml'></div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<a ng-if='button.html' ng-show='button.href' class='nav-header-button {{button.classes.button}}' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\n" +
    "\t\t\t\t<div ng-if='button.html' ng-hide='button.href' class='nav-header-button {{button.classes.button}}' ng-click = 'button.click()' ng-bind-html='button.html'></div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div> -->"
  );

  $templateCache.put("/src/modules/services/nav/footer-flex/footer-flex.html",
    "\n" +
    "\n" +
    "<!-- <div class='nav-footer flexbox row {{nav.classes.cont}}'>\n" +
    "\t<div ng-repeat='button in nav.buttons' class='flex1 nav-footer-button-cont {{button.classes.cont}}'>\n" +
    "\t\t<a ng-if='!button.html' ng-show='button.href' class='nav-footer-button nav-footer-icon-button {{button.classes.button}}' ng-href = '{{button.href}}'>\n" +
    "\t\t\t<i class='nav-footer-icon-button-icon {{button.icon}}'></i>\n" +
    "\t\t\t<div class='nav-footer-icon-button-text' ng-bind-html='button.iconHtml'></div>\n" +
    "\t\t</a>\n" +
    "\t\t<div ng-if='!button.html' ng-hide='button.href' class='nav-footer-button nav-footer-icon-button {{button.classes.button}}' ng-click = 'button.click()'>\n" +
    "\t\t\t<i class='nav-footer-icon-button-icon {{button.icon}}'></i>\n" +
    "\t\t\t<div class='nav-footer-icon-button-text' ng-bind-html='button.iconHtml'></div>\n" +
    "\t\t</div>\n" +
    "\t\t<a ng-if='button.html' ng-show='button.href' class='nav-footer-button' ng-href = '{{button.href}}' ng-bind-html='button.html'></a>\n" +
    "\t\t<div ng-if='button.html' ng-hide='button.href' class='nav-footer-button' ng-click = 'button.click()' ng-bind-html='button.html'></div>\n" +
    "\t</div>\n" +
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
    "<div class='footer-fixed {{classes.cont}}' ng-controller='FooterCtrl'>\n" +
    "\t<div class='footer' ng-include='nav.template'></div>\n" +
    "\t<div class='footer-spacer'>&nbsp;</div>\n" +
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
    "<div ng-controller='LoginCtrl' class='login'>\n" +
    "<br>\n" +
    "<div class=\"img-center\">\n" +
    "\t<img src=\"{{appPathImg}}//or_logo.png\" alt=\"\">\n" +
    "</div>\n" +
    "\t<div app-login forgot-pass='forgotPass' login='login'></div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n"
  );

  $templateCache.put("/src/modules/pages/signup/signup.html",
    "<div ng-controller='SignupCtrl' class='signup'>\n" +
    "<br>\n" +
    "<div class=\"img-center\">\n" +
    "\t<img src=\"{{appPathImg}}//or_logo.png\" alt=\"logo\">\n" +
    "</div>\n" +
    "\n" +
    "\t<div app-signup signup='signup'></div>\n" +
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
    "\t\r" +
    "\n" +
    "</div>"
  );

}]);
