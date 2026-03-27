"use client";

import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { Transaction, formatCurrency } from "@/lib/data";

type Props = {
  transactions: Transaction[];
};

export default function TransactionList({ transactions }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Transações Recentes</h2>
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg ${
                  tx.type === "income" ? "bg-emerald-50" : "bg-red-50"
                }`}
              >
                {tx.type === "income" ? (
                  <ArrowUpCircle className="w-5 h-5 text-emerald-500" />
                ) : (
                  <ArrowDownCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm">{tx.description}</p>
                <p className="text-xs text-gray-400">{tx.category} &middot; {new Date(tx.date + "T12:00:00").toLocaleDateString("pt-BR")}</p>
              </div>
            </div>
            <span
              className={`font-semibold text-sm ${
                tx.type === "income" ? "text-emerald-600" : "text-red-500"
              }`}
            >
              {tx.type === "income" ? "+" : "-"} {formatCurrency(tx.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
