import { complianceTests } from "@konceiver/monolog-test-suite";
import { PinoLogger } from "../src";

complianceTests(new PinoLogger());
