"use client";

import { Transaction, formatCurrency } from "@/lib/data";

type Props = {
  transactions: Transaction[];
};

const categoryColors: Record<string, string> = {
  Moradia: "bg-blue-500",
  Alimentação: "bg-orange-500",
  Transporte: "bg-yellow-500",
  Saúde: "bg-pink-500",
  Educação: "bg-purple-500",
  Serviços: "bg-cyan-500",
};

export default function CategoryBreakdown({ transactions }: Props) {
  const expenses = transactions.filter((t) => t.type === "expense");
  const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);

  const byCategory: Record<string, number> = {};
  for (const tx of expenses) {
    byCategory[tx.category] = (byCategory[tx.category] || 0) + tx.amount;
  }

  const sorted = Object.entries(byCategory).sort((a, b) => b[1] - a[1]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Despesas por Categoria</h2>
      <div className="space-y-3">
        {sorted.map(([category, amount]) => {
          const percent = totalExpense > 0 ? (amount / totalExpense) * 100 : 0;
          const color = categoryColors[category] || "bg-gray-400";
          return (
            <div key={category}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">{category}</span>
                <span className="text-gray-500">
                  {formatCurrency(amount)} ({percent.toFixed(0)}%)
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`${color} h-2 rounded-full transition-all`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
