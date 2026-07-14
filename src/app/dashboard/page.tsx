"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 2100 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2400 },
  { name: "May", total: 2800 },
  { name: "Jun", total: 3200 },
  { name: "Jul", total: 3800 },
];

const recentProjects = [
  {
    id: "PRJ-01",
    client: "Acme Corp",
    type: "Web Development",
    status: "Completed",
    amount: "$5,200",
  },
  {
    id: "PRJ-02",
    client: "Global Tech",
    type: "Motion Graphics",
    status: "In Progress",
    amount: "$2,800",
  },
  {
    id: "PRJ-03",
    client: "Healthcare Plus",
    type: "Video Editing",
    status: "Pending",
    amount: "$1,500",
  },
  {
    id: "PRJ-04",
    client: "Eco Store",
    type: "E-Commerce Setup",
    status: "Completed",
    amount: "$8,900",
  },
];

export default function DashboardOverview() {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2 mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
      </div>
      
      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+235</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects Done</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts and Tables */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>
              Your revenue growth over the past 7 months.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[350px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="name" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    dy={10}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `$${value}`}
                    dx={-10}
                  />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '8px', border: '1px solid hsl(var(--border))' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Area type="monotone" dataKey="total" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorTotal)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>
              You've delivered 14 projects this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>
                      <div className="font-medium">{project.client}</div>
                      <div className="text-xs text-muted-foreground hidden sm:block">{project.type}</div>
                    </TableCell>
                    <TableCell>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        project.status === 'In Progress' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                        'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                      }`}>
                        {project.status}
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium">{project.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
