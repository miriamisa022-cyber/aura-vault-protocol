"use client";

/**
 * Skeleton loading components (#252)
 *
 * Content-aware skeleton screens to reduce perceived load time.
 * - Pulse animation via CSS @keyframes (shimmer in globals.css)
 * - aria-busy="true" on containers while loading
 * - Layout matches exact dimensions of loaded content (CLS = 0)
 * - All skeletons are aria-hidden so screen readers skip them
 *
 * Closes #252
 */

interface SkeletonProps {
  className?: string;
}

/** Base skeleton block — uses the `.skeleton` CSS class from globals.css */
export function Skeleton({ className = "" }: SkeletonProps) {
  return <div className={`skeleton ${className}`} aria-hidden="true" />;
}

// ─── Stat Card Skeleton ───────────────────────────────────────────────────────
// Matches the 4-column StatCard grid in VaultDashboard

export function StatCardSkeleton() {
  return (
    <div
      className="flex flex-col gap-1 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900"
      aria-hidden="true"
    >
      {/* Label row — matches: text-xs uppercase tracking-wide */}
      <Skeleton className="h-3 w-16" />
      {/* Value row — matches: font-mono text-2xl font-semibold */}
      <Skeleton className="h-8 w-28 mt-1" />
      {/* Sub-label row — matches: text-xs text-zinc-400 */}
      <Skeleton className="h-3 w-24 mt-0.5" />
    </div>
  );
}

/** Grid of 4 stat card skeletons with aria-busy container */
export function StatCardGridSkeleton() {
  return (
    <div
      className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      aria-busy="true"
      aria-label="Loading vault statistics"
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <StatCardSkeleton key={i} />
      ))}
    </div>
  );
}

// ─── Portfolio Panel Skeleton ─────────────────────────────────────────────────
// Matches the wallet + actions grid section in VaultDashboard

export function PortfolioPanelSkeleton() {
  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      aria-busy="true"
      aria-label="Loading portfolio"
    >
      {/* Wallet section */}
      <div
        className="w-full rounded-xl border border-zinc-200 p-4 dark:border-zinc-700"
        aria-hidden="true"
      >
        <Skeleton className="h-3 w-12 mb-4" />
        <div className="flex items-center gap-3 mb-4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
        <Skeleton className="h-9 w-full rounded-lg" />
      </div>

      {/* Actions section */}
      <div
        className="w-full rounded-xl border border-zinc-200 p-4 dark:border-zinc-700"
        aria-hidden="true"
      >
        <Skeleton className="h-3 w-14 mb-4" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-9 flex-1 rounded-lg" />
          <Skeleton className="h-9 flex-1 rounded-lg" />
        </div>
        <Skeleton className="h-3 w-28 mb-4" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
    </div>
  );
}

// ─── Transaction History Table Skeleton ──────────────────────────────────────
// Matches TxRow in VaultDashboard / TransactionHistory

export function TransactionRowSkeleton() {
  return (
    <div
      className="flex items-center justify-between py-2.5 border-b border-zinc-100 dark:border-zinc-800 last:border-0"
      aria-hidden="true"
    >
      <div className="flex items-center gap-3">
        {/* Icon */}
        <Skeleton className="h-7 w-7 rounded-full flex-shrink-0" />
        <div className="flex flex-col gap-1.5">
          {/* Type label */}
          <Skeleton className="h-3 w-16" />
          {/* Timestamp */}
          <Skeleton className="h-2.5 w-24" />
        </div>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        {/* Amount */}
        <Skeleton className="h-3 w-20" />
        {/* Tx hash link */}
        <Skeleton className="h-2.5 w-14" />
      </div>
    </div>
  );
}

/** Full transaction history table skeleton */
export function TransactionTableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div
      className="rounded-xl border border-zinc-200 bg-white px-4 dark:border-zinc-700 dark:bg-zinc-900"
      aria-busy="true"
      aria-label="Loading transactions"
    >
      {/* Table header */}
      <div
        className="flex items-center justify-between py-3 border-b border-zinc-100 dark:border-zinc-800"
        aria-hidden="true"
      >
        <div className="flex gap-4">
          <Skeleton className="h-3 w-8" />
          <Skeleton className="h-3 w-8" />
          <Skeleton className="h-3 w-8" />
          <Skeleton className="h-3 w-8" />
        </div>
        <Skeleton className="h-7 w-20 rounded-lg" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <TransactionRowSkeleton key={i} />
      ))}
    </div>
  );
}

// ─── Share Price Chart Skeleton ───────────────────────────────────────────────
// Matches PerformanceCharts dimensions

export function SharePriceChartSkeleton() {
  return (
    <div
      className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900"
      aria-busy="true"
      aria-label="Loading share price chart"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-4" aria-hidden="true">
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-3 w-24" />
        </div>
        {/* Period selector buttons */}
        <div className="flex gap-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-7 w-10 rounded-md" />
          ))}
        </div>
      </div>

      {/* Chart area — matches chart canvas height */}
      <Skeleton className="h-48 w-full rounded-lg" aria-hidden="true" />

      {/* Footer / legend row */}
      <div className="flex gap-4 mt-3" aria-hidden="true">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  );
}

// ─── Generic card skeleton ────────────────────────────────────────────────────

/** Pre-built skeleton for a vault position card */
export function VaultCardSkeleton() {
  return (
    <div
      className="rounded-xl border border-[var(--border)] p-4 space-y-3"
      aria-hidden="true"
    >
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-8 w-2/3" />
      <div className="flex gap-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  );
}
