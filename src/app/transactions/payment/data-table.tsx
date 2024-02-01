"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  VisibilityState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronLeft, ChevronRight, UserCheck } from "lucide-react";
import { Command, CommandInput } from "@/components/ui/command";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4">
            <Command className="rounded-lg  relative max-w-sm">
                <Input
                    placeholder="Filter Transitions id..."
                    value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("status")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm h-[45px]"
                />
              <div className="ml-[84%] mt-[-43px] p-3">
                <svg
                  className="text-black"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.79418 0.5H2.35307C1.9112 0.500515 1.48757 0.676274 1.17512 0.988724C0.862676 1.30117 0.686916 1.7248 0.686401 2.16667L0.686401 6.60778C0.686916 7.04965 0.862676 7.47327 1.17512 7.78572C1.48757 8.09817 1.9112 8.27393 2.35307 8.27445H6.79418C7.23605 8.27393 7.65967 8.09817 7.97212 7.78572C8.28457 7.47327 8.46033 7.04965 8.46085 6.60778V2.16667C8.46033 1.7248 8.28457 1.30117 7.97212 0.988724C7.65967 0.676274 7.23605 0.500515 6.79418 0.5L6.79418 0.5ZM7.34974 6.60778C7.34974 6.75513 7.29121 6.89643 7.18702 7.00062C7.08283 7.10481 6.94153 7.16334 6.79418 7.16334H2.35307C2.20573 7.16334 2.06442 7.10481 1.96023 7.00062C1.85604 6.89643 1.79751 6.75513 1.79751 6.60778V2.16667C1.79751 2.01932 1.85604 1.87802 1.96023 1.77383C2.06442 1.66964 2.20573 1.61111 2.35307 1.61111H6.79418C6.94152 1.61111 7.08283 1.66964 7.18702 1.77383C7.2912 1.87802 7.34974 2.01932 7.34974 2.16667L7.34974 6.60778ZM6.79418 10.7256H2.35307C1.9112 10.7261 1.48757 10.9018 1.17512 11.2143C0.862676 11.5267 0.686916 11.9504 0.686401 12.3922L0.686401 16.8333C0.686916 17.2752 0.862676 17.6988 1.17512 18.0113C1.48757 18.3237 1.9112 18.4995 2.35307 18.5H6.79418C7.23605 18.4995 7.65967 18.3237 7.97212 18.0113C8.28457 17.6988 8.46033 17.2752 8.46085 16.8333V12.3922C8.46033 11.9503 8.28457 11.5267 7.97212 11.2143C7.65967 10.9018 7.23605 10.7261 6.79418 10.7256L6.79418 10.7256ZM7.34974 16.8333C7.34974 16.9807 7.29121 17.122 7.18702 17.2262C7.08283 17.3304 6.94153 17.3889 6.79418 17.3889H2.35307C2.20573 17.3889 2.06442 17.3304 1.96023 17.2262C1.85604 17.122 1.79751 16.9807 1.79751 16.8333V12.3922C1.79751 12.2449 1.85604 12.1036 1.96023 11.9994C2.06442 11.8952 2.20573 11.8367 2.35307 11.8367H6.79418C6.94152 11.8367 7.08283 11.8952 7.18702 11.9994C7.2912 12.1036 7.34974 12.2449 7.34974 12.3922L7.34974 16.8333ZM18.3134 11.1389C18.2029 11.1389 18.0969 11.1828 18.0188 11.2609C17.9406 11.3391 17.8967 11.4451 17.8967 11.5556V17.9445C17.8967 18.055 17.9406 18.1609 18.0188 18.2391C18.0969 18.3172 18.2029 18.3611 18.3134 18.3611C18.4239 18.3611 18.5299 18.3172 18.608 18.2391C18.6862 18.1609 18.7301 18.055 18.7301 17.9445V11.5556C18.7301 11.445 18.6862 11.3391 18.608 11.2609C18.5299 11.1828 18.4239 11.1389 18.3134 11.1389V11.1389ZM15.1128 12.8461C15.0023 12.8461 14.8963 12.89 14.8182 12.9682C14.74 13.0463 14.6961 13.1523 14.6961 13.2628V17.9444C14.6961 18.055 14.74 18.1609 14.8182 18.2391C14.8963 18.3172 15.0023 18.3611 15.1128 18.3611C15.2233 18.3611 15.3293 18.3172 15.4074 18.2391C15.4856 18.1609 15.5295 18.055 15.5295 17.9444V13.2628C15.5295 13.1523 15.4856 13.0463 15.4074 12.9681C15.3293 12.89 15.2233 12.8461 15.1128 12.8461V12.8461ZM11.9122 11.5744C11.8017 11.5744 11.6957 11.6183 11.6176 11.6965C11.5395 11.7746 11.4956 11.8806 11.4956 11.9911V17.9444C11.4956 18.055 11.5395 18.1609 11.6176 18.2391C11.6957 18.3172 11.8017 18.3611 11.9122 18.3611C12.0227 18.3611 12.1287 18.3172 12.2069 18.2391C12.285 18.1609 12.3289 18.055 12.3289 17.9444V11.9911C12.3289 11.8806 12.285 11.7746 12.2069 11.6965C12.1287 11.6184 12.0227 11.5745 11.9122 11.5745V11.5744ZM17.3333 0.5H12.8922C12.4504 0.500515 12.0267 0.676274 11.7143 0.988724C11.4018 1.30117 11.2261 1.7248 11.2256 2.16667V6.60778C11.2261 7.04965 11.4018 7.47327 11.7143 7.78572C12.0267 8.09817 12.4504 8.27393 12.8922 8.27445H17.3333C17.7752 8.27393 18.1988 8.09817 18.5113 7.78572C18.8237 7.47327 18.9995 7.04965 19 6.60778V2.16667C18.9995 1.7248 18.8237 1.30117 18.5113 0.988724C18.1988 0.676274 17.7752 0.500515 17.3333 0.5ZM17.8889 6.60778C17.8889 6.75513 17.8304 6.89643 17.7262 7.00062C17.622 7.10481 17.4807 7.16334 17.3333 7.16334H12.8922C12.8193 7.16334 12.747 7.14897 12.6796 7.12105C12.6122 7.09313 12.551 7.05221 12.4994 7.00062C12.4478 6.94903 12.4069 6.88779 12.379 6.82038C12.351 6.75298 12.3367 6.68074 12.3367 6.60778V2.16667C12.3367 2.09371 12.351 2.02147 12.379 1.95406C12.4069 1.88666 12.4478 1.82542 12.4994 1.77383C12.551 1.72224 12.6122 1.68132 12.6796 1.6534C12.747 1.62548 12.8193 1.61111 12.8922 1.61111H17.3333C17.4807 1.61111 17.622 1.66964 17.7262 1.77383C17.8304 1.87802 17.8889 2.01932 17.8889 2.16667V6.60778Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Command>
        {/* <Input
          placeholder="Filter Transitions id..."
          value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("status")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        /> */}
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="h-[50px] font-bold text-black text-sm ">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="text-black " key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className="text-black font-bold last:w-[262px] last:pl-[95px]"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="border border-[#EFEFEF] odd:bg-[#F5F5F5]"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className=" h-10 py-3" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-start  space-x-2 py-4">
        <Button
          className="bg-white hover:bg-green-600 hover:text-white"
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft />
        </Button>

        <Button
          className="bg-white hover:bg-green-600 hover:text-white"
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          1
        </Button>
        <Button
          className="bg-white hover:bg-green-600 hover:text-white"
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          2
        </Button>
        <Button
          className="bg-white hover:bg-green-600 hover:text-white"
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
