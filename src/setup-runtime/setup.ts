import type { OnboardOptions } from "../internal-commands/onboard-types.js";
import type { RuntimeEnv } from "../runtime.js";
import { WizardCancelledError, type WizardPrompter } from "./prompts.js";

export async function runSetupWizard(
  _opts: OnboardOptions,
  _runtime: RuntimeEnv,
  prompter: WizardPrompter,
): Promise<void> {
  await prompter.note(
    "Terminal onboarding is unsupported in this SaaS fork. Use the web admin setup flow instead.",
    "Unsupported",
  );
  throw new WizardCancelledError("setup wizard unsupported");
}
