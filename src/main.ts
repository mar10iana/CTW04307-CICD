import * as core from "@actions/core";
import * as installer from "./installer";
import * as tc from "@actions/tool-cache";
import * as config from "./config";
import * as utils from "./utils";

async function run() {
  try {
    //TODO something is missing here :)
    const version = core.getInput("version") || "latest";
    //TODO something is missing here :)
    const arch = core.getInput("arch") || utils.getArchitecture();
    
    const allCachedVersions = tc.findAllVersions(config.TOOL_NAME);
    console.log(`Versions available in cache: ${allCachedVersions}`);
    if (version) {
      await installer.get(version, arch || utils.getArchitecture());
    }
  } catch (error) {
    core.setFailed((error as Error).message);
  }
}

run();
