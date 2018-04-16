import fontawesome from "@fortawesome/fontawesome";
import { faLanguage } from "@fortawesome/fontawesome-free-solid";
import { autoinject } from "aurelia-framework";
import { Router } from "aurelia-router";
// tslint:disable-next-line:no-var-requires
const styles = require("./nav-bar.css");

fontawesome.library.add(faLanguage);

@autoinject
export class NavBarCustomElement {
  public styles = styles;
  public navs = require("../../../config/navigation.json").Navbar;
  constructor(public router: Router) { }
  public switchLanguage(locale: string) {
    // TODO:
  }

}
