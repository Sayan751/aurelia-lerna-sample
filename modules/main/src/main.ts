import { Aurelia, Container, PLATFORM } from "aurelia-framework";
import "bootstrap";
import { MyService } from "services";
import "../styles/app.scss";

export async function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        // .developmentLogging()
        ;

    const myService: MyService = Container.instance.get(MyService);
    ["root item#1", "root item#2"].forEach((item) => myService.addItem(item));
    console.log("In main, myService Id: " + myService.id);
    console.table(myService.getAllItems());

    aurelia.use.plugin(PLATFORM.moduleName("myplugin"));

    await aurelia.start()
        .then(() => aurelia.setRoot(PLATFORM.moduleName("app")));
}