"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export type Payment = {
  id: string
  oder: string
  in: number
  out: number
  status: "#444" | "#434" | "#414" | "#454"
  method: string
  note: string
  ngay:string
}

export const columns: ColumnDef<Payment>[] = [
  
  {
    accessorKey: "status",
    header: "Transaction ID",
    cell: ({ row }) => (
      <div className="capitalize w-[120px] h-5 text-black font-bold">{row.getValue("status")}</div>
    ),
  },
  
  {
    accessorKey: "oder",
    header: "Order",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("oder")}</div>
    ),
  },
  {
    accessorKey: "in",
    header: "In",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("in")}</div>
    ),
  },
  {
    accessorKey: "out",
    header: "Out",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("out")}</div>
    ),
  },
  {
    accessorKey: "method",
    header: "Method",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("method")}</div>
    ),
  },
  {
    accessorKey: "note",
    header: "Note",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("note")}</div>
    ),
  },
  {
    accessorKey: "ngay",
    header: " Created at",
    cell: ({ row }) => (
      <div className="capitalize text-right pr-4">{row.getValue("ngay")}</div>
    ),
  },
  
]

