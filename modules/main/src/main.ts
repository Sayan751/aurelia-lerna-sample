import { Aurelia, Container, PLATFORM } from "aurelia-framework";
import "bootstrap";
import { MyService, RouteGenerator } from "services";
import "../styles/app.scss";

export async function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        ;

    const myService: MyService = Container.instance.get(MyService);
    ["root item#1", "root item#2"].forEach((item) => myService.addItem(item));
    console.log("In main, myService Id: " + myService.id);
    console.table(myService.getAllItems());

    const routeGenerator: RouteGenerator = Container.instance.get(RouteGenerator);
    [
        { moduleId: "views/home/home", name: "home", route: ["", "home"], },
        { moduleId: "views/error/error", name: "error", route: "error/:id" }
    ].map((route) => routeGenerator.addRoute(route));
    console.log("In main, routeGenerator Id: " + routeGenerator.id);
    console.table(routeGenerator.getRoutes());

    aurelia.use.plugin(PLATFORM.moduleName("myplugin"));

    await aurelia.start()
        .then(() => aurelia.setRoot(PLATFORM.moduleName("app")));
}