"use client";

import { DollarSign, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";
import { formatCurrency } from "@/lib/data";

type Props = {
  totalIncome: number;
  totalExpense: number;
};

export default function SummaryCards({ totalIncome, totalExpense }: Props) {
  const balance = totalIncome - totalExpense;
  const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpense) / totalIncome) * 100 : 0;

  const cards = [
    {
      title: "Saldo Atual",
      value: formatCurrency(balance),
      icon: DollarSign,
      color: balance >= 0 ? "text-emerald-600" : "text-red-500",
      bg: balance >= 0 ? "bg-emerald-50" : "bg-red-50",
      iconBg: balance >= 0 ? "bg-emerald-100" : "bg-red-100",
    },
    {
      title: "Receitas",
      value: formatCurrency(totalIncome),
      icon: TrendingUp,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
    },
    {
      title: "Despesas",
      value: formatCurrency(totalExpense),
      icon: TrendingDown,
      color: "text-red-500",
      bg: "bg-red-50",
      iconBg: "bg-red-100",
    },
    {
      title: "Taxa de Economia",
      value: `${savingsRate.toFixed(1)}%`,
      icon: PiggyBank,
      color: "text-accent",
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-500">{card.title}</span>
            <div className={`${card.iconBg} p-2 rounded-lg`}>
              <card.icon className={`w-4 h-4 ${card.color}`} />
            </div>
          </div>
          <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
}
