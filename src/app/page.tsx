"use client";

import { LayoutDashboard, Bell, User } from "lucide-react";
import SummaryCards from "@/components/SummaryCards";
import MonthlyChart from "@/components/MonthlyChart";
import TransactionList from "@/components/TransactionList";
import CategoryBreakdown from "@/components/CategoryBreakdown";
import { transactions, monthlyData } from "@/lib/data";

export default function Home() {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-6 h-6" />
              <h1 className="text-xl font-bold">Domínio Financeiro</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-primary-400 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 bg-primary-400 px-3 py-1.5 rounded-lg">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">Meu Perfil</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Olá, bem-vindo de volta!</h2>
          <p className="text-gray-500 mt-1">Aqui está o resumo das suas finanças</p>
        </div>

        {/* Summary Cards */}
        <div className="mb-6">
          <SummaryCards totalIncome={totalIncome} totalExpense={totalExpense} />
        </div>

        {/* Chart */}
        <div className="mb-6">
          <MonthlyChart data={monthlyData} />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TransactionList transactions={transactions} />
          <CategoryBreakdown transactions={transactions} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-400">
            Domínio Financeiro &copy; 2026 &mdash; Prof. Everton
          </p>
        </div>
      </footer>
    </div>
  );
}
