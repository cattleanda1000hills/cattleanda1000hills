export type IAssetGroup = {
  name: string;
  monthlyPayment: number;
  monthPaymentDescription: string;
  onceOffPayment: number;
  onceOffPaymentDescription: string;
  dueDate: Date;
  cycleMonths: number;
};
