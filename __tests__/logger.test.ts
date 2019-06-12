import { complianceTests } from "@logks/test-suite";
import { PinoLogger } from "../src";

complianceTests(new PinoLogger());
