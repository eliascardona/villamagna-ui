import { Activity, BarChart3, ChevronRight, Users } from 'lucide-react';
import { Link } from 'react-router';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { chartCatalog } from '~/lib/charts/mocks';
import { MiniChart } from './ui/mini-chart';

export function ChartCatalog() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="bg-card border-border w-64 border-r p-6">
        <div className="mb-8">
          <h1 className="text-foreground text-xl font-semibold">
            Analytics Hub
          </h1>
          <p className="text-muted-foreground text-sm">
            Chart Catalog & Insights
          </p>
        </div>

        <nav className="space-y-2">
          <div className="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase">
            Navigation
          </div>
          <Button
            variant="ghost"
            className="text-primary bg-primary/10 w-full justify-start">
            <BarChart3 className="mr-2 h-4 w-4" />
            Chart Catalog
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Activity className="mr-2 h-4 w-4" />
            Real-time Data
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            User Analytics
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-foreground mb-2 text-3xl font-bold">
            Chart Catalog
          </h2>
          <p className="text-muted-foreground">
            Navigate to detailed analytical views with comprehensive controls
            and insights
          </p>
        </div>

        {/* Chart Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {chartCatalog.map((chart) => (
            <Link key={chart.id} to={`/charts/${chart.id}`}>
              <Card className="chart-widget-hover group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`rounded-lg p-2 bg-${chart.color}/10`}>
                      <div className={`text-${chart.color}`}>{chart.icon}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {chart.status}
                      </Badge>
                      <ChevronRight className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{chart.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {chart.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Mini Chart Preview */}
                  <div className="bg-muted/20 mb-4 flex h-24 items-center justify-center rounded-lg">
                    <MiniChart type={chart.preview} color={chart.color} />
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-foreground text-lg font-semibold">
                        {chart.metrics.primary}
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-sm font-medium text-${chart.color}`}>
                        {chart.metrics.secondary}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        Last 24h
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
