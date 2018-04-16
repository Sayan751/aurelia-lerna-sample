import { Aurelia, Container, FrameworkConfiguration, PLATFORM } from "aurelia-framework";
import { MyService } from "services";

export function configure(config: FrameworkConfiguration) {
    const myService: MyService = Container.instance.get(MyService);
    ["myplugin item#111", "myplugin item#222"].forEach((item) => myService.addItem(item));
    console.log("In myplugin, myService Id: " + myService.id);
    console.table(myService.getAllItems());
}