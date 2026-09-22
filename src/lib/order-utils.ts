export type PricedLine = {
  unitPrice: number;
  quantity: number;
};

export function calculateSubtotal(lines: PricedLine[]) {
  return lines.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0);
}

export function calculateAov(totalRevenue: number, orderCount: number) {
  return orderCount > 0 ? Math.round(totalRevenue / orderCount) : 0;
}

export function calculateRate(part: number, total: number) {
  return total > 0 ? Math.round((part / total) * 100) : 0;
}
