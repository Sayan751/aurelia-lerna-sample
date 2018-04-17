import fontawesome from "@fortawesome/fontawesome";
import { faLanguage } from "@fortawesome/fontawesome-free-solid";
import { autoinject } from "aurelia-framework";
import { Router } from "aurelia-router";
import { RouteGenerator } from "services";
// tslint:disable-next-line:no-var-requires
const styles = require("./nav-bar.css");

fontawesome.library.add(faLanguage);

@autoinject
export class NavBarCustomElement {
  public styles = styles;
  public navs = require("../../../config/navigation.json").Navbar;
  constructor(public routeGenerator: RouteGenerator) { }
  public switchLanguage(locale: string) {
    // TODO:
  }

}
