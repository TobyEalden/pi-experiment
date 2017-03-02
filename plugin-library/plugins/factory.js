import pluginList from "./plugin-db";

const factory = function(name) {
  let plugin;

  switch (name) {
    case "AcmeInc":
      plugin = pluginList[name].component;
      break;
    default:
      console.log("Unknown plugin %s", name);
      break;
  }

  return plugin;
};

export {factory};
