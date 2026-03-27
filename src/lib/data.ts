export type Transaction = {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
};

export type MonthlyData = {
  month: string;
  receitas: number;
  despesas: number;
};

export const transactions: Transaction[] = [
  { id: "1", description: "Salário", amount: 5500, type: "income", category: "Salário", date: "2026-03-25" },
  { id: "2", description: "Aluguel", amount: 1800, type: "expense", category: "Moradia", date: "2026-03-10" },
  { id: "3", description: "Supermercado", amount: 620, type: "expense", category: "Alimentação", date: "2026-03-08" },
  { id: "4", description: "Freelance design", amount: 1200, type: "income", category: "Freelance", date: "2026-03-05" },
  { id: "5", description: "Internet", amount: 120, type: "expense", category: "Serviços", date: "2026-03-05" },
  { id: "6", description: "Academia", amount: 90, type: "expense", category: "Saúde", date: "2026-03-03" },
  { id: "7", description: "Uber/Transporte", amount: 180, type: "expense", category: "Transporte", date: "2026-03-02" },
  { id: "8", description: "Curso online", amount: 49.9, type: "expense", category: "Educação", date: "2026-03-01" },
  { id: "9", description: "Venda produto", amount: 350, type: "income", category: "Vendas", date: "2026-02-28" },
  { id: "10", description: "Energia elétrica", amount: 210, type: "expense", category: "Moradia", date: "2026-02-25" },
];

export const monthlyData: MonthlyData[] = [
  { month: "Out", receitas: 5800, despesas: 3900 },
  { month: "Nov", receitas: 6200, despesas: 4100 },
  { month: "Dez", receitas: 7500, despesas: 5200 },
  { month: "Jan", receitas: 5500, despesas: 3600 },
  { month: "Fev", receitas: 6100, despesas: 3800 },
  { month: "Mar", receitas: 7050, despesas: 3069.9 },
];

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
