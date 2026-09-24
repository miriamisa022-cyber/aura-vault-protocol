import type { Meta, StoryObj } from "@storybook/react-vite";
import { DepositForm } from "../components/DepositForm";
import { HarvestPanel } from "../components/HarvestPanel";
import { Skeleton } from "../components/Skeleton";
import { WithdrawForm } from "../components/WithdrawForm";

const meta = {
  title: "Forms/Vault Forms",
  parameters: { layout: "padded" },
  args: { onToast: () => undefined },
} satisfies Meta<{ onToast: (message: { type: "success" | "error" | "info"; text: string }) => void }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Deposit: Story = { render: (args) => <DepositForm {...args} /> };
export const Withdraw: Story = { render: (args) => <WithdrawForm {...args} /> };
export const Harvest: Story = { render: (args) => <HarvestPanel {...args} /> };

export const HarvestLoadingState: Story = {
  render: () => (
    <section aria-label="Harvest loading state" className="vault-form">
      <h2 className="form-title">Harvest</h2>
      <p className="form-desc">Submitting your keeper harvest request…</p>
      <Skeleton rows={3} />
    </section>
  ),
};

export const DisabledContext: Story = {
  render: () => (
    <fieldset disabled>
      <DepositForm onToast={() => undefined} />
    </fieldset>
  ),
};
