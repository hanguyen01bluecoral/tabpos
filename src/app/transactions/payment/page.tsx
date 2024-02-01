import { Payment, columns } from "./colum"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
        id: "m5gr84i9",
        oder:"*31322",
        in: 5000,
        out: 316000,
        status: "#444",
        method: "cash",
        note: "This is order in change",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#454",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#444",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#414",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#454",
        method: "cash",
        note: "This is order in change",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#444",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#414",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#444",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#414",
        method: "cash",
        note: "This is order in change",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#454",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#444",
        method: "cash",
        note: "This is order in change",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*31322",
        in: 5000,
        out: 316000,
        status: "#414",
        method: "cash",
        note: "This is order in change",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#454",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#434",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#434",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#414",
        method: "cash",
        note: "This is order in change",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#434",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#454",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#434",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#414",
        method: "cash",
        note: "This is order in change",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#434",
        method: "cash",
        note: "-",
        ngay:"22/01/2024 - 18:00:05"
      },
      {
        id: "m5gr84i9",
        oder:"*412",
        in: 5000,
        out: 316000,
        status: "#434",
        method: "cash",
        note: "This is order in change",
        ngay:"22/01/2024 - 18:00:05"
      },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
