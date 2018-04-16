import { autoinject } from "aurelia-framework";
import { PLATFORM } from "aurelia-pal";
import { Router, RouterConfiguration } from "aurelia-router";
import { MyService } from "services";

@autoinject
export class App {

    constructor(private myService: MyService) {
        console.log("In App ctor, myService Id: " + myService.id);
        console.table(myService.getAllItems());
    }

    public configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Website";
        config.options.pushState = true;
        config.options.root = "/";

        config.map(
            [
                { moduleId: "views/home/home", name: "home", route: ["", "home"], },
                { moduleId: "views/error/error", name: "error", route: "error/:id" }
            ]
        );

        config.mapUnknownRoutes(() => ({ moduleId: "views/error/error", route: "error" }));
    }
}