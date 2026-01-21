import { useState } from "react";
import { transactions } from "../data/transactions";

export function useTransactions() {
    const [filter, setFilter] = useState("all");

    const filterOptions = [
        { label: "Todas", value: "all" },
        { label: "Receita", value: "receita" },
        { label: "Despesa", value: "despesa" },
    ];

    const filteredTransactions = transactions.filter((transaction) => {
        if (filter === "all") return true;
        return transaction.flow === filter;
    });

    const hasTransactionToShow = filteredTransactions.length > 0;

    return {
        filter,
        setFilter,
        filterOptions,
        filteredTransactions,
        hasTransactionToShow,
    }
}