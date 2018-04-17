import { Aurelia, Container, FrameworkConfiguration, PLATFORM } from "aurelia-framework";
import { MyService, RouteGenerator } from "services";

export function configure(config: FrameworkConfiguration) {
    const myService: MyService = Container.instance.get(MyService);
    ["myplugin item#111", "myplugin item#222"].forEach((item) => myService.addItem(item));
    console.log("In myplugin, myService Id: " + myService.id);
    console.table(myService.getAllItems());

    const routeGenerator: RouteGenerator = Container.instance.get(RouteGenerator);
    [
        { moduleId: PLATFORM.moduleName("./views/plugin-home"), name: "myPluginHome", route: "myplugin" },
        { moduleId: PLATFORM.moduleName("./views/section-one"), name: "myPluginSectionOne", route: "myplugin/section-one" }
    ].forEach((route) => routeGenerator.addRoute(route));

    console.log("In myplugin, routeGenerator Id: " + routeGenerator.id);
    console.table(routeGenerator.getRoutes());
}