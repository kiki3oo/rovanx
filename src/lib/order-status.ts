import { OrderStatus } from "@prisma/client";

export const orderStatusLabels: Record<OrderStatus, string> = {
  NEW: "New",
  UPSOLD: "Upsell added",
  SENT_TO_FULFILLMENT: "Sent to fulfillment",
  CONTACTING: "Contacting customer",
  CONFIRMED: "Confirmed",
  CANCELLED: "Cancelled",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  RETURNED: "Returned"
};

export const orderStatusClassNames: Record<OrderStatus, string> = {
  NEW: "bg-blue-50 text-blue-800 ring-blue-100",
  UPSOLD: "bg-violet-50 text-violet-800 ring-violet-100",
  SENT_TO_FULFILLMENT: "bg-amber-50 text-amber-800 ring-amber-100",
  CONTACTING: "bg-orange-50 text-orange-800 ring-orange-100",
  CONFIRMED: "bg-emerald-50 text-emerald-800 ring-emerald-100",
  CANCELLED: "bg-red-50 text-red-800 ring-red-100",
  SHIPPED: "bg-cyan-50 text-cyan-800 ring-cyan-100",
  DELIVERED: "bg-green-50 text-green-800 ring-green-100",
  RETURNED: "bg-stone-100 text-stone-800 ring-stone-200"
};

export function getOrderStatusLabel(status: OrderStatus) {
  return orderStatusLabels[status] || status;
}

export function getOrderStatusClassName(status: OrderStatus) {
  return orderStatusClassNames[status] || "bg-stone-100 text-stone-800 ring-stone-200";
}
