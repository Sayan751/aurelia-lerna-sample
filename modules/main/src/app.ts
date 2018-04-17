import { autoinject } from "aurelia-framework";
import { PLATFORM } from "aurelia-pal";
import { Router, RouterConfiguration } from "aurelia-router";
import { MyService, RouteGenerator } from "services";

@autoinject
export class App {

    constructor(private myService: MyService, private routeGenerator: RouteGenerator) {
        console.log("In App ctor, myService Id: " + myService.id);
        console.table(myService.getAllItems());
    }

    public configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Website";
        config.options.pushState = true;
        config.options.root = "/";
        config.map(this.routeGenerator.getRoutes());

        config.mapUnknownRoutes(() => ({ moduleId: "views/error/error", route: "error" }));
        this.routeGenerator.setRouter(router);
    }
}